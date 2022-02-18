// pages/studentinfo/studentinfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentinfo:'',
    name:'',
    userid:app.globalData.userid,
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    majorlist: ['请选择专业（可选）','计算机科学与技术','软件工程','网络工程','信息安全','数字媒体技术'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    major:''
  },
  bindname:function(e){
    this.setData({name:e.detail.value});
    let that = this
    wx.request({
      url: 'http://127.0.0.1:8000/api/studentinfoname/',
      data:{userid:app.globalData.userid,name:that.data.name},
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(res);
        that.setData({
          studentinfo:res.data
        })
      }
    })

  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show,
      major: this.data.majorlist[Index]
    });
    let that = this
    wx.request({
      url: 'http://127.0.0.1:8000/api/studentinfomajor/',
      data:{userid:app.globalData.userid,major:that.data.major},
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(res);
        that.setData({
          studentinfo:res.data
        })
      }
    })



  },
  
  goto_studentinfo:function(event){
    var idx = event.currentTarget.dataset.infoid;
    console.log(idx);
    wx.navigateTo({
      url: '../studentinfo01/studentinfo01?sname='+this.data.name,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'http://127.0.0.1:8000/api/studentinfo/',
      data:{userid:app.globalData.userid,major:this.data.major},
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(res);
        that.setData({
          studentinfo:res.data
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