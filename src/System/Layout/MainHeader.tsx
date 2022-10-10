import {Layout, Menu} from "antd";
import React from "react";
import './style.css';
import {Link} from "react-router-dom";
import RouteList from "../Routes/RouteList";

const {Header} = Layout;


const MainHeader = () => {
    return (
        <Header>
            <div className="logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={RouteList.map((route, key) => {
                    return {
                        key,
                        label: <Link to={route.path}>{route.name}</Link>,
                    };

                })}/>
        </Header>
    )
}

export default MainHeader;