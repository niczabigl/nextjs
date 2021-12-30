import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import React from "react";

import { verticalMenuStyles } from "./styles";
import ROUTES from "../../internals/routes";
import {getCookie} from "../../utils/utils"


const renderMenu = () => {
    
    const renderLogginLogout = () =>  {

        if(getCookie("Authorization")) {
            const Icon = ROUTES.logout.icon;
            return (<Link key={ROUTES.logout.text} href={ROUTES.logout.href}>
                <MenuItem>
                    <ListItemIcon>
                        <Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={ROUTES.logout.text} />
                </MenuItem>
            </Link>)
        }

        const Icon = ROUTES.login.icon;
        return (
            <Link key={ROUTES.login.text} href={ROUTES.login.href}>
                <MenuItem>
                    <ListItemIcon>
                        <Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={ROUTES.login.text} />
                </MenuItem>
            </Link>
        )
    };

    const DashboardIcon = ROUTES.dashboard.icon;
    return (
        <div>
            <Link key={ROUTES.dashboard.text} href={ROUTES.dashboard.href}>
                <MenuItem>
                    <ListItemIcon>
                        <DashboardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={ROUTES.dashboard.text} />
                </MenuItem>
            </Link>
            { renderLogginLogout() }
        </div>   
    )
}

function VerticalMenu(props) {

    const menuClasses = verticalMenuStyles();

    return (
        <Menu
            anchorEl={props.anchorEl}
            elevation={0}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "center"
            }}
            open={Boolean(props.open)}
            onClose={props.onClose}
            classes={menuClasses}
        >
            {renderMenu()}
        </Menu>
    )
}

export default VerticalMenu;