// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express and its dependencies to run server and routes
const express= require('express');
const cors =require('cors');
const bodyParser = require('body-parser');
// Start up an instance of app
const app=express();
/* Middleware*/
//using bodyParser as a middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


// Setup port and Server
const port = 8080;
const server = app.listen(port, ()=>{
    //using template literal to print the link in the terminal to be clicked directly
    console.log(`server is running on http://localhost:${port}`)
})


//setting up route endpoint to receive data from client side and storing requested data into projectData object
 
app.post('/postData', (req, res)=>{
//console.log(req.body) //-->made sure that request is arriving correctly
projectData['entry']=req.body//adding the array to the js object in the begining of the code 

});

//setting a get route to send back the projectData object after it is updated from client side
app.get('/getBack', (req, res)=>{
    res.send(projectData)
    console.log(projectData)
    });





