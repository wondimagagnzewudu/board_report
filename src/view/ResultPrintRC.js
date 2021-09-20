import React, { useState, useEffect } from "react";
import image from "./z_oxTrxq_400x400.jpg";
import { Form, Card, Input, Row, Col, Button } from "antd";
import { Parser } from "json2csv";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
export default function ResultPrintRC(props) {
  const [componentSize, setComponentSize] = useState("default");
  const [general, setgeneral] = useState([]);
  const [result, setResult] = useState([]);
  const [maximum, setMaximum] = useState([]);
  const [property_data, setproperty_data] = useState([]);
  const [property_data_winer, setproperty_data_winer] = useState([]);
  const variable_data = props.location.state.variable_data;
  // const variable_data = {
  //   approved: true,
  //   created_by: "exodus",
  //   exclude_no_of_pollingstation: 33333333,
  //   hoprconstituency: "Albuko",
  //   hoprconstituencyid: 134,
  //   id: 20019,
  //   no_of_pollingstation: 0,
  //   not_aproved: false,
  //   no_of_seat: 4,
  //   q1: 4,
  //   q2: 2,
  //   q3: 5,
  //   q4: 2,
  //   q5: 9,
  //   q6: 7,
  //   q7: 7,
  //   q8: 7,
  //   q9: 7,
  //   region: "Amhara",
  //   "result": [
  //     {
  //         "candidate": {
  //             "candidateid": 20125146086,
  //             "fullname": "CAAWA ACMAD",
  //             "politicalpartyid": 25,
  //             "name": "የአፋር ነፃ አውጪ ግንባር ፓርቲ"
  //         },
  //         "vote": 5555533
  //     },
  //     {
  //       "candidate": {
  //           "candidateid": 20125146086,
  //           "fullname": "CAAWA ACMAD",
  //           "politicalpartyid": 25,
  //           "name": "የአፋር ነፃ አውጪ ግንባር ፓርቲ"
  //       },
  //       "vote": 5555533
  //   }],
  //       "winners": [{
  //       "name": "CAAWA ACMAD",
  //       "vote": 5555533,
  //       "party": "የአፋር ነፃ አውጪ ግንባር ፓርቲ"
  //   }]
  //   }
    
    const get_the_csv1 = async (item) => {
  if (variable_data.result.length > 0) {
    var generale_results = variable_data.result;
    var generale_data = variable_data.winners;
    let properties = []
    let properties_win = []
    for (let i = 0; i < generale_results.length; i++) {
      properties= { " ": "", "   ": `${generale_results[i].candidate.fullname}/${generale_results[i].candidate.name}`, "    ": " ", "           ": '', "    ": generale_results[i].vote, "         ": '' };
      
      setproperty_data(property_data => [...property_data,properties] );
    }
    for (let j = 0; j < generale_data.length; j++) {
      properties_win= { " ": "", "   ": generale_data[j].name, "    ": " ", "           ": '', "    ": generale_data[j].party, "         ":''}
      setproperty_data_winer(property_data_winer => [...property_data_winer,properties_win] )
    }

    // setproperty_data_winer(property_data_winer => [...property_data_winer,properties_win] );
    // setproperty_data_winer(properties_win)
  }}
  
  const getGeneral = () => {
    try {
    } catch (e) { }
  };
  const getResult = () => {
    try {
    } catch (e) { }
  };

  const getMax = () => {
    try {
    } catch (e) { }
  };
  const get_the_csv = async (item) => {
    
    console.log('properties_win', property_data)
   const  language = [
      { " ": "", "   ": 'በምርጫ የኢትዮጵያ ብሔራዊ ምርጫ ቦርድ ', "    ": " ", "           ": '' },
      { " ": "", "   ": ' National Election Board Of Ethiopia ', "           ": '' },
      { " ": "", "   ": 'የምርጫ ክልል የውጤት ቅፅ', "           ": '' },
      { " ": "", "   ": 'የክልል ምክር ቤት ምርጫ', "           ": '' },
      { " ": "ክልል", "   ": variable_data.region, "    ": "ምርጫ ክልል ", "           ": variable_data.hoprconstituency },
      { " ": "", "   ": '', "": " ", "           ": '' },
      { " ": 1, "   ": 'በምርጫ ክልሉ ውስጥ የክልል ምክር ቤት መቀመጫዎች ብዛት', "    ": variable_data.no_of_seat, "           ": '' },
      { " ": 2, "   ": 'በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት', "    ": variable_data.no_of_pollingstation, "           ": '' },
      { "         ": "", " ": 3, "   ": 'ውጤት ላይ ያልተካተቱ የምርጫ ጣቢያዎች ቁጥር', "    ": variable_data.exclude_no_of_pollingstation, "           ": '' },
      // {"         ": "", " ": 4, "   ": 'ምክንያት', "           ":'' , "    ":" ",},
      { " ": 5, "   ": 'በምርጫ ክልሉ የተመዘገቡ አጠቃላይ የመራጮች ቁጥር', "           ":'', "    ":  variable_data.q1, },
      // {"         ": "", " ": 6, "   ": 'የመራጭ ፆታ ሴት', "           ":'' , "    ":" ",},
      // {"         ": "", " ": 7, "   ": 'የመራጭ ፆታ ወንድ', "           ":'', "    ":" ", },
      { " ": 8, "   ": ' በምርጫ ክልሉ ውስጥ የተቀበሉት ጠቅላላ የድምፅ መስጫ ወረቀቶች ብዛት', "           ": '', "    ": variable_data.q2, },
      { " ": 9, "   ": 'በምርጫ ክልሉ ውስጥ በመራጮች መዝገብ ላይ የተገኘ አጠቃላይ የመራጮች ፊርማ ብዛት', "           ": '', "    ": variable_data.q3, },
      { " ": 10, "   ": 'በምርጫ ክልሉ ውስጥ ጥቅም ላይ ያልዋሉ አጠቃላይ የድምፅ መስጫ ወረቀቶች ብዛት', "           ": '', "    ":variable_data.q4, },
      { " ": 11, "   ": 'በምርጫ ክልሉ ውስጥ አጠቃላይ የተበላሹ የድምፅ መስጫ ወረቀቶች ቁጥር', "           ": '', "    ":variable_data.q5, },
      { " ": 12, "   ": 'በምርጫ ክልሉ ውስጥ አጠቃላይ ከድምፅ መስጫ ሳጥን ውጭ የተገኙ የድምፅ መስጫ ወረቀቶች ብዛት', "           ": '', "    ":variable_data.q6, },
      { " ": 13, "   ": 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ ያላቸው የድምፅ መስጫ ወረቀቶች ብዛት', "           ":'', "    ":variable_data.q7, },
      { " ": 14, "   ": 'በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ የሌላቸው የድምፅ መስጫ ወረቀቶች ብዛት', "           ":'', "    ":variable_data.q8, },
      { " ": 15, "   ": 'በምርጫ ክልሉ ውስጥ አጠቃላይ ጊዜያዊ የድምፅ መስጫ ወረቀቶች ብዛት', "           ":'', "    ":variable_data.q9, },
      { " ": "", "   ": '', "           ": '', "    ": "ውጤቶች", },
      { " ": "", "   ": 'የፖለቲካ ፓርቲ እና እጩ /የግል ተወዳዳሪ ስም', "    ": "የተሰጠ ድምፅ ", "           ": '', "    ": "", "         ": " " },
    ]
    for (let i = 0; i < property_data.length; i++) {
      language.push(property_data[i])
    }
     
      language.push ({ " ": "", "   ": 'ከፍተኛ ድምፅ ያገኘ እጩ', "    ": " ", "           ": '', "    ": "", "         ": "" },
      { " ": "በድምፅ መስጫ ወረቀት ላይ ያለ የእጩ ተራ ቁጥር", "   ": 'የእጩ ስም', "    ": " ", "           ": '', "    ": "", "         ": "" },)
      for (let j = 0; j < property_data_winer.length; j++) {
        language.push(property_data_winer[j])
      }
     

      
    

    const fileName = "try";
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const ws = XLSX.utils.json_to_sheet(language);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };

    // const excelBuffer = XLSX.insert_image(image)
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);



  };
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  useEffect(() => {
    get_the_csv1();
    setTimeout(() => {
      get_the_csv()
    }, 50);
  });

  return (
    <div className="vote-container" style={{ marginBottom: 10 }}>
      <Card hoverable style={{ justifyContent: 'center', backgroundColor: 'white', height: 'auto', marginTop: '2%' }}>
        <div>
         
          <div className="vote-header-container-2">
            <img src={image} style={{ width: 100, height: 100 }} />
            <div className="vote-header-container">
              <p className="vote-header">የኢትዮጵያ ብሔራዊ ምርጫ ቦርድ</p>
              <p className="vote-header-1">National Election Board Of Ethiopia</p>
              <p className="vote-header-2">የምርጫ ክልል ውጤት ቅጽ</p>
              <p className="vote-header-2">የክልል ምክር ቤት ምርጫ</p>
            </div>
          </div>
          <Form
            layout="horizontal"
            style={{ marginLeft: "20%", width: "60%", justifyContent: 'center', marginTop: "2%" }}
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={5}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                <p>ክልል</p>
              </Col>
              <Col
                span={5}
                order={2}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
                
              >
                 <p>{variable_data.region}</p>
              </Col>
              <Col
                span={5}
                order={3}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                <p>ምርጫ ክልል</p>
              </Col>
              <Col span={5} order={4} offset={1}>
              <p>{variable_data.hoprconstituency}</p>
              </Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                በምርጫ ክልሉ ውስጥ የክልል ምክር ቤት መቀመጫዎች ብዛት
              </Col>
              <Col span={5} order={2} offset={1}> <p>{variable_data.no_of_seat}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{variable_data.no_of_pollingstation}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                ውጤት ላይ ያልተካተቱ የምርጫ ጣቢያዎች ቁጥር
              </Col>
                <Col span={5} order={2} offset={1}> <p>{variable_data.exclude_no_of_pollingstation}</p></Col>
            </Row>
            <br />
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                1. በምርጫ ክልሉ የተመዘገቡ አጠቃላይ የመራጮች ቁጥር
              </Col>
              
                <Col span={5} order={2} offset={1}>{variable_data.q1} </Col>
                
                
            </Row>
            
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                2.  በምርጫ ክልሉ ውስጥ የተቀበሉት ጠቅላላ የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{variable_data.q2}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                3.በምርጫ ክልሉ ውስጥ በመራጮች መዝገብ ላይ የተገኘ አጠቃላይ የመራጮች ፊርማ ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{variable_data.q3}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                4.በምርጫ ክልሉ ውስጥ ጥቅም ላይ ያልዋሉ አጠቃላይ የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{variable_data.q4}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                5. በምርጫ ክልሉ ውስጥ አጠቃላይ የተበላሹ የድምፅ መስጫ ወረቀቶች ቁጥር
              </Col>
                <Col span={5} order={2} offset={1}> <p>{variable_data.q5}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                6. በምርጫ ክልሉ ውስጥ አጠቃላይ ከድምፅ መስጫ ሳጥን ውጭ የተገኙ የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{variable_data.q6}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                7. በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ ያላቸው የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{variable_data.q7}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                8. በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ የሌላቸው የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{variable_data.q8}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                9. በምርጫ ጣቢያ ውስጥ የተመዘገቡ መራጮች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{variable_data.q9}</p></Col>
            </Row>
            <br />
            <p style={{ textAlign: "center", margin: 0 }}>ውጤቶች</p>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={1}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                #
              </Col>
              <Col
                span={15}
                order={2}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                <p style={{ textAlign: "center" }}>የፖለቲካ ፓርቲ እና እጩ</p>
              </Col>
              <Col span={5} order={3} offset={1}>የተሰጠ ድምፅ</Col>
            </Row>
            {
              variable_data.result.map((item, index) => (
                <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={1}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
               {index+1}
              </Col>
              <Col
                span={15}
                order={2}
                style={{
                  borderRightStyle: "solid",
                  borderWidth: 1,
                  paddingLeft: "2%",
                }}
              >
                {item.candidate.fullname}({item.candidate.name})
              </Col>
              <Col span={5} order={3} offset={1}> {item.vote}</Col>
             
            </Row>
              ))
            }
            
            <br />
            <p style={{ textAlign: "left", margin: 0 }}>ከፍተኛ ድምጽ ያላቸው እጩዎች</p>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
            <Col
                span={1}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                #
              </Col>
              <Col
                span={15}
                order={2}
                style={{
                  borderRightStyle: "solid",
                  borderWidth: 1,
                  paddingLeft: "2%",
                }}
              >
               የእጩ ስም
              </Col>
              <Col span={5} order={3} offset={1}>የፖለቲካ ፓርቲ/የግል ተወዳዳሪ ስም</Col>
            </Row>
            {
              variable_data.winners.map((item, index) => (
                <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={1}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
               {index+1}
              </Col>
              <Col
                span={15}
                order={2}
                style={{
                  borderRightStyle: "solid",
                  borderWidth: 1,
                  paddingLeft: "2%",
                }}
              >
                {item.name}
              </Col>
              <Col span={5} order={3} offset={1}> {item.party}</Col>
             
            </Row>
              ))
            }
           
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "2%",
              }}
            >
              <p style={{ padding: "4%" }}>ማስታወሻ</p>
              <p
                style={{
                  borderStyle: "solid",
                  borderWidth: 1,
                  width: "100%",
                  height: 100,
                }}
              > የእጩዎች ድምጽ ድምር ≤ የክልሉ መቀመጫ ሁለት ({variable_data.no_of_seat}) x ዋጋ ያላቸው ድምጽ መስጫ ወረቀቶች 
            
                ከአሸናፊ እጩዎች ዝቅተኛውን ድምጽ ያገኘው እጩ ያገኘው ድምጽ 23757 ሲሆን ቀጣዩን ትልቁን ድምጽ ያገኘው እጩ 2585 ነው፡፡ በሁለቱ እጩዎች መሀል የ 21172 ድምጽ ልዩነት አለ፡፡
                ለምርጫ ክልሉ የደረሰው አጠቃላይ የድምጽ መስጫ ወረቀት ብዛት  በድምጽ መስጫ ቀን በድምጽ መስጫ ሳጥን ውስጥ እና ውጪ ከተገኘው በ 273 ይበልጣል ፡፡</p>
            </div>
            <br />
            <br />
            <div className="signiture-container">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>የዴታ ኢንኮደር ስም ፡: ______________________________________የሱፐርቫይዘር ስም: _______________________________</p>
                <p>ፊርማ: _________________________________________________ፊርማ: ______________________________________</p>
              </div>
              <div>
                <p>የኢትዮጵያ ብሔራዊ ምርጫ ቦርድ በአዋጅ ቁጥር 1133/2011 አንቀጽ 7 ንዑስ አንቀጽ 18 የምርጫ ውጤቶችን ለማረጋግጥ እና ይፋ ለማድረግ በተሰጠው ስልጣን መሰረት ይዚህንውጤት ትክክለኛነት አረጋግጦ ይፋ አድርጓል። </p>
                <p>___________________________________</p>
                <p>ብርቱካን ሚደቅሳ</p>
                <p>የኢትዮጵያ ብሔራዊ ምርጫ ቦርድ ሰብሳቢ</p>
              </div>
            </div>
          </Form>
        </div>
      </Card>
    </div>
  );
}
