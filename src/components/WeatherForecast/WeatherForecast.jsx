import { Thermostat, Air, WaterDrop, Brightness7 } from "@mui/icons-material"
import { Box, Card, CardContent, CardMedia, Container, Divider, Grid, Typography, styled } from "@mui/material"

const StyledCardMedia = styled(CardMedia)({
  width: "100px",
  margin: "0 auto"
})

const StyledTypographyWhite = styled(Typography)({
  color: "#FFF"
})

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#202B3B", 
  borderRadius: "16px", 
  padding: "1.5rem",
  color: "#5A626F",
  marginBottom:"1rem",
  width: "310px",
  display: "block",

  [theme.breakpoints.up("sm")]: {
    width: "600px",
    display: "flex",
  },
}))

const StyledCardForecast = styled(Card)(({ theme }) => ({
  backgroundColor: "#202B3B", 
  borderRadius: "16px", 
  padding: "1.5rem",
  color: "#5A626F",
  marginBottom:"1rem",
  width: "310px",

  [theme.breakpoints.up("sm")]: {
    width: "600px",
    display: "block",
  },
}))

// sx={{ display: { xs: "none", sm: "block" } }}

const WeatherForecast = () => {
  return (
    <Container maxWidth="x1">   
      <Box mt={2}>
        <StyledCard>
          <Box mr={2}>
            <CardContent>
              <CardMedia component="img" image="https://openweathermap.org/img/wn/10d@2x.png" alt="algo" />
            </CardContent> 
            <StyledTypographyWhite variant="h4">
              Madrid
            </StyledTypographyWhite>
            <StyledTypographyWhite variant="h3">
              31°
            </StyledTypographyWhite>  
            <StyledTypographyWhite variant="h6">
              Description: moderate rain
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
                        31°
                      </StyledTypographyWhite>                   
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container mt={1}>
                    <Brightness7 sx={{ fontSize: "1.8em" }} />
                    <Grid item ml={1}>
                        <Typography gutterBottom variant="subtitle1">
                          UV Index
                        </Typography>                   
                        <StyledTypographyWhite gutterBottom variant="h5">
                          3
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
                        0.2 km/h
                      </StyledTypographyWhite>                   
                  </Grid>                 
                </Grid>
                <Grid item mt={1}>
                  <Grid container>
                    <WaterDrop sx={{ fontSize: "1.8em" }} />
                    <Grid item>
                        <Typography gutterBottom variant="subtitle1" ml={1}>
                          Chance of rain
                        </Typography>                   
                        <StyledTypographyWhite gutterBottom variant="h5">
                          0%
                        </StyledTypographyWhite>                   
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>  
            </Grid>
          </Box> 
        </StyledCard> 
        <StyledCardForecast>
          <Typography variant="p">
            Today&apos;s Forecast
          </Typography>
          <Grid container p={3} textAlign="center">
            <Grid item>
              <Typography variant="p">
                6:00 AM
              </Typography>
              <StyledCardMedia component="img" image="https://openweathermap.org/img/wn/10d@2x.png" alt="algo" />
              <Typography variant="h5">
                25°
              </Typography>            
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item>
              <Typography variant="p">
                9:00 AM
              </Typography>
              <StyledCardMedia component="img" image="https://openweathermap.org/img/wn/10d@2x.png" alt="algo" />
              <Typography variant="h5">
                25°
              </Typography>            
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: "none", sm: "block" } }} />
            <Grid item>
              <Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: "block", sm: "none" } }} />
              <Typography variant="p">
                9:00 AM
              </Typography>
              <StyledCardMedia component="img" image="https://openweathermap.org/img/wn/10d@2x.png" alt="algo" />
              <Typography variant="h5">
                25°
              </Typography>            
            </Grid> 
            <Divider orientation="vertical" variant="middle" flexItem />                          
            <Grid item>
              <Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: "block", sm: "none" } }} />
              <Typography variant="p">
                9:00 AM
              </Typography>
              <StyledCardMedia component="img" image="https://openweathermap.org/img/wn/10d@2x.png" alt="algo" />
              <Typography variant="h5">
                25°
              </Typography>            
            </Grid>                           
          </Grid>
          <Grid container p={3} textAlign="center">
          <Grid item>
              <Typography variant="p">
                3:00 PM
              </Typography>
              <StyledCardMedia component="img" image="https://openweathermap.org/img/wn/10d@2x.png" alt="algo" />
              <Typography variant="h5">
                25°
              </Typography>            
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item>
              <Typography variant="p">
                6:00 PM
              </Typography>
              <StyledCardMedia component="img" image="https://openweathermap.org/img/wn/10d@2x.png" alt="algo" />
              <Typography variant="h5">
                25°
              </Typography>            
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: "none", sm: "block" } }} />
            <Grid item>
              <Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: "block", sm: "none" } }} />
              <Typography variant="p">
                12:00 PM
              </Typography>
              <StyledCardMedia component="img" image="https://openweathermap.org/img/wn/10d@2x.png" alt="algo" />
              <Typography variant="h5">
                25°
              </Typography>            
            </Grid> 
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item>
              <Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: "block", sm: "none" } }} />
              <Typography variant="p">
                12:00 PM
              </Typography>
              <StyledCardMedia component="img" image="https://openweathermap.org/img/wn/10d@2x.png" alt="algo" />
              <Typography variant="h5">
                25°
              </Typography>            
            </Grid>           
          </Grid>
        </StyledCardForecast>
      </Box>    
    </Container>
  )
}

export default WeatherForecast