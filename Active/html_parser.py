import pandas as pd
import datetime as dt
import os

def find_nth(haystack, needle, n):
    start = haystack.find(needle)
    while start >= 0 and n > 1:
        start = haystack.find(needle, start + len(needle))
        n -= 1
    return start


def main():
    pd.set_option('display.expand_frame_repr', False)

    # TO DO
    # Eventually must add geolocation data
    # Afterwards must add weather data from DarkSky API
    # Must combine all events for each individual golfer

    # NOTES
    # Data is curated such that certain events are ecluded
    # Exclusion parameters include limited data, course changes mid tournament, or odd formatting

    frames = []
    courses = []
    golfer_dictionary = {}
    base_directory = r'C:\Users\Mitch\Projects\Data\Tournaments'

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

    for x in frames:
        golfer_dictionary[x[0]] = []
    for x in frames:
        golfer_dictionary[x[0]] += [x[1:]]

    dictionary_keys = list(golfer_dictionary.keys())

    for x in dictionary_keys:
        golfer_dictionary[x] = pd.DataFrame(golfer_dictionary[x])

    for x in dictionary_keys:
        print(x)
        print(golfer_dictionary[x])
        print()

    df = pd.DataFrame(courses)
    print(df)
    df.to_csv(path_or_buf="Courses.csv")


if __name__ == "__main__":
    main()
