import { Card, CardMedia, styled } from "@mui/material"

export const StyledCardForecast = styled(Card)(({ theme }) => ({
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
  
export const StyledCardMedia = styled(CardMedia)({
    width: "100px",
    margin: "0 auto"
})