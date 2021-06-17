import React from 'react'
import { Form, Input, InputNumber, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    }}
export default function InsidenceReport() {
    const onFinish = (values: any) => {
        console.log(values);
      };
    
    return (
        <Card title="Insidence Report Form"  hoverable style={{justifyContent: 'center', marginTop: '2%', textAlign: 'center'}}>
            <Form
                name="Insidence Report Form"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                >
                <Form.Item
                    name="Phone Number"
                    rules={[{ required: true, message: 'Please input your Phone number!' }]}
                >
                    <Input type="number" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone Number" />
                </Form.Item>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Full Name!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name" />
                </Form.Item>
                <Form.Item
                    name="Constituency"
                    rules={[{ required: true, message: 'Please input Constittuency Number!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="text"
                    placeholder="Constituency"
                    />
                </Form.Item>
                <Form.Item
                    name="Polling Station Identifier"
                    rules={[{ required: true, message: 'Please input Polling Station Identifier!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="text"
                    placeholder="Polling Station Number"
                    />
                </Form.Item>
                <Form.Item
                    name="Message"
                    rules={[{ required: true, message: 'Please input your Alert Message!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="text"
                    placeholder="Alert"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Send
                    </Button>
                </Form.Item>
                </Form>
        </Card>
    )
}
