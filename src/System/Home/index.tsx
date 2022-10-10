import React from "react";
import {Breadcrumb} from "antd";

const Dashboard = () => {
    return <div>
        <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
    </div>
}

export default Dashboard;