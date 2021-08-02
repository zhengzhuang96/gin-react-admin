// Author: zhengzhuang
// Date: 2021-07-29 17:57:44
// LastEditors: zhengzhuang
// LastEditTime: 2021-07-29 17:57:45
// Description: In User Settings Edit
// FilePath: /gin-react-admin/controllers/user_controller.go
package controller

import (
	"fmt"
	"gin-react-admin/models"
	"gin-react-admin/server"
	"gin-react-admin/tool"

	"github.com/gin-gonic/gin"
)

type UserController struct {
}

func (uc *UserController) Router(r *gin.Engine) {
	r.POST("/userLogin", uc.userLogin)
	r.POST("/userRegister", uc.userRegister)
}

// @Summary 用户登录
// @Description 用户登录接口，返回token
// @Tags 用户信息
// @Param mobile path string true "mobile"
// @Param password path string true "password"
// @Success 200 {string} json "{"code":200,"data":{},"msg":"ok"}"
// @Router /userLogin [post]
func (uc *UserController) userLogin(c *gin.Context) {
	fmt.Println("到这里了吗")
	// 1:解析用户发送的账号密码
	var json models.UserLoginModel
	if err := c.Bind(&json); err != nil {
		tool.Failed(c, err)
		return
	}

	fmt.Println("获取的用户信息")
	fmt.Println(json.Mobile)
	fmt.Println(json.Password)

	// 2:判断用户密码是否正确返回token
	serverUser := server.UserServer{}
	token, err := serverUser.DetectUsPs(json.Mobile, json.Password)
	if err != nil {
		tool.Failed(c, "该用户未注册")
		return
	}

	// 3:获取到token返回给用户
	tool.Success(c, token)
}

// @Summary 用户注册
// @Produce  json
// @Param name query string true "Name"
// @Param state query int false "State"
// @Param created_by query int false "CreatedBy"
// @Success 200 {string} json "{"code":200,"data":{},"msg":"ok"}"
// @Router /userRegister [post]
func (uc *UserController) userRegister(c *gin.Context) {
	var json models.UserRegisterModel
	if err := c.Bind(&json); err != nil {
		tool.Failed(c, err)
		return
	}
	serverUser := server.UserServer{}
	userReg := serverUser.UserRegister(json.UserName, json.Mobile, json.Password)
	switch userReg {
	case 1:
		tool.Success(c, "注册成功")
	case 2:
		tool.Failed(c, "手机号已存在")
	case 3:
		tool.Failed(c, "注册失败")
	}
}
