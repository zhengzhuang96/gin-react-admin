// Author: zhengzhuang
// Date: 2021-07-30 17:22:19
// LastEditors: zhengzhuang
// LastEditTime: 2021-07-30 17:22:20
// Description: In User Settings Edit
// FilePath: /gin-react-admin/pkg/orm/init.go
package orm

import (
	_ "github.com/go-sql-driver/mysql"
)

func init() {
	err := OrmEngine()
	if err != nil {
		panic(err.Error())
	}
}
