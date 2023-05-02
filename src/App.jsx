import './App.css'
import { Box } from '@mui/material'

import WeatherForecast from './components/WeatherForecast/WeatherForecast'
import Navbar from './components/Navbar'
import CardForecast from './components/WeatherForecast/CardForecast'
import { useGlobalContext } from './context/weatherContext'

function App() {
  const { loading } = useGlobalContext()

  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: "fit-content", display: { xs: "block", lg: "flex" } }}>
        {!loading 
          ? (
            <>
              <WeatherForecast /> 
              <Box mt={2} ml={3} sx={{ display: { xs: "block", md: "flex" } }}>
                <CardForecast />              
              </Box>
            </>
          ) 
          : ( <p>Loading...</p>) 
        }        
      </Box>
    </>
  )
}

export default App
