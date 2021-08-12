/*
 * @Author: zhengzhuang
 * @Date: 2021-07-31 09:53:50
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-31 11:26:06
 * @Description: In User Settings Edit
 * @FilePath: /gin-react-admin/web-react-admin/src/api/api.js
 */
import Server from './server';

class API extends Server {
 
  /**
   * @Name: 用户登录
   * @param {*} params
   * @param {*} password
   */
  async userLogin(params = {mobile: 1, password: '100'}) {
    try {
      let result = await this.axios('post', '/userLogin', params);
      return result;
    } catch (err) {
      throw err
    }
  }

  /**
   * @Name: 用户注册
   * @param {*} params
   */
  async userRegister(params) {
    try {
      let result = await this.axios('post', '/userRegister', params)
      return result
    } catch (error) {
      throw error
    }
  }
}

export default new API();