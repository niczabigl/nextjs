import React from 'react';
import Link from 'next/link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {ROUTES} from '../../internals/routes';
import {getCookie} from '../../utils/utils'

import { verticalMenuStyles } from './styles';

const renderMenu = () => {
    
    const renderLogginLogout = () =>  {

        if(getCookie('Authorization')) {
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

    const Icon = ROUTES.dashboard.icon;
    return (
        <>
            <Link key={ROUTES.dashboard.text} href={ROUTES.dashboard.href}>
                <MenuItem>
                    <ListItemIcon>
                        <Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={ROUTES.dashboard.text} />
                </MenuItem>
            </Link>
            { renderLogginLogout() }
        </>   
    )
}

const VerticalMenu = (props) => {

    const menuClasses = verticalMenuStyles();

    return (
        <Menu
            anchorEl={props.anchorEl}
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={Boolean(props.open)}
            onClose={props.onClose}
            classes={menuClasses}
        >
            {renderMenu()}
        </Menu>
    )
}

export { VerticalMenu };