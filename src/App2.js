import logo from './logo.svg';
import Login from './Login/Login';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

function App() {
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
  return (
    <div className="App">
<Login/>
    </div>
  );
}

export default App;
