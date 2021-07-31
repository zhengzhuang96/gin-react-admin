// Author: zhengzhuang
// Date: 2021-07-30 09:49:03
// LastEditors: zhengzhuang
// LastEditTime: 2021-07-30 09:49:04
// Description: In User Settings Edit
// FilePath: /gin-react-admin/server/user_server.go

package server

import (
	"fmt"
	"gin-react-admin/db"
	"gin-react-admin/models"
	"gin-react-admin/pkg/config"
	"gin-react-admin/pkg/orm"
	"time"

	"github.com/dgrijalva/jwt-go"
)

type UserServer struct {
}

// Name: 检测用户名密码是否正确
// param {string} mobile
// param {string} password
// success {bool} true: 正确 false: 错误
func (us *UserServer) DetectUsPs(mobile string, password string) (string, error) {
	// 判断库中是否有这个手机号
	r := models.UserTbl{UserMobile: mobile}
	userDb := db.UserDb{Orm: orm.DbEngine}
	result, err := userDb.QueryRowData(r)
	if err != nil {
		return "没有找到", err
	}
	// 生成token
	expiresTime := time.Now().Unix() + int64(300000) // 5分钟过期
	mySigningKey := []byte(config.ConfigIni.Secret.Secret)
	// create the Claims
	claims := &jwt.StandardClaims{
		Audience:  result.UserMobile,
		ExpiresAt: expiresTime,
		Id:        result.UserId,
		IssuedAt:  time.Now().Unix(),
		Issuer:    "admin",
		NotBefore: time.Now().Unix(),
		Subject:   "login",
	}

	tokenInfo := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	token, err := tokenInfo.SignedString(mySigningKey)
	token = fmt.Sprintf("Bearer %v", token)
	fmt.Println(token)
	if err != nil {
		return "登录失败", err
	}
	return token, nil
}

// Name: 用户注册
// param {string} username
// param {string} mobile
// param {string} password
// success {int} 1: 注册成功  2: 手机号已存在		3: 注册失败
func (us *UserServer) UserRegister(username string, mobile string, password string) int64 {
	// 判断库中是否有手机号
	r := models.UserTbl{UserMobile: mobile, UserName: username, UserPassword: password}
	userDb := db.UserDb{Orm: orm.DbEngine}
	_, err := userDb.QueryRowData(r)
	if err != nil {
		fmt.Println("手机号已存在")
		return 2
	}
	// 手机不存在，将用户信息存入表中
	id, err := userDb.InsertData(r)
	if err != nil {
		return 2
	}

	return id
}
