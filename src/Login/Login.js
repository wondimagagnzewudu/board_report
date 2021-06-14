import React, {useState, useEffect} from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import image from './z_oxTrxq_400x400.jpg';


export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const layout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    const handleOTCLogin = () =>{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({"email":email,"password":password});
      var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
      fetch("http://127.0.0.1:8000/api/token/", requestOptions)
          .then(response => response.json())
          .then(result => {
              window.localStorage.setItem('refresh_token', result.refresh)
              window.localStorage.setItem('access_token', result.access)
              console.log(result.refresh, result.access)
              window.location.reload()
          })
          .catch(error => console.log(error))
  }
    
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

      
      const onFinish = (values: any) => {
        console.log('Success:', values);
      };

   

    return (
     <div style={{backgroundColor: 'white', alignItems: 'center', paddingLeft: '20%', paddingRight: '20%', paddingTop: '4%'}}>
      <p style={{fontSize: 34, color: 'black', fontWeight: 'bolder', textAlign: 'center'}}> <img  style={{textAlign: 'center'}} src={image} width='200px' height='150px' /></p>
      <p style={{fontSize: 34, color: 'black', fontWeight: 'bolder', textAlign: 'center'}}>Login</p>
     
      <p style={{textAlign: 'center', backgroundColor: '#5e338a', color: 'white', padding: '1%'}}>NEBE Report Management</p>
        <Form
      {...layout}
      style={{paddingTop: '10%', paddingBottom: '10%'}}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleOTCLogin}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
        onChange={e => setEmail(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        onChange={e => setPassword(e.target.value)}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </div>
    )
    }
