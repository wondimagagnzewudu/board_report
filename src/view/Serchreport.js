
import React, { Component, useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { notification,Table,Form,Tag, Space,Checkbox} from 'antd';
import { withStyles } from "@material-ui/core/styles";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import axios from 'axios';
import {
 
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
   
    FormGroup,
    FormText,
    Input, 
    Label,
    Row,
  } from 'reactstrap';
import { ConsoleSqlOutlined } from '@ant-design/icons';
const { Column, ColumnGroup } = Table;
const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 20 },
};




function Serchreport(props) {
 
    const [data, setData] = useState([]);
    const [openvisal_delet, setopenvisal_delet] = useState(false);
    const [search_value, setsearch_value] = useState(false);
    const [openvisal, setopenvisal] = useState(false);
    const onClosevisualModal = () => setopenvisal(false);
    const onClosedeletModal = () => setopenvisal_delet(false);
    const [tobedelet, settobedelet] = useState();
    const [tobeedited, settobeedited] = useState();
    const [report_active, setreport_active] = React.useState(false);
    const [report, setreport] = React.useState({ });
    const [openvisal_image, setopenvisal_image] = useState(false);
    const onClosedeletModal_image = () => setopenvisal_image(false);
    const [isimage, setisimage] = useState(false);
    const [search_ps__value, setsearch_ps__value] = useState();
    const [image_list, setimage_list] = useState();
    const [images, setImages] = React.useState([]);
    const suredeletereport = () => {
        const token = localStorage.getItem('access_token')
        axios({
            url: `${process.env.REACT_APP_IP}/delete_report/${tobedelet}`,
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer  "+token
                },
            responseType: 'blob',
        }).then((response) => {
            notification.open({
                message: 'Deleted',
               
              });
            setTimeout(async() => {
                window.location.reload(false);
            }, 200);
          


        });
      }

      const onChangeValue = (e) => {

        setreport({ ...report, [e.target.name]: e.target.value });

    }
    const onChangeValue_search = (e) => {

        setsearch_ps__value( e.target.value );

    }
    
  
    const onChangeValue_search_get = async() => {
        const token = localStorage.getItem('access_token')

        const datax={ 	identify:"ps_number",value:search_ps__value };
        var config = {
                   url: `${process.env.REACT_APP_IP}/search_ps_report_route`,
                   method: 'POST',
                   headers: {
                     "Authorization": "Bearer  "+token
       
                   },
                   data:  datax
               };
               axios(config)
               .then(function (response) {
console.log('response',response)
                setData(response.data.ps_report);
                setTimeout(() => {
                    setsearch_value(true);
                }, 400);
               })
               .catch(function (error) {
                   notification.open({
                       message: 'Not found',
                      
                     });
                    ;
               });
       }


           

    





       


           
           



    







       


    const deletereport = (id) => {
        settobedelet(id)

setTimeout(() => {
    setopenvisal_delet(true);
}, 400);
      



    };
    const Addreport = () => {

console.log('Addreport');

        props.history.push({



            pathname: '/Addreport',

           



        });



    };


    const handleImage = (e) => {

        for (var i = 0; i < e.target.files.length; i++) {
            var x = e.target.files[i];
            setImages(images => [...images, x])
           

        }
    }
    const handleEdit =  (value) => {
        if(value.ps_report == "recived"){
setreport_active(true);
        }
       
        settobeedited(value.id);
        setreport_active(value.active);
         setreport(value)

      
      

            setopenvisal(true) ;
       
     
     

    }

    function onChange(e) {
      
        setreport_active(e.target.checked);
      }
    const handle_see_image = async (value) => {



        await setimage_list(value.image);
if(value.image.length > 0){
    setisimage(true);
}

        await setTimeout(async () => {
            await setopenvisal_image(true);
        }, 400);

    }
    const add_api_audio = async () => {

          const datax =report ;


     

            const token = localStorage.getItem('access_token')
 var config = {
            url: `${process.env.REACT_APP_IP}/update_ps_report_route`,
            method: 'POST',
            headers: {
              "Authorization": "Bearer  "+token

            },
            data:  datax
        };
        axios(config)
            .then(function (response) {


                notification.open({
                    message: 'Edited',
                   
                  });
                  window.location.reload(false);
            })
            .catch(function (error) {
                notification.open({
                    message: 'Not Edited',
                   
                  });
                  window.location.reload(false);
            });
    };
    const remove_current_Image = async(id) => {
        const token = localStorage.getItem('access_token')
          
 var config = {
            url: `${process.env.REACT_APP_IP}/file_delete/${id.id}`,
            method: 'DELETE',
            headers: {
              "Authorization": "Bearer  "+token

            },
         
        };
       await axios(config);
       props.history.push({
        pathname: '/DestinationList',
    });
}
const  onChange_report_active = (e) => {
      
    setreport_active(e.target.checked);
  }
    const Editreport = (id, id2) => {



        props.history.push({



            pathname: '/Editreport/',

            state: {
                report_uuid: id2,
            }


        });



    };






    return (
    < >{search_value ?
    
    <>
     <Table styles = {{border:'1px solid rgba(0, 0, 0, 0.05)'}} dataSource={data}>


<ColumnGroup>
<Column  title="ps_number" dataIndex="ps_number" key="ps_number"></Column >
    <Column  title="ps_report" dataIndex="ps_report" key="ps_report"></Column >
    <Column  title="recived item" dataIndex="recived" key="recived"></Column >
    <Column  title="unrecived item" dataIndex="unrecived" key="unrecived"></Column >
    <Column  title="Action"  key="action"
render={(text, record) => (
<Space size="middle">


<Button  outline color="primary"  onClick={() => { handleEdit(text) }} >Edit </Button>

</Space>
)}/>
</ColumnGroup>









</Table>
<Modal style={{ backgroundColor: '#edf0eea1', width: '100%' }} open={openvisal} onClose={onClosevisualModal} center>
<div> 
                <Row style={{ backgroundColor: '#edf0eea1', width: '700px' }}>
                    <Col xs="" md="8">
                        <Card>
                            <CardHeader>
                                <strong> Update report</strong>
                               
                            </CardHeader>
                            <CardBody>
                                <div >
                                    
      <div>
                                        <Form
                                            {...layout}
                                            name="basic"
                                            initialVValues={{ remember: true }}

                                        >

<Form.Item
                      label="ps_number"
                      name="ps_number"
                      rules={[{ required: true, message: 'Please input your ps_number!' }]}
                    >
                      <Input name="ps_number" type="number" defaultValue={report.ps_number} value={report.ps_number} onChange={onChangeValue} />
                    </Form.Item>
             
         
                                            <Form.Item  label="status:"
                      name="status:"
                      rules={[{ required: true, }]}>
                                            <Checkbox onChange={onChange_report_active} checked={report_active} >Recived Package</Checkbox>
                                                    {/* <select value={report.active} onClick={(e) => setreport({ ...report, [report.active]: e.target.value })}  >
                                                        <option class="dropdown-item" value={true}>Active</option>
                                                        <option class="dropdown-item" value={false} >Inactive</option>
                                                    </select> */}
                                                </Form.Item>
                                                <Form.Item
                      label="unrecived item"
                      name="unrecived item"
                      rules={[{ required: true, message: 'Please input your body!' }]}
                    >
                      <Input  type="textarea" name="unrecived" defaultValue={report.unrecived} value={report.unrecived} onChange={onChangeValue} />
                    </Form.Item>
                    <Form.Item
                      label="recived item"
                      name="recived item"
                      rules={[{ required: true, message: 'Please input your body!' }]}
                    >
                      <Input  type="textarea" name="recived" defaultValue={report.recived} value={report.recived} onChange={onChangeValue} />
                    </Form.Item>
           
                                        </Form>

                                    </div >
                                  
                                </div>
                            </CardBody>
                            <CardFooter>
                                <Button outline color="primary"  onClick={() => { add_api_audio() }}  danger >Submit</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                </div>
            </Modal>
    </>:
    <>
 <div className="animated fadeIn">

<Row>
  <Col xs="" md="8">
    <Card>
     
<Form  {...layout}
                                            name="basic"
                                            initialVValues={{ remember: true }}
>
    <Form.Item
                      label="ps_number"
                      name="ps_number"
                      rules={[{ required: true, message: 'Please input your ps_number!' }]}
                    >
                      <Input name="search_ps__value" type="search_ps__value"  value={search_ps__value} onChange={onChangeValue_search} />
                      <Button outline color="primary"  onClick={() => {onChangeValue_search_get() }}  >Submit</Button>
                    </Form.Item>
                    </Form>
                   
           
          </Card>
        </Col>
      </Row>
    </div>      
  </>
    }
  </>

    )



}










export default Serchreport;