import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React , {useState} from "react";


import * as Styled from "./styles";
import VerticalMenu from "../VerticalMenu/VerticalMenu";

export default function AppHeaderBar(props) {

    console.log("AppHeaderBar", props)
    const [openMenu, setOpenMenu] = useState(false);
    const [AnchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setOpenMenu(!openMenu);
      setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
      setAnchorEl(null)
      setOpenMenu(!openMenu);
    }

    return (
      <Styled.AppBarContainer >
        <AppBar position="static">
          <Toolbar>
            <Styled.IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
              <MenuIcon />
            </Styled.IconButton>
            <VerticalMenu anchorEl={AnchorEl} onClose={handleClose} open={openMenu} />
            <Typography variant="h6">
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Styled.AppBarContainer>
    );
  }