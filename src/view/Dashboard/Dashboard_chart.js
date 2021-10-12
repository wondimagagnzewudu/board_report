import React, { useState, useEffect } from 'react';
import ChartDemo from './TestChart.js'
import ChartDemo2 from './TestChart2.js'
import ChartDemo3 from './TestChart3.js'
import 'semantic-ui-css/semantic.min.css'
import log from './NEBE Logo.jpg'
import { notification, Statistic, Card, Progress, Typography, Tag, Space, InputNumber, Result, Form, Spin } from 'antd'

import { Grid, Divider } from '@material-ui/core'

import 'react-multi-carousel/lib/styles.css';

import { Table } from 'reactstrap';





export default function Dashboard_chart() {



  useEffect(() => {
  }, [])


  return (
    <div style={{ backgroundColor: '#00b6ba', paddingLeft: '2%', paddingRight: '2%', paddingTop: '2%' }}>

      <Grid container>

        <Grid item xs={8}>
          <Table>
            < tbody>
              <tr>
                <td>
                  < ChartDemo2 />
                </td>
                <td>

                  < ChartDemo />
                </td>
                <td>

                  < ChartDemo3 />
                </td>
              </tr>
            </tbody>
          </Table>
        </Grid>
      </Grid>


    </div>

  );
}
