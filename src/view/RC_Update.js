import React, { useState, useEffect } from 'react'
import { Checkbox, notification, Form, Input, Cascader, Select, Modal, Button, AutoComplete, Card } from 'antd';
import { Grid } from '@material-ui/core'
import axios from 'axios';
import { useLocation, useHistory } from "react-router-dom";


const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 32 },
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

export default function RC_update(props) {
  const [form] = Form.useForm();
  const [region_data, setregion_data] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const [languageName, setLanguageName] = useState(language)
  const [resultlang, setResulLang] = useState(resultsAmharic)

  var location = useLocation();

  var history = useHistory()
  const [approve, setApproved] = useState(location.value.approved)


  const [data, setData] = useState(location.value);
  const [result, setResult] = useState([])
  const [general, setGeneral] = useState({
    'approve': location.value.approve,
    'no_of_seat': location.value.no_of_seat,
    'exclude_no_of_pollingstation': (location.value.exclude_no_of_pollingstation),
    'hoprconstituencyid': location.value.hoprconstituencyid,
    'no_of_pollingstation': (location.value.no_of_pollingstation),
    'q1': (location.value.q1),
    'q2': (location.value.q2),
    'q3': (location.value.q3),
    'q4': (location.value.q4),
    'q5': (location.value.q5),
    'q6': (location.value.q6),
    'q7': (location.value.q7),
    'q8': (location.value.q8),
    'q9': (location.value.q9),

  })

  const onGeneralChange = (e) => {
    console.log(e.target.name, e.target.value)
    setGeneral({ ...general, [e.target.name]: parseInt(e.target.value) })
    console.log(general)
  }
  const onResultChange = (e) => {
    var data = result.find(i => i.candidate.candidateid == e.target.name)

    if (data) {
      var indexs = result.findIndex(e => e.candidate.candidateid === data.candidate.candidateid)
      var holder = result
      holder[indexs]['vote'] = e.target.value
      setResult(holder)
    }
    else {
      var resultData = location.value.result.find(function (item) {
        return item.candidate.candidateid == e.target.name
      })
      var obj = {
        'candidate': resultData.candidate.candidateid,
        'party': resultData.candidate.politicalpartyid,
        'vote': e.target.value
      }
      setResult([...result, obj])
      console.log('doesnt exist', e.target.name, e.target.value)
      console.log(result)
    }

    // console.log(resultData)
    // setResult(result => [...result, resultData])
  }



  const send_hopr_data = (e) => {
    const token = localStorage.getItem('access_token');

    var send_data = {
      "approve": approve,
      // "regionid": data_passed.regionid,
      "hoprconstituencyid": general.hoprconstituencyid,
      'no_of_seat': general.no_of_seat,
      "no_of_pollingstation": general.no_of_pollingstation,
      "exclude_no_of_pollingstation": general.exclude_no_of_pollingstation,
      "q1": general.q1,
      "q2": general.q2,
      "q3": general.q3,
      "q4": general.q4,
      "q5": general.q5,
      "q6": general.q6,
      "q7": general.q7,
      "q8": general.q8,
      "q9": general.q9,
      "result": result,
      // "hoprMax": ids

    }
    var config = {
      url: `${process.env.REACT_APP_IP}/rc_update/${location.value.id}`,
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
          history.push({
            pathname: "/Need_check",
          });
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


  const aprovalChange = (e) => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
    console.log(e.target.checked)
    setApproved(e.target.checked)
  }

  const children = [];
  for (var i = 1; i < region_data.length; i++) {
    children.push(<Option value={region_data[i].regionname}>{region_data[i].regionname}</Option>);
  }

  const listt = []
  for (let j = 0; j < 13; j++) {
    listt.push(j)
  }
  return (
    <Card hoverable className="hopr-card" style={{ marginTop: '7%' }}>
      <div className="aprove">
        <Checkbox checked={approve} style={{ fontSize: 18, color: 'black', color: 'white', padding: 4, }} onChange={aprovalChange}>Approve</Checkbox>

      </div>
      <Button onClick={() => setEnglish()}>English</Button>
      <Button onClick={() => setAmharic()}>አማርኛ</Button>
      <br />
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        scrollToFirstError
      >
        <div className="language-1">
          <strong  >ክልል/Region :&nbsp;&nbsp;&nbsp;{data.region}</strong>
          <strong >የምርጫ ክልል/Constituency Name :&nbsp;&nbsp;&nbsp;{data.rcconstituencyname}</strong>
        </div>
        <Card hoverable >
          {languageName.map((item, index) => (
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
              <Input type="number" defaultValue={data[item.names]} name={item.names} onChange={onGeneralChange} />
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
                    <Input type='number' key={ITEM} name={id.candidate.candidateid} defaultValue={id.vote} onChange={onResultChange} />
                  </Form.Item>
                </>
              ))}</> : <></>}
          <br />
        </Card>
        <p className="winner-look">Winners
          <ul>
            {data.winners.map((item, index) => (
              <ul>{item.name} with {item.vote} votes</ul>
            ))}
          </ul>
          &nbsp;&nbsp;&nbsp;
          {approve ? <Button type="danger" onClick={send_hopr_data}>
            Confirm and Save
          </Button> : <Button type="dashed">Cancle</Button>}
        </p>
        <p className="desclamer">The winner is automatically calculated from the Provided results</p>
      </Form >
    </Card >
  )
}
