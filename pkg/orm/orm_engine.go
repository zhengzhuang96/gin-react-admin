// Author: zhengzhuang
// Date: 2021-07-30 15:51:25
// LastEditors: zhengzhuang
// LastEditTime: 2021-07-30 15:51:25
// Description: In User Settings Edit
// FilePath: /gin-react-admin/pkg/orm/orm_engine.go
package orm

import (
	"fmt"
	"gin-react-admin/pkg/config"

	"github.com/jmoiron/sqlx"
)

var DbEngine *Orm

type Orm struct {
	*sqlx.DB
}

// 数据库连接
func OrmEngine() error {
	database := config.ConfigIni.DatabaseIni
	conn := database.User + ":" + database.Password + "@tcp(" + database.Host + ":" + database.Port + ")/" + database.DbName
	fmt.Println(conn)
	engine, err := sqlx.Open("mysql", conn)
	if err != nil {
		fmt.Println("open mysql failed,", err)
		panic(err)
	}

	orm := new(Orm)
	orm.DB = engine
	DbEngine = orm
	return nil
}
