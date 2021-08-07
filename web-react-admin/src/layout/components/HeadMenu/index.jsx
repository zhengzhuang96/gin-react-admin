import React, { useState } from "react";
import { Row, Col, Avatar, Dropdown, Menu, Space, Modal } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DownOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import styles from './index.module.css';
import { useHistory } from "react-router-dom";
const { confirm } = Modal;

let HeadMenu = (props) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false)

  const handleMenuClick = e => {
    if (e === 1) {
      setVisible(!visible)
      outLogin(true)
    }
  };

  const handleVisibleChange = () => {
    setVisible(!visible)
  };

  const outLogin = () => {
    confirm({
      title: '是否退出账号?',
      icon: <ExclamationCircleOutlined />,
      okText: '退出',
      cancelText: '取消',
      onOk() {
        sessionStorage.removeItem("token")
        history.push("/login")
      },
    });
  };

  const menu = (
    <Menu onClick={() => handleMenuClick(1)}>
      <Menu.Item key="1">退出</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row className={styles.box}>
        <Col span={6}>
          <div className={styles.buttonLeftMenu} onClick={props.setCollapsedFun(false)}>
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </div>
        </Col>
        <Col span={2}>
          <Space>
            <Avatar size={40} icon={<UserOutlined />} />
            <Dropdown
              overlay={menu}
              onVisibleChange={() => handleVisibleChange()}
              visible={visible}
            >
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                设置 <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </>
  )
}

export default HeadMenu