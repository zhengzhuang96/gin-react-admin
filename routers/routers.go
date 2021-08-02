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

	_ "gin-react-admin/docs"

	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func SetRouters() *gin.Engine {

	r := gin.Default()
	r.Use(middleware.Cors())

	// use ginSwagger middleware to serve the API docs
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	new(controller.UserController).Router(r)
	return r
}
