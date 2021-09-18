import React, { useState, useEffect } from 'react'
import { Checkbox, notification, Form, Input, Cascader, Select, Modal, Button, AutoComplete, Card } from 'antd';
import { Grid } from '@material-ui/core'
import axios from 'axios';
import { useLocation, useHistory } from "react-router-dom";


const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 17 },
    sm: { span: 10 },
  },
  wrapperCol: {
    xs: { span: 17 },
    sm: { span: 10 },
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



export default function HOPR_update(props) {
  const [form] = Form.useForm();
  const [constituencies_data, setconstituencies_data] = useState([]);
  const [region_data, setregion_data] = useState([]);
  const [result_data, setresult_data] = useState([{}]);
  const [region_selected_data, setregion_selected_data] = useState(false)
  const [check_approvall, setcheck_approvall] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [regionid, setregionid] = useState(language)
  const [languageName, setLanguageName] = useState(language)
  const [resultlang, setResulLang] = useState(resultsAmharic)
  var location = useLocation();
  var history = useHistory();

  const [data, setData] = useState(location.value);
  console.log(location)



  const send_hopr_data = (e) => {
    const token = localStorage.getItem('access_token');

    var send_data = {
      // "approved": check_approvall,
      // "regionid": data_passed.regionid,
      // "hoprconstituencyid": data_passed.hoprconstituencyid,
      // "no_of_pollingstation": general_data[0],
      // "exclude_no_of_pollingstation": general_data[0],
      // "q1": general_data[0],
      // "q2": general_data[0],
      // "q3": general_data[0],
      // "q4": general_data[0],
      // "q5": general_data[0],
      // "q6": general_data[0],
      // "q7": general_data[0],
      // "q8": general_data[0],
      // "q9": general_data[0],
      // "hoprResult": result_data.slice(1,),
      // "hoprMax": ids

    }
    var config = {
      url: `${process.env.REACT_APP_IP}/hopr_general_update/`,
      method: 'PUT',
      headers: {
        "Authorization": "Bearer  " + token

      },
      data: send_data
    };
    console.log(config);
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
      });



  }


  const setEnglish = () => {
    setLanguageName(languageEnglish)
    setResulLang(resultsEnglish)
  }
  const setAmharic = () => {
    setLanguageName(language)
    setResulLang(resultsAmharic)
  }


  const onFinish = (value) => {
    // console.log(value)
    // setLoaded(true)
    // setregionid(value);
    // for (var i = 1; i < region_data.length; i++) {
    //   if (region_data[i].regionid == value)
    //     setregion_selected_data(region_data[i])
    // }
    // console.log('tregion_selected_data', region_selected_data);

    // const token = localStorage.getItem('access_token')
    // var config = {
    //   url: `${process.env.REACT_APP_IP}/constituency_r/${value}`,
    //   method: 'GET',
    //   headers: {
    //     "Authorization": "Bearer  " + token

    //   },

    // };
    // console.log(config);
    // axios(config)
    //   .then(function (response) {
    //     var x = {}
    //     setconstituencies_data(x => [...response.data,])

    //     console.log(response.data)
    //   })
    //   .catch(function (error) {

    //   });

  };

  const children = [];
  for (var i = 1; i < region_data.length; i++) {
    children.push(<Option value={region_data[i].regionname}>{region_data[i].regionname}</Option>);
  }

  const listt = []
  for (let j = 0; j < 13; j++) {
    listt.push(j)
  }

  return (
    <Card hoverable className="hopr-card">
      <Button onClick={() => setEnglish()}>English</Button>
      <Button onClick={() => setAmharic()}>አማርኛ</Button>
      <br />
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        scrollToFirstError
      >
        <div className="language">
          <strong  >ክልል/Region :&nbsp;&nbsp;&nbsp;{data.region}</strong>
          <strong >የምርጫ ክልል/Constituency Name :&nbsp;&nbsp;&nbsp;{data.hoprconstituency}</strong>
        </div>
        <Card hoverable >
          {languageName.slice(1,).map((item, index) => (
            <Form.Item
              name={item.names}
              label={item.value}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                }
              ]}
            >
              <Input defaultValue={data[item.names]} name={item.names} />
            </Form.Item>

          ))}
        </Card>
      </Form>
      <Form
        {...formItemLayout}
        name="register"
        scrollToFirstError
      >
        <Card>
          <Grid container spacing={2} style={{ marginBottom: '2%' }}>
            <Grid style={{ display: 'flex', justifyContent: 'center', fontSize: 15, backgroundColor: '#6d55a4', color: 'white', padding: 4, }} item xs={12}> ውጤቶች/Results </Grid>
          </Grid>

          {data.result.length ?
            <>{
              data.result.map((id, ITEM) => (
                <>

                  <Form.Item
                    label={id.candidate.fullname}
                    name={id.candidate.candidateid}
                    rules={[
                      {
                        required: true,
                        message: 'This field is required',
                      }
                    ]}
                  >
                    <Input type='number' key={ITEM} name={id.candidate.candidateid} defaultValue={id.vote} />
                  </Form.Item>
                </>
              ))}</> : <></>}
          <br />
        </Card>
        <p className="winner-look">The Winner is {data.winners.name} from {data.winners.party} with {data.winners.vote} Votes</p>
        <p className="desclamer">The winner is automatically calculated from the Provided results</p>
      </Form >
      <Checkbox style={{ fontSize: 15, color: 'black', color: 'white', padding: 4, }}>Approval</Checkbox>
      <br />
      <Button style={{ backgroundColor: '#6d55a4', color: 'white' }} onClick={send_hopr_data}>
        Confirm and Save
      </Button>



    </Card >
  )
}
