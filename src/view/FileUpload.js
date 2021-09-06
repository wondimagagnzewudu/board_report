import React from 'react'
import { Checkbox,notification,Form, Input, Cascader, Select, Modal, Button, AutoComplete, Card,Tabs  } from 'antd';
import HoprFile from './HOPRfile'
import RCfile from './RCfile'
const { TabPane } = Tabs;


export default function FileUpload(){
    return(
        <div>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="House of People's Representative Winner File Upload" key="1">         
                </TabPane>
                <TabPane tab="Regional Council Winner File Upload" key="2">
                </TabPane>     
            </Tabs>
                

        </div>
    )
}