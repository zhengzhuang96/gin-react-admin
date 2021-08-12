import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MobileOutlined } from '@ant-design/icons';
import login from './index.module.css';
import api from "../../api/api";

function Register() {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    console.log(values.username, values.mobile, values.password)
    // sessionStorage.setItem('token', 123123)
    // history.push('/index')
    api.userRegister({ username: values.username, mobile: values.mobile, password: values.password }).then(res => {
      console.log(res)
    })
  };

  return (
    <>
      <div className={login.loginBox}>
        <h2>用户注册</h2>
        <Form
          name="normal_login"
          className={login.loginForm}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true,
                message: '请输入登录手机号!'
              }
            ]}>
            <Input prefix={<MobileOutlined />} placeholder="手机号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              注册
            </Button>
            Or <Link to="/login">返回登录!</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Register