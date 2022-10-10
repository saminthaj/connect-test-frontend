import React from 'react';
import './App.css';
import {Breadcrumb, Layout} from 'antd';
import MainHeader from "./System/Layout/MainHeader";
import moment from 'moment';
import 'antd/dist/antd.css';
import {BrowserRouter, Routes} from "react-router-dom";
import SystemRoutes from "./System/Routes";

const {Header, Content, Footer} = Layout;

function App() {
    return (
        <div className="App">
            <Layout className="layout">
                <BrowserRouter>
                    <MainHeader/>
                    <Content style={{padding: '0 50px'}}>
                        <SystemRoutes/>
                    </Content>
                </BrowserRouter>
                <Footer style={{textAlign: 'center'}}>Connect Resource ©{moment().format('YYYY')} Created by
                    Samintha</Footer>
            </Layout>
        </div>
    );
}

export default App;
