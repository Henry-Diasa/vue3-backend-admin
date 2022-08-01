import { MAIN_COLOR } from '@/constant'
import { getItem } from '@/utils/storage'
import { generateColors } from '@/utils/theme'
const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: (state) => {
    return {
      ...state.theme.variables,
      ...generateColors(getItem(MAIN_COLOR))
    }
  },
  sidebarOpened: (state) => state.app.sidebarOpened,
  language: (state) => state.app.language,
  tagsViewList: (state) => state.app.tagsViewList,
  mainColor: (state) => state.theme.mainColor
}
export default getters
