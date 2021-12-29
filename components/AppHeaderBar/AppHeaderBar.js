import React , {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {VerticalMenu} from '../VerticalMenu/VerticalMenu';
import { appBarUseStyles } from './styles';

export default function AppHeaderBar(props) {
    const appBarClasses = appBarUseStyles();
    console.log('AppHeaderBar', props)
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
      <div className={appBarClasses.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={appBarClasses.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <VerticalMenu anchorEl={AnchorEl} onClose={handleClose} open={openMenu}></VerticalMenu>
            <Typography variant="h6" className={appBarClasses.title}>
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }