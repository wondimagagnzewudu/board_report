import React, { Component } from 'react'

import Pagination from "react-js-pagination";
import { CSVReader } from 'react-papaparse'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Papa from 'papaparse';
import { Badge, Card, Form, Input, CardBody, CardHeader, Col, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {Button } from 'antd';
import InputGroup from 'react-bootstrap/InputGroup';
import { Parser } from "json2csv";
import axios from 'axios';
import { BsFillPlayFill } from 'react-icons/bs';
import { IconContext } from "react-icons";
import { useState, usePrimary, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const buttonRef = React.createRef()
function Transcriber_follow(props) {

    const [search_bar, setsearch_bar] = useState(false);
    const onClosedsearch_bar = () => setsearch_bar(false);
    const todosPerPage = 10;
    const [valuetu, setvaluetu] = useState(100);
    const [searched_data, setsearched_data] = useState();
    const [issearcherd, setIssearcherd] = useState(false);
    const [data, setData] = useState(["report one"]);
    const [audio_data, setaudio_data] = useState([]);
    const [datacolomn, setdatacolomn] = useState(["No","ዞንZONE ","R_CODE", "Constituency የምርጫ ክልል","Cons_Code","ልዩ የምርጫ ክልልConstituency","RC constituency", "ወረዳ WOREDA","W_CODE","ከተማ TOWN","T_CODE","ቀበሌ\nKEBELE","K_CODE","ቀበሌ\nKEBELE","K_CODE","Polling_Station Name","PS_Code","GEO_CODE FOR PS","PS TYPE"]);
    const [datacolomn_state, setdatacolomn_state] = useState([]);
    const [datac, setdatac] = useState([]);
    const [real_serched_data, setreal_serched_data] = useState([{ serchedColumn: "", serchedItem: "" }]);
    const [data_from_csv, setdata_from_csv] = useState([]);
    const [serchedValue, setserchedValue] = useState(false);
    const [use_table, setuse_table] = useState(true);
    const [starting_date, setstarting_date] = useState();
    const [ending_date, setending_date] = useState();
    const [activePage, setCurrentPage] = useState(1);
    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    // if (props.location.state){
    //     setvaluetu(props.location.state);
    // }
    // else{
    //     setvaluetu('0');
    // }
   

    useEffect(() => {

        const GetData = async () => {

            const result = await axios.get(`${process.env.REACT_APP_IP}`);
var  x =["one"]
            setData(x);

        };



        GetData();

    }, []);
    const renderTemplate = (template, name, id) => {


       
        return datacolomn_state.map((item, index) => (<th >{template[item]}</th >))

    }
    const handleserch_change = async (idx, type) => {
        const x = real_serched_data;
        x[(idx)].serchedColumn = type;
        await setreal_serched_data(x => [...x,]);

    }
    const search_data = async () => {
        const apiUrl = `${process.env.REACT_APP_IP}`;
        const data = { searched_data, real_serched_data, valuetu,starting_date,ending_date }
var y =["No","ዞንZONE ","R_CODE", "Constituency የምርጫ ክልል","Cons_Code","ልዩ የምርጫ ክልልConstituency","RC constituency", "ወረዳ WOREDA","W_CODE","ከተማ TOWN","T_CODE","ቀበሌ\nKEBELE","K_CODE","ቀበሌ\nKEBELE","K_CODE","Polling_Station Name","PS_Code","GEO_CODE FOR PS","PS TYPE"]
        await datacolomn.map((e, key) => {
             setdatacolomn_state(y);
          
        })
        axios.post(apiUrl, data)

            .then((result) => {
                setaudio_data(result.data.audio)
                // props.history.push('/Api_databaseList')
          
                setTimeout(() => {
                    // if (result.data.audio.length > 0) {
                    setsearch_bar(false);
                   setuse_table(false);
                     
                    // }
                }, 20);


            });

    }
    const handleRemoveSpecificRow = async (idx) => {

        // setsearch_bar(false);
        var rows = real_serched_data
        rows.splice(idx, 1)
        await setreal_serched_data(rows => [...rows,]);
        // setreal_serched_data(rows)
    
        // setTimeout(() => { 
        //     setsearch_bar(true);
        // }, 3);

    }

    const handleAddRow = async () => {
        //setsearch_bar(false);

        const item = {
            serchedColumn: "",
            serchedItem: ""
        };
        await setreal_serched_data(
            real_serched_data => [...real_serched_data, item]
        );
        //setsearch_bar(true);

    };

    const onChange_audio_dtails = async (e) => {


        const x = real_serched_data;
        x[(e.target.id)].serchedItem = e.target.value;

        await setreal_serched_data(x => [...x,]);
        // setreal_serched_data({ ...real_serched_data, [e.target.name]: e.target.value });
    
    }
    const handlePageChange = (pageNumber) => {

        setCurrentPage(pageNumber)
    };
    const currentTodos = audio_data.slice(indexOfFirstTodo, indexOfLastTodo);
    const onChange_search_bar = async (item) => {

                
                setsearch_bar(true);
     




    }
    const onChange_open= async (item) => {
       


        var bodxy = {
            api_database_table_uuid: item.api_database_table_uuid,
            api_database_uuid:item.api_database_uuid[0]
        }

        const result = await axios.post('http://localhost:5000/get_api_database_column', bodxy);


        setdatacolomn(result.data.api_database_columns);
       
        setTimeout(() => {
            if ((result.data.api_database_columns).length >= 0) {
                
                const apiUrl = "http://localhost:5000/getapi_data_get_audio";

       var real_serched_data =  [{ serchedColumn: "", serchedItem: "" }]
       var starting_date = '';
       var ending_date = '';
     var  searched_data = item;
        const data = { searched_data, real_serched_data, valuetu,starting_date,ending_date }

        result.data.api_database_columns.map((e, key) => {
             setdatacolomn_state(datacolomn_state => [...datacolomn_state,(e.COLUMN_NAME)]);
          
        })
        axios.post(apiUrl, data)

            .then((result) => {
                setaudio_data(result.data.audio)
                // props.history.push('/Api_databaseList')
          
                setTimeout(() => {
                    // if (result.data.audio.length > 0) {
                  
                   setuse_table(false);
                     
                    // }
                }, 20);


            });
            }
        }, 300);
       
      



    }
    return (

        <div>
            {use_table ?
                <div>
                    < InputGroup className="" >
                        Number of  file at a time :
            <br />
                        < Input type="number" placeholder="" name=" " id=" " value={valuetu} onChange={(e) => setvaluetu(e.target.value)} />
                        
                    </InputGroup>
                    <Table striped bordered hover>
                        < thead >
                            < tr >
                                < th >chose name</th >
                               
                                < th > Action</th >
                                {console.log('data',data)}
                            </tr >

                        </thead >

                        < tbody >   {

                            data.map((item, idx) => {



                                return <tr>
                                    <td>{item}</td>
                                    
                                    <td>
                                        <div class="btn-group">
                                            <Button type="primary"onClick={() => { onChange_open() }} onChange_open >open</Button>
                                            <Button type="primary"onClick={() => { onChange_search_bar() }} >search data</Button>

                                        </div>
                                    </td>
                                </tr>

                            })
                        }             <div >

                            </div>

                        </tbody >



                    </Table >
                </div>
                :
                <div>
                    < div className="animated fadeIn" >

                        < Row >
                            < Col >

                                < Card >

                                    < CardHeader >



                                        < i className="fa fa-align-justify" ></i >Api Data List

<br />
                                    </CardHeader >

                                    <CardBody>

                                        <Table striped bordered hover>

                                            < thead >
                                                < tr >
                                                    {datacolomn_state.map((value, id) => (
                                                        < th > {value}</th >
                                                    ))}
                                                    < th > Play</th >
                                                </tr >
                                                





                                            </thead >

                                            < tbody >

                                                {


                                                    (currentTodos).map((value, id) => {


                                                        return <tr>{renderTemplate(value, datacolomn_state[id], id)}
                                                        <th > <IconContext.Provider
                value={{ color: 'blueblack', size: '20px' }}
              > <BsFillPlayFill />
              </IconContext.Provider></th>
                                                        </tr>



                                                    })
                                                }



                                                <div >
                                                    <Pagination
                                                        activePage={activePage}
                                                        itemsCountPerPage={2}
                                                        totalItemsCount={data.length}
                                                        pageRangeDisplayed={3}
                                                        onChange={handlePageChange}
                                                    />
                                                </div>

                                            </tbody >
                                        </Table >

                                    </CardBody >

                                </Card >

                            </Col >

                        </Row >


                    </div >
                </div>
            }
            <Modal style={{ backgroundColor: '#edf0eea1', width: '100%' }} open={search_bar} onClose={onClosedsearch_bar} center>
                <div >
                    <Table striped bordered hover>
                        < thead >
                            < tr >
                                <th className="text-center"> # </th>
                                <th className="text-center"> To be searched column  </th>
                                <th className="text-center"> To be searched item </th>
                                <th className="text-center"> Action</th>
                            </tr >


                        </thead >

                        < tbody >   {real_serched_data.map((item, idx) => (

                            <tr id="addr0" key={idx}>
                                <td>{idx}</td>
                                <td>
                                    <select name="country" onClick={(e) => handleserch_change(idx, e.target.value)}>
                                        <option class="dropdown-item" value={''}>click here</option>
                                        {datacolomn.map((e, key) => {
                                            return <option class="dropdown-item" onClick={(e) => handleserch_change(idx, e.target.value)} key={key} value={e}>{e}</option>;
                                        })}
                                    </select>
                                </td>

                                <td>

                                    < Input type="text" placeholder="" name='hi' id={idx} value={real_serched_data[idx].serchedItem} onChange={onChange_audio_dtails} />

                                </td>
                                <td><Button type="primary"onClick={() => { handleRemoveSpecificRow(idx) }}>Remove </Button></td>
                            </tr>
                        ))}

                        </tbody >
                    </Table >
                    <Button type="primary"onClick={() => { handleAddRow() }}>Add search item </Button>
                    <Table >
                        <tbody >
                            <tr id="addr0" >
                                <td>
                                    Starting time :< Input type="date" placeholder="" name="starting_date" id="starting_date"value={starting_date} onChange={(e) => setstarting_date(e.target.value)} />
          Ending time:< Input type="date" placeholder="" name="ending_date" id="ending_date"value={ending_date} onChange={(e) => setending_date(e.target.value)}  />
                                </td>
                            </tr>
                        </tbody >

                    </Table >

                    <Button type="primary"onClick={() => { search_data() }}  >search </Button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </Modal>

        </div>
    )


}



export default Transcriber_follow