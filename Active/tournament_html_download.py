from selenium import webdriver
import time


def main():
    urls = []
    # NOTES
    # QBE Shootout is a three-round tournament
    # Sanderson Farms Championship 1994 was a two-round tournament
    # Shriners Hospitals For Children Open was a multi-course tournament before 2007
    # urls += ["https://www.pgatour.com/tournaments/safeway-open/past-results.html"]
    # urls += ["https://www.pgatour.com/tournaments/cimb-classic/past-results.html"]
    # urls += ["https://www.pgatour.com/tournaments/the-cj-cup-at-nine-bridges/past-results.html"]
    # urls += ["https://www.pgatour.com/tournaments/sanderson-farms-championship/past-results.html"]
    # urls += ["https://www.pgatour.com/tournaments/wgc-hsbc-champions/past-results.html"]
    #urls += ["https://www.pgatour.com/tournaments/shriners-hospitals-for-children-open/past-results.html"]
    #urls += ["https://www.pgatour.com/tournaments/ohl-classic-mayakoba/past-results.html"]
    #urls += ["https://www.pgatour.com/tournaments/the-rsm-classic/past-results.html"]
    #urls += ["https://www.pgatour.com/tournaments/hero-world-challenge/past-results.html"]
    #urls += ["https://www.pgatour.com/tournaments/qbe-shootout/past-results.html"]
    urls += ["https://www.pgatour.com/tournaments/sentry-tournament-of-champions/past-results.html"]
    urls += ["https://www.pgatour.com/tournaments/sony-open-in-hawaii/past-results.html"]

    browser = webdriver.Firefox()

    for x in urls:
        browser.get(x)

        html = browser.execute_script("return document.body.innerHTML")
        start_index = html.find('<option')
        end_index = html.find('</select>')
        years_string = html[start_index:end_index]

        while (years_string.find('<') != -1):
            start = years_string.find('<')
            end = years_string.find('>')
            years_string = years_string.replace(years_string[start:end + 1], "")

        years_string = years_string.replace(" ", "")
        years_string = years_string.replace('\n', ' ').replace('\r', '')
        years = years_string.split(' ')
        del years[len(years) - 1]
        years = list(map(int, years))

        beginning_path = "//select[@id='pastResultsYearSelector']/option[@value='"
        end_path = "']"

        for x in years:
            print("Start")
            year = x
            full_path = beginning_path + str(year) + end_path
            browser.find_element_by_xpath(full_path).click()
            time.sleep(15)
            innerHTML = browser.execute_script("return document.body.innerHTML")

            start_index = innerHTML.find('PAST <b>') + 67
            end_index = innerHTML[start_index:].find("</span>")

            tournament_name = innerHTML[start_index:start_index + end_index]
            base_directory = '../../../Data/'

            file_object = open(base_directory + tournament_name + str(x) + '.html', 'w+')
            file_object.write(innerHTML)
            print(tournament_name, x)


if __name__ == "__main__":
    main()
