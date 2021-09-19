import React, { useState, useEffect } from "react";
import image from "./z_oxTrxq_400x400.jpg";
import { Form, Card, Input, Row, Col, Button } from "antd";


  class Rcprint extends React.PureComponent {
 
    render() {
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
              size: "default",
            }}
            
            size={"default"}
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
                 <p>{this.props.data.variable_data.region}</p>
              </Col>
              <Col
                span={5}
                order={3}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                <p>ምርጫ ክልል</p>
              </Col>
              <Col span={5} order={4} offset={1}>
              <p>{this.props.data.variable_data.hoprconstituency}</p>
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
              <Col span={5} order={2} offset={1}> <p>{this.props.data.variable_data.no_of_seat}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{this.props.data.variable_data.no_of_pollingstation}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                ውጤት ላይ ያልተካተቱ የምርጫ ጣቢያዎች ቁጥር
              </Col>
                <Col span={5} order={2} offset={1}> <p>{this.props.data.variable_data.exclude_no_of_pollingstation}</p></Col>
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
              
                <Col span={5} order={2} offset={1}>{this.props.data.variable_data.q1} </Col>
                
                
            </Row>
            
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                2.  በምርጫ ክልሉ ውስጥ የተቀበሉት ጠቅላላ የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{this.props.data.variable_data.q2}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                3.በምርጫ ክልሉ ውስጥ በመራጮች መዝገብ ላይ የተገኘ አጠቃላይ የመራጮች ፊርማ ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{this.props.data.variable_data.q3}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                4.በምርጫ ክልሉ ውስጥ ጥቅም ላይ ያልዋሉ አጠቃላይ የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{this.props.data.variable_data.q4}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                5. በምርጫ ክልሉ ውስጥ አጠቃላይ የተበላሹ የድምፅ መስጫ ወረቀቶች ቁጥር
              </Col>
                <Col span={5} order={2} offset={1}> <p>{this.props.data.variable_data.q5}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                6. በምርጫ ክልሉ ውስጥ አጠቃላይ ከድምፅ መስጫ ሳጥን ውጭ የተገኙ የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{this.props.data.variable_data.q6}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                7. በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ ያላቸው የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{this.props.data.variable_data.q7}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                8. በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ የሌላቸው የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{this.props.data.variable_data.q8}</p></Col>
            </Row>
            <Row style={{ borderStyle: "solid", width: "100%", borderWidth: 1 }}>
              <Col
                span={15}
                order={1}
                style={{ borderRightStyle: "solid", borderWidth: 1 }}
              >
                9. በምርጫ ጣቢያ ውስጥ የተመዘገቡ መራጮች ብዛት
              </Col>
                <Col span={5} order={2} offset={1}> <p>{this.props.data.variable_data.q9}</p></Col>
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
              this.props.data.variable_data.result.map((item, index) => (
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
              this.props.data.variable_data.winners.map((item, index) => (
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
              > የእጩዎች ድምጽ ድምር ≤ የክልሉ መቀመጫ ሁለት ({this.props.data.variable_data.no_of_seat}) x ዋጋ ያላቸው ድምጽ መስጫ ወረቀቶች 
            
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
}
export default Rcprint
