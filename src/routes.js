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
const File = Loadable({
  loader: () => import('./view/FileUpload'),
  loading: Loading,
});
// const InsidenceReport = Loadable({
//   loader: () => import('./view/Dashboard/InsidenceReport'),
//   loading: Loading,
// })

const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/File', exact: true, name: 'File', component: File },
  { path: '/Need_check', exact: true,name: 'Need_check', component: Need_check },
  { path: '/Need_update', exact: true,name: 'Need_update', component: Need_update },
  { path: '/Aproved_list', exact: true,name: 'Aproved_list', component: Aproved_list },
  { path: '/home', exact: true,name: 'Dashboard', component: Dashboard },
  { path: '/Listofreport',exact: true, name: 'Listofreport', component: Listofreport },
  { path: '/Serchreport', exact: true,name: 'Serchreport', component: Serchreport },
  { path: '/Transcriber_follow', exact: true,name: 'Transcriber_follow', component: Transcriber_follow },
  { path: '/Api_csv', exact: true,name: 'Api_csv', component: Api_csv },
  { path: '/Addreport', exact: true,name: 'Addreport', component: Addreport },
//  { path: '/Form', name: 'InsidenceReport', component: InsidenceReport},


];

export default routes;
