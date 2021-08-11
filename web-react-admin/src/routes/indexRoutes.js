/*
 * @Author: zhengzhuang
 * @Date: 2021-08-07 16:12:49
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-08-11 15:16:27
 * @Description: In User Settings Edit
 * @FilePath: /gin-react-admin/web-react-admin/src/routes/indexRoutes.js
 */
import Index from "../pages/Index";
import TestPage from "../pages/TestPage";

const indexRoutes = [
  {
    path: "/index",
    component: Index,
    meta: {
      title: "首页",
      name: "index"
    },
  },
  {
    path: "/testpage",
    component: TestPage,
    meta: {
      title: "测试",
      name: "TestPage"
    },
  },
]

export default indexRoutes