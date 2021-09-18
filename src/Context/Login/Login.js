import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import image from './z_oxTrxq_400x400.jpg';
import jwt_decode from "jwt-decode";

export default function Login() {
  const [user_name, setuser_name] = useState('');
  const [password, setPassword] = useState('');
  const [btnloading, setbtnLoading] = useState(false)
  const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 12 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const handleOTCLogin = () => {
    setbtnLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "username": user_name, "password": password });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_IP}/api/token/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setbtnLoading(false)
        var datadecode = jwt_decode(result.access);
        localStorage.setItem('access_token', result.access);
        localStorage.setItem('user_id', (datadecode.user_id));
        localStorage.setItem('user_type', (datadecode.user_type));
        window.location.reload()

      })
      .catch(error => console.log(error))
  }


  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div className="login-container">
      <div className="logo-container">
        <img className="logo" src={image} />
        <p className="logo-1">NEBE Vote Registeration</p>
      </div>
      <Form
        {...layout}
        style={{ paddingTop: '8%', marginBottom: '10%', paddingBottom: '2%', backgroundColor: '#00b6ba' }}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleOTCLogin}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label={<p style={{ paddingTop: '12%', color: 'white', fontWeight: 'bold' }}>Username</p>}
          name="user_name"
          rules={[{ required: true, message: 'Please input your username!' }]}
          onChange={e => setuser_name(e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<p style={{ paddingTop: '12%', color: 'white', fontWeight: 'bold' }}>Password</p>}
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          onChange={e => setPassword(e.target.value)}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button loading={btnloading} style={{ backgroundColor: '#5e338a', marginLeft: '58%' }} type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
