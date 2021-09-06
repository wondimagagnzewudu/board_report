import React, { useState, useEffect } from 'react'
import { Checkbox, notification, Form, Input, Cascader, Select, Modal, Button, AutoComplete, Card } from 'antd';
import { Grid } from '@material-ui/core'
import axios from 'axios';

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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 2,
    },
    sm: {
      span: 16,
      offset: 2,
    },
  },
};

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
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



export default function RC_update(props) {
  var data_passed = props.data_passed;
  var numbers = data_passed.no_of_seat
  console.log(data_passed)

  const language = [
    { id: 1, value: "የምርጫ ክልል የውጤት ቅፅ", },
    { id: 2, value: "የክልል ምክር ቤት ምርጫ", },
    { id: 3, value: 'ክልል', },
    { id: 4, value: 'የከልሉ ምርጫ ክልል' },
    { id: 5, value: 'በምርጫ ክልሉ ውስጥ የክልል ምክር ቤት መቀመጫዎች ብዛት', names: 'no_of_seat' },
    { id: 6, value: 'በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት', names: 'no_of_pollingstation' },
    { id: 7, value: 'ውጤት ላይ ያልተካተቱ የምርጫ ጣቢያዎች ቁጥር', names: 'exclude_no_of_pollingstation' },
    { id: 8, value: 'በምርጫ ክልሉ የተመዘገቡ አጠቃላይ የመራጮች ቁጥር', names: 'q1' },
    { id: 9, value: ' በምርጫ ክልሉ ውስጥ የተቀበሉት ጠቅላላ የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q2' },
    { id: 10, value: 'በምርጫ ክልሉ ውስጥ በመራጮች መዝገብ ላይ የተገኘ አጠቃላይ የመራጮች ፊርማ ብዛት', names: 'q3' },
    { id: 11, value: 'በምርጫ ክልሉ ውስጥ ጥቅም ላይ ያልዋሉ አጠቃላይ የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q4' },
    { id: 12, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ የተበላሹ የድምፅ መስጫ ወረቀቶች ቁጥር', names: 'q5' },
    { id: 13, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ከድምፅ መስጫ ሳጥን ውጭ የተገኙ የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q6' },
    { id: 14, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ ያላቸው የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q7' },
    { id: 15, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ የሌላቸው የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q8' },
    { id: 16, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ጊዜያዊ የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q9' }
  ]
  const languageEnglish = [
    { id: 1, value: 'CONSTITUENCY RESULTS FORM' },
    { id: 2, value: 'Regional Council Election' },
    { id: 3, value: 'Region' },
    { id: 4, value: 'Regional Constituency' },
    { id: 5, value: 'Number of Regional Council seats in the constituency', names: 'no_of_seat' },
    { id: 6, value: 'Number of polling stations in the constituency', names: 'no_of_pollingstation' },
    { id: 7, value: 'Number of polling stations exclused from the results', names: 'exclude_no_of_pollingstation' },
    { id: 8, value: 'Total number of registered voters in the constituency', names: 'q1' },
    { id: 9, value: 'Total number of ballot papers received in the constituency', names: 'q2' },
    { id: 10, value: 'Total number of signatures on the Electoral Roll in the constituency', names: 'q3' },
    { id: 11, value: 'Total number of unused ballot papers in the constituency', names: 'q4' },
    { id: 12, value: 'Total number of spoiled ballot papers in the constituency', names: 'q5' },
    { id: 13, value: 'Total number of stray ballot papers in the constituency', names: 'q6' },
    { id: 14, value: 'Total number of valid ballot papers in the constituency', names: 'q7' },
    { id: 15, value: 'Total number of invalid ballot papers in the constituency', names: 'q8' },
    { id: 16, value: 'Total number of provisional ballot papers in the constituency', names: 'q9' }
  ]
  const [form] = Form.useForm();
  const [max, setmax] = useState(data_passed.rc_max)
  const [regions, setRegions] = useState([])
  const [result, setresult] = useState(data_passed.rc_result)
  const [candidateList, setCandidateList] = useState([])
  const [languageName, setLanguageName] = useState(language)
  const [loading, setLoading] = useState(false)
  const [resultlang, setResulLang] = useState(resultsAmharic)
  const [active, setActive] = useState(false)
  const [values, setValues] = useState({})
  const [general, setGeneral] = useState(data_passed)
  const [rcdata, setrcData] = useState([])
  const [numberofseat, setNumber] = useState(0)
  const [rcValue, setRCValue] = useState(data_passed.rcconstituencyid)
  const [regionValue, setRegionValue] = useState(null)
  const [approve, setApprove] = useState(data_passed.approve)
  const [resultsender, setResultsender] = useState([])
  const [generalsender, setGeneralSender] = useState([])
  const [maxSender, setmaxSender] = useState([])
  const [rcIdChange, setRCConstituency] = useState('')
  const [resultleng, setResultLength] = useState(0)

  const SubmitFinal = () => {
    const token = localStorage.getItem('access_token')
    var data = {
      "approve": approve,
      "regionid": regionValue,
      "id": rcIdChange,
      "rcconstituencyid": parseInt(rcIdChange),
      "no_of_seat": parseInt(general.no_of_seat),
      "no_of_pollingstation": parseInt(general.no_of_pollingstation),
      "exclude_no_of_pollingstation": parseInt(general.exclude_no_of_pollingstation),
      "q1": parseInt(general.q1),
      "q2": parseInt(general.q2),
      "q3": parseInt(general.q3),
      "q4": parseInt(general.q4),
      "q5": parseInt(general.q5),
      "q6": parseInt(general.q6),
      "q7": parseInt(general.q7),
      "q8": parseInt(general.q8),
      "q9": parseInt(general.q9),
      "result": result,
      "maximum": maxSender,
    };


    var config = {
      url: `${process.env.REACT_APP_IP}/rc_general_update/${data_passed.id}`,
      method: 'PUT',
      headers: {
        "Authorization": "Bearer  " + token

      },
      data: data

    };
    console.log(config);
    axios(config)
      .then(function (response) {
        notification.open({
          message: 'Saved',
          description: 'You Have Successfully Created Region Constituency Record.',
        });
        window.location.reload()
      })
      .catch(function (error) {
        notification.open({
          message: 'Failed To Save',
          description: 'Please Check Your Form.',
        });
      });


  }

  const onChangeGeneral = (e) => {
    console.log(e.target.name, e.target.value)
    if (e.target.name === 'no_of_seat') {
      setNumber(e.target.value)
    }
    setGeneral({ ...general, [e.target.name]: [e.target.value] })
    setGeneralSender({...generalsender, [e.target.name]: [e.target.value]})
  }


  const getRegion = async () => {
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
        setRegions(response.data)
        setLoading(true)
        console.log('region', response.data)
      })
      .catch(function (error) {
        console.log(error)
      });

  }

  const onChange = (e) => {
    var data = null

    for (var i = 0; i < result.length; i++){
      if (result[i].id === parseInt(e.target.name)){
        var value_passed =result
        data = result[i]
        
        data.maximumvotes = e.target.value
        value_passed[i]=data
        setresult(result => [...value_passed,])
        console.log(data)
      }
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

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const onApprove = (e) =>{
    console.log(e.target.checked)
    setApprove(e.target.checked)
  }



  const winerSelection = (value) => {
    console.log(value)   
    setmax([...max, value])
    setmaxSender([...maxSender, value])
  }


  const listt = []
  for (let j = 0; j < numberofseat; j++) {
    listt.push(<Form.Item
      label="Select one winner"
      hasFeedback
      rules={[
        {
          required: true,
          message: 'This field is required',
        }
      ]}
    >
      <Select
        showSearch
        style={{ width: '100%' }}
        placeholder={languageName[3].value}
        optionFilterProp="children"
        onChange={winerSelection}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {loading ? <>
          {candidateList.map((item, index) => (
            <Option key={index} value={item.id}>{item.fullname}</Option>
          ))}</> : <></>}
      </Select>
    </Form.Item>)
  }
  const handleopen = () => {
    setActive(true)
  }
  const handleClose = () => {
    setActive(false)
  }
  function handleChangeRegion() {
    const token = localStorage.getItem('access_token')
    var config = {
      url: `${process.env.REACT_APP_IP}/regional_list/${data_passed.regionid}`,
      method: 'GET',
      headers: {
        "Authorization": "Bearer  " + token

      },

    };
    console.log(config);
    axios(config)
      .then(function (response) {
        setrcData(response.data)
      })
      .catch(function (error) {

      });
  }


  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }



  function handlechangeRegionalConstituency(value) {
    setRCConstituency(value)
    console.log('rc id', value)
    const token = localStorage.getItem('access_token')
    var config = {
      url: `${process.env.REACT_APP_IP}/rc_candidate/${data_passed.rcconstituencyid.id}`,
      method: 'GET',
      headers: {
        "Authorization": "Bearer  " + token

      },

    };
    console.log(config);
    axios(config)
      .then(function (response) {
        setCandidateList(response.data)
        console.log(response.data)
      })
      .catch(function (error) {

      });
  }


  useEffect(() => {
    handlechangeRegionalConstituency()
    handleChangeRegion()
    getRegion()
  }, [])

  return (
    <div>
      <Button onClick={() => setEnglish()}>English</Button>
      <Button onClick={() => setAmharic()}>አማርኛ</Button>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <div style={{ paddingBottom: '2%', paddingTop: '2%' }}>
          <strong style={{ fontSize: 15, color: '#00b6ba', padding: 4, textAlign: 'center' }} >ክልል/Region :&nbsp;&nbsp;&nbsp;{data_passed.regionname}</strong>
          <br />
          {/* <strong style={{ fontSize: 15, color: '#00b6ba', padding: 4, textAlign: 'center' }}>የምርጫ ክልል/Constituency Name :&nbsp;&nbsp;&nbsp;{data_passed.rcconstituencyid.regionalconstituencyname}</strong> */}
        </div>
        <Form.Item
                name="ምርጫ ክልል/Regiona Constituency"
                label={languageName[3].value}
                rules={[
                {
                    required: true,
                    message: 'ምርጫ ክልል/Please input your Constituency!',
                },
                ]}
                hasFeedback
            >
                 <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder={languageName[3].value}
                    optionFilterProp="children"
                    onChange={handlechangeRegionalConstituency}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                  
                  {rcdata.map((item, index) =>(
                    
                      <Option key={index} value={item.id}>{item.regionalconstituencyname}</Option>
                  ))}
                  </Select>
            </Form.Item>
        <Card hoverable style={{ margin: '2%s' }} >
          {languageName.slice(4,).map((item, index) => (
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
              <Input type='number' defaultValue={general[item.names]} name={item.names} onChange={onChangeGeneral}  />
            </Form.Item>

          ))}
        </Card>
      </Form>

      <Form
        {...formItemLayout}
        name="register"
        scrollToFirstError

      >
       <Grid container spacing={2} style={{ marginBottom: '2%' }}>
          <Grid style={{ backgroundColor: '#559fa4', color: 'white' , textAlign: 'center'}} item xs={12}>Candidates</Grid>
        </Grid>
          <>{result.map((item, index) => (
             
              <>
                <Form.Item
                  name={item.id}
                  label={item.candidate_name}

                  rules={[
                    {
                      required: true,
                      message: 'This field is required',
                    }
                  ]}
                >  
                  <Input type='number' defaultValue={item.maximumvotes} name={item.id}  onChange={onChange} /> 
                </Form.Item>
              </>
            ))}</>
             <Grid container spacing={2} style={{ marginBottom: '2%' }}>
          <Grid style={{ backgroundColor: '#559fa4', color: 'white' , textAlign: 'center'}} item xs={12}>Candidate with highest number of votes</Grid>
        </Grid>
       <Card hoverable >
            <Form.Item
              name="ክከፍተኛ ድምፅ ያገኘ እጩ"
              label={"ከፍተኛ ድምፅ ያገኘ እጩ"}
              rules={[
                {
                  required: true,
                  message: 'ከፍተኛ ድምፅ ያገኘ እጩ!',
                },
              ]}
              hasFeedback
            >
              {max.slice(0, numbers).map((item, index) => (
                <Select
                disabled
                defaultValue={item.candidateid ? item.candidateid.fullname : ''}
                showSearch
                style={{ width: '100%' }}
                placeholder={languageName[3].value}
                optionFilterProp="children"
                onChange={winerSelection}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
              
              {candidateList.map((item, index) =>(
                
                  <Option key={index}  value={item.id} >{item.fullname}</Option>
              ))}
              </Select>
              ))}
            </Form.Item>

          </Card>
        <Checkbox checked={approve} style={{ fontSize: 15, color: 'black',  paddingTop: '4%', paddingBottom: '4%' }} onChange={onApprove}>Approve</Checkbox>
        <br />
        <Button style={{ backgroundColor: '#6d55a4', color: 'white' }} onClick={SubmitFinal}>
          Confirm and Save
        </Button>
      </Form> 
    </div>
  )
}
