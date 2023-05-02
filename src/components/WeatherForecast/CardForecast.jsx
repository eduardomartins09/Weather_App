import { Card, CardMedia, Divider, Grid, Typography, styled } from "@mui/material"
import { useGlobalContext } from "../../context/weatherContext"
  
const StyledCardForecast = styled(Card)(({ theme }) => ({
    backgroundColor: "#202B3B", 
    borderRadius: "16px", 
    padding: "1.5rem",
    color: "#5A626F",
    marginBottom:"1rem", 
    width: "310px",
    
    [theme.breakpoints.up("sm")]: {
      width: "520px",
      display: "block",
    },
  
    [theme.breakpoints.up("md")]: {
      width: "520px",      
      display: "grid",
      justifyContent: "center",
    },
}))

const StyledCardMedia = styled(CardMedia)({
    width: "100px",
    margin: "0 auto"
})

const CardForecast = () => {
  const { data } = useGlobalContext()

  console.log(data)
  
  return (
    <StyledCardForecast>
          <Typography variant="p">
            Today&apos;s Forecast
          </Typography>
          <Grid container p={1} textAlign="center">
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
          <Grid container p={1} textAlign="center">
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
  )
}

export default CardForecast