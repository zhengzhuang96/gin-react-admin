import React from "react";
import { Menu } from 'antd';
import {
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import indexRoutes from "../../../routes/indexRoutes";
import index from "./index.module.css"
const { SubMenu } = Menu;

function LeftMenu(props) {
  return (
    <div className={index.leftNav}>
      <div className={index.lefthead}>
        <h3>{props.collapsedState ? "GIN" : "GIN-REACT-ADMIN"}</h3>
      </div>
      <Menu
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['index']}
        mode="inline"
        theme="dark"
      >
        {indexRoutes.map((path, index) => {
          return (
            path.children !== undefined ?
              <SubMenu key={path.meta.name} icon={<MailOutlined />} title="Navigation One">
                {
                  path.children.map((paths, indexs) => {
                    return (
                      <Menu.Item key={indexs}>{paths.meta.title}</Menu.Item>
                    )
                  })
                }
              </SubMenu>
              : <Menu.Item key={index} icon={<ContainerOutlined />}>
                {path.meta.title}
              </Menu.Item>
          )
        })}
      </Menu>
    </div>
  )
}

export default LeftMenu