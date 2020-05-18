import store from '../store/index'

const successHandler = (res, resolve) => {
  if (res.data.code === 0) {
    resolve(res.data)
  } else if (res.data.code === 40405) {
    uni.showToast({
      title: '暂无权限，请先到个人中心登录',
      icon: 'none'
    })
  } else {
    uni.showToast({
      title: res.data.message,
      icon: 'none'
    })
  }
}
export default class http {
  constructor({baseUrl = ''}) {
    this.baseUrl = baseUrl
  }
  get({url = '', params}) {
    uni.showLoading({
      title: '加载中...'
    })
    return new Promise((resolve, reject) => {
      uni.request({
        url: this.baseUrl + url,
        data: {
          ...params
        },
        header: {
          Authentication: store.getters.openid
        },
        method: 'GET',
        success: res => {
          uni.hideLoading()
          successHandler(res, resolve)
        },
        fail: e => {
          uni.hideLoading()
          reject(e)
        }
      })
    })
  }
  put({url = '', params}) {
    return new Promise((resolve, reject) => {
      uni.showLoading()
      uni.request({
        url: this.baseUrl + url,
        data: {
          ...params
        },
        header: {
          Authentication: store.getters.openid
        },
        method: 'PUT',
        success: res => {
          uni.hideLoading()
          successHandler(res, resolve)
        },
        fail: e => {
          uni.hideLoading()
          reject(e)
        }
      })
    })
  }
  post({url = '', params}) {
    return new Promise((resolve, reject) => {
      uni.showLoading()
      uni.request({
        url: this.baseUrl + url,
        data: {
          ...params
        },
        header: {
          Authentication: store.getters.openid
        },
        method: 'POST',
        success: res => {
          uni.hideLoading()
          successHandler(res, resolve)
        },
        fail: e => {
          uni.hideLoading()
          reject(e)
        }
      })
    })
  }
  delete({url = '', params}) {
    return new Promise((resolve, reject) => {
      uni.showLoading()
      uni.request({
        url: this.baseUrl + url,
        data: {
          ...params
        },
        header: {
          Authentication: store.getters.openid
        },
        method: 'DELETE',
        success: res => {
          uni.hideLoading()
          successHandler(res, resolve)
        },
        fail: e => {
          uni.hideLoading()
          reject(e)
        }
      })
    })
  }
}