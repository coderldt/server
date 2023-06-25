DROP TABLE IF EXISTS sys_user;
CREATE TABLE sys_user(
    `user_id` VARCHAR(36) NOT NULL   COMMENT '用户id' ,
    `username` VARCHAR(20)    COMMENT '用户名' ,
    `password` VARCHAR(255)    COMMENT '密码' ,
    `phone` VARCHAR(11)    COMMENT '电话' ,
    `created_user` VARCHAR(36)    COMMENT '创建人' ,
    `created_time` VARCHAR(19)    COMMENT '创建时间' ,
    `updated_user` VARCHAR(36)    COMMENT '更新人' ,
    `updated_time` VARCHAR(19)    COMMENT '更新时间' ,
    PRIMARY KEY (user_id)
)  COMMENT = '用户';

DROP TABLE IF EXISTS sys_menu;
CREATE TABLE sys_menu(
    `menu_id` VARCHAR(36) NOT NULL   COMMENT '菜单id' ,
    `menu_name` VARCHAR(20)    COMMENT '菜单名' ,
    `menu_type` VARCHAR(3)   DEFAULT 00 COMMENT '菜单类型' ,
    `parent_id` VARCHAR(36)    COMMENT '父级id' ,
    `created_user` VARCHAR(36)    COMMENT '创建人' ,
    `created_time` VARCHAR(19)    COMMENT '创建时间' ,
    `updated_user` VARCHAR(36)    COMMENT '更新人' ,
    `updated_time` VARCHAR(19)    COMMENT '更新时间' ,
    PRIMARY KEY (menu_id)
)  COMMENT = '菜单';

DROP TABLE IF EXISTS sys_role;
CREATE TABLE sys_role(
    `role_id` VARCHAR(36) NOT NULL   COMMENT '角色id' ,
    `role_name` VARCHAR(20)    COMMENT '角色名' ,
    `created_user` VARCHAR(36)    COMMENT '创建人' ,
    `created_time` VARCHAR(19)    COMMENT '创建时间' ,
    `updated_user` VARCHAR(36)    COMMENT '更新人' ,
    `updated_time` VARCHAR(19)    COMMENT '更新时间' ,
    PRIMARY KEY (role_id)
)  COMMENT = '角色';

DROP TABLE IF EXISTS user_roles;
CREATE TABLE user_roles(
    `id` VARCHAR(36) NOT NULL   COMMENT 'id' ,
    `user_id` VARCHAR(36)    COMMENT '用户id' ,
    `role_id` VARCHAR(36)    COMMENT '角色id' ,
    `created_user` VARCHAR(36)    COMMENT '创建人' ,
    `created_time` VARCHAR(19)    COMMENT '创建时间' ,
    `updated_user` VARCHAR(36)    COMMENT '更新人' ,
    `updated_time` VARCHAR(19)    COMMENT '更新时间' ,
    PRIMARY KEY (id)
)  COMMENT = '用户角色表';

DROP TABLE IF EXISTS role_menus;
CREATE TABLE role_menus(
    `id` VARCHAR(36) NOT NULL   COMMENT 'id' ,
    `role_id` VARCHAR(36)    COMMENT '角色id' ,
    `menu_id` VARCHAR(36)    COMMENT '菜单id' ,
    `created_user` VARCHAR(36)    COMMENT '创建人' ,
    `created_time` VARCHAR(19)    COMMENT '创建时间' ,
    `updated_user` VARCHAR(36)    COMMENT '更新人' ,
    `updated_time` VARCHAR(19)    COMMENT '更新时间' ,
    PRIMARY KEY (id)
)  COMMENT = '角色菜单表';

