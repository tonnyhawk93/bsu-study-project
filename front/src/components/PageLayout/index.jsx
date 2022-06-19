import React from "react";
import { Button, Layout, Typography } from "antd";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const PageLayout = ({ children }) => (
  <Layout className={style.layout}>
    <Header className={style.header}>
      <Link to="/">
        <Typography.Title className={style.headerText}>
          Медицинский анализатор
        </Typography.Title>
      </Link>
    </Header>
    <Content>
      <div className={style.content}>{children}</div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      BSU ©2022
    </Footer>
  </Layout>
);

export default PageLayout;
