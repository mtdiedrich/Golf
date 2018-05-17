import pandas as pd
import datetime as dt
from googleplaces import GooglePlaces, types, lang

def find_nth(haystack, needle, n):
    start = haystack.find(needle)
    while start >= 0 and n > 1:
        start = haystack.find(needle, start+len(needle))
        n -= 1
    return start

def main():

    pd.set_option('display.expand_frame_repr', False)

    #TO DO
    #Eventually must add geolocation data
    #Afterwards must add weather data from DarkSky API
    #Must combine all events for each individual golfer

    # NOTES
    # Data is curated such that certain events are ecluded
    # Exclusion parameters include limited data, course changes mid tournament, or odd formatting

    files = []
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SafewayOpen2007.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SafewayOpen2008.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SafewayOpen2009.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SafewayOpen2010.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SafewayOpen2011.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SafewayOpen2012.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SafewayOpen2014.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SafewayOpen2015.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SafewayOpen2016.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SafewayOpen2017.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SafewayOpen2018.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1970.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1971.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1972.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1973.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1974.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1975.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1976.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1977.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1978.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1979.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1980.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1981.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1982.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1983.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1984.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1985.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1986.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1987.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1988.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1989.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1990.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1991.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1992.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1993.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1994.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1995.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1996.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1997.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1998.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters1999.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2000.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2001.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2002.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2003.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2004.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2005.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2006.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2007.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2008.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2009.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2010.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2011.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2012.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2013.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2014.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2015.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2016.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\Masters2017.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\CIMBClassic2010.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\CIMBClassic2011.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\CIMBClassic2012.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\CIMBClassic2014.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\CIMBClassic2015.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\CIMBClassic2016.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\CIMBClassic2017.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\CIMBClassic2018.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship1986.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship1988.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship1989.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship1990.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship1991.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship1992.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship1993.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship1994.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship1995.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship1996.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship1997.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship1998.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2000.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2003.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2004.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2005.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2006.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2007.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2008.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2010.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2011.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2012.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2013.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2015.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2016.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\SandersonFarmsChampionship2017.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\ShrinersHospitalsForChildrenOpen2009.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\ShrinersHospitalsForChildrenOpen2010.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\ShrinersHospitalsForChildrenOpen2011.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\ShrinersHospitalsForChildrenOpen2012.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\ShrinersHospitalsForChildrenOpen2014.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\ShrinersHospitalsForChildrenOpen2015.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\ShrinersHospitalsForChildrenOpen2016.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\ShrinersHospitalsForChildrenOpen2017.html']
    files += [r'C:\Users\Mitch\Projects\PycharmProjects\Data\HTML Data\ShrinersHospitalsForChildrenOpen2018.html']

    frames = []
    courses = []
    golfer_dictionary = {}

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

        par_end = file_object[file_object.find("PAR: "):].find('<')
        par = file_object[file_object.find("PAR: ")+len("PAR: "):file_object.find("PAR:") + par_end]

        course = str(course_name), str(par)
        
        if course not in courses:
            courses += [course]

        tournament_name = file_object[file_object.find('"title" content')+17:file_object.find(": Past Results")]

        for x in golfers:
            x.insert(1,tournament_name)
            x.insert(2,course_name)
            x.insert(3,str(first_date))
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
