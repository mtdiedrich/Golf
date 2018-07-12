import pandas as pd
import datetime as dt
import os
from difflib import SequenceMatcher

# This module takes downloaded golf score data and parses from said data
# round scores for individual golfers and course data. This information is
# written to CSVs

# NOTES
# Data is curated such that certain events are excluded
# Exclusion parameters include limited data, course changes mid tournament, or 
# odd formatting

#I'm sure this is a mess of optimizability

pd.set_option('display.expand_frame_repr', False)

def find_nth(haystack, needle, n):
    # Finds the nth of a string (needle) in a list (haystack)
    start = haystack.find(needle)
    while start >= 0 and n > 1:
        start = haystack.find(needle, start + len(needle))
        n -= 1
    return start

def similar(a,b):
    # Returns similarity ratio of strings
    return SequenceMatcher(None, a, b).ratio()

def main():

    frames = []
    courses = []
    golfer_dictionary = {}
    base_directory = r'C:\Users\Mitch\Projects\Golf\Data\Tournaments'
    for x in os.listdir(base_directory):
        print(x)
        file_object = open(file=base_directory+r"\\"+x, mode='r').read()
        x = 1
        golfers = []

        while find_nth(file_object, '<td class="cell">', x) != -1:

            start_string = '<td class="cell">'
            nth_string = find_nth(file_object, start_string, x)
            end_string_index = file_object[nth_string:].find('</td>')
            golfer = file_object[nth_string + len(start_string) + 21:nth_string + end_string_index]
            round_scores = file_object[nth_string + end_string_index + 35:nth_string + end_string_index + 240]

            first_round_score = round_scores[find_nth(round_scores, '>', 1) + 1:find_nth(round_scores, '<', 2)]
            second_round_score = round_scores[find_nth(round_scores, '>', 3) + 1:find_nth(round_scores, '<', 4)]
            third_round_score = round_scores[find_nth(round_scores, '>', 5) + 1:find_nth(round_scores, '<', 6)]
            fourth_round_score = round_scores[find_nth(round_scores, '>', 7) + 1:find_nth(round_scores, '<', 8)]

            if first_round_score != "":
                first_round_score = int(first_round_score)
            if second_round_score != "":
                second_round_score = int(second_round_score)
            if third_round_score != "":
                third_round_score = int(third_round_score)
            if fourth_round_score != "":
                fourth_round_score = int(fourth_round_score)

            golfers += [[golfer, first_round_score, second_round_score, third_round_score, fourth_round_score]]
            x += 1

        next_end = file_object[file_object.find("Ending:"):].find('<')
        date_string = file_object[file_object.find("Ending:") + len("Ending: "):file_object.find("Ending:") + next_end]
        year = int(date_string[find_nth(date_string, '/', 2) + 1:])
        month = int(date_string[:find_nth(date_string, '/', 1)])
        day = int(date_string[find_nth(date_string, '/', 1) + 1:find_nth(date_string, '/', 2)])
        fourth_date = dt.date(year, month, day)
        first_date = fourth_date - dt.timedelta(days=3)
        second_date = fourth_date - dt.timedelta(days=2)
        third_date = fourth_date - dt.timedelta(days=1)

        course_end = file_object[file_object.find("Course: "):].find('<')
        course_name = file_object[
                      file_object.find("Course: ") + len("Course: "):file_object.find("Course:") + course_end]
        par_end = file_object[file_object.find("PAR: "):].find('<')
        par = file_object[file_object.find("PAR: ") + len("PAR: "):file_object.find("PAR:") + par_end]

        if "amp;" in str(course_name):
            course_name = str(course_name.replace("amp;", ""))

        course = str(course_name), int(par)

        if course not in courses:
            courses += [course]

        start_index = file_object.find('PAST <b>') + 67
        end_index = file_object[start_index:].find("</span>")

        tournament_name = file_object[start_index:start_index + end_index]

        for x in golfers:
            x.insert(1, tournament_name)
            x.insert(2, course_name)
            x.insert(3, str(first_date))
            x.insert(5, str(second_date))
            x.insert(7, str(third_date))
            x.insert(9, str(fourth_date))

        frames += golfers
    # These indices are hardcoded because I couldn't think of an effective way
    # to programatically find the indices for deletion. If/when this code is
    # rerun, it would be worth again trying to automate 
    courses.sort(key=lambda x: x[1])
    delete_indices = [221,217,215,212,211,210,206,205,204,203,202,201,200,199,198,195,191,190,187,183,177,176,174,172,168,163,161,156,
            149,148,146,144,142,138,137,133,132,128,127,126,124,122,121,120,117,115,114,113,112,107,106,99,96,93,92,90,81,73,69,68,61,60,53,
            48,44,35,29,26,25,16,12,2]

    for x in delete_indices:
        del courses[x]
    
    course_pars_dictionary = {}
    for x in courses:
        course_pars_dictionary[x[0]] = x[1]
    
    cdf = pd.DataFrame(courses)
    cdf.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\Courses.csv')

    for x in frames:
        golfer_dictionary[x[0]] = []
    for x in frames:
        golfer_dictionary[x[0]] += [x[1:]]

    dictionary_keys = list(golfer_dictionary.keys())

    for x in dictionary_keys:
        golfer_dictionary[x] = pd.DataFrame(golfer_dictionary[x])
    
    golfers_list = []
    for x in dictionary_keys:
        df = golfer_dictionary[x].transpose()
        for col in range(0,len(df.columns)):
            tournament = [x, df[col][0], df[col][1], df[col][2], df[col][3], df[col][4], df[col][5], df[col][6], df[col][7], df[col][8], df[col][9]]
            golfers_list += [tournament]

    for x in range(0,len(golfers_list)):
        max_similarity = 0
        max_string = ""
        for y in course_pars_dictionary.keys():
            if similar(golfers_list[x][2],y) > max_similarity:
                max_similarity = similar(golfers_list[x][2],y)
                max_string = y
        golfers_list[x][2] = max_string
        print(golfers_list[x])
        print(float(x)/float(len(golfers_list)))

    gdf = pd.DataFrame(golfers_list)
    gdf.to_csv(r'C:\Users\Mitch\Projects\Golf\Data\Golfers.csv')
    print(gdf)
    print(cdf)

if __name__ == "__main__":
    main()
