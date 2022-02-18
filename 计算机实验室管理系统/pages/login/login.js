const app = getApp();

// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid:app.globalData.userid,
    password:"",
  },

  bindUserid:function(e){
    this.setData({userid:e.detail.value});
    app.globalData.userid = this.data.userid
  },
  bindPassword:function(e){
    this.setData({password:e.detail.value});
  },

  login:function(){
    console.log(this.data.userid,this.data.password);
    console.log(this.data.userid.length)
    //学工号长度限制
    if(this.data.userid.length ==0){ 
      wx.lin.showDialog({
         type:"alert",
         title:"提示",
         content:"请输入学工号！"
       })
    }
    else if(this.data.userid.length !=9){
      wx.lin.showDialog({
        type:"alert",
        title:"提示",
        content:"学工号长度必须为9位！"
      })
    }
    else if(this.data.password.length==0){
      wx.lin.showDialog({
        type:"alert",
        title:"提示",
        content:"请输入密码！"
      })
    }
    else{
      wx.request({
        url: 'http://127.0.0.1:8000/api/login/',
        data: {userid:this.data.userid,password:this.data.password},
        method: 'POST',
        header: {'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res){
          if(res.data=='OK'){
            wx.switchTab({
              url: '../demo01/demo01',
            })
          }
          else if(res.data=='passworderror'){
            wx.lin.showDialog({
              type:"alert",
              title:"提示",
              content:"密码错误！"
            })
          }
          else{
            wx.lin.showDialog({
              type:"alert",
              title:"提示",
              content:"账号不存在！"
            })
          }    
        }
      })
    }
    var that=this
    app.globalData.userid = this.data.userid
    app.globalData.password = this.data.password
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})