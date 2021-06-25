import React, { useState, useEffect } from 'react'
import {Statistic, Card, Row, Col , Table, Tag, Space, Input, Button, Result} from 'antd'
import { AudioOutlined, SearchOutlined, ArrowUpOutlined, ArrowDownOutlined, CaretUpOutlined , CaretDownOutlined } from '@ant-design/icons';
import { Grid } from '@material-ui/core'
import axios from 'axios';

export default function Need_update() {

  const [constituencies_data, setconstituencies_data] = useState([]);
  const [region_data, setregion_data] = useState([]);
  const [candidate_data, setcandidate_data] = useState([]);
  const [general_data, setgeneral_data] = useState([{}]);
  const [data, setdata] = useState([]);
  const [constituencies_selected_data, setconstituencies_selected_data] = useState()
  const [region_selected_data, setregion_selected_data] = useState(false)
  const [region_selected_id, setregion_selected_id] = useState(false)
  const [active, setActive] = useState(false)
  const [values, setValues] = useState({})
  const [loaded, setLoaded] = useState(false)

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] })
  }
  const onChange_general_data = (e) => {
    setgeneral_data({ ...general_data, [e.target.name]: [e.target.value] })
    console.log(general_data)
  }

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    var config = {
      url: `${process.env.REACT_APP_IP}/region`,
      method: 'GET',
      headers: {
        "Authorization": "Bearer  " + token

      },

    };
    console.log(config);
    axios(config)
      .then(function (response) {
        setregion_data(response.data)
        console.log(response.data)
      })
      .catch(function (error) {

      });

  }, [])
  const columns = [
    {
      title: 'Region',
      dataIndex: 'Region',
      key: 'region',
      width: '35%',
     
    },
      {
        title: 'Constituency',
        dataIndex: 'constituencycode',
        key: 'constituencycode',
        width: '35%',
        
      },
      
      {
        title: 'Response',
        dataIndex: 'response',
        key: 'response',
        render: address => (
          <>
            {address.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'All Good') {
                color = 'green';
              } else if (tag === "Problem"){
                color = 'volcano'
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
    ];


  return (
    <Card hoverable style={{backgroundColor: '#00b6ba', height: 'auto'}}>
          <Table style={{marginTop: 10}} columns={columns} dataSource={data} />
    </Card>)
}