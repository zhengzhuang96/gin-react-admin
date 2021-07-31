// Author: zhengzhuang
// Date: 2021-07-31 10:19:40
// LastEditors: zhengzhuang
// LastEditTime: 2021-07-31 10:19:40
// Description: In User Settings Edit
// FilePath: /gin-react-admin/tool/common_result.go
package tool

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

const (
	SUCCESS string = "0000" // 操作成功
	FAILED  int    = 9999   // 操作失败
)

// 普通成功返回
func Success(ctx *gin.Context, v interface{}) {
	ctx.JSON(http.StatusOK, map[string]interface{}{
		"code": SUCCESS,
		"msg":  "请求成功",
		"data": v,
	})
}

// 操作失败返回内容
func Failed(ctx *gin.Context, v interface{}) {
	ctx.JSON(http.StatusOK, map[string]interface{}{
		"code": FAILED,
		"msg":  v,
	})
}
