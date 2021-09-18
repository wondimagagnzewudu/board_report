import React, { useState, useEffect } from 'react';
import { notification, Statistic, Card, Progress, Typography, Table, Tag, Space, InputNumber, Result, Form, Spin } from 'antd'
import axios from 'axios';
import { Grid, Divider } from '@material-ui/core'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import log from './NEBE Logo.jpg'
import NumberFormat from 'react-number-format';
import { Document, Page, PDFDownloadLink, View, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});



const { Title } = Typography

export default function Dashboard() {
  const responsivecandidate = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
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
  const [tablehoprmax, settablehoprmax] = useState([])
  const [tablercmax, settablercmax] = useState([])
  const [store_data_comp, setstore_data_comp] = useState([])
  const [store_data_comp_sample, setstore_data_comp_sample] = useState(['1', '2'])
  const [ethiopia, setEthiopia] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [maximus, setMaximums] = useState([])
  const [hoprVote, setHOPRvote] = useState([])
  const [rcVote, setRCVote] = useState([])

  const hoprvote = async () => {
    const response = await fetch(`${process.env.REACT_APP_IP}/hopr_party_votes`)
    const res = await response.json()
    setHOPRvote(res)
  }

  const rcvote = async () => {
    const response = await fetch(`${process.env.REACT_APP_IP}/rc_party_vote`)
    const res = await response.json()
    setRCVote(res)
  }

  const maximums = async () => {
    const response = await fetch(`${process.env.REACT_APP_IP}/maximums`)
    const res = await response.json()
    setMaximums(res)
  }

  const ethiopiaGet = async () => {
    const response = await fetch(`${process.env.REACT_APP_IP}/ethiopia/`)
    const resp = await response.json()
    setEthiopia(resp)
  }

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

  const HOPRTABLE = () => {
    return (

      <Document>
        <Page size="A4" style={styles.page}>
          <Table style={{ marginTop: 10, }} columns={columns} dataSource={tablehoprmax} pagination={{ defaultPageSize: 5 }} />
        </Page>
      </Document>
    )
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
      dataIndex: 'region',
      key: 'region',
      width: '15%',

    },
    {
      title: 'Candidate Name',
      dataIndex: 'winer',
      key: 'winer',
      width: '25%',

    },
    {
      title: 'Party Name',
      dataIndex: 'party',
      key: 'party',
      width: '25%',

    },
    {
      title: 'Constituency Name',
      dataIndex: 'cname',
      key: 'cname',
      width: '25%',

    },
    {
      title: 'Number of Votes',
      dataIndex: 'vote',
      key: 'vote',
      width: '55%',

    },

  ];

  const columns2 = [
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      width: '25%',

    },
    {
      title: 'Winner',
      dataIndex: 'winer',
      key: 'winer',
      width: '25%',

    },
    {
      title: 'Party',
      dataIndex: 'party',
      key: 'party',
      width: '25%',

    },
    {
      title: 'Vote',
      dataIndex: 'vote',
      key: 'vote',
      width: '55%',

    },

  ];
  const data_rank_rc = async (tablehoprmax) => {
    var sortdata_rc = [[], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var region_rc = 'region name';
    console.log(tablehoprmax)
    for (var i = 0; i < tablehoprmax.length; i++) {
      if (tablehoprmax[i][`region`] == "HQ") {

      }
      else if (tablehoprmax[i][`region`] == "Addis Ababa") {
        sortdata_rc[1].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i][`region`] == "Afar") {
        sortdata_rc[2].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i][`region`] == "Amhara") {
        sortdata_rc[3].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i][`region`] == "Benishangul Gumuz") {
        sortdata_rc[4].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i][`region`] == "Dire Dawa Astedadar") {
        sortdata_rc[5].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i][`region`] == "Gambela") {
        sortdata_rc[6].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i][`region`] == "Hareri") {
        sortdata_rc[7].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i][`region`] == "Oromiya") {
        sortdata_rc[8].push(tablehoprmax[i].party);
      }

      else if (tablehoprmax[i][`region`] == "Sidama") {
        sortdata_rc[9].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i][`region`] == "SNNP") {
        sortdata_rc[10].push(tablehoprmax[i].party);
      }

      else if (tablehoprmax[i][`region`] = "Somali") {
        sortdata_rc[11].push(tablehoprmax[i].party);
      }

      else {

      }

    }
    console.log('data', sortdata_rc[3]);
    var counts = {};
    var zero_data = { '': '' };
    for (var j = 0; j < 12; j++) {


      sortdata_rc[j].forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

      sortdata_rc[j] = counts;
      counts = {};
      console.log('store', sortdata_rc[j]);
    }

    setstore_data_comp(sortdata_rc)
    var config2 = {
      url: `${process.env.REACT_APP_IP}/max_valid_vote_rc/`,
      method: 'GET',
    };

    axios(config2)
      .then(function async(response) {
        // 
        console.log('data rc', sortdata_rc)

        for (var i = 0; i < response.data.length; i++) {

          //console.log('oromoia',response.data[i])
          //console.log(response.data[i]['region name'] =="Oromiya")

          if (response.data[i]['region name'] == "HQ") {

            response.data[i].win = (sortdata_rc[0])


          }
          else if (response.data[i]['region name'] == "Addis Ababa") {

            response.data[i].win = sortdata_rc[1]

          }
          else if (response.data[i]['region name'] == "Afar") {
            response.data[i].win = sortdata_rc[2]
          }
          else if (response.data[i]['region name'] == "Amhara") {
            response.data[i].win = sortdata_rc[3]
          }
          else if (response.data[i]['region name'] == "Benishangul Gumuz") {
            response.data[i].win = sortdata_rc[4]
          }
          else if (response.data[i]['region name'] == "Dire Dawa Astedadar") {
            response.data[i].win = sortdata_rc[5]
          }
          else if (response.data[i]['region name'] == "Gambela") {
            response.data[i].win = sortdata_rc[6]
          }
          else if (response.data[i]['region name'] == "Hareri") {
            response.data[i].win = sortdata_rc[7]
          }
          else if (response.data[i]['region name'] == "Oromiya") {
            response.data[i].win = sortdata_rc[8]
          }

          else if (response.data[i]['region name'] == "Sidama") {
            response.data[i].win = sortdata_rc[9]
          }
          else if (response.data[i]['region name'] == "SNNP") {
            response.data[i].win = sortdata_rc[10]
          }

          else if (response.data[i]['region name'] = "Somali") {
            response.data[i].win = sortdata_rc[12]
          }
          else {

          }

        }



        setTimeout(() => {
          console.log('data for percent', response.data)

          setmax(response.data)
          setLoaded(true)


        }, 1000);

      })
      .catch(function (error) {
        console.log('response1', error)
      });
  }
  const data_rank = async (tablehoprmax) => {
    var sortdata = [[], [], [], [], [], [], [], [], [], [], [], [], [], []];
    for (var i = 0; i < tablehoprmax.length; i++) {
      if (tablehoprmax[i].region == "HQ") {

      }
      else if (tablehoprmax[i].region == "Addis Ababa") {
        sortdata[1].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i].region == "Afar") {
        sortdata[2].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i].region == "Amhara") {
        sortdata[3].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i].region == "Benishangul Gumuz") {
        sortdata[4].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i].region == "Dire Dawa Astedadar") {
        sortdata[5].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i].region == "Gambela") {
        sortdata[6].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i].region == ";;") {
        sortdata[7].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i].region == "Oromiya") {
        sortdata[8].push(tablehoprmax[i].party);
      }

      else if (tablehoprmax[i].region == "Sidama") {
        sortdata[9].push(tablehoprmax[i].party);
      }
      else if (tablehoprmax[i].region == "SNNP") {
        sortdata[10].push(tablehoprmax[i].party);
      }

      else if (tablehoprmax[i].region = "Somali") {
        sortdata[11].push(tablehoprmax[i].party);
      }

      else {

      }

    }
    console.log('data', sortdata[3]);
    var counts = {};
    var zero_data = { '': '' };
    for (var j = 0; j < 12; j++) {


      sortdata[j].forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

      sortdata[j] = counts;
      counts = {};
      console.log('store', sortdata[j]);
    }

    setstore_data_comp(sortdata)
    var config2 = {
      url: `${process.env.REACT_APP_IP}/max_valid_vote_hopr/`,
      method: 'GET',
    };

    axios(config2)
      .then(function async(response) {
        // 

        const json1 = JSON.stringify(response.data);

        var checker = 0
        for (var i = 0; i < response.data.length; i++) {


          console.log(response.data[i])

          if (response.data[i]['region name'] == "HQ") {

            response.data[i].win = (sortdata[0])


          }
          else if (response.data[i]['region name'] == "Addis Ababa") {

            response.data[i].win = sortdata[1]

          }
          else if (response.data[i]['region name'] == "Afar") {
            response.data[i].win = sortdata[2]
          }
          else if (response.data[i]['region name'] == "Amhara") {
            response.data[i].win = sortdata[3]
          }
          else if (response.data[i]['region name'] == "Benishangul Gumuz") {
            response.data[i].win = sortdata[4]
          }
          else if (response.data[i]['region name'] == "Dire Dawa Astedadar") {
            response.data[i].win = sortdata[5]
          }
          else if (response.data[i]['region name'] == "Gambela") {
            response.data[i].win = sortdata[6]
          }
          else if (response.data[i]['region name'] == ";;") {
            response.data[i].win = sortdata[7]
          }
          else if (response.data[i]['region name'] == "Oromiya") {
            response.data[i].win = sortdata[8]
          }

          else if (response.data[i]['region name'] == "Sidama") {
            response.data[i].win = sortdata[9]
          }
          else if (response.data[i]['region name'] == "SNNP") {
            response.data[i].win = sortdata[10]
          }

          else if (response.data[i]['region name'] = "Somali") {
            response.data[i].win = sortdata[12]
          }
          else {

          }




        }

        setTimeout(() => {
          console.log('start')
          console.log('maximum value need to be found', response.data)

          setHoprmax(response.data)

        }, 1000);

      })
      .catch(function (error) {
        console.log('response1', error)
      });
  }

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
    var winer = `${process.env.REACT_APP_IP}/list_of_winers_hopr/`
    var winerc = `${process.env.REACT_APP_IP}/list_of_winers_rc/`
    var config = {
      url: `${process.env.REACT_APP_IP}/max_valid_vote_rc`,
      method: 'GET',
    };
    var confwiner = {
      url: winer,
      method: 'GET'
    }
    var confrcmax = {
      url: winerc,
      method: 'GET'
    }

    axios(confrcmax)
      .then(function (response) {
        var list_of_data = []
        //       var json1 =JSON.stringify(response.data)
        //       const blob=new Blob([json1],{type:'application/json'}) // blob just as yours
        // const href = URL.createObjectURL(blob);
        // const link = document.createElement('a');
        // link.href = href;
        // link.download = "confrcmax.json";
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        for (var i = 0; i < response.data.length; i++) {

          var obj = {
            region: response.data[i]['region'],
            winer: response.data[i]['fullname'],
            party: response.data[i]['party'],
            vote: response.data[i]['vote'],

          }
          list_of_data.push(obj)
        }
        settablercmax(list_of_data)
        console.log('rc results', response.data)
        data_rank_rc(response.data)
      })
      .catch(function (error) {

      });

    axios(confwiner)
      .then(function (response) {
        var list_of_data = []
        console.log('response2', response.data)
        for (var i = 0; i < response.data.length; i++) {

          var obj = {
            region: response.data[i]['region'],
            winer: response.data[i]['fullname'],
            party: response.data[i]['party'],
            vote: response.data[i]['vote'],
            regionid: response.data[i]['regionid'],
            partyid: response.data[i]['partyid'],
            cname: response.data[i]['cname']

          }
          list_of_data.push(obj)
        }
        settablehoprmax(list_of_data)

        data_rank(response.data);


      })
      .catch(function (error) {

      });


    axios(config)
      .then(function (response) {
        //setmax(response.data)
        var list_of_data = []
        for (var i = 0; i < response.data.length; i++) {

          var obj = {
            region: response.data[i]['region name'],
            winer: response.data[i]['win'][i]['fullname'],
            party: response.data[i]['win'][i]['party'],
            vote: response.data[i]['win'][i]['vote'],

          }
          list_of_data.push(obj)
        }
        settablercmax(list_of_data)


      })
      .catch(function (error) {

      });
  }



  useEffect(() => {
    apiGetters()
    ethiopiaGet()
    maximums()
    hoprvote()
    rcvote()

  }, [])


  return (
    <>{loaded ?
      <>
        <div style={{ backgroundColor: '#00b6ba', paddingLeft: '2%', paddingRight: '2%', paddingTop: '2%' }}>
          <Grid container>
            <Grid item xs={4}>
              <p style={{ color: 'white', fontSize: 25 }}>Recorded Turnout:- <NumberFormat style={{ color: 'white', fontSize: 30, fontWeight: 'bolder' }} value={ethiopia['ethiopia']} displayType={'text'} thousandSeparator={true} /></p>
              <p style={{ color: 'white', fontSize: 25 }}>Registered Votes:- <NumberFormat style={{ color: 'white', fontSize: 30, fontWeight: 'bolder' }} value={maximus['counted']} displayType={'text'} thousandSeparator={true} /></p>
            </Grid>
            <Grid item xs={4}>
              <p style={{ color: 'white', marginLeft: 10, fontSize: 30, textAlign: 'center' }}>
                <img src={log} style={{ width: 400, height: 100, borderTopRightRadius: 300, borderTopLeftRadius: 300 }} />
              </p>
            </Grid>
            <Grid item xs={4}>
              <p style={{ fontSize: 30, padding: '2%', color: 'white', fontWeight: 'bolder' }}>21 Complaints</p>
            </Grid>
            <Grid item xs={12}>
              {ethiopia ? <><Progress style={{ fontSize: 30, padding: '2%', color: 'white' }} strokeLinecap="square" percent={((ethiopia['ethiopia'] * 100) / maximus['counted']).toFixed(1)} /></> : <></>}
            </Grid>
          </Grid>
        </div>
        <Title style={{ color: '#6d54a3', textAlign: 'center' }} level={4}>House of Peoples' Representatives Winner List</Title>
        <Carousel responsive={responsive} autoPlaySpeed={1} arrows={true} style={{ padding: '2%', }}>
          {hoprmax.map((item, id) => (
            <Card hoverable style={{ height: 600, padding: '2%', margin: '1%', backgroundColor: '#76a2990d', paddingRight: '2%' }}>
              <Title style={{ color: '#6d54a3' }} level={1}>{item['region name']} ({item['seat']} seats)</Title>
              <Progress style={{ fontSize: 40, color: 'white' }} percent={item['percent'].toFixed(1)} />
              <br />
              <div style={{ marginTop: '2%', height: 150, width: '100%' }}>
                {(item['win']) ? <>{Object.keys(item['win']).map(function (key, index) {
                  return (<Title style={{ color: '#6d54a3' }} level={3} key={key}>{index + 1}&nbsp;{key}:&nbsp;{(item['win'])[key]}&nbsp;መቀመጫ</Title>)
                })}</> : <></>}
              </div>
              <div style={{ justifyContent: 'flex-end' }}>
                <Title style={{ color: '#00b6ba' }} level={1}>Recorded Turnout: <NumberFormat style={{ color: '#6d54a3', fontSize: 40, fontWeight: 'bolder', padding: 20 }} value={item['total vote for HOPR']} displayType={'text'} thousandSeparator={true} /></Title>
                <Title style={{ color: '#00b6ba' }} level={1}>Registered Votes: <NumberFormat style={{ color: '#6d54a3', fontSize: 40, fontWeight: 'bolder', padding: 20 }} value={item['maximum']} displayType={'text'} thousandSeparator={true} /></Title>
                <Title style={{ color: '#00b6ba' }} level={2}>System Registered Votes: <NumberFormat style={{ color: '#6d54a3', fontSize: 40, fontWeight: 'bolder', padding: 20 }} value={item['maximum_vote']} displayType={'text'} thousandSeparator={true} /></Title>
              </div>
            </Card>

          ))}
        </Carousel>
        <Title style={{ color: '#6d54a3', textAlign: 'center' }} level={4}>Regional Council Winner List</Title>
        <Carousel responsive={responsive} arrows={true}>
          {max.map((item, id) => (
            <Card hoverable style={{ height: 600, padding: '2%', margin: '1%', backgroundColor: '#76a2990d', paddingRight: '2%' }}>
              <Title style={{ color: '#6d54a3' }} level={1}>{item['region name']} ({item['seat']} seats)</Title>
              <Progress style={{ fontSize: 40, }} percent={((item['total vote for Rc'] / item['maximum_in_a_region']) * 100).toFixed(2)} />
              <br />
              <div style={{ marginTop: '2%', height: 150, width: '100%' }}>
                {(item['win']) ? <>{Object.keys(item['win']).map(function (key, index) {
                  return (<Title style={{ color: '#6d54a3' }} level={3} key={key}>{index + 1}&nbsp;{key}:&nbsp;{(item['win'])[key]}&nbsp;መቀመጫ</Title>)
                })}</> : <></>}
              </div>
              <div style={{ justifyContent: 'flex-end' }}>
                <Title style={{ color: '#00b6ba' }} level={1}>Recorded Turnout: <NumberFormat style={{ color: '#6d54a3', fontSize: 40, fontWeight: 'bolder', padding: 20 }} value={item['total vote for Rc']} displayType={'text'} thousandSeparator={true} /></Title>
                <Title style={{ color: '#00b6ba' }} level={1}>Registered Votes: <NumberFormat style={{ color: '#6d54a3', fontSize: 40, fontWeight: 'bolder', padding: 20 }} value={item['maximum']} displayType={'text'} thousandSeparator={true} /></Title>
                <Title style={{ color: '#00b6ba' }} level={2}>System Registered Votes: <NumberFormat style={{ color: '#6d54a3', fontSize: 40, fontWeight: 'bolder', padding: 20 }} value={item['maximum_in_a_region']} displayType={'text'} thousandSeparator={true} /></Title>

              </div>
            </Card>
          ))}
        </Carousel>
        <p style={{ fontSize: 20, fontWeight: 'bolder', textAlign: 'center', marginTop: '2%', marginBottom: '2%', color: '#00b6ba' }}>House of Peoples' Representatives Winner List</p>
        <HOPRTABLE />
        {tablercmax.length ? <p style={{ fontSize: 20, fontWeight: 'bolder', textAlign: 'center', marginTop: '2%', marginBottom: '2%', color: '#00b6ba' }}>Regional Council Winner List</p> : <></>}

        <Table id="ifmcontentstoprint" style={{ marginTop: 10 }} columns={columns2} dataSource={tablercmax} pagination={{ defaultPageSize: 5 }} />
        <button style={{ alignContent: 'center' }} onClick={() => window.print()}>print</button>

      </> : <Spin style={{ width: '100%', padding: '20%' }} size="large" />}

    </>

  );
}
