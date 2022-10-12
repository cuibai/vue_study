/*
 * @Author: cuibai 2367736060@qq.com
 * @Date: 2022-10-08 15:43:59
 * @LastEditors: cuibai 2367736060@qq.com
 * @LastEditTime: 2022-10-12 17:54:42
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

const { ClearnWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 相机模式 development |production
    // 开发的时候 使用第一个
    // 发布上线的时候使用第二个
    /**
     * 配置build 文件 ,代码运行 会自动打包文件 
     * npm run build  打包 
     */
    mode: 'development',
    // 自定义 文件的处理地址
    entry: path.join(__dirname, './src/index.js'), //指定处理文件
    output: {
        // 存放的目录
        path: path.join(__dirname, './dist'),
        // 生成的文件名字
        filename: 'js/bundle.js',
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
    plugins: [htmlPlugin, ClearnWebpackPlugin],
    module: {
        rules: [
            // 定义规则, 凡是检测到 .css 为后缀的文件  就时候 style-loader
            // 和css-loader 函数进行匹配操作  'less-loader'
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //匹配 less
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            /**
             * 在配置 url-loader 的时候,多个参数使用 & 分割符进行连接
             */
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images' },
            // 只有的 limit=470 给定值 以内  图像才会被转换为 base64 位数的
            // 配置 Babel-loader 时 程序员只需要把自己的js转换就可以了  第三方的js 文件直接过滤掉  
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }

        ]
    }

}
