import React, {  useState, useEffect } from 'react';

import {

  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,

  Input,

  Row,
} from 'reactstrap';


import axios from 'axios'
import {Checkbox,notification, Form} from 'antd';


function Addreport(props) {

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
 
  const [report, setreport] = React.useState({ps_number: '',  recived: '',unrecived:'' });

  const [report_active, setreport_active] = React.useState(false);
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    console.log(images, "images")
  };
  const  onChange_report_active = (e) => {
      
    setreport_active(e.target.checked);
  }
  const handleImage = (e) => {

    for (var i = 0; i < e.target.files.length; i++) {
      var x = e.target.files[i];
      setImages(images => [...images, x])
      console.log(e.target.files[i], "images")

    }

  }
  const onChangeValue = (e) => {

    setreport({ ...report, [e.target.name]: e.target.value });

  }
  
  const add_api_audio = async () => {

    const datax = {ps_number:report.ps_number,ps_report:report_active,recived:report.recived,unrecived:report.unrecived};






        const token = localStorage.getItem('access_token')
 var config = {
      url: `${process.env.REACT_APP_IP}/create_ps_report_route`,
      method: 'POST',
      data:{ps_number:report.ps_number,ps_report:report_active,recived:report.recived,unrecived:report.unrecived },
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
        // window.location.reload(false);
     
      }, 100);
      })
      .catch(function (error) {
        notification.open({
          message: 'Not added',
         
        });
        window.location.reload(false);
      });
  };
  return (
    <div className="animated fadeIn">

      <Row>
        <Col xs="" md="8">
          <Card>
            <CardHeader>
              <strong> Add logestic Report</strong>
            </CardHeader>
            <CardBody>
              <div >
                Add report
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
                      <Input name="ps_number" type="number" value={report.ps_number} onChange={onChangeValue} />
                    </Form.Item>
             
         
                                            <Form.Item  label="basic status:"
                      name="basic status:"
                      rules={[{ required: true, }]}>
                                            <Checkbox onChange={onChange_report_active} checked={report_active} >basic Package recived</Checkbox>
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
                      <Input  type="textarea" name="unrecived" value={report.unrecived} onChange={onChangeValue} />
                    </Form.Item>
                    <Form.Item
                      label="recived item"
                      name="recived item"
                      rules={[{ required: true, message: 'Please input your body!' }]}
                    >
                      <Input  type="textarea" name="recived" value={report.recived} onChange={onChangeValue} />
                    </Form.Item>
                  </Form>

                </div >
          
              </div>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={() => { add_api_audio() }} danger >Submit</Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );

}

export default Addreport;
