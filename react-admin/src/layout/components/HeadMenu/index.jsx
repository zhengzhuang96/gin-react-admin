import React, { useState, useEffect } from "react";
import { Row, Col, Avatar, Dropdown, Menu, Space, Modal } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DownOutlined,
  ExclamationCircleOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined
} from '@ant-design/icons';
import styles from './index.module.css';
import { useHistory } from "react-router-dom";
const { confirm } = Modal;

let HeadMenu = (props) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false)
  const [fullScreenState, setFullScreenState] = useState(false) // 全屏状态

  // 监听全屏状态
  useEffect(() => {
    const fullscreenchange = () => {
      if (fullScreenState) {
        setFullScreenState(false)
      } else {
        setFullScreenState(true)
      }
    }

    document.addEventListener("fullscreenchange", fullscreenchange);
    document.addEventListener("mozfullscreenchange", fullscreenchange);
    document.addEventListener("webkitfullscreenchange", fullscreenchange);
    document.addEventListener("msfullscreenchange", fullscreenchange);
    return () => {
      document.removeEventListener("fullscreenchange", fullscreenchange);
      document.removeEventListener("mozfullscreenchange", fullscreenchange);
      document.removeEventListener("webkitfullscreenchange", fullscreenchange);
      document.removeEventListener("msfullscreenchange", fullscreenchange);
    };
  }, [fullScreenState])

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

  // 切换全屏效果
  const setFullScreenMode = () => {
    const isFullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement
    if (isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    } else {
      if (document.body.requestFullscreen) {
        document.body.requestFullscreen()
      } else if (document.body.mozRequestFullScreen) {
        document.body.mozRequestFullScreen()
      } else if (document.body.webkitRequestFullScreen) {
        document.body.webkitRequestFullScreen()
      } else if (document.body.msRequestFullscreen) {
        document.body.msRequestFullscreen()
      }
    }
  }

  return (
    <Row className={styles.box}>
      <Col span={6}>
        <div className={styles.buttonLeftMenu} onClick={props.onClick}>
          {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </div>
      </Col>
      <Col>
        <Space>
          <Avatar size={40} icon={fullScreenState ? <FullscreenExitOutlined /> : <FullscreenOutlined />} style={{ background: "none" }} onClick={setFullScreenMode} />
          <Dropdown
            overlay={menu}
            onVisibleChange={() => handleVisibleChange()}
            placement="topRight"
            arrow
          >
            <Space>
              <Avatar size={40} icon={<UserOutlined />} />
              <a className="ant-dropdown-link" href="onclick:" onClick={e => e.preventDefault()} rel="noopener noreferrer"><DownOutlined /></a>
            </Space>
          </Dropdown>
        </Space>
      </Col>
    </Row>
  )
}

export default HeadMenu