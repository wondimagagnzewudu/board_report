import React, {useState, useEffect} from 'react'
import { Form, Input, Cascader, Select,  Modal, Button, AutoComplete, Card,notification  } from 'antd';
import {Grid} from '@material-ui/core'
import axios from 'axios';


const { Option } = Select;
const formItemLayout = {
    labelCol: {
      xs: { span: 32 },
      sm: { span: 12},
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
      {id: 1, value: 'የፖለቲካ ፓርቲ እና እጩ/የግል ተወዳዳሪ ስም' },
      {id: 2, value: 'ውጤቶች', },
      {id: 3, value: 'የተሰጠ ድምፅ',}
  ]
  const resultsEnglish = [
    {id: 1, value: 'Name of candidate and political party/independent' },
    {id: 2, value: 'RESULTS'},
    {id: 3, value: 'Votes'}
  ]
  const maximam = [
      {id: 1, value: 'ከፍተኛ ድምፅ ያገኘ እጩ ', },
      {id: 2, value: 'በድምፅ መስጫ ወረቀት ላይ ያለ የእጩ ተራ ቁጥር',},
      {id: 3, value: 'የእጩ ስም',},
      {id: 4, value: 'የፖለቲካ ፓርቲ እና እጩ /የግል ተወዳዳሪ ስም'}
  ]
  const maximamEnglish = [
    {id: 1,  value: 'Candidates with highest number of votes '},
    {id: 2,  value: 'Number on the ballot paper'},
    {id: 3,  value: 'Name of candidate'},
    {id: 4,  value: 'Name of political party/independent'}
  ]

  const language = [
      {id: 1, value: "የምርጫ ክልል የውጤት ቅፅ", }, 
      {id: 2, value: "የክልል ምክር ቤት ምርጫ", }, 
      {id: 3, value: 'ክልል',},
      {id: 4, value: 'የከልሉ ምርጫ ክልል'},
      {id: 5, value: 'በምርጫ ክልሉ ውስጥ የክልል ምክር ቤት መቀመጫዎች ብዛት', names: 'no_of_seat'},
      {id: 6, value: 'በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት', names: 'no_of_pollingstation'},
      {id: 7, value: 'ውጤት ላይ ያልተካተቱ የምርጫ ጣቢያዎች ቁጥር', names: 'exclude_no_of_pollingstation'},
      {id: 8, value: 'በምርጫ ክልሉ የተመዘገቡ አጠቃላይ የመራጮች ቁጥር', names: 'q1'},
      {id: 9, value: ' በምርጫ ክልሉ ውስጥ የተቀበሉት ጠቅላላ የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q2'},
      {id: 10, value: 'በምርጫ ክልሉ ውስጥ በመራጮች መዝገብ ላይ የተገኘ አጠቃላይ የመራጮች ፊርማ ብዛት', names: 'q3'},
      {id: 11, value: 'በምርጫ ክልሉ ውስጥ ጥቅም ላይ ያልዋሉ አጠቃላይ የድምፅ መስጫ ወረቀቶች ብዛት',names: 'q4' },
      {id: 12,value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ የተበላሹ የድምፅ መስጫ ወረቀቶች ቁጥር', names: 'q5'},
      {id: 13, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ከድምፅ መስጫ ሳጥን ውጭ የተገኙ የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q6'},
      {id: 14, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ ያላቸው የድምፅ መስጫ ወረቀቶች ብዛት',names: 'q7' },
      {id: 15, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ የሌላቸው የድምፅ መስጫ ወረቀቶች ብዛት', names: 'q8'}, 
      {id: 16, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ጊዜያዊ የድምፅ መስጫ ወረቀቶች ብዛት',names: 'q9'}
  ]
  const languageEnglish = [
    {id: 1,  value: 'CONSTITUENCY RESULTS FORM'}, 
    {id: 2,  value: 'Regional Council Election'}, 
    {id: 3,  value: 'Region'},
    {id: 4,  value: 'Regional Constituency'},
    {id: 5,  value: 'Number of Regional Council seats in the constituency', names: 'no_of_seat'},
    {id: 6,  value: 'Number of polling stations in the constituency', names: 'no_of_pollingstation'},
    {id: 7,  value: 'Number of polling stations exclused from the results' , names: 'exclude_no_of_pollingstation'},
    {id: 8,  value: 'Total number of registered voters in the constituency', names: 'q1'},
    {id: 9,  value: 'Total number of ballot papers received in the constituency', names: 'q2'},
    {id: 10,  value: 'Total number of signatures on the Electoral Roll in the constituency', names: 'q3'},
    {id: 11,  value: 'Total number of unused ballot papers in the constituency', names: 'q4'},
    {id: 12, value: 'Total number of spoiled ballot papers in the constituency', names: 'q5'},
    {id: 13, value: 'Total number of stray ballot papers in the constituency', names: 'q6'},
    {id: 14, value: 'Total number of valid ballot papers in the constituency', names: 'q7'},
    {id: 15, value: 'Total number of invalid ballot papers in the constituency', names: 'q8'},
    {id: 16, value: 'Total number of provisional ballot papers in the constituency', names: 'q9'}
]

export default function RC() {
    const [form] = Form.useForm();
    const [max, setmax] = useState([])
    const [regions, setRegions] = useState([])
    const [result, setresult] = useState([])
    const [candidateList, setCandidateList] = useState([])
    const [languageName, setLanguageName] = useState(language)
    const [loading, setLoading] = useState(false)
    const [resultlang, setResulLang] = useState(resultsAmharic)
    const [active, setActive] = useState(false)
    const [values, setValues] = useState({})
    const [general, setGeneral] = useState([])
    const [rcdata, setrcData] = useState([])
    const [numberofseat, setNumber] = useState(0)
    const [rcValue, setRCValue] = useState('')
    const [regionValue, setRegionValue] = useState('')
    const [resultleng, setResultLength] = useState(0)

    const SubmitFinal = () =>{
      const token = localStorage.getItem('access_token')
      var data = {
        "regionid": regionValue,
        "rcconstituencyid": parseInt(rcValue),
        "id": parseInt(rcValue),
        "no_of_seat": parseInt(general.no_of_seat[0]),
        "no_of_pollingstation": parseInt(general.no_of_pollingstation[0]),
        "exclude_no_of_pollingstation": parseInt(general.exclude_no_of_pollingstation[0]),
        "q1": parseInt(general.q1[0]),
        "q2": parseInt(general.q2[0]),
        "q3": parseInt(general.q3[0]),
        "q4": parseInt(general.q4[0]),
        "q5": parseInt(general.q5[0]),
        "q6": parseInt(general.q6[0]),
        "q7": parseInt(general.q7[0]),
        "q8": parseInt(general.q8[0]),
        "q9": parseInt(general.q9[0]),
        "result": result.slice(0, resultleng),
        "maximum": max,
      };

      var config = {
        url: `${process.env.REACT_APP_IP}/rc_general/`,
        method: 'POST',
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

    const onChangeGeneral =(e) =>{
      console.log(e.target.name, e.target.value)
      if(e.target.name === 'no_of_seat'){
        setNumber(e.target.value)
      }
      setGeneral({...general, [e.target.name]: [e.target.value]})
    }
    

    const getRegion = async() =>{
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
     
    const onChange =(e) =>{
      for (var i = 0; i < result.length; i++){
        if (result[i].id === parseInt(e.target.name)){
          // setresult(result.filter(item => item.id === e.target.name))
          var reserve_value = result;
          var data = result[i]
          data.maximumvotes = e.target.value
          reserve_value[i]=data
          setresult(result => [...reserve_value,])
          console.log(data)
          console.log(result)
        }
      }

      
    }

    const setEnglish =() =>{
        setLanguageName(languageEnglish)
        setResulLang(resultsEnglish)
    }
    const setAmharic = () =>{
        setLanguageName(language)
        setResulLang(resultsAmharic)
    }

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };



  const winerSelection = (value) =>{
    console.log(value)
    console.log(max)
    
    setmax([...max,  {value}])
  }


      const listt = []
      for (let j = 0; j<numberofseat; j++){
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
                    onSelect={winerSelection}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                  {loading ? <>
                    {candidateList.map((item, index) =>(
                    <Option key={index} value={item.id}>{item.fullname}</Option>
                  ))}</> : <></>}
            </Select>
      </Form.Item>)
      }
      const handleopen = () =>{
        setActive(true)
      }
      const handleClose = () =>{
        setActive(false)
      }
    function handleChangeRegion(value) {
      setRegionValue(value)
      console.log(value)
      const token = localStorage.getItem('access_token')
      var config = {
        url: `${process.env.REACT_APP_IP}/regional_list/${value}`,
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

   

    function handlechangeRegionalConstituency(value){
      setRCValue(value)
      console.log('rc ', value)
      const token = localStorage.getItem('access_token')
      var config = {
        url: `${process.env.REACT_APP_IP}/rc_candidate/${value}`,
        method: 'GET',
        headers: {
          "Authorization": "Bearer  " + token
  
        },
  
      };
      console.log(config);
      axios(config)
        .then(function (response) {
          setCandidateList(response.data)
          console.log(' data is fair', response.data)
          var userList = []
          for (var i = 0; i< response.data.length; i++){
            var obj ={
              id: response.data[i].id,
              maximumvotes: 0
            }
            userList.push(obj)
          }
          console.log(userList)
          setresult(userList)
          setResultLength(userList.length)
        })
        .catch(function (error) {
  
        });
    }


    useEffect(() =>{
      getRegion()
    }, [])
    return (
        <Card hoverable style={{backgroundColor: '#00b6ba'}}>
            <Button onClick={() =>setEnglish()}>English</Button>
            <Button onClick={() =>setAmharic()}>አማርኛ</Button>
            <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            >
            <Form.Item
                name="ክልል/Region"
                label={languageName[2].value}
                rules={[
                {
                    required: true,
                    message: 'ክልል/Please input your Region!',
                },
                ]}
                hasFeedback
            >
                <Select placeholder={languageName[2].value} type="text" mode="inline" style={{ width: '100%' }} onChange={handleChangeRegion}>
                  {loading ? <>
                    {regions.map((item, index) =>(
                    <Option key={index} value={item.regionid}>{item.regionname}</Option>
                  ))}</> : <></>}
                </Select>
            </Form.Item>

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
            <Card hoverable >

            {languageName.slice(4, ).map((item, index) =>(
              
            <Form.Item
                name={item.id}
                label={item.value}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'This field is required',
                }
                ]}
            >
                <Input type='number' name={item.names}  onChange={onChangeGeneral} />
            </Form.Item>

            ))}
            <Button type="primary"  onClick={handleopen}>
            {resultlang[2].value}
            </Button>
            </Card>
            </Form>
            <Modal title={<p style={{fontSize: 20, color: '#00b6ba'}}>{resultlang[1].value}</p>} visible={active} onCancel={handleClose}  footer={null} width={1000}>
            <Form
            {...formItemLayout}
              name="register"
              scrollToFirstError
              >
                <Grid container spacing={2} style={{marginBottom: '2%'}}>
                    <Grid style={{backgroundColor: '#00b6ba', color: 'white'}} item xs={6}>{resultlang[0].value}</Grid>
                    <Grid style={{backgroundColor: '#00b6ba', color: 'white'}} item xs={6}>{resultlang[2].value}</Grid>
                </Grid>
                {candidateList.map((item, index) =>(
                  <Form.Item
                      name={item.id}
                      label={item.fullname}
                      hasFeedback
                      rules={[
                                  {
                                      required: true,
                                      message: 'This field is required',
                                  }
                                  ]}
                              >
                    <Input type='number' name={item.id} placeholder={item.name}  onChange={onChange} />
                 </Form.Item>

                ))}

                <Grid container spacing={2} style={{marginBottom: '2%'}}>
                    <Grid style={{backgroundColor: '#00b6ba', color: 'white', width: '100%'}} item xs={12}>Winners</Grid>
                </Grid>
                {listt}

                <Button style={{backgroundColor: 'green', color: 'white'}} onClick={SubmitFinal}>
                Confirm and Save
              </Button>
              </Form>
              

            </Modal>
            
        </Card>
    )
}