import React from 'react';
import Menu from "./components/header/index"
import Gfooter from "./components/footer/index"
import logo from "./static/img/logo.png"
import "./App.scss";
import { Layout, Button, Carousel } from 'antd';
const { Header, Footer, Content } = Layout;

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
          <h3 className="title sub">PROFESSIONAL TEACHERS MUST PASS A STRICT AUDIT</h3>
          <h2 className="title desc">专业教师必须经过严格审核</h2>
          <div className="quick_entry">
            <div className="quick_item">考试报名</div>
            <div className="quick_item">成绩查询</div>
          </div>
        </div>
        <div className="booth clearPadding">
          <img className="booth_img_big" src={require("./static/banner/banner2.webp")} alt="" />
        </div>
        <div className="booth">
          <h3 className="title sub">ASSOCIATION ACTIVITIES</h3>
          <h2 className="title desc">协会活动</h2>
        </div>
      </Content>
      <Footer className="footer_custom">
        <Gfooter />
      </Footer>
    </Layout>
  );
}

export default App;
