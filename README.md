# Quick Sale Client Application

This application provides a platform for home owners and contract holders of property to list their house(s) for free and without the need of a real estate agent. The specific listing details for each house set the environment for a quick sale.

# Technologies Used
* javaScript
* HTML
* CSS
* bootstrap
* flexbox
* JQuery
* JSON
* ajax
* Bash
* Express
* Mongoose
* MongoDB
* handlebars
* Google Places API

# Development Process
* [Link to Backend Server](https://limitless-gorge-25554.herokuapp.com)
* [Link to Frontend Repo](https://github.com/ako-21/quick-sale-client)

I started by mapping out the ERD for the back end application and the user stories for the client side to conceptualize exactly what attributes each house listing and user needed to have to fulfill the user experience goal of my app. Once completed, I designed wireframes to get a solid starting point for my html and css.

I then started building the backend with Express API and Mongoose, first building my User and House Models, then setting up the relative relationship between the two, then creating the neccesary Restful routes, and finally testing those routes with curl scripts. Once I had those routes working, I finally added authentication to the routes that needed them, and retested.

Once I had my backend working in the way I intended, I started working on the client side. First I created curl scripts to test the api calls from the client side, both for the authentication and resources. After that was all working, I built the front end user experience with javaScript, jQuery, html, and css to establish event listeners, run functions including requests from the API once those events are triggered, and to manipulate the DOM based on event success or failure results. The final touches were testing the responsiveness of the app, and making any neccesary changes to the css to ensure a great user experience no matter the screen size they are on.

# Future Iterations

Currently, users do not have the option of adding photos of their house to accompany the lisiting. In the next iteration, I will add a photos subdocument to the house model and allow users to add images to their listings.

# Entity Relationship Diagram

[Link to ERD](https://docs.google.com/document/d/1xw79VUVyiZ6JtMY74qglHHsd66PPf9lwppjXZdaUxu0/edit?usp=sharing)
