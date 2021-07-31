CREATE TABLE `user_tbl` (
  `user_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(255) NOT NULL COMMENT '用户名',
  `user_mobile` INT(11) NOT NULL COMMENT '用户手机号',
  `user_password` INT(20) NOT NULL COMMENT '用户密码',
  PRIMARY KEY (`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;