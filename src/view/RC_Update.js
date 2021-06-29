import React, { useState, useEffect } from 'react'
import { Checkbox,notification,Form, Input, Cascader, Select, Modal, Button, AutoComplete, Card } from 'antd';
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
  var data_passed=props.data_passed;

  const language = [
				
    { name:'no_of_pollingstation',values:data_passed.no_of_pollingstation,id: 1, value: 'በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት',type:'number' },
    { name:'no_of_pollingstation',values:data_passed.no_of_pollingstation,id: 2, value: 'በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት',type:'number' },
    { name:'q0' ,values:0,id: 3, value: 'ውጤት ላይ ያልተካተቱ የምርጫ ጣቢያዎች ቁጥር' ,type:'number'},
    { name:'q0' ,values:0,id: 4, value: 'ምክንያት' ,type:'text'},
    { name:'q1' ,values:data_passed.q1,id: 5, value: 'በምርጫ ክልሉ የተመዘገቡ አጠቃላይ የመራጮች ቁጥር',type:'number'},
    { name:'q0' ,values:0,id: 6, value: 'የመራጭ ፆታ ሴት',type:'number'},
    { name:'q0' ,values:0,id: 7, value: 'የመራጭ ፆታ ወንድ',type:'number' },
    { name:'q2' ,values:data_passed.q2,id: 8, value: ' በምርጫ ክልሉ ውስጥ የተቀበሉት ጠቅላላ የድምፅ መስጫ ወረቀቶች ብዛት', type:'number'},
    { name:'q3' ,values:data_passed.q3,id: 9, value: 'በምርጫ ክልሉ ውስጥ በመራጮች መዝገብ ላይ የተገኘ አጠቃላይ የመራጮች ፊርማ ብዛት',type:'number' },
    { name:'q4' ,values:data_passed.q4,id: 10, value: 'በምርጫ ክልሉ ውስጥ ጥቅም ላይ ያልዋሉ አጠቃላይ የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' },
    { name:'q5' , values:data_passed.q5,id: 11, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ የተበላሹ የድምፅ መስጫ ወረቀቶች ቁጥር',type:'number' },
    { name:'q6' ,values:data_passed.q6,id: 12, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ከድምፅ መስጫ ሳጥን ውጭ የተገኙ የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' },
    { name:'q7' ,values:data_passed.q7,id: 13, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ ያላቸው የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' },
    { name:'q8' ,values:data_passed.q8,id: 14, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ የሌላቸው የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' },
    { name:'q9' ,values:data_passed.q9,id: 15, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ጊዜያዊ የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' }
  ]
  const languageEnglish = [
   
    { name:'no_of_pollingstation',values:data_passed.no_of_pollingstation,id: 1, value: 'Number of polling stations in the constituency',type:'number'  },
    { name:'no_of_pollingstation',values:data_passed.no_of_pollingstation,id: 2, value: 'Number of polling stations in the constituency' ,type:'number' },
    { name:'q0',values:0,id: 3, value: 'Number of polling stations exclused from the results',type:'number'  },
    { name:'q0',values:0,id: 4, value: 'Reason',type:'text'  },
    { name:'q1',values:data_passed.q1,id: 5, value: 'Total number of registered voters in the constituency',type:'number'  },
    { name:'q0',values:0, value: 'Voter gender FeMale' ,type:'number' },
    { name:'q0',values:0,id: 7, value: 'Voter gender Male' ,type:'number' },
    { name:'q2',values:data_passed.q2,id: 8, value: 'Total number of ballot papers received in the constituency' ,type:'number' },
    { name:'q3',values:data_passed.q3,id: 9, value: 'Total number of signatures on the Electoral Roll in the constituency',type:'number'  },
    { name:'q4',values:data_passed.q4,id: 10, value: 'Total number of unused ballot papers in the constituency',type:'number'  },
    { name:'q5',values:data_passed.q5,id: 11, value: 'Total number of spoiled ballot papers in the constituency',type:'number'  },
    { name:'q6',values:data_passed.q6,id: 12, value: 'Total number of stray ballot papers in the constituency',type:'number'  },
    { name:'q7',values:data_passed.q7,id: 13, value: 'Total number of valid ballot papers in the constituency',type:'number'  },
    { name:'q8',values:data_passed.q8,id: 14, value: 'Total number of invalid ballot papers in the constituency',type:'number'  },
    { name:'q9',values:data_passed.q9,id: 15, value: 'Total number of provisional ballot papers in the constituency',type:'number'  }
  ]
  const [check_approvall, setcheck_approvall] = useState(false)
  const [form] = Form.useForm();
  const [constituencies_data, setconstituencies_data] = useState([]);
  const [rc_constituencies_data, setrc_constituencies_data] = useState([]);
  const [general_data, setgeneral_data] = useState(data_passed);
  const [candidate_data_rc, setcandidate_data_rc] = useState(data_passed.rc_max);
  const [candidate_data, setcandidate_data] = useState(data_passed.rc_result);
  const [result_data, setresult_data] = useState(data_passed.rc_result);
  const [languageName, setLanguageName] = useState(language)
  const [resultlang, setResulLang] = useState(resultsAmharic)
  const [constituencies_selected_data, setconstituencies_selected_data] = useState()
  const [region_selected_data, setregion_selected_data] = useState(false)
  const [region_selected_id, setregion_selected_id] = useState(false)
  const [active, setActive] = useState(false)
  const [values, setValues] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [hoprrsult, sethoprrsult] = useState([])
  const [winner_balot, setwinner_balot] = useState([])
  const [rc_constituencies_data_id, setrc_constituencies_data_id] = useState()
  const [regionid, setregionid] = useState()
  const [oprconstituencyid, setoprconstituencyid] = useState()
  const [no_of_seat, setno_of_seat] = useState()
  const [one, setone] = useState({})
  const [region_data, setregion_data] = useState([]);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] })

  }
  const onChange_set = (value,Item) => {
    var datasave = one;
    datasave[Item]=value
    setone(datasave);
  }
  function onChange_approval(e) {
    setcheck_approvall(`${e.target.checked}`);
  }
  const send_hopr_data = (e) => {
    const token = localStorage.getItem('access_token');
   
    // for (var i = 1; i < result_data.length; i++) {
    //   console.log('progress',result_data[i])
    //   sethoprrsult(hoprrsult => [...hoprrsult,result_data[i]])
    //  }

    
    result_data.map((id, ITEM) => (
    // sethoprrsult(hoprrsult => [...hoprrsult,id[ITEM]])
      console.log(id)
    ))

    var send_data = {
      "approve": check_approvall,
      "regionid":data_passed.regionid,
      "hoprconstituencyid":data_passed.hoprconstituencyid,
      "no_of_pollingstation":data_passed.no_of_pollingstation,
      "rcconstituencyid":data_passed.rcconstituencyid,
      "no_of_seat":data_passed.no_of_seat,
      "exclude_no_of_pollingstation":data_passed.exclude_no_of_pollingstation,
      "q1": general_data.q1,
      "q2": general_data.q2,
      "q3": general_data.q3,
      "q4": general_data.q4,
      "q5": general_data.q5,
      "q6": general_data.q6,
      "q7": general_data.q7,
      "q8": general_data.q8,
      "q9": general_data.q9,
      "rcResults": result_data,
    "hoprMax": (one.length>0) ? [one]:data_passed.rc_max,
    }
    var config = {
      url: `${process.env.REACT_APP_IP}/rc_general_update/${data_passed.id}`,
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
          message: 'saved',
         
        });
        // setTimeout(() => {
        //   window.location.reload(false);
        // }, 50);
       
      })
      .catch(function (error) {
        notification.open({
          message: 'got eroor',
         
        });
      });
 


  }
  const onChange_general_data = (e) => {
  
    setgeneral_data({...general_data,[e.target.name]: JSON.parse(e.target.value)})

  }

  const onChange_result_data = (e) => {
    var data =[];
     data =candidate_data[e.target.name]
    data.maximumvotes=JSON.parse(e.target.value);
    candidate_data[e.target.name]=data
   setresult_data(candidate_data)
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
  const onFinish_winner = (value, key) => {
   
    for (var i = 1; i < candidate_data.length; i++) {
      if(candidate_data[i].fullname ===value)
      var catch_winner = candidate_data[i];
      console.log(catch_winner);
      setwinner_balot(winner_balot => [...winner_balot,catch_winner])
      
     }
     console.log('winner',winner_balot);
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
  const on_select_regionalconstituency = (value) => {
    setrc_constituencies_data_id(value);
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
  url: `${process.env.REACT_APP_IP}/regional_candidate/${value}`,
  method: 'GET',
  headers: {
  "content-type":"application/json",
    "Authorization": "Bearer  " + token
  
  },
  
};
console.log(config);
axios(config)
  .then(function (response) {
var taken_data =  response.data;
console.log('1',taken_data);


    setcandidate_data(response.data);
    
  })
  .catch(function (error) {

  });
  var config = {
    url: `${process.env.REACT_APP_IP}/regional_constituency/${value}`,
    method: 'GET',
    headers: {
      "Authorization": "Bearer  " + token
  
    },
    
  };
  console.log(config);
  axios(config)
    .then(function (response) {
 console.log('rc',response.data)
  
  
  setrc_constituencies_data(response.data);
      
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
    <Card hoverable style={{ backgroundColor: '#559fa4' }}>
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
        
       
        {loaded ? 
        <Form.Item
        name="ምርጫ ክልል/Constituency"
        label={"ምርጫ ክልል/Constituency"}
        rules={[
          {
            required: true,
            message: 'ምርጫ ክልል/Please input your Constituency!',
          },
        ]}
        hasFeedback
      >
        <Select onChange={on_select_constituency} type="text" mode="inline" style={{ width: '100%',  }} placeholder={constituencies_data.constituencyname} >
        {constituencies_data.length ?<>{
        constituencies_data.map((id, ITEM) => (
            <Option key={ITEM} value={id.constituencyid}>{id.constituencyname}</Option>
        ))}</>:<></>}
        </Select>
      </Form.Item>: <></>}
      {loaded ? 
        <Form.Item
        name="የክልል ምክር ቤት ምርጫ/Regional Council Election "
        label={"የክልል ምክር ቤት ምርጫ/Regional Council Election"}
        rules={[
          {
            required: true,
            message: 'ምርጫ ክልል/Please input your Constituency!',
          },
        ]}
        hasFeedback
      >
        <Select onChange={on_select_regionalconstituency} type="text" mode="inline" style={{ width: '100%',  }} placeholder={constituencies_data.constituencyname} >
        {rc_constituencies_data.length ?<>{
        rc_constituencies_data.map((id, ITEM) => (
            <Option key={ITEM} value={id.regionalconstituencyid}>{id.regionalconstituencyname}</Option>
        ))}</>:<></>}
        </Select>
      </Form.Item>: <></>}
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
  <Input type={'number'}   defaultValue={item.values} name={item.name}  value={general_data[item.name]} onChange={onChange_general_data} />
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
            <Grid style={{ backgroundColor: '##559fa4', color: 'white' }} item xs={6}>Party and Candidate name</Grid>
            <Grid style={{ backgroundColor: '##559fa4', color: 'white' }} item xs={6}> Result </Grid>
          </Grid>
          
          {candidate_data.length ?
          <>{
           											

candidate_data.map((id, ITEM) => (
         <>
        
          <Form.Item
          name={id.candidate_name}
          label={id.candidate_name}
         
          rules={[
            {
              required: true,
              message: 'This field is required',
            }
          ]} 
        >  {id.party_name}
          {/* <Input type='number' name={item.value} placeholder={resultlang[2].value} onChange={onChange} /> */}
           <Input type='number' defaultValue={id.maximumvotes} key={ITEM} name={ITEM} onChange={ onChange_result_data} />
        </Form.Item>
        </>
        ))}</>:<></>}
        <strong> ከፍተኛ ድምፅ ያገኘ እጩ/Candidate with highest number of votes 	</strong>
        {candidate_data.length ?<>{
          
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
              {candidate_data_rc.map((id, ITEM) => (
   <select onChange={e => setone(candidate_data[(e.target.value)],ITEM)} defaultValue={candidate_data_rc[ITEM]} type="text" mode="inline" style={{ width: '100%',}}  >
          {candidate_data.map((id, ITEM) => (
              <option key={ITEM} values={id} value={ITEM}>{id.candidate_name},{'/'},{ id.party_name}</option>
          ))}
          </select>
              ))}
        </Form.Item>
      
        </Card>
        }</>:
        <> </>}
   <br/>
<Checkbox style={{fontSize: 15, color: 'black', color: 'white', padding: 4, }} onChange={onChange_approval}>Approval</Checkbox>
        <br/>
                <Button style={{ backgroundColor: '#6d55a4', color: 'white' }} onClick={ send_hopr_data}>
          Confirm and Save
        </Button>
        </Form>


   

    </Card>
  )
}
