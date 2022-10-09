/*
 * @Author: cuibai 2367736060@qq.com
 * @Date: 2022-10-08 15:43:59
 * @LastEditors: cuibai 2367736060@qq.com
 * @LastEditTime: 2022-10-09 17:37:09
 * @FilePath: \webpack-s\webpack.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by cuibai 2367736060@qq.com, All Rights Reserved. 
 */
// 导入 构造函数和
const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

// 使用导入的插件 配置实例对象
const htmlPlugin = new HtmlPlugin({
    //指定要复制的页面
    //文件复制以后 放到和当前文件平级的文件
    template: './src/index.html',
    filename: './index.html',
})

module.exports = {
    // 相机模式 development |production
    // 开发的时候 使用第一个
    // 发布上线的时候使用第二个
    mode: 'development',
    // 自定义 文件的处理地址
    entry: path.join(__dirname, './src/index.js'), //指定处理文件
    output: {
        // 存放的目录
        path: path.join(__dirname, './dist'),
        // 生成的文件名字
        filename: 'bundle.js',
    },
    devServer: {
        open: true, // 自动打开浏览器
        host: 'localhost',  // 指定地址
        port: 8080, // 指定端口 
        static: {
            directory: path.join(__dirname, "/")
        }
    },
    //插件的数组, webpack 在运行时 会调用全部插件
    plugins: [htmlPlugin],
    module: {
        rules: [
            // 定义规则, 凡是检测到 .css 为后缀的文件  就时候 style-loader
            // 和css-loader 函数进行匹配操作 
            { test: /\.css/, use: ['style-loader', 'css-loader'] }
        ]
    }

}
