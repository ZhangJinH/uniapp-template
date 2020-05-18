export default class Router {
  push({url = '', query}) {
    let q = []
    if (query) {
      q = Object.keys(query).map(key => `${key}=${query[key]}`)
    }
    uni.navigateTo({
      url: url + `?` + q.join('&')
    })
  }
  replace({url = '', query}) {
    let q = []
    if (query) {
      q = Object.keys(query).map(key => `${key}=${query[key]}`)
    }
    uni.redirectTo({
      url: url + `?` + q.join('&')
    })
  }
}