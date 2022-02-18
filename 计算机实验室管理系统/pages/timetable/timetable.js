const app = getApp()
// pages/timetable/timetable.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:app.globalData.openid,
    listData: [
      { "coursename1": "网络原理", "coursename2": "软件工程","coursename3": "","coursename4": "","coursename5": "高级语言程序设计","coursename6": "","coursename7": "" },
      { "coursename1": "", "coursename2": "高级语言程序设计","coursename3": "","coursename4": "网络原理","coursename5": "","coursename6": "","coursename7": "" },
      { "coursename1": "数据结构", "coursename2": "","coursename3": "","coursename4": "","coursename5": "","coursename6": "软件工程","coursename7": "" },
    ]

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