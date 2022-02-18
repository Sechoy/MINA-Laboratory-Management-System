const app = getApp()
// pages/demo01/demo01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:app.globalData.openid,
    userid:app.globalData.userid,
    username:'',
    identity:'',
    userinfo:''
  },
  goto_timetable:function(e){
    wx.navigateTo({
      url: '../timetable1/timetable1'
    })
  },
  goto_courseinfo:function(e){
    wx.navigateTo({
      url: '../courseinfo/courseinfo'
    })
  },
  goto_teacherinfo:function(e){
    wx.navigateTo({
      url: '../teacherinfo/teacherinfo'
    })
  },
  goto_studentinfo:function(e){
    wx.navigateTo({
      url: '../studentinfo/studentinfo'
    })
  },
  goto_taskinfo:function(e){
    wx.navigateTo({
      url: '../taskinfo/taskinfo'
    })
  },
  goto_publish:function(e){
    wx.navigateTo({
      url: '../publish/publish'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.setData({username:'',identity:''})
    wx.request({
      url: 'http://127.0.0.1:8000/api/userinfo/',
      data:{userid:app.globalData.userid},
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(res);
        that.setData({
          username:res.data,
        })
      }
    })
    wx.request({
      url: 'http://127.0.0.1:8000/api/identity/',
      data:{userid:app.globalData.userid},
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(res);
        that.setData({
          identity:res.data,
        })
      }
    })

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