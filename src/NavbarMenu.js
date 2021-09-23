import React, { useState, useEffect, Component } from 'react';
import jwt_decode from "jwt-decode";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, InsertRowRightOutlined, RightCircleOutlined } from '@ant-design/icons';
import image from './Context/Login/z_oxTrxq_400x400.jpg';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function NavbarMenu(props) {
  const { SubMenu } = Menu;
  const user_type = localStorage.getItem('user_type')
  const [analyst, setanalyst] = useState(false)
  const [decoder, setdecoder] = useState(false)
  const [admin_password, setadmin_password] = useState(false)
  const [dashboard, setdashboard] = useState(false)
  const [amount, setAmount] = useState(0)
  const { Header, Content, Sider } = Layout;
  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_type');
    localStorage.removeItem('user_id');
    window.location.reload()
  }
  const checkUserType = (user_type) => {


    if (user_type == "decoder") {
      setdecoder(true);
      setanalyst(false);

    }
    else if (user_type == "analyst") {
      setanalyst(true);
      setdecoder(false);
    }
    else if (user_type == "admin") {
      setadmin_password(true)
      setanalyst(false);
      setdecoder(false);
    }
    else {
      setdashboard(true);
      setanalyst(false);
      setdecoder(false);
    }

  }
  const counters = async () => {
    const token = localStorage.getItem('access_token');
    var config = {
      url: `${process.env.REACT_APP_IP}/my_creation/`,
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + token
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response)
        setAmount(response.data.count)
      })
      .catch(function (error) {

      });
  }
  useEffect(() => {
    checkUserType(user_type)
    counters()
  }, [])
  return (<>

    {
      ((decoder)) ? (
        <Sider width={250} height={1000} style={{ backgroundColor: 'white', position: 'fixed', paddingTop: '5.2%' }}>
          <Menu
            mode="inline"
          >
            {/* <img src={image} style={{ marginLeft: '10%', width: 100, height: 120 }} /> */}
            <p style={{ color: 'white', padding: '10%', backgroundColor: "#1890ff" }}>Created {amount} Records</p>
            <Menu.Item key="3"><Link to="/Addreport" >Create Record</Link></Menu.Item>
            <Menu.Item key="5" onClick={logout} >Log out</Menu.Item>
          </Menu>
        </Sider>) : (
        <div></div>
      )}
    {
      ((analyst)) ? (
        <Sider width={250} height={1000} style={{ backgroundColor: 'white', position: 'fixed', paddingTop: '5.2%' }}>
          {/* <img src={image} style={{ width: 100, height: 120 }} /> */}
          <Menu

            className="sider-text"
          >
            <Menu.Item icon={<RightCircleOutlined />} key="3"><Link style={{ color: 'white' }} to="/Aproved_list" >Approved</Link></Menu.Item>
            <Menu.Item icon={<InsertRowRightOutlined />} key="2"><Link style={{ color: 'white' }} className="s-text" to="/Need_check" >Not Checked</Link></Menu.Item>
            <Menu.Item icon={<InsertRowRightOutlined />} key="4"><Link style={{ color: 'white' }} className="s-text" to="/Resulrow" >Result announcement</Link></Menu.Item>
            <Menu.Item key="5" className="s-text" onClick={logout} >Log out</Menu.Item>
          </Menu>
        </Sider>) : (
        <div></div>
      )}
    {
      ((admin_password)) ? (
        <Sider width={250} height={1000} style={{ backgroundColor: 'white', position: 'fixed', paddingTop: '5.2%' }}>
          <Menu
            mode="inline"
          >
            <Menu.Item key="2"><Link to="/#/Need_check" >Need check</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/#/Need_update" >Need update</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/#/Addreport" >Create Reporting</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/#/Aproved_list" >List of approved</Link></Menu.Item>
            <Menu.Item key="5" onClick={logout} >Log out</Menu.Item>
          </Menu>
        </Sider>) : (
        <div></div>
      )}
    {
      ((dashboard)) ? (
        <></>) : (
        <div></div>
      )}
  </>

  );
};
