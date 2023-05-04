import { Thermostat, Air, Speed, Brightness7, LocationOn, Search } from "@mui/icons-material"
import { Box, Button, Card, CardMedia, Container, Grid, InputBase, Typography, styled } from "@mui/material"
import { cities, formatToLocaleTime, iconUrlFromCode } from "../services/weatherService"
import CardForecast from "./CardForecast"
import { useState } from "react"

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#202B3B", 
  borderRadius: "16px", 
  padding: "1rem",
  color: "#5A626F",
  marginBottom:"1rem",
  width: "310px",
  display: "block",

  [theme.breakpoints.up("sm")]: {
    width: "535px",
    textAlign: "center",
    margin: "0 auto"
  },

  [theme.breakpoints.up("md")]: {
    width: "600px",
  },
}))

const StyledTypographyWhite = styled(Typography)({
  color: "#FFF",
  textAlign: "center"
})

const StyledBoxCitys = styled(Box)({
  justifyContent: "space-evenly",
  marginBottom: "1rem"
})

const StyledBoxWeather = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "0.5rem",
  gap: "0.5rem"
});

const StyledBoxSearch = styled(Box)({
  padding: "0 1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginBottom: "0.5rem"
});

const StyledInput = styled(InputBase)(({ theme }) => ({
  width: "45%",
  padding: "0 1rem",
  borderRadius: "5px",
  color: "white",
  backgroundColor: "#5A626F", 

  [theme.breakpoints.up("sm")]: {
    width: "70%",
  },
}))

const StyledButton = styled(Button)({
  color: "#FFF",
  fontSize: "1.3em"
});

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "250px", 

  [theme.breakpoints.up("sm")]: {
    width: "270px", 
  },

  [theme.breakpoints.up("md")]: {
    width: "320px", 
  },
}))

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