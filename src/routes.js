import React from 'react';
import Loadable from 'react-loadable'


function Loading() {
  return <div>Loading...</div>;
}
const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading,
});
const Addreport = Loadable({
  loader: () => import('./view/Addreport'),
  loading: Loading,
});
const Listofreport = Loadable({
  loader: () => import('./view/Listofreport'),
  loading: Loading,
});
const Serchreport = Loadable({
  loader: () => import('./view/Serchreport'),
  loading: Loading,
});
const Transcriber_follow = Loadable({
  loader: () => import('./view/Transcriber_follow'),
  loading: Loading,
});
const Dashboard = Loadable({
  loader: () => import('./view/Dashboard'),
  loading: Loading,
});
const Api_csv = Loadable({
  loader: () => import('./view/Api_csv'),
  loading: Loading,
});

const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/home', name: 'Dashboard', component: Dashboard },
  { path: '/Listofreport', name: 'Listofreport', component: Listofreport },
  { path: '/Serchreport', name: 'Serchreport', component: Serchreport },
  { path: '/Transcriber_follow', name: 'Transcriber_follow', component: Transcriber_follow },
  { path: '/Api_csv', name: 'Api_csv', component: Api_csv },
  { path: '/Addreport', name: 'Addreport', component: Addreport },


];

export default routes;
