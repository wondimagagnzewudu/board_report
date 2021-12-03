import React, { useState, useEffect } from 'react'
import { Card, Table, Tabs, Button, Tooltip, Input, Space,  } from 'antd'
import { SearchOutlined, } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';



const { TabPane } = Tabs;

export default function NotFinished(props) {
  const [searchText, setSearchText] = useState()
  const [searchedColumn, setSearchedColumn] = useState('')
  var [searchInput, setSearchInput] = useState('')
  const [data, setdata] = useState([]);
  const [datarc, setDatarc] = useState([])

  const General = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_IP}/not`)
      const res = await response.json()
      setdata(res.hopr)
      setDatarc(res.rc)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    General()
  }, [])
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


  const columns = [
    {
      title: 'Region',
      dataIndex: 'regioname',
      key: 'regioname',
      width: '35%',
      ...getColumnSearchProps('regioname'),

    },
    {
      title: 'Constituency',
      dataIndex: 'constituencyname',
      key: 'constituencyname',
      width: '35%',
      ...getColumnSearchProps('constituencyname'),

    },

  ];


  const columns2 = [
    {
      title: 'Region',
      dataIndex: 'regioname',
      key: 'regioname',
      width: '35%',
      ...getColumnSearchProps('regioname'),

    },
    {
      title: 'Regional Constituency',
      dataIndex: 'regionalconstituencyname',
      key: 'regionalconstituencyname',
      width: '35%',
      ...getColumnSearchProps('regionalconstituencyname'),

    },

  ];

  return (
    <Card hoverable style={{ marginTop: '8%' }}>
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
