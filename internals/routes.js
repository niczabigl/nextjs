import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';

export const ROUTES = {
    dashboard: {
        href: '/',
        icon: HomeOutlinedIcon,
        text: 'Dashboard'
    },
    users: {
        href: '/users',
        icon: HomeWorkOutlinedIcon,
        text: 'Users Db'
    },
    login: {
        href: '/login',
        icon: VpnKeyOutlinedIcon,
        text: 'Login'
    },
    logout: {
        href: '/logout',
        icon: ExitToAppOutlinedIcon,
        text: 'Logout'
    }
}