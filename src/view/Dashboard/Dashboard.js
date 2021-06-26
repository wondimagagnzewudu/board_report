import React, { useState, useEffect } from 'react';
import { Carousel, notification, Statistic, Card, Row, Col, Table, Tag, Space, Input, Button, Result } from 'antd'
import axios from 'axios';
import image from './logo.jpg';
import {StepForwardOutlined} from '@ant-design/icons'
import {Grid} from '@material-ui/core'



export default function Dashboard() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')


  const [max, setmax] = useState([])
  const [hoprmax, setHoprmax] = useState([])



  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          barPercentage: 1,
          gridLines: {
            display: true,
            color: "rgba(0, 0, 0, 0.1)"
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: "rgba(0, 0, 0, 0.1)"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }




  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('')
  };
  const columns = [
    {
      title: 'Region',
      dataIndex: 'region name',
      key: 'region name',
      width: '25%',

    },
    {
      title: 'Total number of valid vote',
      dataIndex: 'valid votes for HOPR',
      key: 'valid votes for HOPR',
      width: '25%',

    },
    {
      title: 'Total number of registered voters',
      dataIndex: 'total vote for HOPR',
      key: 'total vote for HOPR',
      width: '25%',

    },
    {
      title: 'Registered seats for this Region',
      dataIndex: 'number of seats for this Region',
      key: 'number of seats for this Region',
      width: '55%',

    },

  ];
  const columns2 = [
    {
      title: 'Region',
      dataIndex: 'region name',
      key: 'region name',
      width: '25%',

    },
    {
      title: 'Total number of valid vote',
      dataIndex: 'valid votes for Rc',
      key: 'valid votes for HOPR',
      width: '25%',

    },
    {
      title: 'Total number of registered voters',
      dataIndex: 'total vote for Rc',
      key: 'total vote for HOPR',
      width: '25%',

    },
    {
      title: 'Registered seats for this Region',
      dataIndex: 'number of seats for this Region',
      key: 'number of seats for this Region',
      width: '55%',

    },

  ];

  const HOPR = [
    {
      title: 'Ballot Ordor',
      dataIndex: 'balloteorder',
      key: 'balloteorder',
      width: '35%',

    },
    {
      title: 'Constituency',
      dataIndex: 'constituencycode',
      key: 'constituencycode',
      width: '35%',

    },

  ];


  const data = [
    {
      key: '1',
      phone_number: '1234',
      psCode: 'John Brown',
      constituencycode: 32,
      address: 'New York No. 1 Lake Park',
      response: ['All Good',],
    },
    {
      key: '2',
      phone_number: '1234',
      psCode: 'Jim Green',
      constituencycode: 42,
      address: 'London No. 1 Lake Park',
      response: ['Problem'],
    },
    {
      key: '3',
      phone_number: '1234',
      psCode: 'Joe Black',
      constituencycode: 32,
      address: 'Sidney No. 1 Lake Park',
      response: ['Problem'],
    },
  ];

  const expandedRowRender = () => {
    const columns = [
      { title: 'name', dataIndex: 'name', key: 'name' },
      { title: 'amount', dataIndex: 'amount', key: 'amount' },

    ];


    const data = [];
    for (let i = 0; hoprmax.length < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: '',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
    const apiGetters = () => {
      var uris = `${process.env.REACT_APP_IP}/max_valid_vote_hopr/`
      var config = {
        url: `${process.env.REACT_APP_IP}/max_valid_vote_rc`,
        method: 'GET',
      };
      console.log(config);
      axios(config)
        .then(function (response) {
          setmax(response.data)
          console.log('response1',response.data)
        })
        .catch(function (error) {
          
        });
      var config2 = {
        url: uris,
        method: 'GET',
      };

      axios(config2)
        .then(function (response) {
          setHoprmax(response.data)
          console.log('response2', response.data)
        })
        .catch(function (error) {
          console.log('response1', error)
        });
    }

  

  useEffect(() => {
    apiGetters()

  }, [])


  return (
    <>
      <div>
        <div>
          <p style={{ fontSize: 20, color: 'black', marginLeft: 10, fontSize: 50, textAlign: 'center' }}>የኢትዮጵያ ብሔራዊ ምርጫ ቦርድ          <p style={{ fontSize: 20, color: 'black', marginLeft: 10, fontSize: 30, textAlign: 'center' }}>NATIONAL ELECTION BOARD OF ETHIOPIA</p></p>
          <p  style={{ fontSize: 20, color: 'black', marginLeft: 10,  textAlign: 'center' }}><p>የ6ኛዉ ሃገራዊ ምርጫ ውጤት ማጠናከሪያ </p><p>The 6th National Election Result Tabulation </p></p>
        </div>
        <p style={{ fontSize: 20, color: 'black', marginLeft: 10,  textAlign: 'center' }}>House of Peoples' Representatives</p>
        <Carousel autoplay>
          {hoprmax.map((item, id) => (
            <div>
              <div style={{ backgroundColor: '#ffffff', color: 'white', height: 600, borderRadius: 20,  }}>
                <h3 style={{backgroundColor: '#6d54a3',color: 'white', width: '100%', fontSize: 60, paddingLeft: '5%', paddingTop: '1%', paddingBottom: '1%',borderTopRightRadius: 20,borderTopLeftRadius: 20, textAlign: 'center' }}>{item['region name']}</h3>
                <Grid container>
                  <Grid item xs={6}>
                  <p style={{fontSize: 30, color: 'black', fontWeight: 'bolder', paddingLeft: '9%'}}>ጠቅላላ የድምፅ መስጫ ካርድ ቁጥር <p style={{fontSize: 16}}>Total Number of Registered Voters</p><p style={{backgroundColor: '#00b6ba', paddingLeft: '5%', width: 150, borderTopRightRadius: 20, borderBottomRightRadius: 20, color: 'white', fontWeight: 'bolder'}}>{item['total vote for HOPR']}</p></p>
                  <p style={{fontSize: 30, color: 'black',  fontWeight: 'bolder', paddingLeft: '9%'}}>ጠቅላላ ዋጋ ያለው የድምፅ መስጫ ካርድ <p style={{fontSize: 16}}>Total Number of Valid Ballots</p> <p style={{backgroundColor: '#00b6ba',paddingLeft: '5%', width: 150, borderTopRightRadius: 20, borderBottomRightRadius: 20, color: 'white', fontWeight: 'bolder'}}>{item['valid votes for HOPR']}</p></p>
                  </Grid>
                  <Grid item xs={6} style={{backgroundColor: '#00b6ba', borderRadius: 20, padding: 10}}>
                  <p style={{fontSize: 30, color: 'black', color: 'white', padding: 4, }}>Top Parties By Result</p>
                    <p ></p>
                    {item['one'].name ? 
                    <p style={{fontSize: 30, color: 'black', color: 'white', padding: 4, }}>{item['one'].name} {item['one'].amount} መቀመጫ</p> : <></>}
                    {item['two'].name ? 
                    <p style={{fontSize: 30, color: 'black', color: 'white', padding: 4, }}>{item['two'].name} {item['two'].amount} መቀመጫ</p> : <></>}
                    {item['three'].name ?
                    <p style={{fontSize: 30, color: 'black', color: 'white', padding: 4, }}>{item['three'].name} {item['three'].amount} መቀመጫ</p> : <></>}
                  </Grid>

                </Grid>
               </div>
            </div>
          ))

          }
          
        </Carousel>
        <p style={{ fontSize: 20, color: 'black', marginLeft: 10,  textAlign: 'center' }}>Regional council </p>
        <Carousel autoplay>
          {max.map((item, id) => (
            <div>
              <div style={{ backgroundColor: '#ffffff', color: 'white', height: 600, borderRadius: 20,  }}>
                <h3 style={{backgroundColor: '#6d54a3',color: 'white', width: '100%', fontSize: 60, paddingLeft: '5%', paddingTop: '1%', paddingBottom: '1%',borderTopRightRadius: 20,borderTopLeftRadius: 20, textAlign: 'center' }}>{item['region name']}</h3>
                <Grid container>
                  <Grid item xs={6}>
                  <p style={{fontSize: 30, color: 'black', fontWeight: 'bolder', paddingLeft: '9%'}}>ጠቅላላ የድምፅ መስጫ ካርድ ቁጥር <p style={{fontSize: 16}}>Total Number of Registered Voters</p><p style={{backgroundColor: '#00b6ba', paddingLeft: '5%', width: 150, borderTopRightRadius: 20, borderBottomRightRadius: 20, color: 'white', fontWeight: 'bolder'}}>{item['total vote for Rc']}</p></p>
                  <p style={{fontSize: 30, color: 'black',  fontWeight: 'bolder', paddingLeft: '9%'}}>ጠቅላላ ዋጋ ያለው የድምፅ መስጫ ካርድ <p style={{fontSize: 16}}>Total Number of Valid Ballots</p> <p style={{backgroundColor: '#00b6ba',paddingLeft: '5%', width: 150, borderTopRightRadius: 20, borderBottomRightRadius: 20, color: 'white', fontWeight: 'bolder'}}>{item['valid votes for Rc']}</p></p>
                  </Grid>
                  <Grid item xs={6} style={{backgroundColor: '#00b6ba', borderRadius: 20, padding: 10}}>
                  <p style={{fontSize: 30, color: 'black', color: 'white', padding: 4, }}>Top Parties By Result</p>
                    <p ></p>
                    {item['one'].name ? 
                    <p style={{fontSize: 30, color: 'black', color: 'white', padding: 4, }}>{item['one'].name} {item['one'].amount} መቀመጫ</p> : <></>}
                    {item['two'].name ? 
                    <p style={{fontSize: 30, color: 'black', color: 'white', padding: 4, }}>{item['two'].name} {item['two'].amount} መቀመጫ</p> : <></>}
                    {item['three'].name ?
                    <p style={{fontSize: 30, color: 'black', color: 'white', padding: 4, }}>{item['three'].name} {item['three'].amount} መቀመጫ</p> : <></>}
                  </Grid>

                </Grid>
               </div>
            </div>
          ))

          }
        </Carousel>
        <Table style={{ marginTop: 10 }} columns={columns}  dataSource={hoprmax} pagination={{ defaultPageSize: 5 }} />
    


        <Table style={{ marginTop: 10 }} columns={columns2} dataSource={max} defaultExpandAllRows={true} pagination={{ defaultPageSize: 5 }} />
      </div>
    </>

  );
}
