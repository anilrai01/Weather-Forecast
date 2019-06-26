// import time from './clock';

// Display Date and Time
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let state = "";

let date = "";
let month = "";
let year = "";
let day = "";

let hour = "";
let min = "";
let sec = "";

let clock = "";


function time(){
    let newDate = new Date();

    date = newDate.getDate();
    month = newDate.getMonth();
    year = newDate.getFullYear();
    day = newDate.getDay();
    
    
    hour = newDate.getHours();
    min = newDate.getMinutes();
    sec = newDate.getSeconds();

    // let zone = newDate.getTimezoneOffset();

    min < 10 ? min = "0" + min: min = min;
    sec < 10 ? sec = "0" + sec: sec = sec;

    hour > 12 ? state = "PM" : state  = "AM";
    hour > 12 ? hour = hour - 12 : hour = hour;
    // hour < 10 ? hour = "0" + hour: hour = hour;
    
    clock = document.querySelector('.clock');
    clock.textContent = (`${date} ${months[month]} ${year} ${days[day]}`);
    clock.innerText = (`${date} ${months[month]} ${year} ${days[day]}`);
    
    let time = document.querySelector('.time');
    time.textContent = (`${hour} : ${min} : ${sec} ${state}`);
    time.innerText = (`${hour} : ${min} : ${sec} ${state}`);

    setTimeout("time()", 1000);
}

time();

// Weather Forecast