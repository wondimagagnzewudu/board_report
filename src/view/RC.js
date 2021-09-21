import React, { useState, useEffect } from 'react'
import { notification, Form, Input, Cascader, Select, Modal, Button, AutoComplete, Card } from 'antd';
import { Grid } from '@material-ui/core'
import axios from 'axios';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 20 },
    sm: { span: 12 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};
const resultsAmharic = [
  { id: 1, value: 'የፖለቲካ ፓርቲ እና እጩ /የግል ተወዳዳሪ ስም' },
  { id: 2, value: 'ውጤቶች', },
  { id: 3, value: 'የተሰጠ ድምፅ', }
]
const resultsEnglish = [
  { id: 1, value: 'Name of candidate and political party/independent' },
  { id: 2, value: 'RESULTS' },
  { id: 3, value: 'Votes' }
]
const maximam = [
  { id: 1, value: 'ከፍተኛ ድምፅ ያገኘ እጩ ', },
  { id: 2, value: 'በድምፅ መስጫ ወረቀት ላይ ያለ የእጩ ተራ ቁጥር', },
  { id: 3, value: 'የእጩ ስም', },
  { id: 4, value: 'የፖለቲካ ፓርቲ እና እጩ /የግል ተወዳዳሪ ስም' }
]
const maximamEnglish = [
  { id: 1, value: 'Candidates with highest number of votes ' },
  { id: 2, value: 'Number on the ballot paper' },
  { id: 3, value: 'Name of candidate' },
  { id: 4, value: 'Name of political party/independent' }
]

const language = [
  { id: 1, value: 'በምርጫ ክልሉ ውስጥ የክልል ምክር ቤት መቀመጫዎች ብዛት', names: 'no_of_seat' },
  { id: 2, value: 'በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት', names: 'no_of_pollingstation' },
  { id: 3, value: 'ውጤት ላይ ያልተካተቱ የምርጫ ጣቢያዎች ቁጥር', names: 'exclude_no_of_pollingstation' },
  { id: 4, value: 'በምርጫ ክልሉ የተመዘገቡ አጠቃላይ የመራጮች ቁጥር', names: 'q1' },
  { id: 5, value: ' በምርጫ ክልሉ ውስጥ የተቀበሉት ጠቅላላ የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q2' },
  { id: 6, value: 'በምርጫ ክልሉ ውስጥ በመራጮች መዝገብ ላይ የተገኘ አጠቃላይ የመራጮች ፊርማ ብዛት', names: 'q3' },
  { id: 7, value: 'በምርጫ ክልሉ ውስጥ ጥቅም ላይ ያልዋሉ አጠቃላይ የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q4' },
  { id: 8, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ የተበላሹ የድምፅ መስጫ ወረቀቶች ቁጥር', names: 'q5' },
  { id: 9, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ከድምፅ መስጫ ሳጥን ውጭ የተገኙ የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q6' },
  { id: 10, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ ያላቸው የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q7' },
  { id: 11, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ የሌላቸው የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q8' },
  { id: 12, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ጊዜያዊ የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q9' }
]
const languageEnglish = [
  { id: 1, value: 'Number of Regional Council seats in the constituency', names: 'no_of_seat' },
  { id: 2, value: 'Number of polling stations in the constituency', names: 'no_of_pollingstation' },
  { id: 3, value: 'Number of polling stations exclused from the results', names: 'exclude_no_of_pollingstation' },
  { id: 4, value: 'Total number of registered voters in the constituency', names: 'q1' },
  { id: 5, value: 'Total number of ballot papers received in the constituency', names: 'q2' },
  { id: 6, value: 'Total number of signatures on the Electoral Roll in the constituency', names: 'q3' },
  { id: 7, value: 'Total number of unused ballot papers in the constituency', names: 'q4' },
  { id: 8, value: 'Total number of spoiled ballot papers in the constituency', names: 'q5' },
  { id: 9, value: 'Total number of stray ballot papers in the constituency', names: 'q6' },
  { id: 10, value: 'Total number of valid ballot papers in the constituency', names: 'q7' },
  { id: 11, value: 'Total number of invalid ballot papers in the constituency', names: 'q8' },
  { id: 12, value: 'Total number of provisional ballot papers in the constituency', names: 'q9' }
]

export default function HOPR() {
  const [form] = Form.useForm();
  const [constituencies_data, setconstituencies_data] = useState([]);
  const [region_data, setregion_data] = useState([]);
  const [selecteconsti, setselecteconsti] = useState({})

  const [candidate_data, setcandidate_data] = useState([]);
  const [general_data, setgeneral_data] = useState([]);
  const [result_data, setresult_data] = useState([]);
  const [languageName, setLanguageName] = useState(language)
  const [resultlang, setResulLang] = useState(resultsAmharic)
  const [region_selected_data, setregion_selected_data] = useState(false)
  const [ballot_number, setballot_number] = useState(0);
  const [active, setActive] = useState(false)
  const [values, setValues] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [regionselected, setRegionSelected] = useState('')
  const [regionid, setregionid] = useState(language)
  const [constnameSelected, setConstSelected] = useState({})
  const [ids, setCandidateId] = useState(null)


  const send_hopr_data = (e) => {
    console.log('tryinf')
    const token = localStorage.getItem('access_token');
    var send_data = {
      "approve": false,
      'not_approved': false,
      'region': regionselected,
      'hoprconstituency': constnameSelected,
      'no_of_seat': parseInt(general_data.no_of_seat[0]),
      'no_of_pollingstation': parseInt(general_data.no_of_pollingstation[0]),
      'exclude_no_of_pollingstation': parseInt(general_data.exclude_no_of_pollingstation[0]),
      'q1': parseInt(general_data.q1[0]),
      'q2': parseInt(general_data.q2[0]),
      'q3': parseInt(general_data.q3[0]),
      'q4': parseInt(general_data.q4[0]),
      'q5': parseInt(general_data.q5[0]),
      'q6': parseInt(general_data.q6[0]),
      'q7': parseInt(general_data.q7[0]),
      'q8': parseInt(general_data.q8[0]),
      'q9': parseInt(general_data.q9[0]),
      'results': result_data

    }
    var config = {
      url: `${process.env.REACT_APP_IP}/rc_create/`,
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + token
      },
      data: send_data
    };
    axios(config)
      .then(function (response) {
        notification.open({
          message: 'Suceffully saved',

        });
        setTimeout(() => {
          window.location.reload(false);
        }, 50);

      })
      .catch(function (error) {
        notification.open({
          message: 'got eroor',

        });
        console.log(error)
      });
    console.log('passed')
  }
  const onGeneralChange = (e) => {
    setgeneral_data({ ...general_data, [e.target.name]: [e.target.value] })
    console.log(e.target.name, e.target.value)
  }




  const onChangeResult = (e) => {
    var data = result_data.find(i => i.id == e.target.name)
    console.log('exists', data)

    if (data) {
      var indexs = result_data.findIndex(e => e.id === data.id)
      var holder = result_data
      holder[indexs]['vote'] = e.target.value
      setresult_data(holder)
      console.log(holder)
    }
    else {
      var obj = {
        'id': e.target.name,
        'vote': e.target.value
      }
      setresult_data([...result_data, obj])
      console.log('doesnt exist', e.target.name, e.target.value)
      console.log(result_data)
    }
  }

  const setEnglish = () => {
    setLanguageName(languageEnglish)
    setResulLang(resultsEnglish)
  }
  const setAmharic = () => {
    setLanguageName(language)
    setResulLang(resultsAmharic)
  }


  const onSelectRegion = (value) => {
    setRegionSelected(value)
    var config = {
      url: `${process.env.REACT_APP_IP}/rconstituency/${value}`,
      method: 'GET',
    };
    axios(config)
      .then(function (response) {
        setconstituencies_data(x => [...response.data,])

        console.log(response.data)
      })
      .catch(function (error) {

      });
    setLoaded(true)


  }
  const onFinish = (value) => {
    setLoaded(true)
    setregionid(value);
    for (var i = 1; i < region_data.length; i++) {
      if (region_data[i].regionid == value)
        setregion_selected_data(region_data[i])
    }
    console.log('tregion_selected_data', region_selected_data);

    const token = localStorage.getItem('access_token')
    var config = {
      url: `${process.env.REACT_APP_IP}/constituency_r/${value}`,
      method: 'GET',
      headers: {
        "Authorization": "Bearer  " + token

      },

    };
    console.log(config);
    axios(config)
      .then(function (response) {
        var x = {}
        setconstituencies_data(x => [...response.data,])

        console.log(response.data)
      })
      .catch(function (error) {

      });

  };
  const onConstituencySelect = (value) => {
    // setconstituencies_data(value)
    setConstSelected(value)
    var config = {
      url: `${process.env.REACT_APP_IP}/candidate/${value}`,
      method: 'GET',
    };
    axios(config)
      .then(function (response) {
        var taken_data = response.data;
        console.log('response of candidate', response);
        setcandidate_data(response.data);

      })
      .catch(function (error) {

      });
  };


  const children = [];

  for (var i = 1; i < region_data.length; i++) {
    children.push(<Option value={region_data[i].regionname}>{region_data[i].regionname}</Option>);
  }

  const listt = []
  for (let j = 0; j < 13; j++) {
    listt.push(j)
  }
  useEffect(() => {
    const token = localStorage.getItem('access_token')
    var config = {
      url: `${process.env.REACT_APP_IP}/region`,
      method: 'GET',
      headers: {
        "Authorization": "Bearer  " + token

      },

    };
    console.log(config);
    axios(config)
      .then(function (response) {
        setregion_data(response.data)
        console.log(response.data)
      })
      .catch(function (error) {

      });

  }, [])

  return (
    <Card hoverable className="hopr-card-2">
      <div className="language">
        <Button onClick={() => setEnglish()}>English</Button>
        <Button onClick={() => setAmharic()}>አማርኛ</Button>
      </div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        scrollToFirstError
        onFinish={send_hopr_data}
      >
        <div className="main-1">
          <Form.Item
            name="ክልል/Region"
            label={<p style={{ paddingTop: '8%', color: 'white', fontWeight: 'bold' }}>ክልል/Region</p>}
            rules={[
              {
                required: true,
                message: 'ክልል/Please input your Region!',
              },
            ]}
            hasFeedback
          >
            <Select onChange={onSelectRegion} type="text" mode="inline" style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', textAlign: 'left' }} placeholder={region_selected_data.regionname} >
              {region_data.map((id, ITEM) => (
                <Option key={ITEM} value={id.regionid}>{id.regionname}</Option>
              ))}
            </Select>
          </Form.Item>
          {loaded ?
            <Form.Item
              name="ምርጫ ክልል/Constituency"
              label={<p className="lables" style={{ color: 'white' }}>ምርጫ ክልል/Constituency"</p>}
              rules={[
                {
                  required: true,
                  message: 'ምርጫ ክልል/Please input your Constituency!',
                },
              ]}
              hasFeedback
            >
              <Select onChange={onConstituencySelect} type="text" mode="inline" style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', textAlign: 'left' }} placeholder="Regional Constituency " value={constnameSelected.regionalconstituencyname} >
                {constituencies_data.length ? <>{
                  constituencies_data.map((id, ITEM) => (
                    <Option key={ITEM} value={id.regionalconstituencyid}>{id.regionalconstituencyname}</Option>
                  ))}</> : <></>}
              </Select>
            </Form.Item> : <></>}

        </div>
        <Card className='hopr-card-1' >
          {languageName.map((item, index) => (
            <Form.Item
              name={index}
              label={<p className="lables">{item.value}</p>}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                }
              ]}
            >
              <Input type='number' name={item.names} onChange={onGeneralChange} />
            </Form.Item>

          ))}

          <Grid container spacing={2} style={{ marginBottom: '2%' }}>
            <Grid style={{ backgroundColor: '#6d55a4', color: 'white' }} item xs={12}>Result </Grid>
          </Grid>

          {candidate_data.length ?
            <>{
              candidate_data.map((item, index) => (
                <>
                  <Form.Item
                    name={item.candidateid}
                    label={item.fullname}

                    rules={[
                      {
                        required: true,
                        message: 'This field is required',
                      }
                    ]}
                  >  {item.name}
                    <Input type='number' key={index} name={item.candidateid} onChange={onChangeResult} />
                  </Form.Item>
                </>
              ))}</> : <></>}
          <Form.Item>
            <Button style={{ backgroundColor: '#6d55a4', color: 'white' }} htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
        </Card>

      </Form>

    </Card>
  )
}
