import {
    //ModeNight,
    //Settings,   
    //BeachAccess,
} from "@mui/icons-material";

import { Notifications, Cloud, ModeNight } from "@mui/icons-material";

import {
  AppBar,
  Box,
  Toolbar,
  Badge,   
  styled,
  Switch,
} from "@mui/material";
import { useRef,  } from "react";
import { useGlobalContext } from "../context/weatherContext";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledBoxSearch = styled(Box)({
    backgroundColor: "#5A626F",
    width: "60%",
    padding: "0 1rem",
    borderRadius: "8px"
});

const Icons = styled(Box)({   
    gap: "20px",
    alignItems: "center",
});

const Navbar = () => {
    const { setSearchPlace } = useGlobalContext()
    const cityName = useRef('')

    const handleClick = (e) => {
        e.preventDefault()

        let tempSearchTerm = cityName.current.value

        if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
            setSearchPlace("London")
          } else {
            setSearchPlace(cityName.current.value)
        }
    }

    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#202B3B"  }}>
            <StyledToolbar>
                <Cloud sx={{ display: { xs: "block", sm: "none" } }} />
                <StyledBoxSearch>
                    <input 
                        placeholder="search..." 
                        ref = {cityName}  
                    />
                </StyledBoxSearch>
                <button type = "submit" onClick={handleClick}>Submit</button>
                <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
                    <Badge>
                        <Cloud />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>                   
                        <ModeNight />
                        <Switch />                    
                </Icons>    
            </StyledToolbar>     
        </AppBar>
    )
}

export default Navbar