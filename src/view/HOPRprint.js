import React, { useState, useEffect } from "react";
import image from "./z_oxTrxq_400x400.jpg";
import { Form, Card, Input, Row, Col, Button } from "antd";


class HOPRprint extends React.PureComponent {

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
                <p className="vote-header-2">የህዝብ ተወካዮች ምክር ቤት ምርጫ</p>
              </div>
            </div>
            <Form
              layout="horizontal"
              style={{ width: "80%", justifyContent: 'center', marginTop: "2%", marginLeft: '10%' }}
              initialValues={{
                size: "default",
              }}

              size='small'
            >
              <Row className="row-st">
                <Col
                  span={5}
                  order={1}
                  className="colon-syle"                >
                  <p>ክልል</p>
                </Col>
                <Col
                  span={5}
                  order={2}
                  className="colon-syle"                >
                  <p>{this.props.data.variable_data.region}</p>
                </Col>
                <Col
                  span={5}
                  order={3}
                  className="colon-syle">
                  <p>ምርጫ ክልል</p>
                </Col>
                <Col span={5} order={4} offset={1}>
                  <p>{this.props.data.variable_data.hoprconstituency}</p>
                </Col>
              </Row>

              <Row className="row-st">
                <Col
                  span={15}
                  order={1}
                  className="colon-syle"                >

                  በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት
                </Col>
                <Col span={5} order={2} offset={2}> <p style={{ textAlign: 'right', paddingRight: 5 }}>{this.props.data.variable_data.no_of_pollingstation}</p></Col>
              </Row>
              <Row className="row-st">
                <Col
                  span={15}
                  order={1}
                  className="colon-syle"                >

                  ውጤት ላይ ያልተካተቱ የምርጫ ጣቢያዎች ቁጥር
                </Col>
                <Col span={5} order={2} offset={2}> <p style={{ textAlign: 'right', paddingRight: 5 }}>{this.props.data.variable_data.exclude_no_of_pollingstation}</p></Col>
              </Row>
              <br />
              <Row className="row-st">
                <Col
                  span={21}
                  order={1}
                  className="colon-syle" >
                  1. በምርጫ ክልሉ የተመዘገቡ አጠቃላይ የመራጮች ቁጥር
                </Col>
                <Col span={1} order={2} offset={2}> <p style={{ textAlign: 'right', paddingRight: 5 }}>{this.props.data.variable_data.q1}</p> </Col>
              </Row>

              <Row className="row-st">
                <Col
                  span={21}
                  order={1}
                  className="colon-syle">
                  2. በምርጫ ክልሉ ውስጥ የተቀበሉት ጠቅላላ የድምፅ መስጫ ወረቀቶች ብዛት
                </Col>
                <Col span={1} order={2} offset={2}> <p style={{ textAlign: 'right', paddingRight: 5 }}>{this.props.data.variable_data.q2}</p></Col>
              </Row>
              <Row className="row-st">
                <Col
                  span={21}
                  order={1}
                  className="colon-syle"                >

                  3. በምርጫ ክልሉ ውስጥ በመራጮች መዝገብ ላይ የተገኘ አጠቃላይ የመራጮች ፊርማ ብዛት
                </Col>
                <Col span={1} order={2} offset={2}> <p style={{ textAlign: 'right', paddingRight: 5 }}>{this.props.data.variable_data.q3}</p></Col>
              </Row>
              <Row className="row-st">
                <Col
                  span={21}
                  order={1}
                  className="colon-syle"                >

                  4. በምርጫ ክልሉ ውስጥ ጥቅም ላይ ያልዋሉ አጠቃላይ የድምፅ መስጫ ወረቀቶች ብዛት
                </Col>
                <Col span={1} order={2} offset={2}> <p style={{ textAlign: 'right', paddingRight: 5 }}>{this.props.data.variable_data.q4}</p></Col>
              </Row>
              <Row className="row-st">
                <Col
                  span={21}
                  order={1}
                  className="colon-syle"                >

                  5. በምርጫ ክልሉ ውስጥ አጠቃላይ የተበላሹ የድምፅ መስጫ ወረቀቶች ቁጥር
                </Col>
                <Col span={1} order={2} offset={2}> <p style={{ textAlign: 'right', paddingRight: 5 }}>{this.props.data.variable_data.q5}</p></Col>
              </Row>
              <Row className="row-st">
                <Col
                  span={21}
                  order={1}
                  className="colon-syle"                >

                  6. በምርጫ ክልሉ ውስጥ አጠቃላይ ከድምፅ መስጫ ሳጥን ውጭ የተገኙ የድምፅ መስጫ ወረቀቶች ብዛት
                </Col>
                <Col span={1} order={2} offset={2}> <p style={{ textAlign: 'right', paddingRight: 5 }}>{this.props.data.variable_data.q6}</p></Col>
              </Row>
              <Row className="row-st">
                <Col
                  span={21}
                  order={1}
                  className="colon-syle"                >

                  7. በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ ያላቸው የድምፅ መስጫ ወረቀቶች ብዛት
                </Col>
                <Col span={1} order={2} offset={2}> <p style={{ textAlign: 'right', paddingRight: 5 }}>{this.props.data.variable_data.q7}</p></Col>
              </Row>
              <Row className="row-st">
                <Col
                  span={21}
                  order={1}
                  className="colon-syle"                >

                  8. በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ የሌላቸው የድምፅ መስጫ ወረቀቶች ብዛት
                </Col>
                <Col span={1} order={2} offset={2}> <p style={{ textAlign: 'right', paddingRight: 5 }}>{this.props.data.variable_data.q8}</p></Col>
              </Row>
              <Row className="row-st">
                <Col
                  span={21}
                  order={1}
                  className="colon-syle"                >

                  9. በምርጫ ጣቢያ ውስጥ የተመዘገቡ መራጮች ብዛት
                </Col>
                <Col span={1} order={2} offset={2}> <p style={{ textAlign: 'right', paddingRight: 5 }}>{this.props.data.variable_data.q9}</p></Col>
              </Row>
              <br />
              <p style={{ textAlign: "center", margin: 0, fontWeight: 'bold' }}>ውጤቶች</p>
              <Row className="row-st">
                <Col
                  span={1}
                  order={1}
                  className="colon-syle" >
                  <p>no</p>
                </Col>
                <Col
                  span={20}
                  order={2}
                  style={{ borderRightStyle: "solid", borderWidth: 1 }}
                >
                  <p>የፖለቲካ ፓርቲ እና እጩ</p>
                </Col>
                <Col span={2} order={3} offset={1}>የተሰጠ ድምፅ</Col>
              </Row>
              {this.props.data.variable_data.result.map((item, index) => (
                <Row className="row-st">
                  <Col
                    span={1}
                    order={1}
                    className="colon-syle"                     >
                    <p>{index + 1}</p>
                  </Col>
                  <Col
                    span={20}
                    order={2}
                    className="colon-syle">{item.candidate.fullname}({item.candidate.name})                   </Col>
                  <Col span={1} order={3} offset={2}><p style={{ textAlign: 'right', paddingRight: 5 }}>{item.vote}</p></Col>
                </Row>
              ))}
              <br />
              <p style={{ textAlign: "center", margin: 0, fontWeight: 'bold' }}>ከፍተኛ ድምጽ ያላቸው እጩዎች</p>
              <Row className="row-st">
                <Col
                  span={15}
                  order={2}
                  className="colon-syle"
                >
                  የእጩ ስም
                </Col>
                <Col span={5} order={3} offset={1}><p>የፖለቲካ ፓርቲ/የግል ተወዳዳሪ ስም</p></Col>
              </Row>
              <Row className="row-st">
                <Col
                  span={15}
                  order={2}
                  className="colon-syle">
                  {this.props.data.variable_data.winners.name}
                </Col>
                <Col span={5} order={3} offset={1}><p>{this.props.data.variable_data.winners.party}</p></Col>

              </Row>
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
                <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-around' }}>
                  <div >
                    <p>የዴታ ኢንኮደር ስም ፡: ______________________________________</p>
                    <p>ፊርማ: _________________________________________________</p>
                  </div>
                  <div>
                    <p>የሱፐርቫይዘር ስም: _______________________________</p>
                    <p>ፊርማ: _________________________________________________</p>
                  </div>
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                  <p>የኢትዮጵያ ብሔራዊ ምርጫ ቦርድ በአዋጅ ቁጥር 1133/2011 አንቀጽ 7 ንዑስ አንቀጽ 18 የምርጫ ውጤቶችን ለማረጋግጥ እና ይፋ ለማድረግ በተሰጠው ስልጣን መሰረት ይዚህንውጤት ትክክለኛነት አረጋግጦ ይፋ አድርጓል። </p>
                  <br />
                  <p style={{ alignText: 'center' }}>___________________________________</p>
                  <p style={{ alignText: 'center' }}>ብርቱካን ሚደቅሳ</p>
                </div>
              </div>
            </Form>
          </div>
        </Card >
      </div >
    );
  }
}
export default HOPRprint
