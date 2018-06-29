import axios from 'axios'
import md5 from 'js-md5'
// import ly from 'ly'
let serverUrl = '/api/v1' // 本地调试时
// let serverUrl = '/v1' // 打包部署上线时

export default {
  dataUrl: serverUrl,
  req (param) {
    var signName = ''
    if (param.method === 'post' && param.data !== undefined) {
      var u = navigator.userAgent
      if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        param.data.source = 2
      } else {
        param.data.source = 3
      }
      signName = this.signName(param)
      param.data = Object.assign(param.data, {
        signName: signName
      })
    }
    axios({
      method: param.method || 'get',
      url: param.url || '',
      dataType: param.type || 'json',
      data: param.data || ''
    }).then(param.succ).catch(function (error) {
      console.log(error)
    })
  },
  signName (param) {
    var ordered = this.objKeySort(param.data)
    var orderedStr = ''
    for (var i in ordered) {
      orderedStr += i + ':' + ordered[i]
    }
    var res = md5(param.url + '+' + param.method + '+' + orderedStr + '+' + 'qijiyuedu-h5')
    return res
  },
  objKeySort (obj) { // 排序的函数
    var newkey = Object.keys(obj).sort() // 先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    var newObj = {} // 创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) { // 遍历newkey数组
      newObj[newkey[i]] = obj[newkey[i]]
    }
    return newObj // 返回排好序的新对象
  },
  evn () {
    var u = navigator.userAgent
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
      return 'android'
    } else {
      return 'ios'
    }
  },
  resolveAfter2Seconds (xmLoginObj) {
    var that = this
    return new Promise(resolve => {
      setTimeout(() => {
        that.req({
          data: {
            xima_uid: xmLoginObj.uid,
            xima_token: xmLoginObj.token,
            nickname: xmLoginObj.nickName,
            logoPic: xmLoginObj.imgUrl,
            timestampName: Math.round(new Date().getTime() / 1000)
          },
          method: 'post',
          url: that.dataUrl + '/user/token',
          succ (res) {
            resolve(res)
          }
        })
      }, 1000)
    })
  },
  async getQjToken (xmLoginObj) {
    var res = await this.resolveAfter2Seconds(xmLoginObj)
    return res
    // if (res.data.code === 200 && res.data.data) {
    //   return res.data.data.token
    // }
  }
}
