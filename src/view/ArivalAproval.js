import React from 'react'
import { Form, Input, InputNumber, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


export default function ArivalAproval() {
    const onFinish = (values: any) => {
        console.log(values);
      };

    return (
         <Card title="Arrival Approval"  hoverable style={{justifyContent: 'center', marginTop: '2%', textAlign: 'center'}}>
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
                    <Button style={{margin: 20}} type="primary" htmlType="submit" className="login-form-button">
                    Save
                    </Button>
                    <Button  style={{margin: 20}} type="primary" htmlType="submit" className="login-form-button">
                    Cancel
                    </Button>
                </Form.Item>
                </Form>
        </Card>
    )
}
