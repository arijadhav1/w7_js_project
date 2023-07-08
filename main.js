
const key = "2df2effcaff8bf3aefad7c5ce8db8ab3"
const url = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q="

const userCity = document.querySelector(".get-city-name")
const button = document.querySelector(".city-search")

async function getWeather(city) {
    const result = await fetch(url + city + `&appid=${key}`)
    const data = await result.json()
    console.log(data)
    document.querySelector(".city").innerHTML = 'City: ' + data.name  
    document.querySelector(".high").innerHTML = 'Max Temp: '+ Math.floor(data.main.temp_max)
    document.querySelector(".low").innerHTML = 'Min Temp: ' + Math.floor(data.main.temp_min)
    document.querySelector(".humidity").innerHTML = 'Humidity: ' + data.main.humidity + '%'
    document.querySelector(".forecast").innerHTML = 'Forecast: ' + data.weather[0].main
    

    
}

button.addEventListener('click', () => {
    getWeather(userCity.value)
})

function show() {
    document.getElementById('button-click').style.display = "block"
}


getWeather(city)

