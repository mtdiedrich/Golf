import pandas as pd

def find_nth(haystack, needle, n):
    start = haystack.find(needle)
    while start >= 0 and n > 1:
        start = haystack.find(needle, start+len(needle))
        n -= 1
    return start

def main():

    file_object = open(file = r'C:\Users\Mitch\Downloads\SafewayOpen2007.html',mode = 'r').read()
    x = 1

    while find_nth(file_object,'<td class="cell">',x) != -1:

        start_string = '<td class="cell">'
        nth_string = find_nth(file_object,start_string,x)
        end_string_index = file_object[nth_string:].find('</td>')
        golfer = file_object[nth_string+len(start_string)+21:nth_string+end_string_index]
        round_scores = file_object[nth_string+end_string_index+35:nth_string+end_string_index+240]

        first_round_score = round_scores[find_nth(round_scores,'>',1)+1:find_nth(round_scores,'<',2)]
        second_round_score = round_scores[find_nth(round_scores,'>',3)+1:find_nth(round_scores,'<',4)]
        third_round_score = round_scores[find_nth(round_scores, '>', 5) + 1:find_nth(round_scores, '<', 6)]
        fourth_round_score = round_scores[find_nth(round_scores, '>', 7) + 1:find_nth(round_scores, '<', 8)]

        print(pd.DataFrame([golfer, first_round_score,second_round_score,third_round_score,fourth_round_score]))

        x += 1


if __name__ == "__main__":
    main()