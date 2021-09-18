import React from 'react';
import Loadable from 'react-loadable'
``

function Loading() {
  return <div>Loading...</div>;
}
const Login = Loadable({
  loader: () => import('./Context/Login'),
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

const Dashboard = Loadable({
  loader: () => import('./view/Dashboard/Dashboard'),
  loading: Loading,
});
const ToAdd = Loadable({
  loader: () => import('./view/ToAdd'),
  loading: Loading
})


// const InsidenceReport = Loadable({
//   loader: () => import('./view/Dashboard/InsidenceReport'),
//   loading: Loading,
// })

const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/File', exact: true, name: 'File', component: File },
  { path: '/Need_check', exact: true, name: 'Need_check', component: Need_check },
  { path: '/Need_update', exact: true, name: 'Need_update', component: Need_update },
  { path: '/Aproved_list', exact: true, name: 'Aproved_list', component: Aproved_list },
  { path: '/home', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/Addreport', exact: true, name: 'Add Report', component: ToAdd },




];

export default routes;
