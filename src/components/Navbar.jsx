import {
    //ModeNight,
    //Settings,   
    //BeachAccess,
} from "@mui/icons-material";

import { Notifications, Cloud, ModeNight } from "@mui/icons-material";

import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Badge,   
  styled,
  Switch,
} from "@mui/material";

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
    

    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#202B3B"  }}>
            <StyledToolbar>
                <Cloud sx={{ display: { xs: "block", sm: "none" } }} />
                <StyledBoxSearch>
                    <InputBase placeholder="search..." />
                </StyledBoxSearch>
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