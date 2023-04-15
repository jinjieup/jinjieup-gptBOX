import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://raw.githubusercontent.com/jinjieup/chatgpt-web/main/src/assets/avatar.jpg',
      name: 'Guest User',
      description: '<span onclick="window.open(`https://work.weixin.qq.com/kfid/kfc06290a9cc7fe9e6d`,`_blank`)" style="color: dodgerblue;cursor: pointer;">Have any trouble?</span>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
