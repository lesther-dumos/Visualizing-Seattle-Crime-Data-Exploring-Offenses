# Visualizing-Seattle-Crime-Data-Exploring-Offenses 
AA2 Project - Members: Lesther, Chris, Rino, Priscilla, Luu

- Interactive map: [Link](https://lesther-dumos.github.io/Visualizing-Seattle-Crime-Data-Exploring-Offenses/)

## Proposal

This project aims to showcase all types of crimes that occurred in Seattle within the past 2 years. We want to create a choropleth map that can be zoomed in and out freely, with individual crimes as a point. Our end goal is to produce a smart dashboard to inform users of crime trends in Seattle. The dashboard will reveal trends in the kinds of crime that occur across neighborhoods of Seattle, through spatial analysis. We expect to see a difference in the types of crime and the rate of crime among different areas, and this information can help many kinds of audiences. 

### Problems that have occur during production

- We wanted to catorgize the type of offenses based on different categorizes such as threats, physical activity, and robbery. But while exploring the dataset we couldn't categorizes them because there was a few offences that didn't go within these categorizes. So we filter the 100 ofencses down to top 10 meaning these are the offenses that are high in number in Seattle.
- We also wanted to add a secondary slider that will allow the user to filter out the years that they wanted but since we made two projection of the crime map (choropleth and dot density) we couldn't add a slider with the year or month without messing with the two maps. So we ended up leaving out the slider. 

## About Datase
- SPD Crime Data: 2008-Present [link](https://data.seattle.gov/Public-Safety/SPD-Crime-Data-2008-Present/tazs-3rd5/about_data)
- This dataset comes from the Seattle Police Department. The dataset contains information regarding different types of offenses, including the address, longitude and latitude, as well as the date and time of the offense. The offense ID keeps track of multiple offenses with the same report.

## Goal:
- Our end goal for the Crime in Seattle Smart Dashboard is allowing user to have a visually and interactive way of exploring the active crimes that are occuring in Seattle. The smart dashboard is a great way for user to explore which crimes are actively occuring based on where it's occuring and what can be changed to prevent it from happening. Our target audiences will mainly be researchers and police since they will be using dashboard for their own analysis.
