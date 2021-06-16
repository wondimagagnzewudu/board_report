import React, { useState, useEffect,Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { loginUser, useAuthState, useAuthDispatch } from './Context';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import { Login } from './Context';
import { Container } from 'reactstrap';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

export default function Navbarfoter(props) {

    return(<>
    
    
    </>

    );
};