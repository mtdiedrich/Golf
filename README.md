# Golf
Collection and analysis of PGA Tour data. Python. Likely to utilize R or Julia for computation later.

# Process
~~1. Download the results webpages for every year of all PGA Tour Tournaments~~

~~2. Parse webpages into data by golfer~~

~~3. Collect list of courses~~

~~4. Get geolocation data of all courses in list~~

~~5. Split golfer data by round~~

~~6. Link geolocation data with golfer round data~~

7. Get weather conditions of every course on tournament days, write csv

8. Link weather conditions to each existing round (rewrite to before split by round?)

9. Get course length, rating, slope for every course

10. Create list of data where each element is a list featuring all of the following

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

11. Find which weather elements strongly correlate and consider removing

12. Consider implement Golfer as a class with name as an attribute and a list of dicts of rounds where each date is the round's key

13. Additionally, consider implementing Course as class with attributes name, length, rating, and slope

14. Perform analysis

# Additional TODOs

I'd like to turn these link modules into functions in the same module. This would let me clean my Data folder.

> course_date_link.py

> dates_geodata_link.py

> toUTC_link.py

> zone_link.py

As well, change printed CSVs to not have index columns

Merging data can be done much more easily than was implemented: df1.merge(df2, how = 'left', on = ['Date','Latitude'])
