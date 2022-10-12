/*
 * @Author: cuibai 2367736060@qq.com
 * @Date: 2022-10-08 10:34:26
 * @LastEditors: cuibai 2367736060@qq.com
 * @LastEditTime: 2022-10-12 11:27:24
 * @FilePath: \webpack-s\src\index.js
 * @Description: //
 * 
 * Copyright (c) 2022 by cuibai 2367736060@qq.com, All Rights Reserved. 
 */
// 使用ES6 导入
import $ from 'jquery'

//在 webpack 中 所有的配置都是以模块的方法 进行导入的 
// 在某个模块中 from 接收到的模块是 undefined 的话  则没必要接收  
import './css/index.css'
import './css/index.less'
//配置图片 导入
//给 img 标签的 src 动态赋值
import logo from './img/logo.png'
console.log(logo)

$('.box').attr('src', logo)

// 定义入口函数
$(function () {
    //隔行变色
    $('ul').css('background-color', 'yellow')
    $('li:odd').css('background-color', '#725c9a')
    $('li:even').css('background-color', '#1c9eff')
    $('#li-w').css('background-color', '#ab8975')
})
// 装饰器函数
function info(target) {
    target.info = 'person info'
}
// @ 高级语法 webpack 处理不了 
@info
class person { }

console.log(person.info)
