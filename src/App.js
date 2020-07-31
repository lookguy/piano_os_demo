import React from 'react';
import Menu from "./components/header/index"
import Gfooter from "./components/footer/index"
import logo from "./static/img/logo.png"
import Fill_out_a_form from "./static/icons/Fill_out_a_form.png"
import Test_registration from "./static/icons/Test_registration.png"
import "./App.scss";
import { Layout, Button, Carousel, Card, Row, Col } from 'antd';
import config from "./static/config"
const { Header, Footer, Content } = Layout;
const { Meta } = Card;

function App() {
  return (
    <Layout className="gq_layout">
      <Header className="header_custom">
        <img className="logo" src={logo} alt="" />
        <Menu />
        <Button className="gq_btn" ghost >登录</Button>
      </Header>
      <Content>
        <Carousel effect="fade" autoplay={true}>
          <img src={require("./static/banner/index_banner1.jpg")} alt="" />
          <img src={require("./static/banner/index_banner2.jpg")} alt="" />
          <img src={require("./static/banner/index_banner3.jpg")} alt="" />
        </Carousel>
        <div className="booth">
          <Row justify="center">
            <Col className="gq_width">
              <h3 className="title sub">PROFESSIONAL TEACHERS MUST PASS A STRICT AUDIT</h3>
              <h2 className="title desc">专业教师必须经过严格审核</h2>
            </Col>
            <Col className="gq_width">
              <div className="quick_entry">
                <div className="quick_item">
                  <img src={Test_registration} alt="" />
                  <div className="quick_item_title">
                    <h3>考试报名</h3>
                    <p>在线考试报名</p>
                  </div>
                </div>
                <div className="quick_item">
                  <img src={Fill_out_a_form} alt="" />
                  <div className="quick_item_title">
                    <h3>成绩查询</h3>
                    <p>在线查询成绩</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="booth clearPadding">
          <img className="booth_img_big" src={require("./static/banner/banner2.webp")} alt="" />
        </div>
        <div className="booth">
          <Row justify="center">
            <Col className="gq_width">
              <h3 className="title sub">ASSOCIATION FOR INFORMATION</h3>
              <h2 className="title desc">协会资讯</h2>
            </Col>
            <Col className="gq_width">
              <div className="infomation_warp">
                <Card
                  hoverable
                  className="card_infomation"
                  cover={<div className="card_img_wrap"><img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /></div>}
                >
                  <Meta style={{ textAlign: "left" }} title="2019国际钢琴教师协会主办国际钢琴教学法大师班圆满落幕" description="2019.10.26" />
                </Card>
                <Card
                  hoverable
                  className="card_infomation"
                  cover={<div className="card_img_wrap"><img alt="example" src={Fill_out_a_form} /></div>}
                >
                  <Meta style={{ textAlign: "left" }} title="喜讯∣国际钢琴教师协会荣膺“全国5A级社会组织”称号" description="2019.10.26" />
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <div className="booth" style={{ background: "white" }}>
          <Row justify="center">
            <Col className="gq_width">
              <h3 className="title sub">ASSOCIATION ACTIVITIES</h3>
              <h2 className="title desc">协会活动</h2>
            </Col>
            <Col className="gq_width active_banner">
              <Card
                hoverable
                className="main_banner"
                cover={<div className="card_img_wrap"><img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /></div>}
              ></Card>
              <div className="rest_banners">
                <Card
                  hoverable
                  className="rest_banner"
                  cover={<div className="card_img_wrap"><img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /></div>}
                ></Card>
                <Card
                  hoverable
                  className="rest_banner"
                  cover={<div className="card_img_wrap"><img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /></div>}
                ></Card>
                <Card
                  hoverable
                  className="rest_banner"
                  cover={<div className="card_img_wrap"><img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /></div>}
                ></Card>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer className="footer_custom">
        <Gfooter nav={config.NAVLIST} />
      </Footer>
    </Layout>
  );
}

export default App;
