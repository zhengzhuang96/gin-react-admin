// Author: zhengzhuang
// Date: 2021-07-29 17:53:40
// LastEditors: zhengzhuang
// LastEditTime: 2021-07-29 17:53:40
// Description: In User Settings Edit
// FilePath: /gin-react-admin/routers/routers.go

package routers

import (
	"gin-react-admin/controller"
	"gin-react-admin/middleware"

	"github.com/gin-gonic/gin"
)

func SetRouters() *gin.Engine {
	r := gin.Default()
	r.Use(middleware.Cors())
	new(controller.UserController).Router(r)
	return r
}
