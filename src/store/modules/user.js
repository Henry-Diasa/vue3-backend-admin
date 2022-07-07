import { login } from '@/api/sys'
import md5 from 'md5'

export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    login(context, userInfo) {
      // const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        // 先mock数据
        setTimeout(() => {
          resolve()
        }, 1000)
        console.log(login, md5)
        // 调后端接口
        // login({
        //   username,
        //   password: md5(password)
        // })
        //   .then((data) => {
        //     resolve()
        //   })
        //   .catch((err) => {
        //     reject(err)
        //   })
      })
    }
  }
}
