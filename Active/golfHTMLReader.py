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
        print(golfer)
        x += 1


if __name__ == "__main__":
    main()