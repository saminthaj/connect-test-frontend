import React from "react";
import {Breadcrumb} from "antd";

const NotFound = () => {
    return <div>
        <div>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Not Found</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">Not Found</div>
        </div>
    </div>
}

export default NotFound;