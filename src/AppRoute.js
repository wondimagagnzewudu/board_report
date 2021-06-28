import React, { useState, useEffect,Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { loginUser, useAuthState, useAuthDispatch } from './Context';

import jwt_decode from "jwt-decode";
import { Login } from './Context/';
import { Layout, Menu, Breadcrumb } from 'antd';
import image from './Context/Login/z_oxTrxq_400x400.jpg';

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// sidebar nav config

import routes from './routes';
import NavbarMenu from './NavbarMenu';

const AppRoutes = ({ component: Component, path,exact,name, ...rest }) => {
	const token = localStorage.getItem('access_token')
	const [logedin, setLogedIn] = useState(false)
 
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    const check_login = (token) =>{
	
  
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer  "+token);
    
      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };
      fetch(process.env.REACT_APP_IP+'/login', requestOptions)
      .then(user =>{
        console.log(user)
        if(user.status == 200){
        
        } else {
        setLogedIn(false)
        }
      })
      .catch(error => {
        setLogedIn(false)
        console.log(error)
      })
      }
	const checkUserType = (token) =>{
	if(token){
 setLogedIn(true)
    }
	  }
	 useEffect(() =>{
   // check_login(token)
		checkUserType(token)
	  
	  }, [])

return(

<Route
Component={Component}
			path={path}
      name={name}
			render={props =>
				
					!(logedin) ? (
            (<Login  />)
				) :
    <div className="animated fadeIn">
               
    <div className="App">
    <Header className="header" style={{backgroundColor: 'white', height: 100, }}>
      <a href="/"><img src={image} style={{width: 100, height: 100}}/></a>
    </Header>
   
    <Content style={{ padding: '0 0px', }}>
    <Layout className="site-layout-background" style={{ padding: '0px 0',flex:1, height: '100vh',}}>
      <NavbarMenu/>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Component {...props} />
      </Content>
    </Layout>
    </Content >
    </div>
         
        </div>
       
         
	}
	{...rest}
/>
);
};

export default AppRoutes;