/*
 * @Author: cuibai 2367736060@qq.com
 * @Date: 2022-10-12 10:39:42
 * @LastEditors: cuibai 2367736060@qq.com
 * @LastEditTime: 2022-10-12 16:44:01
 * @FilePath: \webpack-s\babel.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by cuibai 2367736060@qq.com, All Rights Reserved. 
 */
module.exports = {
    //声明插件  

    //将来 webpack 在调用babel-loader ,会先加载 lpugin 的插件
    "plugins": [
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ],
    ]

}