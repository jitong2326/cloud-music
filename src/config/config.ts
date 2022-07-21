// 接口api地址常量
export const URL = {
  musicUrl: 'http://localhost:4000'
}
// 全局常量
export const CT = {
  timeout: 10000
}
export interface INavItem {
  name: string
  iconName: string
  target: string
}
export const navList: Array<INavItem> = [
  {
    name: '每日推荐',
    iconName: 'every',
    target: ''
  },
  {
    name: '私人FM',
    iconName: 'fm',
    target: ''
  },
  {
    name: '歌单',
    iconName: 'playlist',
    target: ''
  },
  {
    name: '排行榜',
    iconName: 'rank',
    target: ''
  },
  {
    name: '有声书',
    iconName: 'voice-book',
    target: ''
  },
  {
    name: '数字专辑',
    iconName: 'album',
    target: ''
  },
  {
    name: '关注新歌',
    iconName: 'focus-music',
    target: ''
  },
  {
    name: '歌房',
    iconName: 'music-room',
    target: ''
  },
  {
    name: '游戏专区',
    iconName: 'game',
    target: ''
  }
]
