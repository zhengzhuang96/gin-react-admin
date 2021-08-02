// Author: zhengzhuang
// Date: 2021-07-29 17:50:09
// LastEditors: zhengzhuang
// LastEditTime: 2021-07-29 17:50:17
// Description: gin-react-admin
// FilePath: /gin-react-admin/main.go
package main

import (
	_ "gin-react-admin/pkg/config"
	"gin-react-admin/routers"
)

// @title 这里写标题
// @version 1.0
// @description 这里写描述信息
// @termsOfService http://swagger.io/terms/

// @contact.name 这里写联系人信息
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host localhost:8080
// @BasePath
func main() {
	r := routers.SetRouters()

	r.Run()
}
