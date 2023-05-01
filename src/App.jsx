import { Box } from '@mui/material'
import './App.css'

import WeatherForecast from './components/WeatherForecast/WeatherForecast'
import Navbar from './components/Navbar'


function App() {

  return (
    <Box>
      <Navbar />
      <WeatherForecast />     
    </Box>
  )
}

export default App
