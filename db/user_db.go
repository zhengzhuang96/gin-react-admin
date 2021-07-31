// Author: zhengzhuang
// Date: 2021-07-30 09:57:12
// LastEditors: zhengzhuang
// LastEditTime: 2021-07-30 09:57:13
// Description: In User Settings Edit
// FilePath: /gin-react-admin/db/user_db.go

package db

import (
	"fmt"
	"gin-react-admin/models"
	"gin-react-admin/pkg/orm"
)

type UserDb struct {
	*orm.Orm
}

// Name: 插入新用户
// param {models.UserTbl} user
// success {int64} 0: 没有成功	theId：成功
func (db *UserDb) InsertData(user models.UserTbl) (int64, error) {
	sqlStr := "INSERT into user_tbl(user_name, user_mobile, user_password) values (?,?,?)"
	ret, err := db.Exec(sqlStr, user.UserName, user.UserMobile, user.UserPassword)
	if err != nil {
		fmt.Println(err)
		return 0, err
	}
	theId, err := ret.LastInsertId() // 新插入用户的ID
	if err != nil {
		fmt.Printf("get lastinsert Id failed, err:%v\n", err)
		return 0, err
	}
	return theId, nil
}

// Name: 查询用户
// param {models.UserTbl} user
func (db *UserDb) QueryRowData(user models.UserTbl) (*models.UserTbl, error) {
	var userMap models.UserTbl
	sqlStr := "select user_id, user_name, user_mobile from user_tbl where user_mobile = ?"
	fmt.Printf("select user_id, user_name, user_mobile from user_tbl where user_mobile = %s \n", user.UserMobile)
	err := db.Get(&userMap, sqlStr, user.UserMobile)
	if err != nil {
		fmt.Println("user_tbl 用户数据查询：", err)
		return &userMap, err
	}
	return &userMap, nil
}
