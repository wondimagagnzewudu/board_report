import logo from './logo.svg';
import Api_csv from './view/Api_csv';
import 'antd/dist/antd.css';
import Transcriber_follow from './view/Transcriber_follow';
import Dashboard from './view/Dashboard';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

function App() {
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
  return (
    <div className="App">
    <Header className="header">
      <div className="logo" >
    
      </div>
      <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Notification</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
      </Menu>
    </Header>
   
    <Content style={{ padding: '0 0px' }}>
    <Layout className="site-layout-background" style={{ padding: '0px 0' }}>
           <Sider width={200}  height={1000} className="site-layout-background">
           <Menu theme="dark" 
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', }}

        >
             <SubMenu key="sub1" icon={<UserOutlined />} title="user 1">
            <Menu.Item key="1">Import a report</Menu.Item>
            <Menu.Item key="2">See the report</Menu.Item>
            <Menu.Item key="3">Search for report</Menu.Item>
            <Menu.Item key="4">Log out</Menu.Item>
          </SubMenu>
           </Menu>
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>

        < Api_csv/>
      </Content>
      
      </Layout>


</Content >
    </div>
  );
}

export default App;
