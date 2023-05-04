import { DateTime } from "luxon"

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

export const cities = [
    {
        id: 1,
        title: 'London'
    },
    {
        id: 2,
        title: 'Sydney'
    },
    {
        id: 3,
        title: 'Tokyo'
    },
    {
        id: 4,
        title: 'Toronto'
    },
    {
        id: 5,
        title: 'Paris'
    },
]

const getWeatherData = async (infotType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infotType)
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })

    return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error))
}

const formatCurrentWeather = (data) => {
    //if (!data.coord) return

    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity, pressure},
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data

    const { main: description, icon } = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, pressure, name, dt, country, sunrise, sunset, icon, description, speed}
}

const formatForecastWeather = (data) => {
    let { list } = data
    let { timezone } = data.city

    list = list.slice(0,8).map(item => {    
        return {
            titleHourly: formatToLocaleTime(item.dt, timezone, "hh:mm a"),
            tempHourly: item.main.temp,
            iconHourly: item.weather[0].icon
        }   
    })

    return { list, timezone }
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather).catch((error) => console.log(error.message))

    const { lat, lon } = formattedCurrentWeather

    const formattedForecastWeather = await getWeatherData("forecast", {
        lat, lon, units: searchParams.units
    }).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather}
}

const formatToLocaleTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const iconUrlFromCode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData

export { formatToLocaleTime, iconUrlFromCode }