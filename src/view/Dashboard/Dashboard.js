import React, {useState, useEffect} from 'react';
import {notification,Statistic, Card, Row, Col , Table, Tag, Space, Input, Button, Result} from 'antd'



import axios from 'axios';




export default function Dashboard() {
  const [activeBar, setActiveBar] = useState(false)
  const [activeGra, setActiveGra] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  var [searchInput, setSearchInput] = useState('')

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
      dataIndex: 'Region',
      key: 'Region',
      width: '35%',
      
    },
      {
        title: 'valid voter',
        dataIndex: 'valid voter',
        key: 'valid voter',
        width: '35%',
 
      },
      {
        title: 'Registered voter',
        dataIndex: '',
        key: 'valid voter',
        width: '35%',
 
      },
      {
        title: 'Response',
        dataIndex: 'response',
        key: 'response',
       
     
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
        
        {
          title: 'Response',
          dataIndex: 'response',
          key: 'response',
         

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
  const apiGetters =async() =>{
   var uris = `${process.env.REACT_APP_IP}/max_hopr_dash`

      const res = await fetch(uris)
      const response = await res.json()
      for(var i = 0; i< response.length;){
        
      }
      setHoprmax(response)
      console.log('response',response)
      const token = localStorage.getItem('access_token');
    var config = {
      url: `${process.env.REACT_APP_IP}/max_rc_dash/`,
      method: 'GET',
      headers: {
        "Authorization": "Bearer  " + token

      },

    };
    console.log(config);
    axios(config)
      .then(function (response) {
        setmax(response.data)
        
       
      })
      .catch(function (error) {
        notification.open({
          message: 'got eroor',
         
        });
      });
  }

  useEffect(() =>{
    

      apiGetters()
 
      // setTimeout(() => {
      //   window.location.reload(false);
      // }, 10000);
  }, [])


  return (
    <>
    <strong style={{fontSize: 50, color: 'black', marginLeft: 250}}> 6th NEBE Election Report </strong>
    <Card hoverable style={{backgroundColor: '#00b6ba', height: 'auto'}}>
   
      <p style={{fontSize: 20, color: 'white', marginLeft: 10}}>NEBE Result Reporting For HOPR </p>
      <p>Region Reporting</p>

     
      <Table style={{marginTop: 10}} columns={columns} dataSource={data} />
      <p style={{fontSize: 20, color: 'white', marginLeft: 10}}>NEBE Result Reporting RC </p>

     
      <Table style={{marginTop: 10}} columns={columns} dataSource={data} />
    </Card>
    </>
  );
}
