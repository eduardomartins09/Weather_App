import { useState } from "react"
import { Box, Container, Grid, Typography } from "@mui/material"
import { StyledBoxCitys, StyledBoxSearch, StyledBoxWeather, StyledButton, StyledCard, StyledInput, StyledTypographyWhite, StyledCardMedia } from "./WeatherForecastStyles"
import { Thermostat, Air, Speed, Brightness7, LocationOn, Search } from "@mui/icons-material"
import { cities, formatToLocaleTime, iconUrlFromCode } from "../services/weatherService"
import CardForecast from "./CardForecast"

const WeatherForecast = ({ weather: {
    icon,
    name, 
    country,
    temp,
    description,
    dt,
    timezone,
    temp_min,
    temp_max, 
    feels_like,
    humidity,
    speed,
    pressure,
    sunrise, 
    sunset,
  }, 
  forecast, 
  setQuery, 
  setUnits, 
  units 
}) => {
  const [placeName, setPlaceName] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    
    if((placeName.replace(/[^\w\s]/gi,"")).length === 0){
        setQuery({ q: 'london'})           
    } else {
        setQuery({ q: placeName})         
    }

    setPlaceName("")
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({
          lat,
          lon
        })
      });
    }
  }

  const handleClickUnits = (e) => {
    const selectedUnit = e.currentTarget.value
    if (units !== selectedUnit) setUnits(selectedUnit)
  }

  return (
    <Container maxWidth="x1">   
      <Box mt={2}>
        <StyledCard>
          <StyledBoxCitys sx={{ display: { xs: "none", sm: "flex" } }}>
            {cities.map((city) => (
              <StyledButton
                key={city.id}
                onClick={() => setQuery({ q: city.title })}
              >
                {city.title}
              </StyledButton>
            ))}
          </StyledBoxCitys>
          <StyledBoxSearch>
            <StyledInput
              placeholder="Search..."
              value={placeName} 
              onChange={(e) => setPlaceName(e.currentTarget.value)} 
            />     
            <Box>
              <StyledButton>
                <Search  
                  onClick={handleClick}
                />
              </StyledButton>
              <StyledButton>
                <LocationOn 
                  onClick={handleLocationClick}
                />           
              </StyledButton>
            </Box>          
          </StyledBoxSearch>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <StyledTypographyWhite variant="h6">
              {formatToLocaleTime(dt, timezone)}
            </StyledTypographyWhite>
          </Box>
          <Grid container p={2} gap>
            <Grid item>
              <StyledCardMedia
                component="img"                 
                image={iconUrlFromCode(icon)} 
                alt="icon-climate" 
              />
            </Grid>
            <Grid item>
              <StyledTypographyWhite variant="h4">
                {name}, {country}
              </StyledTypographyWhite>
              <Typography variant="h6" textAlign="center">
                {description}
              </Typography>
              <StyledTypographyWhite variant="h3">
                {temp.toFixed()}°
              </StyledTypographyWhite>  
              <Box>
                <StyledButton value="metric" onClick={handleClickUnits}>°C</StyledButton>
                <StyledButton value="imperial" onClick={handleClickUnits}>F°</StyledButton>
              </Box>      
              <Typography variant="h6">
                Air Conditions:
              </Typography> 
              <StyledBoxWeather>
                <Thermostat sx={{ fontSize: "1.8em" }} />              
                <Typography variant="span">
                  Real Feel: {feels_like.toFixed()}°
                </Typography>                   
              </StyledBoxWeather>
              <StyledBoxWeather>
                <Brightness7 sx={{ fontSize: "1.8em" }} />              
                <Typography variant="span">
                  Humidity: {humidity.toFixed()}%
                </Typography>                             
              </StyledBoxWeather>
              <StyledBoxWeather>
                <Air sx={{ fontSize: "1.8em" }} />               
                <Typography variant="span">
                  Wind: {speed.toFixed()} km/h
                </Typography>                             
              </StyledBoxWeather>
              <StyledBoxWeather>
                <Speed sx={{ fontSize: "1.8em" }} />              
                <Typography variant="span">
                  Pressure: {pressure} hPa
                </Typography>                             
              </StyledBoxWeather>                
            </Grid>
          </Grid>
          <Grid container p={2} gap justifyContent="center">
            <Grid item>
              <Typography variant="h6">
                Low {temp_min.toFixed()}°            
              </Typography> 
            </Grid>
            <Grid item>
              <Typography variant="h6">
                High: {temp_max.toFixed()}°            
              </Typography> 
            </Grid>
            <Grid item>
              <Typography variant="h6">
                Rise: {formatToLocaleTime(sunrise, timezone, "hh:mm a")}       
              </Typography> 
            </Grid>
            <Grid item>
              <Typography variant="h6">
                Set: {formatToLocaleTime(sunset, timezone, "hh:mm a")}       
              </Typography> 
            </Grid>
          </Grid>         
          <CardForecast forecast={forecast}/>           
        </StyledCard>        
      </Box>  
    </Container>
  )
}

export default WeatherForecast