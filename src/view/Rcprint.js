import React, { useState, useEffect } from "react";
import image from "./z_oxTrxq_400x400.jpg";
import { Form, Card, Input, Row, Col, Button } from "antd";


class Rcprint extends React.PureComponent {

  render() {
    console.log(this.props)
    return (
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
            style={{ width: "80%", justifyContent: 'center', marginTop: "2%", marginLeft: '10%' }}
            initialValues={{
              size: "default",
            }}

            size="small"
          >
            <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
              <Col
                span={8}
                order={1}
                className="colon-syle"
              >
                ክልል
              </Col>
              <Col
                span={5}
                order={2}
                className="colon-syle"
              >
                {this.props.data.variable_data.region}
              </Col>
              <Col
                span={4}
                order={3}
                className="colon-syle"
              >
                ምርጫ ክልል
              </Col>
              <Col span={5} order={4} offset={1} className="colon-syle" style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '1%', borderLeftStyle: 'none', borderRightStyle: 'none' }}>
                {this.props.data.variable_data.rcconstituencyname}
              </Col>
            </Row>
            <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
              <Col
                span={21}
                order={1}
                className="colon-syle"
              >
                በምርጫ ክልሉ ውስጥ የክልል ምክር ቤት መቀመጫዎች ብዛት
              </Col>
              <Col span={1} order={2} offset={2}>{this.props.data.variable_data.no_of_seat}</Col>
            </Row>
            <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
              <Col
                span={21}
                order={1}
                className="colon-syle"
              >
                በምርጫ ክልሉ ውስጥ የሚገኙ የምርጫ ጣቢያዎች ብዛት
              </Col>
              <Col span={1} order={2} offset={2}> {this.props.data.variable_data.no_of_pollingstation}</Col>
            </Row>
            <Row className="row-st" >
              <Col
                span={21}
                order={1}
                className="colon-syle"
              >
                ውጤት ላይ ያልተካተቱ የምርጫ ጣቢያዎች ቁጥር
              </Col>
              <Col span={1} order={2} offset={2}>{this.props.data.variable_data.exclude_no_of_pollingstation}</Col>
            </Row>
            <br />
            <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
              <Col
                span={20}
                order={1}
                className="colon-syle"
              >
                1. በምርጫ ክልሉ የተመዘገቡ አጠቃላይ የመራጮች ቁጥር
              </Col>
              <Col span={2} order={2} offset={2} style={{display: 'flex', textAlign: 'right',paddingRight: '3%' }}>{this.props.data.variable_data.q1}</Col>
            </Row>

            <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
              <Col
                span={20}
                order={1}
                className="colon-syle"
              >
                2.  በምርጫ ክልሉ ውስጥ የተቀበሉት ጠቅላላ የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
              <Col span={2} order={2} offset={2} style={{display: 'flex', textAlign: 'right',paddingRight: '3%' }} >{this.props.data.variable_data.q2}</Col>
            </Row>
            <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
              <Col
                span={20}
                order={1}
                className="colon-syle"
              >
                3. በምርጫ ክልሉ ውስጥ በመራጮች መዝገብ ላይ የተገኘ አጠቃላይ የመራጮች ፊርማ ብዛት
              </Col>
              <Col span={2} order={2} offset={2} style={{display: 'flex', textAlign: 'right',paddingRight: '3%' }}>{this.props.data.variable_data.q3}</Col>
            </Row>
            <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
              <Col
                span={20}
                order={1}
                className="colon-syle"              >
                4. በምርጫ ክልሉ ውስጥ ጥቅም ላይ ያልዋሉ አጠቃላይ የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
              <Col span={2} order={2} offset={2} style={{display: 'flex', textAlign: 'right',paddingRight: '3%' }}>{this.props.data.variable_data.q4}</Col>
            </Row>
            <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
              <Col
                span={20}
                order={1}
                className="colon-syle"              >
                5. በምርጫ ክልሉ ውስጥ አጠቃላይ የተበላሹ የድምፅ መስጫ ወረቀቶች ቁጥር
              </Col>
              <Col span={2} order={2} offset={2} style={{display: 'flex', textAlign: 'right',paddingRight: '3%' }}> {this.props.data.variable_data.q5}</Col>
            </Row>
            <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
              <Col
                span={20}
                order={1}
                className="colon-syle"
              >
                6. በምርጫ ክልሉ ውስጥ አጠቃላይ ከድምፅ መስጫ ሳጥን ውጭ የተገኙ የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
              <Col span={2} order={2} offset={2} style={{display: 'flex', textAlign: 'right',paddingRight: '3%' }}> {this.props.data.variable_data.q6}</Col>
            </Row>
            <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
              <Col
                span={20}
                order={1}
                className="colon-syle"
              >
                7. በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ ያላቸው የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
              <Col span={2} order={2} offset={2} style={{display: 'flex', textAlign: 'right',paddingRight: '3%' }}> {this.props.data.variable_data.q7}</Col>
            </Row>
            <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
              <Col
                span={20}
                order={1}
                className="colon-syle"
              >
                8. በምርጫ ክልሉ ውስጥ አጠቃላይ ዋጋ የሌላቸው የድምፅ መስጫ ወረቀቶች ብዛት
              </Col>
              <Col span={2} order={2} offset={2} style={{display: 'flex', textAlign: 'right',paddingRight: '3%' }}> {this.props.data.variable_data.q8}</Col>
            </Row>
            <Row className="row-st" >
              <Col
                span={20}
                order={1}
                className="colon-syle"
              >
                9. በምርጫ ጣቢያ ውስጥ የተመዘገቡ መራጮች ብዛት
              </Col>
              <Col span={2} order={2} offset={2} style={{display: 'flex', textAlign: 'right',paddingRight: '3%' }}> {this.props.data.variable_data.q9}</Col>
            </Row>
            <br />
            <p style={{ textAlign: "center", margin: 0, fontWeight: 'bold' }}>ውጤቶች</p>
            <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
              <Col
                span={1}
                order={1}
                className="colon-syle"
              >
                ቁ
              </Col>
              <Col
                span={20}
                order={2}
                className="colon-syle"
              >
                <p style={{ width: '100%' }}>የፖለቲካ ፓርቲ እና እጩ</p>
              </Col>
              <Col span={1} order={3} offset={2}>የተሰጠ ድምፅ</Col>
            </Row>
            <div style={{ borderBottomStyle: 'solid', borderWidth: 1 }}>
              {this.props.data.variable_data.result.map((item, index) => (
                <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
                  <Col
                    span={1}
                    order={1}
                    className="colon-syle"
                  >
                    {index + 1}
                  </Col>
                  <Col
                    span={20}
                    order={2}
                    className="colon-syle"
                  >
                    {item.candidate.fullname}({item.candidate.name})
                  </Col>
                  <Col span={1} order={3} offset={2} style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 5 }}> {item.vote}</Col>

                </Row>
              ))}
            </div>

            <br />
            <p style={{ textAlign: "center", margin: 0, fontWeight: 'bold' }}>ከፍተኛ ድምጽ ያላቸው እጩዎች</p>
            <Row className="row-st" style={{ width: '100%', borderBottomStyle: 'none' }}>
              <Col
                span={1}
                order={1}
                className="colon-syle"
              >
                ቁ
              </Col>
              <Col
                span={15}
                order={1}
                className="colon-syle"
              >
                የእጩ ስም
              </Col>
              <Col span={5} order={3} offset={1} style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '1%' }}>የፖለቲካ ፓርቲ/የግል ተወዳዳሪ ስም</Col>
            </Row>
            <div style={{ borderBottomStyle: 'solid', borderWidth: 1 }}>
              {this.props.data.variable_data.winners.map((item, index) => (
                <Row className="row-st" style={{ borderBottomStyle: 'none' }}>
                  <Col
                    span={1}
                    order={1}
                    className="colon-syle"
                  >
                    {index + 1}
                  </Col>
                  <Col
                    span={15}
                    order={2}
                    className="colon-syle"
                  >
                    {item.name}
                  </Col>
                  <Col span={7} order={3} offset={1} style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '1%' }}> {item.party}</Col>

                </Row>
              ))}
            </div>

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
                  textAlign: 'left',
                  padding: '1%'
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
              <div>
                <p>የኢትዮጵያ ብሔራዊ ምርጫ ቦርድ በአዋጅ ቁጥር 1133/2011 አንቀጽ 7 ንዑስ አንቀጽ 18 የምርጫ ውጤቶችን ለማረጋግጥ እና ይፋ ለማድረግ በተሰጠው ስልጣን መሰረት ይዚህንውጤት ትክክለኛነት አረጋግጦ ይፋ አድርጓል። </p>
                <br />
                <p>___________________________________</p>
                <p>ብርቱካን ሚደቅሳ</p>
              </div>
            </div>
          </Form>
        </div>
      </Card >
    );
  }
}
export default Rcprint
