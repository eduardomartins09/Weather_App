import { Grid, Typography } from "@mui/material"
import { StyledCardForecast, StyledCardMedia } from "./CardForecastStyles"
import { iconUrlFromCode } from "../services/weatherService"
  
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