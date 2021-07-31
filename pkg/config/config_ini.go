// Author: zhengzhuang
// Date: 2021-07-30 16:14:31
// LastEditors: zhengzhuang
// LastEditTime: 2021-07-30 16:14:31
// Description: In User Settings Edit
// FilePath: /gin-react-admin/pkg/config/config_ini.go
package config

import (
	"gopkg.in/ini.v1"
)

var ConfigIni *configIni

type configIni struct {
	DatabaseIni databaseIni
	Secret      secret
	source      *ini.File
}

type databaseIni struct {
	Driver   string
	User     string
	Password string
	Host     string
	Port     string
	DbName   string
	Charset  string
	ShowSql  string
}

type secret struct {
	Secret string
}

func (c *configIni) Load(path string) *configIni {
	var err error
	c.source, err = ini.Load(path)
	if err != nil {
		panic(err)
	}
	return c
}

func (c *configIni) Init() *configIni {
	// 判断配置是否加载成功
	if c.source == nil {
		return c
	}
	c.DatabaseIni.Driver = c.source.Section("database").Key("driver").MustString("mysql")
	c.DatabaseIni.User = c.source.Section("database").Key("user").MustString("root")
	c.DatabaseIni.Password = c.source.Section("database").Key("password").MustString("123456")
	c.DatabaseIni.Host = c.source.Section("database").Key("host").MustString("localhost")
	c.DatabaseIni.Port = c.source.Section("database").Key("port").MustString("3306")
	c.DatabaseIni.DbName = c.source.Section("database").Key("db_name").MustString("gin-react-admin")
	c.DatabaseIni.Charset = c.source.Section("database").Key("charset").MustString("utf8")
	c.DatabaseIni.ShowSql = c.source.Section("database").Key("show_sql").MustString("true")

	c.Secret.Secret = c.source.Section("secret").Key("secret").MustString("abcdefg")
	return c
}
