const apiKey = '864ae738677cc5d64c1c11e8994328b9';
const resultsDiv = document.querySelector('#results');
const weatherForm = document.querySelector('form');
const weatherTodayDiv = document.querySelector('#weatherToday');

function weatherTodayHTML(weather, unit) {
  let city = weather.name;
  let date = Date(weather.dt);
  let temp = Math.round(weather.main.temp);
  let conditions = weather.weather[0].main;
  let tempHi = Math.round(weather.main.temp_max);
  let tempLo = Math.round(weather.main.temp_min);

  let cityH2 = document.createElement('h2');
  let dateH3 = document.createElement('h3');
  let tempH1 = document.createElement('h1');
  let img = document.createElement('img');
  let conditionsP = document.createElement('p');
  let tempHiLoP = document.createElement('p');
  cityH2.innerHTML = city;
  cityH2.className = 'mt-3';
  dateH3.innerHTML = date.slice(0, 15);
  conditionsP.innerHTML = conditions;
  img.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  if (unit === 'imperial') {
    tempH1.innerHTML = `${temp}&#8457;`;
    tempHiLoP.innerHTML = `${tempHi}&#8457; / ${tempLo}&#8457;`;
  } else {
    tempH1.innerHTML = `${temp}&#8451;`;
    tempHiLoP.innerHTML = `${tempHi}&#8451; / ${tempLo}&#8451;`;
  }

  // tempH1.className = 'border-bott';

  weatherTodayDiv.appendChild(cityH2);
  weatherTodayDiv.appendChild(dateH3);
  weatherTodayDiv.appendChild(tempH1);
  weatherTodayDiv.appendChild(img);
  weatherTodayDiv.appendChild(conditionsP);
  weatherTodayDiv.appendChild(tempHiLoP);
}

let getCurrentWeather = async (zipcode, unit) => {
  try {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${apiKey}&units=${unit}`);

    let weather = await data.json();

    weatherTodayHTML(weather, unit);
    console.log(weather);
  } catch (error) {
    console.log(error);
  }
}

weatherForm.addEventListener('submit', event => {
  event.preventDefault();
  weatherTodayDiv.innerHTML = "";
  const units = document.querySelector('#units').value;
  const zipCode = document.querySelector('#zipCode').value;

  const unit = (units === 'Fahrenheit') ? 'imperial' : 'metric';
  getCurrentWeather(zipCode, unit);
  weatherForm.reset();
});

// https://openweathermap.org/img/wn/13d@2x.png