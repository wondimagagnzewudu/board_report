import React, { useState, useEffect } from 'react'
import { Statistic, Card, Row, Col, Modal,Table, Tag, Space, Input, Button, Result } from 'antd'
import { AudioOutlined, SearchOutlined, ArrowUpOutlined, ArrowDownOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Grid } from '@material-ui/core'
import axios from 'axios';
import Highlighter from 'react-highlight-words';
import HOPR_update from './HOPR_update';

export default function Need_check() {
  const [selectedKeys, setSelectedKeys] = useState()
  const [activeGra, setActiveGra] = useState(true)
  const [active_Hopr, setactive_Hopr] = useState(false)
  const [searchText, setSearchText] = useState()
  const [searchedColumn, setSearchedColumn] = useState('')
  var [searchInput, setSearchInput] = useState('')
  const [data, setdata] = useState([])
  const [noProblem, setNoProblem] = useState([])
  const [missing, setMissing] = useState([])
  const [nothing, setNothing] = useState([])
  const [failedMessage, setFailed] = useState([])
  const [data_to_be_edited, setdata_to_be_edited] = useState([])
  const [constituencies_data, setconstituencies_data] = useState([]);
  const [region_data, setregion_data] = useState([]);
  const [candidate_data, setcandidate_data] = useState([]);
  const [general_data, setgeneral_data] = useState([{}]);

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
  const onChange_edit = (value) => {
  
    setdata_to_be_edited(value);
    setTimeout(() => {
      setactive_Hopr(true);
    }, 30);
    
  }

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys,selectedKeys, confirm, clearFilters }) => (
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
              setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
              
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
  }
  )
 const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
  
  };

const  handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

 
  const columns = [
    {
      title: 'Region',
      dataIndex: 'regionname',
      key: 'regionname',
      width: '35%',
      ...getColumnSearchProps('regionname'),
    },
    {
      title: 'Approved status',
      dataIndex: 'approved',
      ...getColumnSearchProps('approved'),
      render: val => (val ? 'Approved' : 'Not approved'),

    },
    {
      title: 'HOPR Name',
      key: 'hopr',
      dataIndex: 'hopr',
      ...getColumnSearchProps('hopr'),
    },
    {
      title: 'HOPR id',
      key: 'hoprconstituencyid',
      dataIndex: 'hoprconstituencyid',
      ...getColumnSearchProps('hoprconstituencyid'),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button outline color="primary" onClick={() => { onChange_edit(text) }}   >Edit </Button>
      ),
    }
    // {
    //   title: 'Response',
    //   dataIndex: 'response',
    //   key: 'response',
    //   render: address => (
    //     <>
    //       {address.map(tag => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'All Good') {
    //           color = 'green';
    //         } else if (tag === "Problem"){
    //           color = 'volcano'
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },



  ];

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    var config = {
      url: `${process.env.REACT_APP_IP}/hopr_general_list`,
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
  return (
    <div>
    <Card hoverable style={{ backgroundColor: '#00b6ba', height: 'auto' }}>
      <Table style={{ marginTop: 10 }} columns={columns} dataSource={region_data} />
    </Card>
 <Modal visible={active_Hopr} onCancel={() => setactive_Hopr(false)} onOk={() => setactive_Hopr(false)} footer={null} width={1000}>
   <HOPR_update data_passed={data_to_be_edited}/>
   </Modal>   
    </div>)
}