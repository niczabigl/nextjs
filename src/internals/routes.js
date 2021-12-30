import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";

export default {
    dashboard: {
        href: "/",
        icon: HomeOutlinedIcon,
        text: "Dashboard"
    },
    users: {
        href: "/users",
        icon: HomeWorkOutlinedIcon,
        text: "Users Db"
    },
    login: {
        href: "/login",
        icon: VpnKeyOutlinedIcon,
        text: "Login"
    },
    logout: {
        href: "/logout",
        icon: ExitToAppOutlinedIcon,
        text: "Logout"
    }
}