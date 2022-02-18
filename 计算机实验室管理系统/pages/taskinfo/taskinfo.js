const app = getApp()

Page({
  data: {
    openid:app.globalData.openid,
    expinfo:'',
    userid:app.globalData.userid,
    idx:'',
    name:''
  },
  submit:function(event){
    var idx = event.currentTarget.dataset.infoid;
    wx.navigateTo({
      url: '../taskinfo01/taskinfo01?idx='+idx,
    })
  },

  download:function(event){
    var that = this
    that.setData({
      idx:event.currentTarget.dataset.infoid
    })
  },
  bindname:function(e){
    this.setData({name:e.detail.value});
    let that = this
    wx.request({
      url: 'http://127.0.0.1:8000/api/taskinfoname/',
      data:{userid:app.globalData.userid,name:that.data.name},
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'http://127.0.0.1:8000/api/taskinfo/',
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