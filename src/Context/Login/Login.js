import React, {useState, useEffect} from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import image from './z_oxTrxq_400x400.jpg';
import jwt_decode from "jwt-decode";

export default function Login () {
    const [user_name, setuser_name] = useState('');
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
      var raw = JSON.stringify({"username":user_name,"password":password});
      var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
      fetch(`${process.env.REACT_APP_IP}/api/token/`, requestOptions)
          .then(response => response.json())
          .then(result => {
           
              var datadecode =  jwt_decode(result.access);
              localStorage.setItem('access_token', result.access);
               localStorage.setItem('user_id', (datadecode.user_id));
               if(datadecode.admin){
                localStorage.setItem('user_type','admin');
               }else if(datadecode.analysis){
                localStorage.setItem('user_type','analyst');
               }
               else if(datadecode.encoder){
                localStorage.setItem('user_type','access');
               }
               else{

               }
             
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
     <div style={{backgroundColor: 'white', alignItems: 'center', paddingLeft: '20%', paddingRight: '20%', paddingTop: '2%'}}>
      <p style={{fontSize: 34, color: 'black', fontWeight: 'bolder', textAlign: 'center'}}> <img  style={{textAlign: 'center'}} src={image} width='200px' height='150px' /></p>
      <p style={{fontSize: 26, color: 'black', fontWeight: 'bolder', textAlign: 'center'}}>Login</p>
     
      <p style={{textAlign: 'center', backgroundColor: '#5e338a', color: 'white', padding: '1%'}}>NEBE Report Management</p>
        <Form
      {...layout}
      style={{paddingTop: '8%',marginBottom: '10%',paddingBottom: '2%', backgroundColor: '#00b6ba'}}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleOTCLogin}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="user_name"
        rules={[{ required: true, message: 'Please input your username!' }]}
        onChange={e => setuser_name(e.target.value)}
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
        <Button type="secondary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </div>
    )
    }
