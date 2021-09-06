import React, {useState, useEffect} from 'react'
import {Grid} from '@material-ui/core'
import { Carousel, notification, Statistic, Card, Row, Col, Table, Tag, Space, Input, Result, Typography, Progress } from 'antd'
import axios from 'axios'

const {Title} = Typography

export default function Dashboard(){
    const [region, setRegion] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])


    const apiGetters = () => {  
        var config2 = {
            url: `${process.env.REACT_APP_IP}/max_valid_vote_hopr/`,
            method: 'GET',
          };
          
          axios(config2)
            .then(function async (response) {
          for(var i=0; i< response.data.length; i++) {
            
          
          console.log(response.data[i])
          
            if(response.data[i]['region name'] =="HQ"){
          
               response.data[i].win=  (sortdata[0])
          
          
          }
          else if(response.data[i]['region name'] =="Addis Ababa"){
          
             response.data[i].win=sortdata[1]
          
          }
          else if(response.data[i]['region name'] =="Afar"){
             response.data[i].win=sortdata[2]
          }
          else if(response.data[i]['region name'] =="Amhara"){
           response.data[i].win=sortdata[3]
          }  
          else if(response.data[i]['region name'] =="Benishangul Gumuz"){
           response.data[i].win=sortdata[4]
          }
          else if(response.data[i]['region name'] =="Dire Dawa Asetedadar"){
           response.data[i].win=sortdata[5]
          }
          else if(response.data[i]['region name'] =="Gambela"){
           response.data[i].win=sortdata[6]
          }
          else if(response.data[i]['region name'] =="Hareri"){
           response.data[i].win=sortdata[7]
          }
          else if(response.data[i]['region name'] =="Oromiya"){
           response.data[i].win=sortdata[8]
          }
          
          else if(response.data[i]['region name'] =="Sidama"){
           response.data[i].win=sortdata[9]
          }
          else if(response.data[i]['region name'] =="SNNP"){
           response.data[i].win=sortdata[10]
          }
          
          else if(response.data[i]['region name'] ="Somali")
          { response.data[i].win=sortdata[12]
          }
          else
          {
            console.log('null')
          }
          } 
           setTimeout(() => {
                setRegion(response.data)
              }, 1000);
            })
            .catch(function (error) {
              console.log('response1', error)
            });
          }   
      


    useEffect(() => {
      apiGetters()
  
    }, [])
  
    return(
        <Card style={{width: '100%', height: 'auto'}}>
            <Grid container spacing={2}>
                {region.map((item, index) =>(
                    <Grid item xs={4}>
                       <Card hoverable>
                        <Title level={3}>Region</Title>
                            <Title level={4}>59%</Title>
                            <Progress percent={59} status="active" />
                            <Title level={5}>200,2222</Title>
                            <Title level={5}>1, Prosparity Party 4 Seats</Title>
                            <Title level={5}>2, Prosparity Party 4 Seats</Title>
                            <Title level={5}>3, Prosparity Party 4 Seats</Title>

                       </Card>
                    </Grid>
                ))}        
            </Grid>
        </Card>
    )
}