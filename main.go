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

func main() {
	r := routers.SetRouters()
	r.Run()
}
