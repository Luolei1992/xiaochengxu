
const recorderManager = wx.getRecorderManager()

Page({
   data: {
      duration: 10000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'aac',
      frameSize: 50
   },
   start: function () {
      // recorderManager.start(this.data)

      wx.getSystemInfo({
         success: function(res) {
           console.log(res.model)
           console.log(res.pixelRatio)
           console.log(res.windowWidth)
           console.log(res.windowHeight)
           console.log(res.language)
           console.log(res.version)
           console.log(res.platform)
         }
       })
      wx.startRecord({
         success: function (res) {
            var tempFilePath = res.tempFilePath
            wx.playVoice({
               filePath: tempFilePath,
               complete: function () {
                  console.log(22222)
               },
               fail() {
                  console.log(33333)
               }
            })
         }
      })
   },
   stop: function () {
      wx.vibrateShort({})
      // wx.makePhoneCall({
      //    phoneNumber: '15657185156' //仅为示例，并非真实的电话号码
      //  })
      recorderManager.stop()
   },
})
// recorderManager.onStart(() => {
//    console.log('recorder start')
// })
// recorderManager.onPause(() => {
//    console.log('recorder pause')
// })
// recorderManager.onStop((res) => {
//    console.log('recorder stop', res)
//    const { tempFilePath } = res
//    var tempFilePaths = res.tempFilePaths
//    wx.playVoice({
//       filePath: tempFilePath,
//       complete: function(){
//          console.log(22222)
//       },
//       fail(){
//          console.log(33333)
//       }
//     })
// })
// recorderManager.onFrameRecorded((res) => {
//   const { frameBuffer } = res
//   console.log('frameBuffer.byteLength', frameBuffer.byteLength)
// })



