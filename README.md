# Golf
Analysis of PGA Tour data.

# Process
~~1. Download the results webpages for every year of all PGA Tour Tournaments~~
~~2. Parse webpages into data by golfer~~
~~3. Collect list of courses~~
4. Get geolocation data of all courses in list
5. Get weather conditions of every course on tournament days
6. Get course length, rating, slope for every course
7. Create list of data where each element is a list featuring all of the following
> Golfer Name
> Tournament Name 
> Course Name
> Course Length
> Course Rating
> Course Slope
> Date of Round
> Round Score 
> Apparent Temperature
> Atmospheric Pressure
> Cloud cover
> Humidity
> Liquid Precipitation rate
> Dew point 
> Moon phase
> Nearest storm distance
> Nearest storm direction
> Ozone
> Precipitation type
> Snowfall
> Sunrise/set
> Temperature
> UV index
> Wind gust
> Wind speed
> Wind direction
8. Find which weather elements strongly correlate and consider removing
9. Consider implement Golfer as a class with name as an attribute and a list of dicts of rounds where each date is the round's key
10. Additionally, consider implementing Course as class with attributes name, length, rating, and slope
11. Perform analysis
