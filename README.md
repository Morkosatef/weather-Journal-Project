# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

## Steps:
### Server Side:
- Setup empty JS object to act as endpoint for all routes
- Require Express to run server and routes
- Start up an instance of app
- using bodyParser as a middleware 
- Cors for cross origin allowance
- Initialize the main project folder
- Setup port and Server
- setting up route endpoint to receive data from client side and storing requested data into projetData object
- setting a get route to send back the projectData object after it is updated from client side via the post request

### Client Side:
- selecting elements to get data from and storing them in global variables
- selecting elements to add data to in the UI and storing them in global variables
- deviding the API URL to three parts: 1-the main URL that wont change, 2-variable which will contain the zipcode, 3- API key obtained from the website and adding metric unit to have temperature displayed in celsius
- inside an event listener function to listen to the generate button click created the below functions:
#### callForData function:
-  a function to get the zipcode value from the user, store the complete URL in a variable and fetch data from the URL
- turning the fetched data to JS object and store it in a new variable and then selecting only the temperature in a new variable by accessing the fetched data.main.temp
- storing the user input in a variable 
- adding the temp, input, and date(provided by starting code) values to a key-property inputs into an object called collectedData
- posting the new object to the server by a post request
- prepared the post request code from the lessons which defines the mehod, credentials, headers and turns the data to undesrtandable Json for the server to receive by stringify method and catching errors if any
#### updateUI function:
- function to get back the data object from the server and use the data to update UI
- going through the route defined in server which sends the stored data object and waits for it to convert to JS object then store it into dataToUpdateUI object
- finally using defined HTML input elements and new variable containing the data received from the server, updating inner text to fetched data



