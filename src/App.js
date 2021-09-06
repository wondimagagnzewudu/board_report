
import routes from './routes';
import AppRoute from './AppRoute';
import { HashRouter,BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { AuthProvider } from './Context';
import Dashboard from './view/Dashboard/Dashboard'

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
    <Route path='/dashboard'><Dashboard /></Route>
    
  </Switch>


  
  </HashRouter>
</AuthProvider>

  );
}

export default App;
