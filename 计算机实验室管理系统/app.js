const app = getApp()
// app.js
App({
  // 全局变量
  globalData: {
    code: "",
    openid: '',
    userid: '',
    password:''
  },
  
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: (res)=>{
        console.log('用户登录授权code为：' + res.code)
        if(res.code){
          wx.request({
            url: 'http://127.0.0.1:8000/api/login0/',
            data:{
              code:res.code
            },
            method:'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: (res) => {
              console.log('app.js-response:')
              console.log(res)
              this.globalData.openid=res.data
            },
          })
        }
      },
    })
   
  },

})
