import React from 'react'
import { Card, Tabs } from 'antd'
import HOPR from './HOPR'
import RC from './RC'

const { TabPane } = Tabs;


export default function ToAdd() {
    return (
        <Card hoverable >
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab={<p className="tab-header">የየተወካዮች ምክር ቤት ምርጫ/House of People's Representative</p>} key="1">
                    <HOPR />
                </TabPane>
                <TabPane tab={<p className="tab-header">የክልል ምክር ቤት ምርጫ/Regional Council Election</p>} key="2">
                    <RC />
                </TabPane>
            </Tabs>

        </Card >
    )
}
