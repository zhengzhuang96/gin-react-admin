/*
 * @Author: zhengzhuang
 * @Date: 2021-07-31 09:44:24
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-31 10:27:20
 * @Description: In User Settings Edit
 * @FilePath: /gin-react-admin/web-react-admin/src/api/server.js
 */
import axios from "axios";
import config from "../config";
import { message } from 'antd';

/**
 * 主要params参数
 * @params method {string} 方法名
 * @params url {string} 请求地址  例如：/login 配合baseURL组成完整请求地址
 * @params baseURL {string} 请求地址统一前缀 ***需要提前指定***  例如：http://cangdu.org
 * @params timeout {number} 请求超时时间 默认 30000
 * @params params {object}  get方式传参key值
 * @params headers {string} 指定请求头信息
 * @params withCredentials {boolean} 请求是否携带本地cookies信息默认开启
 * @params validateStatus {func} 默认判断请求成功的范围 200 - 300
 * @return {Promise}
 * 其他更多拓展参看axios文档后 自行拓展
 * 注意：params中的数据会覆盖method url 参数，所以如果指定了这2个参数则不需要在params中带入
 */
export default class Server {
  axios(method, url, params) {
    return new Promise((resolve, reject) => {
      if (typeof params !== 'object') params = {};
      let _option = params;
      _option = {
        method,
        url,
        baseURL: config.baseURL,
        timeout: 30000,
        params: params,
        data: null,
        headers: null,
        validateStatus: (status) => {
          return status >= 200 && status < 300;
        },
      }
      axios.request(_option).then(res => {
        if(res.data.code !== "0000") {
          console.log(res.data.msg)
          message.warning(res.data.msg);
        } else {
          resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data))
        }
      }, error => {
        if (error.response) {
          reject(error.response.data)
        } else {
          reject(error)
        }
      })
    })
  }
}