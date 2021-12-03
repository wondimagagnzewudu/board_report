import React from 'react';
import Loadable from 'react-loadable'
import { Rc_print, HOPR_print, Resulrow_Print } from "./view/print";

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
const Resulrow = Loadable({
  loader: () => import('./view/Resulrow'),
  loading: Loading
})
const HOPR_update = Loadable({
  loader: () => import('./view/HOPR_update'),
  loading: Loading
})
const RC_Update = Loadable({
  loader: () => import('./view/RC_Update'),
  loading: Loading
})
const ResultPrint = Loadable({
  loader: () => import('./view/ResultPrint'),
  loading: Loading
})
const ResultPrintRC = Loadable({
  loader: () => import('./view/ResultPrintRC'),
  loading: Loading
})
const Resultstatus = Loadable({
  loader: () => import('./view/ResultStatus'),
  loading: Loading
})
const NotFinished = Loadable({
  loader: () => import('./view/Notfinished'), 
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
  { path: '/hupdate', exact: true, name: 'Update HOPR', component: HOPR_update },
  { path: '/rupdate', exact: true, name: 'Update RC', component: RC_Update },
  { path: '/ResultPrintRC', exact: true, name: 'ResultPrintRC', component: ResultPrintRC },
  { path: '/ResultPrint', exact: true, name: 'ResultPrint', component: ResultPrint },
  { path: '/Rc_print', exact: true, name: 'Rc_print', component: Rc_print },
  { path: '/Resulrow', exact: true, name: 'Resulrow', component: Resulrow },
  { path: '/Resultstatus', exact: true, name: 'ResultStatus', component: Resultstatus },
  { path: '/Resulrow_Print', exact: true, name: 'Resulrow_Print', component: Resulrow_Print },
  { path: '/HOPR_print', exact: true, name: 'HOPR_print', component: HOPR_print },
  { path: '/NotRegistered', exact: true, name: 'NotFinished', component: NotFinished },




];

export default routes;
