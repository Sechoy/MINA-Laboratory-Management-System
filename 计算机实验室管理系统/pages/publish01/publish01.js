// pages/publish01/publish01.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx:"",
    expinfo:'',
    exp_name:'',
    task:''
  },
bindtask:function(e){
  this.setData({task:e.detail.value});   
},
home:function(e){
  wx.switchTab({
    url: '../demo01/demo01'
  })
},

publish:function(e){    
    wx.request({
      url: 'http://127.0.0.1:8000/api/publish/',
      data:{exp_name:this.data.expinfo[this.data.idx].exp_name,task:this.data.task},
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(res);
      }
    })
    wx.lin.showDialog({
      type: "alert",
      title: "提示",
      content: "发布成功！"
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      idx:options.idx
    })
    
    console.log("submit",this.data.idx);
    let that = this
    wx.request({
      url: 'http://127.0.0.1:8000/api/publish_exp/',
      data:{},
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(res);
        that.setData({
          expinfo:res.data,
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