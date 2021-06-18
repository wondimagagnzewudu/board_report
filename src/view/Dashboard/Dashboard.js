import React, {useState, useEffect} from 'react';
import {Statistic, Card, Row, Col , Table, Tag, Space, Input, Button, Result} from 'antd'
import { AudioOutlined, SearchOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import BarChart from 'react-bar-chart';
import { Bar, Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";





export default function Dashboard() {
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  var [searchInput, setSearchInput] = useState('')
  const [allData, setAllData] = useState([])
  const [noProblem, setNoProblem] = useState([])
  const [missing, setMissing] = useState([])
  const [nothing, setNothing] = useState([])
  const [failedMessage, setFailed] = useState([])

  const apiGetter = async() =>{
    const url = 'http://172.17.36.13:8081/all_message_in_use_route'
    try{
      const response = await fetch(url)
      console.log(response)

    } catch(e){
      console.log(e.message)
    }
  }

  const dataPie= {
    labels: ["All Delivered", "Some Remaining", "None Delivered", ],
    datasets: [
      {
        data: [noProblem.length, missing.length, nothing.length],
        backgroundColor: [
          "#00b6ba",
          "#6d55a4",
          "red",
        ],
        hoverBackgroundColor: [
          "white",
          "white",
          "white",

        ]
      }
    ]
  }

  const dataBar = {
    labels: ["All Delivered", "Some Remaining", "None Delivered"],
    datasets: [
      {
        label: "% of Polling station",
        data: [noProblem.length, missing.length, nothing.length,],
        backgroundColor: [
          "#00b6ba",
          "#6d55a4",
          "red",
        ],

      }
    ]
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



  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0])
              setSearchedColumn(dataIndex)
  
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
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
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number',
      width: '20%',
      ...getColumnSearchProps('phone_number'),
    },
      {
        title: 'Polling Station Code',
        dataIndex: 'psCode',
        key: 'psCode',
        width: '30%',
        ...getColumnSearchProps('psCode'),
      },
      {
        title: 'Constituency',
        dataIndex: 'constituencycode',
        key: 'constituencycode',
        width: '20%',
        ...getColumnSearchProps('constituencycode'),
      },
      
      {
        title: 'Response',
        dataIndex: 'response',
        key: 'response',
        ...getColumnSearchProps('response'),
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

  useEffect(() =>{
    apiGetter()
  }, [])


  return (
    <Card hoverable style={{backgroundColor: '#00b6ba', height: 'auto'}}>
      <div className="site-statistic-demo-card" style={{marginBottom: '2%'}}>
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                title="No Problem"
                value={noProblem}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                
              />
               <Result
                  status="success"
                  title="Successfully Delivered!"
                  subtitle={`${noProblem.length*100/allData}`}
                />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Important Equipments Missing"
                value={missing}
                precision={2}
                valueStyle={{ color: 'blue' }}
                prefix={<ArrowDownOutlined />}
              />
              <Result
                 title="Missing  Equipments"
                 subtitle={`${missing.length*100/allData}`}
  />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="No Equipment recived"
                value={nothing}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <Result
              status="warning"
              title="Nothing Recived."
              subtitle={`${nothing.length*100/allData}`}

            />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Failed Messages"
                value={failedMessage}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
              />
              <Result
            status="error"
            title="Failed Messages"
            subtitle={`${failedMessage.length*100/allData}`}
          ></Result>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="site-statistic-demo-card" style={{marginBottom: '2%', width: '100%'}}>
      <Row gutter={16}>
      <Col span={12}>
        <MDBContainer style={{backgroundColor: 'white', height: 400,width: '100%'}}>
            <Bar data={dataBar} options={barChartOptions} />
        </MDBContainer>
        </Col>
        <Col span={12}>
        <MDBContainer style={{backgroundColor: 'white', height: 400,width: '100%'}}>
          <Pie data={dataPie} options={{ responsive: true }} />
        </MDBContainer>
      </Col>
        </Row>
      </div>

     
      <Table columns={columns} dataSource={data} />
    </Card>
  );
}
