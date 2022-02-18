// pages/timetable1/timetable1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: ["#94AAD6", "#98D0B9", "#F5B16D", "#8273B0", "#0A9A84", "#00B2BF", "#AFD788", "#E29AAD"],
    courseinfo:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var course_name = wx.getStorageSync('course_name');
    var class_len = wx.getStorageSync('class_len');
    this.setData({ course_name: course_name });
    this.setData({ class_len: class_len});
    let that = this
    wx.request({
      url: 'http://127.0.0.1:8000/api/courseinfo/',
      data:{userid:app.globalData.userid},
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(res);
        that.setData({
          courseinfo:res.data
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