import { Thermostat, Air, WaterDrop, Brightness7 } from "@mui/icons-material"
import { Box, Card, CardContent, CardMedia, Container, Divider, Grid, Typography, styled } from "@mui/material"

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
  return (
    <Container maxWidth="x1">   
      <Box mt={2} sx={{ display: { xs: "block", md: "flex" } }}>
        <StyledCard>
          <Box mr={3}>
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
      </Box>    
    </Container>
  )
}

export default WeatherForecast