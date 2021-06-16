import logo from './logo.svg';
import Api_csv from './view/Api_csv';
import Addreport from './view/Addreport';
import Listofreport from './view/Listofreport';
import routes from './routes';
import AppRoute from './AppRoute';
import { HashRouter,BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Transcriber_follow from './view/Transcriber_follow';
import Serchreport from './view/Serchreport';
import Dashboard from './view/Dashboard';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { AuthProvider } from './Context';

require('dotenv').config();
function App() {
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
  return (
    <AuthProvider>
          
    <HashRouter>

  <Switch>
    {routes.map((route) => (
      <AppRoute
      key={route.path}
      exact={route.exact}
      name={route.name}
        path={route.path}
        component={route.component}
      

      />
    ))}
  </Switch>
  
  </HashRouter>

</AuthProvider>
  );
}

export default App;
