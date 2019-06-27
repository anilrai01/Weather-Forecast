
function displayTime(){
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let state = "";
    
        let date, month, year, day, hour, min, sec, clock, timeZone, tz, tzField;

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
    
        tz = Date();
        timeZone = tz.slice(tz.search("GMT"));
    
        tzField = document.querySelector('.timezone');
        tzField.textContent = (`${timeZone}`);
        tzField.innerText = (`${timeZone}`);
    
        
        clock = document.querySelector('.clock');
        clock.textContent = (`${date} ${months[month]} ${year} ${days[day]}`);
        clock.innerText = (`${date} ${months[month]} ${year} ${days[day]}`);
        
        let time = document.querySelector('.time');
        time.textContent = (`${hour} : ${min} : ${sec} ${state}`);
        time.innerText = (`${hour} : ${min} : ${sec} ${state}`);

    setTimeout("displayTime()", 1000);
}
// Time Display

displayTime();

    // Weather Forecast
    let latDes = document.getElementById('lat');
    let longDes = document.getElementById('long');

    let tempDes = document.querySelector('.temp');
    let message = document.querySelector('.msg');

    // let sunRise = document.getElementById('sunR');
    // let sunSet = document.getElementById('sunS');
    let humi = document.getElementById('hum');
    let airPre = document.getElementById('airP');

    let dailyDes = document.querySelector('.dailyMessage');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            const proxy = `https://cors-anywhere.herokuapp.com/`;
            let api = `${proxy}https://api.darksky.net/forecast/d2003577803f973616e0f4f6fa5ebd88/${lat},${long}`;

            async function getWeatherAW(){
                const getData = await fetch(api);
                const data = await getData.json();
                // console.log(data);
                
                const {temperature, summary, icon, pressure } = data.currently;
                const logo = icon;
                
                const dailySummary = data.daily.summary;
                const {humidity} = data.daily.data[0];
                // console.log(dailySummary);

                //Updating DOM elements
                tempDes.innerHTML = `${temperature} F`;
                message.innerHTML = summary;
                latDes.innerHTML = lat.toPrecision(6);
                longDes.innerHTML = long.toPrecision(6);
                dailyDes.innerHTML = `${dailySummary}`;
                airPre.innerHTML = pressure;

                // sunRise.innerHTML = new Date(sunriseTime * 1000);
                // sunSet.innerHTML = new Date(sunsetTime * 1000);

                humi.innerHTML = humidity;

                // set Icon
                setIcons(logo, document.querySelector('#icon1'))

            }

            getWeatherAW();


        })
    } //End of IF block

    function setIcons(icon, iconID){
        const skycons = new Skycons({"color": "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
  
        skycons.play();

        return skycons.set(iconID, Skycons[currentIcon]);
    }
    
// });




