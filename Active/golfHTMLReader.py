import pandas as pd
import datetime as dt

def find_nth(haystack, needle, n):
    start = haystack.find(needle)
    while start >= 0 and n > 1:
        start = haystack.find(needle, start+len(needle))
        n -= 1
    return start

def main():

    #TO DO
    #Eventually must add geolocation data
    #Afterwards must add weather data from DarkSky API
    #Must combine all events for each individual golfer

    files = []
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Golf\Data\HTML Data\SafewayOpen2007.html']

    for x in files:
        file_object = open(file=x,mode='r').read()
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
        course_name = file_object[file_object.find("Course: ")+len("Course: "):file_object.find("Course:") + course_end]

        tournament_name = file_object[file_object.find('"title" content')+17:file_object.find(": Past Results")]

        for x in golfers:
            x.insert(1,tournament_name)
            x.insert(2,course_name)
            x.insert(3,str(first_date))
            x.insert(5, str(second_date))
            x.insert(7, str(third_date))
            x.insert(9, str(fourth_date))

        print(pd.DataFrame(golfers))

if __name__ == "__main__":
    main()