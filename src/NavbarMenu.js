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
  const user_type = localStorage.getItem('user_type')
  const [analyst, setanalyst] = useState(false)
  const [decoder, setdecoder] = useState(false)
  const [admin_password, setadmin_password] = useState(false)
  const [dashboard, setdashboard] = useState(false)
  const { Header, Content, Sider } = Layout;
  const logout =() =>{
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_type');
    localStorage.removeItem('user_id');
    window.location.reload()
  }
  const checkUserType = (user_type) =>{


    if(user_type =="decoder" ){
      setdecoder(true);
      setanalyst(false);
      
      }
      else if(user_type =="analyst"){
        setanalyst(true);
        setdecoder(false);
      }
      else if(user_type =="admin"){
        setadmin_password(true)
        setanalyst(false);
        setdecoder(false);
      }
      else{
        setdashboard(true);
        setanalyst(false);
        setdecoder(false);
      }

      }
     useEffect(() =>{
      checkUserType(user_type)
      
      }, [])
    return(<>
         {/* <Sider width={200}  height={1000} className="site-layout-background">
           <Menu 
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', }}

        >
            <SubMenu key="sub1" icon={<BranchesOutlined />} title="Menu" style={{ marginTop: '20%', fontSize: 20, color: 'black'}}>
            <Menu.Item  key="2"><a href="/#/Transcriber_follow" >Arrival Approval</a></Menu.Item>
            <Menu.Item  key="3"><a href="/#/Serchreport" >Document Tracking</a></Menu.Item>
            <Menu.Item  key="4"><a href="/#/Addreport" >Result Entery</a></Menu.Item>
            <Menu.Item  key="5" onClick={logout} >Log out</Menu.Item>
          </SubMenu>
           </Menu>
      </Sider> */}
         
      {
												((decoder)) ? (
                          <Sider width={200}  height={1000} className="site-layout-background">
                          <Menu 
                         mode="inline"
                         defaultSelectedKeys={['1']}
                         defaultOpenKeys={['sub1']}
                         style={{ height: '100%', }}
               
                       >
                           <SubMenu key="sub1" icon={<BranchesOutlined />} title="Menu" style={{ marginTop: '20%', fontSize: 20, color: 'black'}}>
                           <Menu.Item  key="2"><a href="/#/Need_update" >Need update</a></Menu.Item>
                           <Menu.Item  key="3"><a href="/#/Addreport" >Create Reporting</a></Menu.Item>
                           <Menu.Item  key="5" onClick={logout} >Log out</Menu.Item>
                         </SubMenu>
                          </Menu>
                     </Sider>) : (
													<div></div>
												)}
                              {
												((analyst)) ? (
                          <Sider width={200}  height={1000} className="site-layout-background">
                          <Menu 
                         mode="inline"
                         defaultSelectedKeys={['1']}
                         defaultOpenKeys={['sub1']}
                         style={{ height: '100%', }}
               
                       >
                           <SubMenu key="sub1" icon={<BranchesOutlined />} title="Menu" style={{ marginTop: '20%', fontSize: 20, color: 'black'}}>
                           <Menu.Item  key="2"><a href="/#/Need_check" >Need check</a></Menu.Item>
                           <Menu.Item  key="3"><a href="/#/Aproved_list" >List of approved</a></Menu.Item>
                           <Menu.Item  key="5" onClick={logout} >Log out</Menu.Item>
                         </SubMenu>
                          </Menu>
                     </Sider>) : (
													<div></div>
												)}
                           {
												((admin_password)) ? (
                          <Sider width={200}  height={1000} className="site-layout-background">
                          <Menu 
                         mode="inline"
                         defaultSelectedKeys={['1']}
                         defaultOpenKeys={['sub1']}
                         style={{ height: '100%', }}
               
                       >
                           <SubMenu key="sub1" icon={<BranchesOutlined />} title="Menu" style={{ marginTop: '20%', fontSize: 20, color: 'black'}}>
                           <Menu.Item  key="2"><a href="/#/Need_check" >Need check</a></Menu.Item>
                           <Menu.Item  key="2"><a href="/#/Need_update" >Need update</a></Menu.Item>
                           <Menu.Item  key="3"><a href="/#/Addreport" >Create Reporting</a></Menu.Item>
                           <Menu.Item  key="3"><a href="/#/Aproved_list" >List of approved</a></Menu.Item>
                           <Menu.Item  key="5" onClick={logout} >Log out</Menu.Item>
                         </SubMenu>
                          </Menu>
                     </Sider>) : (
													<div></div>
												)}
    </>

    );
};