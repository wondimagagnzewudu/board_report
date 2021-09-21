import React, { useState, useEffect } from 'react'
import { Card, Table, Tabs, Button } from 'antd'
import axios from 'axios';

const { TabPane } = Tabs;

export default function Aproved_list(props) {

  const [data, setdata] = useState([]);
  const [datarc, setDatarc] = useState([])

  const getHOPRGeneral = async () => {
    try {

      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_approved_general`)
      const res = await response.json()
      setdata(res)
    } catch (err) {
      console.log(err)
    }
  }
  const export_data = async (file) => {

    props.history.push({

      pathname: '/ResultPrint',

      state: {
          'variable_data': file,
      }

  });
  }
  const print_data_Hopr = async (file) => {
    props.history.push({

      pathname: '/HOPR_print',

      state: {
          'variable_data': file,
      }

  });
 
  }
  const export_data_rc = async (file) => {

    props.history.push({

      pathname: '/ResultPrintRC',

      state: {
          'variable_data': file,
      }

  });
  }
  const print_data_rc = async (file) => {
    props.history.push({

      pathname: '/RC_print',

      state: {
          'variable_data': file,
      }

  });
 
  }
  const getRCGeneral = async () => {

    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/rc_approved_general`)
      const res = await response.json()
      setDatarc(res)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getHOPRGeneral()
    getRCGeneral()
  }, [])


  const columns = [
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      width: '25%',

    },
    {
      title: 'Constituency',
      dataIndex: 'hoprconstituency',
      key: 'hoprconstituency',
      width: '25%',

    },
    {
      title: 'Winner',
      dataIndex: 'hoprconstituency',
      key: 'hoprconstituency',
      width: '15%',

    },
    {
      title: 'Political party',
      dataIndex: 'hoprconstituency',
      key: 'hoprconstituency',
      width: '25%',

    },
    {
      title: 'Action',
      dataIndex: 'hoprconstituency',
      key: 'hoprconstituency',
      width: '25%',
      render: (text, record) => (
        <Button type="primary"onClick={() => { export_data(record) }}>export </Button>
      ),

      
    },
    {
      title: '',
      dataIndex: 'hoprconstituency',
      key: 'hoprconstituency',
      width: '25%',
   
      render: (text, record) => (
        <Button type="primary"onClick={() => { print_data_Hopr(record) }}>Print </Button>
      ),
      
    },

  ];


  const columns2 = [
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      width: '35%',

    },
    {
      title: 'Regional Constituency',
      dataIndex: 'rcconstituencyname',
      key: 'rcconstituencyname',
      width: '25%',

    },
    {
      title: 'Winner',
      dataIndex: 'winners',
      key: 'winners',
      width: '25%',
      render: (Winners) =>
        Winners.map((item, index) => (
          <li className="winners">{item.name}  {item.vote} {item.party}</li>
        ))
    },
    {
      title: 'Action',
      dataIndex: 'hoprconstituency',
      key: 'hoprconstituency',
      width: '25%',
      render: (text, record) => (
        <Button type="primary"onClick={() => { export_data_rc(record) }}>export </Button>
      ),

      
    },
    {
      title: '',
      dataIndex: 'hoprconstituency',
      key: 'hoprconstituency',
      width: '25%',
   
      render: (text, record) => (
        <Button type="primary"onClick={() => { print_data_rc(record) }}>Print </Button>
      ),
      
    },
  ];

  return (
    <Card hoverable>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab={<p className="tab-header">የየተወካዮች ምክር ቤት ምርጫ/House of People's Representative</p>} key="1">
          <Table style={{ marginTop: 10 }} columns={columns} dataSource={data} />
        </TabPane>
        <TabPane tab={<p className="tab-header">የክልል ምክር ቤት ምርጫ/Regional Council Election</p>} key="2">
          <Table style={{ marginTop: 10 }} columns={columns2} dataSource={datarc} />
        </TabPane>

      </Tabs>

    </Card>)
}
