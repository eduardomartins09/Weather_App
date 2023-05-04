import { Box, Button, Card, CardMedia, InputBase, Typography, styled } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
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
  
export const StyledTypographyWhite = styled(Typography)({
    color: "#FFF",
    textAlign: "center"
})
  
export const StyledBoxCitys = styled(Box)({
    justifyContent: "space-evenly",
    marginBottom: "1rem"
})
  
export const StyledBoxWeather = styled(Box)({
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
    gap: "0.5rem"
});
  
export const StyledBoxSearch = styled(Box)({
    padding: "0 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "0.5rem"
});
  
export const StyledInput = styled(InputBase)(({ theme }) => ({
    width: "45%",
    padding: "0 1rem",
    borderRadius: "5px",
    color: "white",
    backgroundColor: "#5A626F", 
  
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
}))
  
export const StyledButton = styled(Button)({
    color: "#FFF",
    fontSize: "1.3em"
});
  
export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    width: "250px", 
  
    [theme.breakpoints.up("sm")]: {
      width: "270px", 
    },
  
    [theme.breakpoints.up("md")]: {
      width: "320px", 
    },
}))