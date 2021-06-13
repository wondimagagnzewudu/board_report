import logo from './logo.svg';
import './App.css';
import Api_csv from './view/Api_csv';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Notification</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
      </Menu>
    </Header>
          
           <Sider width={200} className="site-layout-background">
           <Menu theme="dark" 
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}

        >
             <SubMenu key="sub1" icon={<UserOutlined />} title="user 1">
            <Menu.Item key="1">See the report</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">Log out</Menu.Item>
          </SubMenu>
           </Menu>
      </Sider>
     
      <Api_csv />

    </div>
  );
}

export default App;
