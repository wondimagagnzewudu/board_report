
import routes from './routes';
import AppRoute from './AppRoute';
import { HashRouter,BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
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
