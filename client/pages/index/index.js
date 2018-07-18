//index.js
// var qcloud = require('../../vendor/wafer2-client-sdk/index')
// var config = require('../../config')
// var util = require('../../utils/util.js')

var template = require('../../footer/footer.js');
Page({
   data: {
     iconSize: [20, 30, 40, 50, 60, 70],
     iconColor: [
       'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
     ],
     iconType: [
       'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
     ]
   },
   handleClick(event){
      console.log(event)
   },
   onLoad:function(){
      template.tabbar("homepage",this)
   },
   handleChange({ detail }) {
      // console.log(detail.key)
      // let key = detail.key
      // if(key == "homepage"){
      //    wx.navigateTo({
      //       url: './index'
      //     })
      // }else if(key == "group"){
      //    wx.navigateTo({
      //       url: '../button/button'
      //     })
      // }else 
      // if(key == "remind"){
      //    wx.navigateTo({
      //       url: '../map/map'
      //     })
      // }else if(key == "mine"){
      //    wx.navigateTo({
      //       url: '../keepVoice/keepVoice'
      //     })
      // }
   },
 })
