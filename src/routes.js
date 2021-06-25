import React from 'react';
import Loadable from 'react-loadable'


function Loading() {
  return <div>Loading...</div>;
}
const Login = Loadable({
  loader: () => import('./Context/Login'),
  loading: Loading,
});
const Addreport = Loadable({
  loader: () => import('./view/Result'),
  loading: Loading,
});
const Aproved_list = Loadable({
  loader: () => import('./view/Aproved_list'),
  loading: Loading,
});
const Need_check = Loadable({
  loader: () => import('./view/Need_check'),
  loading: Loading,
});
const Need_update = Loadable({
  loader: () => import('./view/Need_update'),
  loading: Loading,
});
const Listofreport = Loadable({
  loader: () => import('./view/Listofreport'),
  loading: Loading,
});
const Serchreport = Loadable({
  loader: () => import('./view/DocumentTracking'),
  loading: Loading,
});
const Transcriber_follow = Loadable({
  loader: () => import('./view/ArivalAproval'),
  loading: Loading,
});
const Dashboard = Loadable({
  loader: () => import('./view/Dashboard/Dashboard'),
  loading: Loading,
});
const Api_csv = Loadable({
  loader: () => import('./view/Api_csv'),
  loading: Loading,
});
const InsidenceReport = Loadable({
  loader: () => import('./view/Dashboard/InsidenceReport'),
  loading: Loading,
})

const routes = [
  { path: '/',  name: 'Dashboard', component: Dashboard },
  { path: '/Need_check', name: 'Need_check', component: Need_check },
  { path: '/Need_update', name: 'Need_update', component: Need_update },
  { path: '/Aproved_list', name: 'Aproved_list', component: Aproved_list },
  { path: '/home', name: 'Dashboard', component: Dashboard },
  { path: '/Listofreport', name: 'Listofreport', component: Listofreport },
  { path: '/Serchreport', name: 'Serchreport', component: Serchreport },
  { path: '/Transcriber_follow', name: 'Transcriber_follow', component: Transcriber_follow },
  { path: '/Api_csv', name: 'Api_csv', component: Api_csv },
  { path: '/Addreport', name: 'Addreport', component: Addreport },
  { path: '/Form', name: 'InsidenceReport', component: InsidenceReport},


];

export default routes;
