import { Card, CardMedia, Grid, Typography, styled } from "@mui/material"
import { iconUrlFromCode } from "../services/weatherService"
  
const StyledCardForecast = styled(Card)(({ theme }) => ({
  backgroundColor: "#202B3B", 
  borderRadius: "16px", 
  padding: "1.5rem",
  color: "#5A626F",
  marginBottom:"1rem", 
  width: "280px",
  
  [theme.breakpoints.up("sm")]: {
    width: "500px",
  },

  [theme.breakpoints.up("md")]: {
    width: "565px",          
  },
}))

const StyledCardMedia = styled(CardMedia)({
  width: "100px",
  margin: "0 auto"
})

const CardForecast = ({forecast}) => {
    
  return (
    <StyledCardForecast>
      <Typography variant="p">
        Daily&apos;s Forecast
      </Typography>
      <Grid container p={1} gap justifyContent="center">
        {forecast.map((forecast, key) => (
            <div key={key}>                 
              <Grid item>
                <Typography variant="p">
                  {forecast.titleHourly}
                </Typography>
                <StyledCardMedia 
                  component="img" 
                  image={iconUrlFromCode(forecast.iconHourly)} 
                  alt="icon-climate" 
                />
                <Typography variant="h5">
                  {forecast.tempHourly.toFixed()}°
                </Typography>            
              </Grid>                  
            </div>
          ))}
      </Grid>
    </StyledCardForecast>
  )
}

export default CardForecast