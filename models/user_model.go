// Author: zhengzhuang
// Date: 2021-07-30 09:33:45
// LastEditors: zhengzhuang
// LastEditTime: 2021-07-30 09:33:58
// Description: In User Settings Edit
// FilePath: /gin-react-admin/models/user_model.go
package models

// userLogin请求数据 用户账号密码
type UserLoginModel struct {
	Mobile   string `form:"mobile" json:"mobile" uri:"mobile" xml:"mobile" binding:"required"`
	Password string `form:"password" json:"password" uri:"password" xml:"password" binding:"required"`
}

// userRegister请求数据 用户注册
type UserRegisterModel struct {
	UserName string `form:"username" json:"username" uri:"username" xml:"username" binding:"required"`
	Mobile   string `form:"mobile" json:"mobile" uri:"mobile" xml:"mobile" binding:"required"`
	Password string `form:"password" json:"password" uri:"password" xml:"password" binding:"required"`
}

// 用户表
type UserTbl struct {
	UserId       string `db:"user_id"`
	UserName     string `db:"user_name"`
	UserMobile   string `db:"user_mobile"`
	UserPassword string `db:"user_password"`
}
