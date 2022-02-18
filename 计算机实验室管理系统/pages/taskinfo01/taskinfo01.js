const app = getApp()
Page({
  data: {
    idx:"",
    expinfo:'',
    filename:'',
    idx:""
  },

  onLoad: function (options) {
    this.setData({
      idx:options.idx
    })
    console.log("submit",this.data.idx);
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
  },

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