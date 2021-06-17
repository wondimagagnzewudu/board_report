import React, { useState, useEffect,Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { loginUser, useAuthState, useAuthDispatch } from './Context';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import { Login } from './Context';
import { Container } from 'reactstrap';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined ,BranchesOutlined} from '@ant-design/icons';

export default function NavbarMenu(props) {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const logout =() =>{
    localStorage.removeItem('token');
    window.location.reload()
  }
    return(<>
         <Sider width={200}  height={1000} className="site-layout-background">
           <Menu 
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', }}

        >
            <SubMenu key="sub1" icon={<BranchesOutlined />} title="Menu" style={{ marginTop: '20%', fontSize: 20, color: 'black'}}>
            <Menu.Item  key="7"><a href="/#/Form" >Incident report</a></Menu.Item>
            <Menu.Item  key="6"><a href="/#/Api_csv" >Import Report</a></Menu.Item>
            <Menu.Item  key="2"><a href="/#/Transcriber_follow" >Dynamic Search</a></Menu.Item>
            <Menu.Item  key="3"><a href="/#/Serchreport" >Report Lookup</a></Menu.Item>
            <Menu.Item  key="4"><a href="/#/Addreport" >Add Report</a></Menu.Item>
            <Menu.Item  key="5" onClick={logout} >Log out</Menu.Item>
          </SubMenu>
           </Menu>
      </Sider>
    
    </>

    );
};