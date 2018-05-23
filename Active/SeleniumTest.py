from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import time

def main():
    
    browser = webdriver.Firefox()
    url = "https://www.pgatour.com/tournaments/safeway-open/past-results.html"
    browser.get(url)
    
    years = []
    html = browser.execute_script("return document.body.innerHTML")
    start_index = html.find('<option')
    end_index = html.find('</select>')
    years_string = html[start_index:end_index]
   
    while (years_string.find('<')!=-1):
        start = years_string.find('<')
        end = years_string.find('>')
        years_string = years_string.replace(years_string[start:end+1],"")
        print(years_string)

    print(years_string)

    beginning_path = "//select[@id='pastResultsYearSelector']/option[@value='"
    year = "2016"
    end_path = "']"
    full_path = beginning_path + year + end_path
    browser.find_element_by_xpath(full_path).click()
    time.sleep(15)
    innerHTML = browser.execute_script("return document.body.innerHTML")

    file_object = open("SafewayOpen2016.html", "w")
    file_object.write(innerHTML)

    beginning_path = "//select[@id='pastResultsYearSelector']/option[@value='"
    year = "2018"
    end_path = "']"
    full_path = beginning_path + year + end_path
    browser.find_element_by_xpath(full_path).click()
    time.sleep(15)
    innerHTML = browser.execute_script("return document.body.innerHTML")

    file_object = open("SafewayOpen2018.html", "w")
    file_object.write(innerHTML)



if __name__ == "__main__":
    main()
