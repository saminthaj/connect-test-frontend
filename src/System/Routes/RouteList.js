import Attendance from "../Attendance";
import Dashboard from "../Home";


const RouteList = [
    {
        path: '/',
        name: 'Dashboard',
        component: <Dashboard/>
    },
    {
        path: '/attendance',
        name: 'Attendance',
        component: <Attendance/>
    }
]

export default RouteList;