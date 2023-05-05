import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import getFormattedWeatherData from './services/weatherService'
import WeatherForecast from './components/WeatherForecast'

const App = () => {
  const [query, setQuery] = useState({q: 'london'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  const fetchWeather = async () => {
    try {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data)
    })
    } catch (exception) {
      console.log(exception.message)
      setQuery({q: 'paris'})
    }     
  }

  useEffect(() => {
    fetchWeather()
  }, [query, units])

  return (
    <>
      <Box sx={{ maxWidth: "fit-content", margin: "0 auto"  }}>
        {weather 
          ? (        
            <WeatherForecast 
              weather={weather} 
              forecast={weather.list} 
              setQuery={setQuery} 
              setUnits={setUnits} 
              units={units}
            />         
          ) 
          : ( <p>Loading...</p>) 
        }        
      </Box>
    </>
  )
}

export default App
