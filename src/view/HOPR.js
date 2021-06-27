import React, { useState, useEffect } from 'react'
import { notification,Form, Input, Cascader, Select, Modal, Button, AutoComplete, Card } from 'antd';
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

const language = [
				
  { id: 1, value: 'በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት',type:'number' },
  { id: 2, value: 'በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት',type:'number' },
  { id: 3, value: 'ውጤት ላይ ያልተካተቱ የምርጫ ጣቢያዎች ቁጥር' ,type:'number'},
  { id: 4, value: 'ምክንያት' ,type:'text'},
  { id: 5, value: 'በምርጫ ክልሉ የተመዘገቡ አጠቃላይ የመራጮች ቁጥር',type:'number'},
  { id: 6, value: 'የመራጭ ፆታ ሴት',type:'number'},
  { id: 7, value: 'የመራጭ ፆታ ወንድ',type:'number' },
  { id: 8, value: ' በምርጫ ክልሉ ውስጥ የተቀበሉት ጠቅላላ የድምፅ መስጫ ወረቀቶች ብዛት', type:'number'},
  { id: 9, value: 'በምርጫ ክልሉ ውስጥ በመራጮች መዝገብ ላይ የተገኘ አጠቃላይ የመራጮች ፊርማ ብዛት',type:'number' },
  { id: 10, value: 'በምርጫ ክልሉ ውስጥ ጥቅም ላይ ያልዋሉ አጠቃላይ የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' },
  { id: 11, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ የተበላሹ የድምፅ መስጫ ወረቀቶች ቁጥር',type:'number' },
  { id: 12, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ከድምፅ መስጫ ሳጥን ውጭ የተገኙ የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' },
  { id: 13, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ ያላቸው የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' },
  { id: 14, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ የሌላቸው የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' },
  { id: 15, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ጊዜያዊ የድምፅ መስጫ ወረቀቶች ብዛት',type:'number' }
]
const languageEnglish = [
 
  { id: 1, value: 'Number of polling stations in the constituency',type:'number'  },
  { id: 2, value: 'Number of polling stations in the constituency' ,type:'number' },
  { id: 3, value: 'Number of polling stations exclused from the results',type:'number'  },
  { id: 4, value: 'Reason',type:'text'  },
  { id: 5, value: 'Total number of registered voters in the constituency',type:'number'  },
  { id: 6, value: 'Voter gender FeMale' ,type:'number' },
  { id: 7, value: 'Voter gender Male' ,type:'number' },
  { id: 8, value: 'Total number of ballot papers received in the constituency' ,type:'number' },
  { id: 9, value: 'Total number of signatures on the Electoral Roll in the constituency',type:'number'  },
  { id: 10, value: 'Total number of unused ballot papers in the constituency',type:'number'  },
  { id: 11, value: 'Total number of spoiled ballot papers in the constituency',type:'number'  },
  { id: 12, value: 'Total number of stray ballot papers in the constituency',type:'number'  },
  { id: 13, value: 'Total number of valid ballot papers in the constituency',type:'number'  },
  { id: 14, value: 'Total number of invalid ballot papers in the constituency',type:'number'  },
  { id: 15, value: 'Total number of provisional ballot papers in the constituency',type:'number'  }
]

export default function HOPR() {
  const [form] = Form.useForm();
  const [constituencies_data, setconstituencies_data] = useState([]);
  const [region_data, setregion_data] = useState([]);
  const [candidate_data, setcandidate_data] = useState([]);
  const [general_data, setgeneral_data] = useState([{}]);
  const [result_data, setresult_data] = useState([{}]);
  const [languageName, setLanguageName] = useState(language)
  const [resultlang, setResulLang] = useState(resultsAmharic)
  const [constituencies_selected_data, setconstituencies_selected_data] = useState()
  const [region_selected_data, setregion_selected_data] = useState(false)
  const [region_selected_id, setregion_selected_id] = useState(false)
  const [active, setActive] = useState(false)
  const [values, setValues] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [hoprrsult, sethoprrsult] = useState([])
  const [winner_balot, setwinner_balot] = useState()
  const [regionid, setregionid] = useState(language)
  const [oprconstituencyid, setoprconstituencyid] = useState(language)


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] })

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
      "regionid": JSON.parse(regionid),
      "hoprconstituencyid": JSON.parse(oprconstituencyid),
      "no_of_pollingstation": JSON.parse(general_data[0]),
      "exclude_no_of_pollingstation": JSON.parse(general_data[1]),
      "q1": JSON.parse(general_data[3]),
      "q2": JSON.parse(general_data[6]),
      "q3": JSON.parse(general_data[7]),
      "q4": JSON.parse(general_data[8]),
      "q5": JSON.parse(general_data[9]),
      "q6": JSON.parse(general_data[10]),
      "q7": JSON.parse(general_data[11]),
      "q8": JSON.parse(general_data[12]),
      "q9": JSON.parse(general_data[13]),
      "hoprResults": result_data.slice(1,),
    "hoprax": winner_balot

    }
    var config = {
      url: `${process.env.REACT_APP_IP}/hopr_general/`,
      method: 'POST',
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
    setgeneral_data({ ...general_data, [e.target.name]: [e.target.value] })
    console.log(general_data)
  }

  const onChange_result_data = (e) => {
 
    var data =candidate_data[e.target.name]
    data.partyid=data.politicalpartyid
    data.votes=JSON.parse(e.target.value);
 
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
    for (var i = 1; i < candidate_data.length; i++) {
      if(candidate_data[i].fullname ==value)
      setwinner_balot(candidate_data[i])
     }
   
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
 
    setcandidate_data(response.data);
    
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

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
    }
  };

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
        <Form.Item
          name="ክልል/Region"
          label={"ክልል/Region"}
          rules={[
            {
              required: true,
              message: 'ክልል/Please input your Region!',
            },
          ]}
          hasFeedback
        >
          <Select onChange={onFinish}  type="text" mode="inline" style={{ width: '100%',}} placeholder={region_selected_data.regionname} >
          {region_data.map((id, ITEM) => (
              <Option key={ITEM} value={id.regionid}>{id.regionname}</Option>
          ))}
          </Select>
        </Form.Item>
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
  <Input type={item.type} name={index} onChange={onChange_general_data} />
</Form.Item>

))}
<Button type="primary" block onClick={() => setActive(true)}>
            ውጤቶች/RESULTS
          </Button></Card>
      </Form>
      <Modal title={<p style={{ fontSize: 0, color: '#6d55a4' }}>{resultlang[1].value}</p>} visible={active} onCancel={() => setActive(false)} onOk={() => setActive(false)} footer={null} width={1000}>
        <Form
          {...formItemLayout}
          name="register"
          scrollToFirstError
        >
          <Grid container spacing={2} style={{ marginBottom: '2%' }}>
            <Grid style={{ backgroundColor: '#6d55a4', color: 'white' }} item xs={6}>Party and Candidate name</Grid>
            <Grid style={{ backgroundColor: '#6d55a4', color: 'white' }} item xs={6}> Result </Grid>
          </Grid>
          
          {candidate_data.length ?
          <>{
           											

candidate_data.map((id, ITEM) => (
         <>
        
          <Form.Item
          name={id.fullname}
          label={id.fullname}
         
          rules={[
            {
              required: true,
              message: 'This field is required',
            }
          ]} 
        >  {id.name}
          {/* <Input type='number' name={item.value} placeholder={resultlang[2].value} onChange={onChange} /> */}
           <Input type='number' key={ITEM} name={ITEM} onChange={ onChange_result_data} />
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
          <Select onChange={onFinish_winner}  type="text" mode="inline" style={{ width: '100%',}} placeholder={region_selected_data.regionname} >
          {candidate_data.map((id, ITEM) => (
              <Option key={ITEM} value={id.fullname}>{id.fullname },{'/'},{ id.name}</Option>
          ))}
          </Select>
        </Form.Item>
   
        </Card>
        }</>:
        <> </>}
        </Form>
        <Button style={{ backgroundColor: '#6d55a4', color: 'white' }} onClick={ send_hopr_data}>
          Confirm and Save
        </Button>

      </Modal>

    </Card>
  )
}
