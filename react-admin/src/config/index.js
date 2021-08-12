/*
 * @Author: zhengzhuang
 * @Date: 2021-07-31 09:45:53
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-31 09:58:06
 * @Description: In User Settings Edit
 * @FilePath: /gin-react-admin/web-react-admin/src/config/index.js
 */
let baseURL

if(process.env.NODE_ENV === 'development') {
  baseURL = "http://192.168.104.23:8080"
} else {
  baseURL = "http://192.168.104.23:8080"
}

const config = {
  baseURL
}
export default config