export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"
export const WEATHER_API_KEY = "b26672e98758e923e5d6e88c6a96164f"


// Pegar lat e lon
// https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b26672e98758e923e5d6e88c6a96164f&units=metric

// Pegar dados, apos ter pegado lat and long
// /weather?lat=${lat}&lon=${lon}&appid=b26672e98758e923e5d6e88c6a96164f&units=metric

// https://api.openweathermap.org/data/2.5/weather?lat=40.41&lon=-3.70&appid=b26672e98758e923e5d6e88c6a96164f&units=metric

// Pegar forecast
// /forecast?lat=${lat}&lon=${lon}&appid=b26672e98758e923e5d6e88c6a96164f&units=metric

// Pegar icon
// https://openweathermap.org/img/wn/${iconId}@2x.png