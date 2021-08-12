import React from "react";
import { useHistory } from "react-router-dom";
import { Menu } from 'antd';
import {
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import indexRoutes from "../../../routes/indexRoutes";
import index from "./index.module.css"
const { SubMenu } = Menu;
function LeftMenu(props) {
  let history = useHistory();

  const handleClick = to => {
    history.push(to);
  }

  return (
    <div className={index.leftNav}>
      <div className={index.lefthead}>
        <h3>{props.collapsedState ? "GIN" : "GIN-REACT-ADMIN"}</h3>
      </div>
      <Menu
        defaultSelectedKeys={[history.location.pathname]}
        defaultOpenKeys={[history.location.pathname]}
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
                      <Menu.Item key={paths.path} onClick={() => handleClick(paths.path)}>{paths.meta.title}</Menu.Item>
                    )
                  })
                }
              </SubMenu>
              : <Menu.Item key={path.path} onClick={() => handleClick(path.path)} icon={<ContainerOutlined />}>
                {path.meta.title}
              </Menu.Item>
          )
        })}
      </Menu>
    </div>
  )
}

export default LeftMenu