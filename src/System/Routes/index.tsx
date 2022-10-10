import {Route, Routes,} from "react-router-dom";
import React from "react";
import RouteList from "./RouteList";
import Dashboard from "../Home";

const SystemRoutes = () => {
    return (
        <Routes>
            <Route index element={<Dashboard/>}/>
            {RouteList.map((route, key) => <Route key={key} index path={route.path}
                                                  element={route.component}/>)}
        </Routes>);
}

export default SystemRoutes;