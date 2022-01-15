/* Global Variables */

//selecting elements to get data from
const feeling = document.getElementById('feelings');
const button = document.getElementById('generate');
const zip = document.getElementById('zip');
//selecting elements to add data to in the UI
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');

//first part of the URL that wont be changed
const mainUrl = 'https://api.openweathermap.org/data/2.5/weather?zip='
//personal key from the openweathermap
const myKey = '&units=metric&appid=978a09b3cff20d869f17fb8c22ae2716'



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear()+' at '+d.getHours() +':'+d.getMinutes(); //added time myself to the provided code






  //creating an empty array
 collectedData ={}
//function to Get weather data from the API
async function callForData() {
    //gets the value for the zipcode entered
    let zipValue = zip.value;
   //putting together the API URL to be requested
   const fullUrl = `${mainUrl}${zipValue}${myKey}`
   //fetching data from the complete URL
   const response = await fetch(fullUrl);
   //converting the data from json into JS object so it can be read and operated
  const weatherData = await response.json();
  //storing only the temp from the many properties of the weather object
  const temp = weatherData.main.temp;
  //storing user input in a seperate variable as well
  let input = feeling.value;
  

//adding the values to a key-property inputs into an object
  collectedData['temp']=temp;
  collectedData['input']=input;
  collectedData['newDate']=newDate;
  

//posting the new object to the server
  postData('/postData',collectedData);

  //calling the function (defined below) that gets back data from server and update the UI
  updateUI()
};


//adding event listener to when the button is clicked and calling the callForData function which includes posting received data and udating UI in it
button.addEventListener('click',callForData)






 //making a post request (code from the lessons)
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
     headers: {
          'Content-Type': 'application/json',
      },
          
      body: JSON.stringify(data)
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

//function to get back the data object from the server and use the data to update UI
const updateUI =async  () => {
        //going through the route defined in server which sends the stored data object and waits for it to convert to JS object then store it into dataToUpdateUI object
        let response = await fetch('/getBack');
        let dataToUpdateUI = await response.json();
        console.log(dataToUpdateUI);
        
    //finally using defined HTML input elements and new variable containing the data received from the server, updating inner text to fetched data
    temp.innerText = `Temp: ${dataToUpdateUI.entry.temp}`;
    content.innerText =`Feeling:  ${dataToUpdateUI.entry.input}`;
    date.innerText =`Date: ${dataToUpdateUI.entry.newDate}`;
};    









  
    
