/*
 * @Author: zhengzhuang
 * @Date: 2021-08-07 16:12:49
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-08-07 18:00:19
 * @Description: In User Settings Edit
 * @FilePath: /gin-react-admin/web-react-admin/src/routes/IndexRoutes.js
 */
import TestPage from "../pages/TestPage";
import Index from "../pages/Index";

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
      title: "测试页面",
      name: "testpage"
    },
    children: [{
      path: "/index",
      component: Index,
      meta: {
        title: "首页",
      },
    }, ]
  },
]

export default indexRoutes