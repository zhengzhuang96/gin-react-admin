import React, { useState } from "react"
import {
  HashRouter as Router,
  Switch,
} from "react-router-dom";
import MyRoute from '../../components/MyRoute';
import LeftMenu from "../components/LeftMenu";
import HeadMenu from "../components/HeadMenu";
import FooterPage from "../components/FooterPage";
import { Layout } from 'antd';
import styles from './index.module.css';
import indexRoutes from '../../routes/indexRoutes';
const { Header, Footer, Sider, Content } = Layout;

function Index() {
  const [collapsed, setCollapsed] = useState(false)

  const setCollapsedFun = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider
        breakpoint="sm"
        collapsedWidth="100"
        trigger={null}
        collapsed={collapsed}></Sider>
      <Sider
        breakpoint="sm"
        collapsedWidth="100"
        trigger={null}
        collapsed={collapsed}
        onBreakpoint={broken => {
          setCollapsed(broken);
        }}
        onCollapse={(collapsed, type) => { }}
        className={styles.leftMenu}>
        <LeftMenu collapsedState={collapsed} />
      </Sider>
      <Layout className="site-layout">
        <Header className={styles.header}>
          <HeadMenu onClick={setCollapsedFun} collapsed={collapsed} />
        </Header>
        <Content className={styles.contentBox}>
          {/*内容区域*/}
          <Router>
            <Switch>
              {indexRoutes.map(
                ({ path, component, ...routes }) =>
                  <MyRoute key={path} path={path} component={component} {...routes} />
              )}
            </Switch>
          </Router>
        </Content>
        <Footer>
          <FooterPage />
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Index