const form = document.querySelector('form');
const searchField = document.querySelector(".searchField");
const currentLocation = document.querySelector('.time_location p')
const dateTime = document.querySelector('.time_location span')
const temprature = document.querySelector('.temp')
const conditionField = document.querySelector('.weather_condition span')
function search (e) {
    e.preventDefault();
    searchField.value;
    fetchData(searchField.value);
}

form.addEventListener('submit', search)



async function fetchData(location, aqi=false){
    try{
        const url = `http://api.weatherapi.com/v1/current.json?key=28f91ad270bd46cbbb7164856243012&q=${location}&aqi=${aqi}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        let currentLocation = data.location.name;
        let currentCondition = data.current.condition.text;
        let currentTemp = data.current.temp_c;
        let currentTime = data.location.localtime;

        updateValues(currentTime, currentLocation, currentCondition, currentTemp);

    }
    catch{

    }
}

function updateValues (time, location, condition, temp){
    console.log(time, location, condition, temp);
    dateTime.innerText = time;
    currentLocation.innerText = location;
    conditionField.innerText = condition;
    temprature.innerText = temp;
    console.log(dateTime, conditionField, temprature, currentLocation);
}
 
fetchData("mumbai");