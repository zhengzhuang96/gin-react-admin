import React, { useState } from "react"
import LeftMenu from "../components/LeftMenu/index";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Layout, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function Index() {
  const [collapsed, setCollapsed] = useState(false)
  
  return (
    <>
      <Layout>
        <Sider collapsed={collapsed}>
          <LeftMenu />
        </Sider>
        <Layout>
          <Header>
            <Button type="primary" onClick={() => setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  )
}

export default Index