import React from 'react'
import { Tabs } from 'antd';
import RC from './RC'
import HOPR from './HOPR'
const { TabPane } = Tabs;


export default function Result() {
    return (
        <div>
            <p style={{textAlign: 'center', paddingTop: '2%', fontSize: 18}}>የምርጫ ክልል የውጤት ቅፅ/CONSTITUENCY RESULTS FORM</p>
            <Tabs defaultActiveKey="1" centered>
                
            <TabPane tab="የተወካዮች ምክር ቤት ምርጫ/House of People's Representative" key="1">
            <HOPR />
                   
                </TabPane>
                <TabPane tab="የክልል ምክር ቤት ምርጫ/Regional Council Election" key="2">
                <RC />
                </TabPane>
               
            </Tabs>
            
        </div>
    )
}
