
const recorderManager = wx.getRecorderManager()

Page({
   onReady: function (e) {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = wx.createAudioContext('myAudio')
    },
   data: {
      duration: 10000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'aac',
      frameSize: 50,
      current: 'homepage',
      url:"http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
      poster:"http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000"
   },
   handleChange ({ detail }) {
      this.setData({
          current: detail.key
      });
  },
   start: function () {
      // recorderManager.start(this.data)
      let that = this;
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
            wx.saveFile({
              tempFilePath: tempFilePath,
              success: function(res) {
                var savedFilePath = res.savedFilePath
                that.setData({url:savedFilePath})
              }
            })
         }
      })
   },
   stop () {
      wx.vibrateShort({})
      // wx.makePhoneCall({
      //    phoneNumber: '15657185156' //仅为示例，并非真实的电话号码
      //  })
      recorderManager.stop()
   },
   audioPlay () {
      console.log(2)
      this.audioCtx.play()
    },
    audioPause () {
      this.audioCtx.pause()
    },
    audio14 () {
      this.audioCtx.seek(14)
    },
    audioStart () {
      this.audioCtx.seek(0)
    },
    takePhoto() {
      const ctx = wx.createCameraContext()
      ctx.takePhoto({
          quality: 'high',
          success: (res) => {
              this.setData({
                  src: res.tempImagePath
              })
          }
      })
  },
  error(e) {
      console.log(e.detail)
  }
})



