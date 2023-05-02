import { Thermostat, Air, WaterDrop, Brightness7 } from "@mui/icons-material"
import { Box, Card, CardContent, CardMedia, Container, Divider, Grid, Typography, styled } from "@mui/material"
import { useGlobalContext } from "../../context/weatherContext"

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#202B3B", 
  borderRadius: "16px", 
  padding: "1.5rem",
  color: "#5A626F",
  marginBottom:"1rem",
  width: "310px",
  display: "block",

  [theme.breakpoints.up("sm")]: {
    width: "520px",
    display: "flex",
  },
}))

const StyledTypographyWhite = styled(Typography)({
  color: "#FFF"
})

const WeatherForecast = () => {
  const { data, error } = useGlobalContext()

  if(error) return <p>{error}</p>

  // navigator.geolocation.getCurrentPosition(function(position) {
  //   console.log("Latitude is :", position.coords.latitude);
  //   console.log("Longitude is :", position.coords.longitude);
  // });

  return (
    <Container maxWidth="x1">   
      <Box mt={2} sx={{ display: { xs: "block", md: "flex" } }}>
        <StyledCard>
          <Box mr={3}>
            <CardContent>
              <CardMedia component="img" image="https://openweathermap.org/img/wn/10d@2x.png" alt="algo" />
            </CardContent> 
            <StyledTypographyWhite variant="h4">
              {data?.name}
            </StyledTypographyWhite>
            <StyledTypographyWhite variant="h3">
              {data?.main.temp}°
            </StyledTypographyWhite>  
            <StyledTypographyWhite variant="h6">
              Description: {data?.weather[0].description}
            </StyledTypographyWhite>         
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box p={2}>
            <Typography variant="h6">
              Air Conditions
            </Typography>
            <Grid container spacing={2} mt={1}>
              <Grid item>
                <Grid container>
                  <Thermostat sx={{ fontSize: "1.8em" }} />
                  <Grid item ml={1}>
                      <Typography variant="subtitle1">
                        Real Feel
                      </Typography>                   
                      <StyledTypographyWhite variant="h5">
                        {data?.main.feels_like}°
                      </StyledTypographyWhite>                   
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container mt={1}>
                    <Brightness7 sx={{ fontSize: "1.8em" }} />
                    <Grid item ml={1}>
                        <Typography gutterBottom variant="subtitle1">
                          Humidity
                        </Typography>                   
                        <StyledTypographyWhite gutterBottom variant="h5">
                          {data?.main.humidity}%
                        </StyledTypographyWhite>                   
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Air sx={{ fontSize: "1.8em" }} />
                  <Grid item ml={1}>
                      <Typography gutterBottom variant="subtitle1">
                        Wind
                      </Typography>                   
                      <StyledTypographyWhite gutterBottom variant="h5">
                        {data?.wind.speed} km/h
                      </StyledTypographyWhite>                   
                  </Grid>                 
                </Grid>
                <Grid item mt={1}>
                  <Grid container>
                    <WaterDrop sx={{ fontSize: "1.8em" }} />
                    <Grid item>
                        <Typography gutterBottom variant="subtitle1" ml={1}>
                          Preassure
                        </Typography>                   
                        <StyledTypographyWhite gutterBottom variant="h5">
                          {data?.main.pressure} hPa
                        </StyledTypographyWhite>                   
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>  
            </Grid>
          </Box> 
        </StyledCard>        
      </Box>    
    </Container>
  )
}

export default WeatherForecast