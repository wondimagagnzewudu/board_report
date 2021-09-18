import React, { useState, useEffect } from 'react'
import { Tabs, Statistic, Card, Row, Col, Modal, Table, Tag, Space, Input, Button, Result, Spin, Alert } from 'antd'
import { AudioOutlined, SearchOutlined, ArrowUpOutlined, ArrowDownOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Grid } from '@material-ui/core'
import axios from 'axios';
import Highlighter from 'react-highlight-words';
import RC_Update from './RC_Update';
import HOPR_update from './HOPR_update';
const { TabPane } = Tabs;
export default function Need_check() {
  const [selectedKeys, setSelectedKeys] = useState()
  const [activeGra, setActiveGra] = useState(true)
  const [active_HoRC, setactive_Rc] = useState(false)
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
  const [data_to_be_edited_rc, setdata_to_be_edited_rc] = useState([])
  const [constituencies_data, setconstituencies_data] = useState([]);
  const [region_data, setregion_data] = useState([]);
  const [regionrc_data, setregionrc_data] = useState([]);
  const [candidate_data, setcandidate_data] = useState([]);
  const [general_data, setgeneral_data] = useState([{}]);

  const [rcLoading, setRcLoading] = useState(true)
  const [hoprLoading, setHoprLoading] = useState(true)
  const [region_selected_id, setregion_selected_id] = useState(false)
  const [active, setActive] = useState(false)
  const [values, setValues] = useState({})
  const [loaded, setLoaded] = useState(false)


  const onChange_edit = (value) => {
    setdata_to_be_edited(value);
    setTimeout(() => {
      setactive_Hopr(true);
    }, 30);

  }
  const onChange_edit_rc = (value) => {
    const datas = region_data.find(function (item) {
      return item.hoprconstituencyid == value
    })
    console.log(datas)
    setdata_to_be_edited_rc(datas);
    setTimeout(() => {
      setactive_Rc(true);
    }, 30);

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

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };
  const columns2 = [
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      width: '35%',
      ...getColumnSearchProps('region'),
    },
    {
      title: 'Regional Constituency Name',
      key: 'rcconstituencyname',
      dataIndex: 'rcconstituencyname',
      ...getColumnSearchProps('rcconstituencyname'),
    },
    {
      title: 'Created By',
      dataIndex: 'created_by',
      key: 'created_by',
      ...getColumnSearchProps('created_by'),

    },
    {
      title: "Action",
      key: "hoprconstituencyid",
      render: (text, record) => (
        <Button outline color="primary" onClick={() => { onChange_edit_rc(text) }}   >Edit </Button>
      ),
    }
  ];

  const columns = [
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      width: '35%',
      ...getColumnSearchProps('region'),
    },
    {
      title: 'HOPR Name',
      key: 'hoprconstituency',
      dataIndex: 'hoprconstituency',
      ...getColumnSearchProps('hoprconstituency'),
    },
    {
      title: 'Created By',
      key: 'created_by',
      dataIndex: 'created_by',
      ...getColumnSearchProps('created_by'),

    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button outline color="primary" onClick={() => { onChange_edit(text) }}>Edit </Button>
      ),
    }
  ];

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    var config = {
      url: `${process.env.REACT_APP_IP}/hopr_list_not_checked`,
      method: 'GET',
      headers: {
        "Authorization": "Bearer  " + token

      },

    };
    console.log(config);
    axios(config)
      .then(function (response) {
        setregion_data(response.data)
        setHoprLoading(false)
        console.log(response.data)
      })
      .catch(function (error) {

      });
    var config2 = {
      url: `${process.env.REACT_APP_IP}/rc_list_not_checked`,
      method: 'GET',
      headers: {
        "Authorization": "Bearer  " + token

      },

    };
    axios(config2)
      .then(function (response) {
        setregionrc_data(response.data)
        setRcLoading(false)
      })
      .catch(function (error) {

      });
  }, [])
  return (
    <div>
      <Card hoverable style={{ marginTop: 120, borderStyle: 'solid', borderColor: '#546768' }}>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab={<p className="tab-header">የየተወካዮች ምክር ቤት ምርጫ/House of People's Representative</p>} key="1">
            {hoprLoading ? <Spin tip="Loading...">
              <Alert
                message="Might take a minuit"
                description="House of People's Representative data is loading"
                type="info"
              />
            </Spin> : <Table style={{ marginTop: 10 }} columns={columns} dataSource={region_data} />}
          </TabPane>
          <TabPane tab={<p className="tab-header">የክልል ምክር ቤት ምርጫ/Regional Council Election</p>} key="2">
            {rcLoading ? <Spin tip="Loading...">
              <Alert
                message="Might take a minuit"
                description="Regional Council Election data is loading"
                type="info"
              />
            </Spin> : <Table style={{ marginTop: 10 }} columns={columns2} dataSource={regionrc_data} />
            }
          </TabPane>
        </Tabs>
      </Card>
      <Modal visible={active_HoRC} onCancel={() => setactive_Rc(false)} onOk={() => setactive_Rc(false)} footer={null} width={1000}>
        <RC_Update data_passed={data_to_be_edited_rc} />
      </Modal>
      <Modal visible={active_Hopr} onCancel={() => setactive_Hopr(false)} onOk={() => setactive_Hopr(false)} footer={null} width={1000}>
        <HOPR_update data_passed={data_to_be_edited} />
      </Modal>
    </div>)
}