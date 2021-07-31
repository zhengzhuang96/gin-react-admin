// Author: zhengzhuang
// Date: 2021-07-30 16:26:58
// LastEditors: zhengzhuang
// LastEditTime: 2021-07-30 16:26:58
// Description: In User Settings Edit
// FilePath: /gin-react-admin/pkg/config/init.go
package config

func init() {
	ConfigIni = (&configIni{}).Load("config/app.ini").Init()
}
