/*
 * @Author: zhengzhuang
 * @Date: 2021-08-07 16:12:49
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-08-09 13:33:00
 * @Description: In User Settings Edit
 * @FilePath: /gin-react-admin/web-react-admin/src/routes/IndexRoutes.js
 */
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
]

export default indexRoutes