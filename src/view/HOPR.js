import React, {useState} from 'react'
import { Form, Input, Cascader, Select, Modal, Button, AutoComplete, Card } from 'antd';
import {Grid} from '@material-ui/core'


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
      {id: 1, value: 'የፖለቲካ ፓርቲ እና እጩ /የግል ተወዳዳሪ ስም' },
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
      {id: 4, value: 'ምርጫ ክልል'},
      {id: 5, value: 'በምርጫ ክልሉ ውስጥ የክልል ምክር ቤት መቀመጫዎች ብዛት',},
      {id: 6, value: 'በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት', },
      {id: 7, value: 'ውጤት ላይ ያልተካተቱ የምርጫ ጣቢያዎች ቁጥር'},
      {id: 8, value: 'በምርጫ ክልሉ የተመዘገቡ አጠቃላይ የመራጮች ቁጥር', },
      {id: 9, value: ' በምርጫ ክልሉ ውስጥ የተቀበሉት ጠቅላላ የድምፅ መስጫ ወረቀቶች ብዛት', },
      {id: 10, value: 'በምርጫ ክልሉ ውስጥ በመራጮች መዝገብ ላይ የተገኘ አጠቃላይ የመራጮች ፊርማ ብዛት', },
      {id: 11, value: 'በምርጫ ክልሉ ውስጥ ጥቅም ላይ ያልዋሉ አጠቃላይ የድምፅ መስጫ ወረቀቶች ብዛት', },
      {id: 12,value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ የተበላሹ የድምፅ መስጫ ወረቀቶች ቁጥር', },
      {id: 13, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ከድምፅ መስጫ ሳጥን ውጭ የተገኙ የድምፅ መስጫ ወረቀቶች ብዛት', },
      {id: 14, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ ያላቸው የድምፅ መስጫ ወረቀቶች ብዛት', },
      {id: 15, value: 'በምርጫ ክልሉ ውስጥ አጠቃላይ ጊዜያዊ የድምፅ መስጫ ወረቀቶች ብዛት',}
  ]
  const languageEnglish = [
    {id: 1,  value: 'CONSTITUENCY RESULTS FORM'}, 
    {id: 2,  value: 'Regional Council Election'}, 
    {id: 3,  value: 'Region'},
    {id: 4,  value: 'Constituency'},
    {id: 5,  value: 'Number of Regional Council seats in the constituency'},
    {id: 6,  value: 'Number of polling stations in the constituency'},
    {id: 7,  value: 'Number of polling stations exclused from the results'},
    {id: 8,  value: 'Total number of registered voters in the constituency'},
    {id: 9,  value: 'Total number of ballot papers received in the constituency'},
    {id: 10,  value: 'Total number of signatures on the Electoral Roll in the constituency'},
    {id: 11,  value: 'Total number of unused ballot papers in the constituency'},
    {id: 12, value: 'Total number of spoiled ballot papers in the constituency'},
    {id: 13, value: 'Total number of stray ballot papers in the constituency'},
    {id: 14, value: 'Total number of invalid ballot papers in the constituency'},
    {id: 15, value: 'Total number of provisional ballot papers in the constituency'}
]

export default function HOPR() {
    const [form] = Form.useForm();

    const [languageName, setLanguageName] = useState(language)
    const [resultlang, setResulLang] = useState(resultsAmharic)
    const [active, setActive] = useState(false)
    const [values, setValues] = useState({})
     
    const onChange =(e) =>{
      setValues({...values, [e.target.name]: [e.target.value]})
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
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }

      const listt = []
      for (let j = 0; j<13; j++){
        listt.push(j)
      }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    return (
        <Card hoverable style={{backgroundColor: '#6d55a4'}}>
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
                <Select placeholder={languageName[2].value} type="text" mode="inline" style={{ width: '100%' , color: 'white'}} onChange={handleChange}>
                {children}
                </Select>
            </Form.Item>

            <Form.Item
                name="ምርጫ ክልል/Constituency"
                label={languageName[3].value}
                rules={[
                {
                    required: true,
                    message: 'ምርጫ ክልል/Please input your Constituency!',
                },
                ]}
                hasFeedback
            >
                 <Select type="text" mode="inline" style={{ width: '100%', color: 'white' }} placeholder={languageName[3].value} onChange={handleChange}>
                {children}
                </Select>
            </Form.Item>
            <Card hoverable >

            {languageName.slice(5, ).map((item, index) =>(
              
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
                <Input type='number' name={item.value}  onChange={onChange} />
            </Form.Item>

            ))}
            <Button type="primary" block onClick={() => setActive(true)}>
            ውጤቶች/RESULTS
            </Button>
            </Card>
            </Form>
            <Modal title={<p style={{fontSize: 20, color: '#6d55a4'}}>{resultlang[1].value}</p>} visible={active} onCancel={() => setActive(false)} onOk={() => setActive(false)} footer={null} width={1000}>
            <Form
            {...formItemLayout}
              name="register"
              scrollToFirstError
              >
                <Grid container spacing={2} style={{marginBottom: '2%'}}>
                    <Grid style={{backgroundColor: '#6d55a4', color: 'white'}} item xs={6}>{resultlang[0].value}</Grid>
                    <Grid style={{backgroundColor: '#6d55a4', color: 'white'}} item xs={6}>{resultlang[2].value}</Grid>
                </Grid>
                {listt.slice(1, ).map((item, index) =>(
                  <Form.Item
                  name={item}
                  label={item}
                  hasFeedback
                  rules={[
                  {
                      required: true,
                      message: 'This field is required',
                  }
                  ]}
              >
                  <Input type='number' name={item.value} placeholder={resultlang[2].value}  onChange={onChange} />
              </Form.Item>

                ))}
              </Form>
              <Button style={{backgroundColor: 'green', color: 'white'}} onPress={() => setActive(false)}>
                Confirm and Save
              </Button>

            </Modal>
            
        </Card>
    )
}
