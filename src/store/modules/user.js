// import { login, getUserInfo } from '@/api/sys'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import { setTimeStamp } from '@/utils/auth'
import router from '@/router'
// import md5 from 'md5'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN),
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login(context, userInfo) {
      // const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        // 先mock数据
        setTimeout(() => {
          this.commit('user/setToken', 'adadqweq123sadasdasd')
          // 保存登录时间
          setTimeStamp()
          resolve()
        }, 1000)
        // console.log(login, md5)
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
    },
    async getUserInfo(context) {
      // const res = await getUserInfo()
      // console.log(getUserInfo)
      const res = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            username: 'xxx',
            id: '12d',
            avatar:
              'https://img.onlinedown.net/download/202202/153635-620a06836cced.jpg'
          })
        }, 1000)
      })
      this.commit('user/setUserInfo', res)
      return res
    },
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
