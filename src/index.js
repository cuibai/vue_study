/*
 * @Author: cuibai 2367736060@qq.com
 * @Date: 2022-10-08 10:34:26
 * @LastEditors: cuibai 2367736060@qq.com
 * @LastEditTime: 2022-10-09 17:39:25
 * @FilePath: \webpack-s\src\index.js
 * @Description: //
 * 
 * Copyright (c) 2022 by cuibai 2367736060@qq.com, All Rights Reserved. 
 */
// 使用ES6 导入
import $ from 'jquery'

//在 webpack 中 所有的配置都是以模块的方法 进行导入的 
import './css/index.css'


// 定义入口函数
$(function () {
    //隔行变色
    $('ul').css('background-color', 'yellow')
    $('li:odd').css('background-color', '#725c9a')
    $('li:even').css('background-color', '#1c9eff')
    $('#li-w').css('background-color', '#ab8975')
})
