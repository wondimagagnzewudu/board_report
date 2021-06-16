import React,{ Component } from 'react'
import { useState, usePrimary, useEffect } from 'react'
import Pagination from "react-js-pagination";
import { CSVReader,readString} from 'react-papaparse'
import 'react-responsive-modal/styles.css';
 import { Modal } from 'react-responsive-modal';
import Papa from 'papaparse';
import {Badge,CardBody, Card,  Input, CardHeader, Col, PaginationItem, PaginationLink, Row,  Alert } from 'reactstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {parse,Parser} from "json2csv";
import axios from 'axios';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Button,Form, Table, Tag, Space,notification } from 'antd';
import XLSX from "xlsx";

const { Column, ColumnGroup } = Table;
 const buttonRef = React.createRef()
function Api_csv(props) {
    const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
    const [openvisal_image, setopenvisal_image] = useState(false);
    const [openvisal_image_xlsx, setopenvisal_image_xlsx] = useState(false);
    const [first_node,setfirst_node] = useState()
    const [second_node,setsecond_node] = useState()
    const [openvisal_data, setopenvisal_data] = useState(false);
    const onClosedeletModal_image = () => setopenvisal_image(false);
    const onClosedeletopenvisal_image_xlsx = () => setopenvisal_image_xlsx(false);
    const onClosedopenvisal_data = () => setopenvisal_data(false);
    const [valuetu, setvaluetu] = useState();
    const [issearcherd, setIssearcherd] = useState(false);
    const [data, setData] = useState([]);
    const [datacolomn, setdatacolomn] = useState([]);
    const [result_data, setresult_data] = useState([]);
    const [datac, setdatac] = useState([]);
    const [realdata, setrealdata] = useState([]);
    const [data_from_csv, setdata_from_csv] = useState([]);
    const [serchedValue, setserchedValue] = useState('');
    const [activePage, setCurrentPage] = useState(1);
    const [xlsx_data, setxlsx_data] = useState(1);

    // if (props.location.state){
    //     setvaluetu(props.location.state);
    // }
    // else{
    //     setvaluetu('0');
    // }
  

    useEffect(() => {
       
      

    }, []);
    const handleOpenDialog = (e) => {
        // Note that the ref is set async, so it might be null at some point
        if (buttonRef.current) {
            buttonRef.current.open(e)
        }
    }

    const handleOnFileLoad = (data) => {
        console.log('---------------------------',data)
        console.log(data);
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
    if(data.length<10000){
      
        const lines =data
        const headers = lines[0].data
        const result = []
        for (let i = 1; i < lines.length; i++) {        
            if (!lines[i])
                continue
            const obj = {}
            const currentline = lines[i].data
    
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j]
            }
            result.push(obj)
        }
        setresult_data(result)
           setdatacolomn(headers);
          console.log('header', result);
          setTimeout(() => {
            onClosedeletModal_image();
            setopenvisal_data(true)
        }, 500);
          
    }
      else{
          alert("your data is bigger than 20000 node try to use less than that");
          setTimeout(() => {
            onClosedeletModal_image();
        }, 900);
         
      }
    }

    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    const handleOnRemoveFile = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
    }

    const  handleRemoveFile = (e) => {
        // Note that the ref is set async, so it might be null at some point
        if (buttonRef.current) {
            buttonRef.current.removeFile(e)
        }
    }
    const handleChange = (e) => {
        const files = e.target.files;
        if (files && files[0]) {
            console.log(files[0]);

        
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        reader.onload = e => {
    
          const bstr = e.target.result;
          const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
         
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
         
          const datas = XLSX.utils.sheet_to_json(ws, { header: 1 });
         console.log('1',datas);
         setrealdata(datas)
  

         const token = localStorage.getItem('access_token')
         var config = {
              url: `${process.env.REACT_APP_IP}/data_ps_route`,
              method: 'POST',
              data:{datas},
              headers: {
                "Content-Type":"application/json",
              // "Authorization": "Bearer  "+token
        
              },
             
            };
        console.log(config)
            axios(config)
              .then(function (response) {
                notification.open({
                  message: 'Added',
                 
                });
                setTimeout(() => {
              window.location.reload(false);
             
              }, 100);
              })
              .catch(function (error) {
                notification.open({
                  message: 'Not added',
                 
                });
                window.location.reload(false);
              });
         
          //make_cols(ws["!ref"]);
        };
        if (rABS) reader.readAsBinaryString(files[0]);
        else reader.readAsArrayBuffer(files[0]);
    }
      } 
    const  handleopenvisualizer = (e) => {
     
        props.history.push({

            pathname: '/AnalysisComponent',

            state: {
                'first_column': first_node,
                'Second_column':second_node,
                'data':result_data
            }
        });
    }
    const make_cols = refstr => {
        let o = [],
          C = XLSX.utils.decode_range(refstr).e.c + 1;
        for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
      setdatacolomn(o);
      setopenvisal_data(true)
      };
    const opentables = () => {
        const json2csvParser = new Parser({ data });
        const csv = json2csvParser.parse(realdata);
        const dataToDownload = new Blob([csv], { type: "text/csv" });
  const csvURL = window.URL.createObjectURL(dataToDownload);

  const downloadlink = document.createElement("a");
  downloadlink.href = csvURL;
  downloadlink.setAttribute("download", "data.csv");
    };

    const opentables_import = () => {
        setopenvisal_image(true)
    };
    const opentables_openvisal_image_xlsx = () => {
        setopenvisal_image_xlsx(true)
    };
  
    // onClick={() => { opentables() }}

    return (

    <div>
             {/* <Button type="primary"onClick={() => { opentables() }}>Download  csv</Button> */}
         
             <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >    <Button type="primary"onClick={() => { opentables_import() }} >import csv</Button>
     <Button type="primary"onClick={() => {  opentables_openvisal_image_xlsx() }} >import xlsx</Button>
      
        
 </Content>
    <Modal style={{ backgroundColor: '#edf0eea1', width: '100%' }} open={openvisal_image} onClose={onClosedeletModal_image} center>
           
                    <CSVReader
                    ref={buttonRef}
                    onFileLoad={handleOnFileLoad}
                    onError={handleOnError}
                    noClick
                    noDrag
                    // onRemoveFile={handleOnRemoveFile}
                >
                    {({ file }) => (
                        <aside
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginBottom: 10
                            }}
                        >

                            <Button
                                type='button'
                            
                               
                             
                                   onClick={ handleOpenDialog }
                            >
                                Browes file
              </Button>
                            <div
                                style={{
                                    borderWidth: 1,
                                    borderStyle: 'solid',
                                    borderColor: '#ccc',
                                    height: 45,
                                    lineHeight: 2.5,
                                    marginTop: 5,
                                    marginBottom: 5,
                                    paddingLeft: 13,
                                    paddingTop: 3,
                                    width: '60%'
                                }}
                            >
                                {file && file.name}
                            </div>
                            <Button
                                 type='button'
                                onClick={ handleRemoveFile }
                            >
                                Remove
              </Button>
                        </aside>

                    )}
                </CSVReader>
     
            </Modal>
    
            <Modal style={{ backgroundColor: '#edf0eea1',  }} open={openvisal_data} >
            <div style ={{ width: '150%'}}>
            <Button type="primary"style={{        borderWidth: 1,
                                    borderStyle: 'solid',
                                    borderColor: '#ccc',
                                    height: 45,
                                    lineHeight: 2.5,
                                    marginTop: 5,
                                    marginBottom: 5,
                                    paddingLeft: 13,
                                    paddingTop: 3,
                                    width: '10%'
                                }}    type='button'  onClick={ onClosedopenvisal_data } > Close  </Button>
                              
           
              <Table pagination={{ pageSize: 5 }}styles={{ border: '1px solid rgba(0, 0, 0, 0.05)' }} dataSource={result_data}>


<ColumnGroup>
{
                                            datacolomn.map((e, key) => {
                                                return <>
                                                    <Column title={e} dataIndex={e} key={e}></Column >
  
                                                </>
                                            })}
 <Column title="Action" key="action"
        render={(text, record) => (
            <Space size="middle">
                
               
                {/* <Button type="primary"outline color="primary" onClick={() => { handle_see_image(text) }} >See image </Button> */}
                <Button type="primary"outline color="primary"  >See report </Button>

            </Space>
        )} />
</ColumnGroup>









</Table>    
</div>           
            </Modal>
            <Modal style={{ backgroundColor: '#edf0eea1', width: '100%' }} open={openvisal_image_xlsx} onClose={onClosedeletopenvisal_image_xlsx} center> 
            <div style ={{ width: '100%'}}>
            <input
            type="file"
            className="form-control"
            id="file"
            accept={".xlsx,.xls"}
            onChange={handleChange}
          />
            </div>
   </Modal>
</div>
    )


}



export default Api_csv