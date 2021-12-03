import React, { useState, useEffect } from 'react';
import { PageHeader, Tabs, Button, Statistic, Descriptions, Table, Input, Select } from 'antd';
import axios from 'axios';
import { Grid, Divider } from '@material-ui/core'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import log from './NEBE Logo.jpg'
import NumberFormat from 'react-number-format';
import { Document, Page, PDFDownloadLink, View, StyleSheet } from '@react-pdf/renderer';
import Dashboard_chart from './Dashboard_chart'


const { TabPane } = Tabs;
const { Search } = Input;
const { Option } = Select;


export default function Dashboard() {
  const [data, setData] = useState({})
  const [hoprdata, sethoprdata] = useState([])
  const [rcdata, setRcdata] = useState([])
  const [loading, setLoading] = useState(false)
  const [candidate, setCandidate] = useState([])
  const [keys, setKeys] = useState('')
  const renderContent = (column = 2) => (
    <Descriptions size="small" column={column}>
      <Descriptions.Item label={<p className="dashboard-normal-text" >Total registered voters</p>}>
      </Descriptions.Item>
      <Descriptions.Item label={<p className="dashboard-normal-text" >Voters Turn Out</p>}></Descriptions.Item>
      <Descriptions.Item label={<p className="dashboard-normal-text">Total number of signitures on the Electoral Roll</p>}><p className="small-number">{data.electorial_role}</p></Descriptions.Item>
      <Descriptions.Item label={<p className="dashboard-normal-text" >Total number of Ballot papers</p>}><p className="small-number">{data.total_balots}</p></Descriptions.Item>
      <Descriptions.Item label={<p className="dashboard-normal-text" >Total number of Unused Ballots</p>}><p className="small-number">{data.unused_balots}</p></Descriptions.Item>
      <Descriptions.Item label={<p className="dashboard-normal-text" >Total number Stray Ballots</p>}><p className="small-number">{data.stray_balots}</p></Descriptions.Item>
      <Descriptions.Item label={<p className="dashboard-normal-text" >Total number Spoiled Ballots</p>}><p className="small-number">{data.spoiled_balots}</p></Descriptions.Item>


    </Descriptions >
  );
  const extraContent = (
    <div
      style={{
        display: 'flex',
        width: 'max-content',
        justifyContent: 'flex-end',
      }}
    >
      <Statistic
        title="Status"
        value={data.status}
        style={{
          marginRight: 32,
        }}
      />
      <Statistic title="Percentage" prefix="" value={data.persont} />
    </div>
  );

  const Content = ({ children, extra }) => (
    <div className="content">
      <div className="main">{children}</div>
      <div className="extra">{extra}</div>
    </div>
  );
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
      dataIndex: 'winner',
      key: 'winner',
      width: '15%',

    },
    {
      title: 'Political party',
      dataIndex: 'party',
      key: 'party',
      width: '25%',

    },
    {
      title: 'Action',
      dataIndex: 'hoprconstituency',
      key: 'hoprconstituency',
      width: '25%',
      render: () => <Button type="primary">Print</Button>

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
      render: () => <Button type="primary">Print</Button>
    },
  ];
  const getSearchbyUser = async (value) => {
    try {

      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_winner_search/?search=${value}`)
      const res = await response.json()
      console.log(res)
    } catch (err) {
      console.log(err)
    }

  }
  const getHOPRGeneral = async () => {
    try {

      const response = await fetch(`${process.env.REACT_APP_IP}/hopr_approved_general`)
      const res = await response.json()
      var lists = []
      for (var i = 0; i < res.length; i++) {
        var obj = {
          'hoprconstituency': res[i].hoprconstituency,
          'region': res[i].region,
          'winner': res[i].winners.name,
          'party': res[i].winners.party,
        }
        console.log(obj)
        lists.push(obj)
      }
      console.log(lists)
      sethoprdata(lists)
    } catch (err) {
      console.log(err)
    }
  }
  const getHOPRCandidate = async () => {

    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/candidate`)
      const res = await response.json()
      setCandidate(res)
    } catch (err) {
      console.log(err)
    }
  }
  const getRCGeneral = async () => {

    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/rc_approved_general`)
      const res = await response.json()
      setRcdata(res)
    } catch (err) {
      console.log(err)
    }
  }
  const onChangeSearch = (value) => {
    setKeys(value)
  }



  const getApi = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_IP + '/hopr_detail')
      const res = await response.json()
      setData(res)
    }
    catch (e) {
      console.log(e)
    }
  }
  const getApiRC = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_IP + '/rc_detail')
      const res = await response.json()
      setData(res)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getApiRC()
    getHOPRGeneral()
    getRCGeneral()
    getHOPRCandidate()
  }, [])

  return (
    <div style={{ marginTop: '7%' }}>
      <p style={{fontSize: 20, color: 'black', fontWaight: 'bolder'}}>Welcome to Nebe Result Registration System</p>
      {/* <Dashboard_chart />

      <div className="dashboard-container">
        <PageHeader
          className="site-page-header-responsive"
          style={{ backgroundColor: '#00b6ba' }}
          title={<p className="dashboard-title">Number Of Constituencies</p>}
          subTitle={<p className="numbers">{data.number_of_const}</p>}
          extra={[
            <Button key="3" onClick={() => getApiRC()}>Regional Constituencies</Button>,
            <Button key="2" onClick={() => getApi()}>House Of Peoples Representative</Button>,

          ]}
          footer={
            <Tabs defaultActiveKey="1">
              <TabPane tab={<p className="dashboard-title">Constituencies</p>} key="1">
                <Select
                  showSearch
                  style={{ width: '94.5%', textAlign: 'left' }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  onChange={onChangeSearch}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {candidate.map(item => (
                    <Option value={item.fullname}>{item.fullname}</Option>
                  ))}
                </Select>
                <Button onClick={() => getSearchbyUser(keys)}>Search</Button>
                <Table style={{ marginTop: 10 }} columns={columns} dataSource={hoprdata} />

              </TabPane>
            </Tabs>
          }
        >
          <Content extra={extraContent}>{renderContent()}</Content>
        </PageHeader> */}
      {/* </div> */}
    </div>
  );
}
