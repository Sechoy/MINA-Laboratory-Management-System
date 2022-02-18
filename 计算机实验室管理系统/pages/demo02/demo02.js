const app = getApp()
// pages/demo02/demo02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:app.globalData.openid,
    expinfo:'',
    userid:app.globalData.userid,
    identity:'',
    idx:'',
  },
  submit:function(event){
    var idx = event.currentTarget.dataset.infoid;
    wx.navigateTo({
      url: '../submit/submit?idx='+idx,
    })
  },
  home:function(e){
    wx.switchTab({
      url: '../demo02/demo02'
    })
  },

  download:function(event){
    var that = this
    that.setData({
      idx:event.currentTarget.dataset.infoid
    })
    wx.lin.showDialog({
      type: "alert",
      title: "提示",
      content: "实验报告下载成功！"
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'http://127.0.0.1:8000/api/expinfo/',
      data:{userid:app.globalData.userid},
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(res);
        that.setData({
          expinfo:res.data
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