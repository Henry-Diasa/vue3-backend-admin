import { login } from '@/api/sys'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import md5 from 'md5'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN)
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    login(context, userInfo) {
      // const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        // 先mock数据
        setTimeout(() => {
          this.commit('user/setToken', 'adadqweq123sadasdasd')
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
