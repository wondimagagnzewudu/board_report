import React, { useState, useEffect } from 'react'
import { Checkbox,notification,Form, Input, Cascader, Select, Modal, Button, AutoComplete, Card } from 'antd';
import { Grid } from '@material-ui/core'
import axios from 'axios';
import { ConsoleSqlOutlined } from '@ant-design/icons';

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



export default function HOPR_update(props) {
  var data_passed=props.data_passed;
  console.log('data',data_passed)
  const [form] = Form.useForm();
  const [constituencies_data, setconstituencies_data] = useState([]);
  const [region_data, setregion_data] = useState([]);
  const [candidate_data, setcandidate_data] = useState(data_passed.hopr_result);
  const [general_data, setgeneral_data] = useState(data_passed);
  const [result_data, setresult_data] = useState([{}]);
  const [constituencies_selected_data, setconstituencies_selected_data] = useState()
  const [region_selected_data, setregion_selected_data] = useState(false)
  const [region_selected_id, setregion_selected_id] = useState(false)
  const [active, setActive] = useState(false)
  const [values, setValues] = useState({})
  const [check_approvall, setcheck_approvall] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [hoprrsult, sethoprrsult] = useState([])
  const [winner_balot, setwinner_balot] = useState(props.data_passed.hopr_max[0].candidteid)
  
  const language = [
				
    { values:data_passed.no_of_pollingstation,id: 1, value: 'በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት',type:'number' },
    { values:data_passed.no_of_pollingstation,id: 2, value: 'በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት',type:'number' },
    { values:0,id: 3, value: 'ውጤት ላይ ያልተካተቱ የምርጫ ጣቢያዎች ቁጥር' ,type:'number'},
    { values:0,id: 4, value: 'ምክንያት' ,type:'text'},
    { values:data_passed.q1,id: 5, value: 'በምርጫ ክልሉ የተመዘገቡ አጠቃላይ የመራጮች ቁጥር',type:'number'},
    { values:0,id: 6, value: 'የመራጭ ፆታ ሴት',type:'number'},
    { values:0,id: 7, value: 'የመራጭ ፆታ ወንድ',type:'number' },
    { values:data_passed.q2,id: 8, value: ' በምርጫ ክልሉ ውስጥ የተቀበሉት ጠቅላላ የድምፅ መስጫ ወረቀቶች ብዛት', type:'number'},
    { values:data_passed.q3,id: 9, value: 'በምርጫ ክልሉ ውስጥ በመራጮች መዝገብ ላይ የተገኘ አጠቃላይ የመራጮች ፊርማ ብዛት',type:'number' },
    { values:data_passed.q4,id: 10, value: 'በምርጫ ክልሉ ውስጥ ጥቅም ላይ ያልዋሉ አጠቃላይ የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' },
    { values:data_passed.q5,id: 11, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ የተበላሹ የድምፅ መስጫ ወረቀቶች ቁጥር',type:'number' },
    { values:data_passed.q6,id: 12, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ከድምፅ መስጫ ሳጥን ውጭ የተገኙ የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' },
    { values:data_passed.q7,id: 13, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ ያላቸው የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' },
    { values:data_passed.q8,id: 14, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ የሌላቸው የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' },
    { values:data_passed.q9,id: 15, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ጊዜያዊ የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' }
  ]
  const languageEnglish = [
   
    { values:data_passed.no_of_pollingstation,id: 1, value: 'Number of polling stations in the constituency',type:'number'  },
    { values:data_passed.no_of_pollingstation,id: 2, value: 'Number of polling stations in the constituency' ,type:'number' },
    { values:0,id: 3, value: 'Number of polling stations exclused from the results',type:'number'  },
    { values:0,id: 4, value: 'Reason',type:'text'  },
    { values:data_passed.q1,id: 5, value: 'Total number of registered voters in the constituency',type:'number'  },
    { values:0, value: 'Voter gender FeMale' ,type:'number' },
    { values:0,id: 7, value: 'Voter gender Male' ,type:'number' },
    { values:data_passed.q2,id: 8, value: 'Total number of ballot papers received in the constituency' ,type:'number' },
    { values:data_passed.q3,id: 9, value: 'Total number of signatures on the Electoral Roll in the constituency',type:'number'  },
    { values:data_passed.q4,id: 10, value: 'Total number of unused ballot papers in the constituency',type:'number'  },
    { values:data_passed.q5,id: 11, value: 'Total number of spoiled ballot papers in the constituency',type:'number'  },
    { values:data_passed.q6,id: 12, value: 'Total number of stray ballot papers in the constituency',type:'number'  },
    { values:data_passed.q7,id: 13, value: 'Total number of valid ballot papers in the constituency',type:'number'  },
    { values:data_passed.q8,id: 14, value: 'Total number of invalid ballot papers in the constituency',type:'number'  },
    { values:data_passed.q9,id: 15, value: 'Total number of provisional ballot papers in the constituency',type:'number'  }
  ]
  const [ballot_number, setballot_number] = useState('');
  const [regionid, setregionid] = useState(language)
  const [oprconstituencyid, setoprconstituencyid] = useState(language)
  const [languageName, setLanguageName] = useState(language)
  const [resultlang, setResulLang] = useState(resultsAmharic)
  const [ids, setWinderCandidateId] = useState(null)
  const onChange_result_data_ballot = (e) => {
 
    
    setballot_number(e.target.value)
 
   }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] })

  }
  const send_hopr_data = (e) => {
    const token = localStorage.getItem('access_token');
   
    var winner_balot_data ={}
    winner_balot_data=winner_balot;
    
  

    var send_data = {
      "approved": check_approvall,
      "regionid": data_passed.regionid,
      "hoprconstituencyid":data_passed.hoprconstituencyid,
      "no_of_pollingstation": general_data[0],
      "exclude_no_of_pollingstation": general_data[1],
      "q1": general_data[3],
      "q2": general_data[6],
      "q3": general_data[7],
      "q4": general_data[8],
      "q5": general_data[9],
      "q6": general_data[10],
      "q7": general_data[11],
      "q8": general_data[12],
      "q9": general_data[13],
      "hoprResult": result_data.slice(1,),
    "hoprMax": ids

    }
    var config = {
      url: `${process.env.REACT_APP_IP}/hopr_general_update/${data_passed.id}`,
      method: 'PUT',
      headers: {
        "Authorization": "Bearer  " + token

      },
data:send_data
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
  const onChange_general_data = (e) => {
    setgeneral_data({ ...general_data, [e.target.name]: e.target.value })
    console.log(general_data)
  }

  const onChange_result_data = (e) => {
 
    var data =candidate_data[e.target.name]
    
 
   setresult_data(result_data => [...result_data,data])
   console.log(result_data)
  }
  const setEnglish = () => {
    setLanguageName(languageEnglish)
    setResulLang(resultsEnglish)
  }
  const setAmharic = () => {
    setLanguageName(language)
    setResulLang(resultsAmharic)
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
  const onFinish_winner = (value) => {
    console.log(value)
    setWinderCandidateId(value)
    // for (var i = 1; i < candidate_data.length; i++) {
    //   if(candidate_data[i].id ==value)
    //    candidate_data[i].ballotorder=ballot_number;
    //   setwinner_balot(candidate_data[i])
    //  }
   
  }
  const onFinish = (value) => {
    console.log(value)
    setLoaded(true)
    setregionid(value);
    for (var i = 1; i < region_data.length; i++) {
     if(region_data[i].regionid ==value)
     setregion_selected_data(region_data[i])
    }
console.log('tregion_selected_data',region_selected_data);

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
var x ={}
    setconstituencies_data(x => [...response.data,])
    
    console.log(response.data)
  })
  .catch(function (error) {

  });

  };
  function onChange_approval(e) {
    setcheck_approvall(`${e.target.checked}`);
  }
  const on_select_constituency = (value) => {
  
    setLoaded(true)
    
    for (var i = 1; i < constituencies_data.length; i++) {
     if(constituencies_data[i].constituencyid==value)
     setconstituencies_data(constituencies_data[i])
    }

    setoprconstituencyid(value);
const token = localStorage.getItem('access_token')
var config = {
  url: `${process.env.REACT_APP_IP}/candidate/${value}`,
  method: 'GET',
  headers: {
    "Authorization": "Bearer  " + token

  },
  
};
console.log(config);
axios(config)
  .then(function (response) {
var taken_data =  response.data;
console.log('1',taken_data);
// for (var i = 1; i < taken_data.length; i++) {
 
//   // taken_data[i].push({result_number:''})
//   // console.log(taken_data[i].ballotorder);
 
//  }
 
    
    
  })
  .catch(function (error) {

  });
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);



  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));

  const children = [];
  // for (const [ key, value ] of region_data) {
  //     children.push(<Option >{value.regionname}</Option>);
  // }
  for (var i = 1; i < region_data.length; i++) {
    children.push(<Option value={region_data[i].regionname}>{region_data[i].regionname}</Option>);
  }

  const listt = []
  for (let j = 0; j < 13; j++) {
    listt.push(j)
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <Card hoverable style={{ backgroundColor: '#6d55a4' }}>
      <Button onClick={() => setEnglish()}>English</Button>
      <Button onClick={() => setAmharic()}>አማርኛ</Button>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
      
         <strong style={{fontSize: 15, color: 'black', color: 'white', padding: 4, }} >ክልል/Region :&nbsp;&nbsp;&nbsp;{data_passed.regionname}</strong>  
         <br/>
         <strong style={{fontSize: 15, color: 'black', color: 'white', padding: 4, }}>የምርጫ ክልል/Constituency Name :&nbsp;&nbsp;&nbsp;{data_passed.hopr}</strong>
        
      
       {/* {constituencies_data.length ?<>{
        <Card hoverable >

          {languageName.slice(2,).map((item, index) => (

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
              <Input type='number' name={index} onChange={onChange_general_data} />
            </Form.Item>

          ))}
          <Button type="primary" block onClick={() => setActive(true)}>
            ውጤቶች/RESULTS
          </Button>
        </Card>
        }</>:
        <> </>} */}
        <Card hoverable >
             {languageName.slice(1,).map((item, index) => (

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
  <Input type={item.type} defaultValue={item.values} name={index} onChange={onChange_general_data} />
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
       
            <Grid  style={{ justifyContent:'center',textAlign: 'center' ,marginLeft:50, fontSize: 15, color: 'black', color: 'white', padding: 4, }} style={{ backgroundColor: '#6d55a4', color: 'white' }} item xs={6}> ውጤቶች/Results </Grid>
          </Grid>
          
          {candidate_data.length ?
          <>{
           											

candidate_data.map((id, ITEM) => (
         <>
        
          <Form.Item
          name={id.candidatename}
          label={id.candidatename}
         
          rules={[
            {
              required: true,
              message: 'This field is required',
            }
          ]} 
        >  {id.partyname}
          {/* <Input type='number' name={item.value} placeholder={resultlang[2].value} onChange={onChange} /> */}
           <Input type='number' defaultValue={id.votes} key={ITEM} name={ITEM} onChange={ onChange_result_data} />
        </Form.Item>
        </>
        ))}</>:<></>}
        <br/>
        </Card>

        <br/>
        <br/>
        <Form.Item
          name={'የእጩ ተራ ቁጥር/ Ballot Order Number '}
          label={'የእጩ ተራ ቁጥር/Ballot Order Number '}
        >  
          {/* <Input type='number' name={item.value} placeholder={resultlang[2].value} onChange={onChange} /> */}
           <Input type='number'  defaultValue={data_passed.hopr_max[0].candidteid.ballotorder} value={data_passed.hopr_max[0].candidteid.ballotorder} onChange={ onChange_result_data_ballot} />
        </Form.Item>

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
          <Select onChange={onFinish_winner}  defaultValue={data_passed.hopr_max[0].candidteid.fullname} type="text" mode="inline" style={{ width: '100%',}} placeholder={region_selected_data.regionname} >
          {candidate_data.map((id, ITEM) => (
              <Option  size={'large'} key={ITEM} value={id.id}>{id.candidatename},{'/'},{ id.partyname}</Option>
          ))}
          </Select>
        </Form.Item>
        
        </Form>
{/*       
        <strong style={{fontSize: 15, color: 'black', color: 'white', padding: 4, }}>የእጩ ተራ ቁጥር/ :&nbsp;&nbsp;&nbsp;Ballot Order Number  :&nbsp;&nbsp;&nbsp;{data_passed.hopr_max[0].candidteid.ballotorder}</strong>
         <br/>
        <strong style={{fontSize: 15, color: 'black', color: 'white', padding: 4, }} >ክከፍተኛ ድምፅ ያገኘ እጩ/:&nbsp;&nbsp;&nbsp;Winner Candidate Name :&nbsp;&nbsp;&nbsp;{data_passed.hopr_max[0].candidteid.fullname}</strong>  
         <br/>
         
        <strong style={{fontSize: 15, color: 'black', color: 'white', padding: 4, }}>የፖለቲካ ፓርቲ ስም/ :&nbsp;&nbsp;&nbsp;Political Party Name:&nbsp;&nbsp;&nbsp;{data_passed.hopr_max[0].partyid.politicalpartyname}</strong>
    
        <br/>
        */}
        <Checkbox style={{fontSize: 15, color: 'black', color: 'white', padding: 4, }} onChange={onChange_approval}>Approval</Checkbox>
        <br/>
        <Button style={{ backgroundColor: '#6d55a4', color: 'white' }} onClick={ send_hopr_data}>
          Confirm and Save
        </Button>

      

    </Card>
  )
}
