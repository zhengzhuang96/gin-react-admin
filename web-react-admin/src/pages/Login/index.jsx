import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import login from './index.module.css';
import api from "../../api/api";

function Login() {
  let history = useHistory()

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    api.userLogin({mobile: values.username, password: values.password}).then(res => {
      sessionStorage.setItem('token', res)
      history.push('/index')
    })
  };

  return (
    <>
      <div className={login.loginBox}>
        <h2>Gin-React-Admin</h2>
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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="登录账号" />
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
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            {/* <a className="login-form-forgot" href="#a">
              忘记密码
            </a> */}
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            Or <Link to="/register">现在注册!</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Login;