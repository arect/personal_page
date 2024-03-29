interface ArticleInformation {
  title: string
  time: string
  tag: string[]
  content: string
  path: string
}

const articles: ArticleInformation[] = [{
  title: 'Hello, World',
  time: '2023-11-02',
  tag: ['第一篇文章'],
  content: '这是第一篇文章，所以是Hello, World。',
  path: 'hello_world'
}, {
  title: '在无网环境下写个Go小程序',
  time: '2023-11-17',
  tag: ['Go'],
  content: '在内网开发的时候没有网络，包可以从外网下，go list咋办呢？',
  path: 'golang_dev_without_network'
}, {
  title: '把笔记本上的截图键改成第三方',
  time: '2024-01-18',
  tag: ['FuxkLenovo'],
  content: '联想为什么就那么喜欢在笔记本键盘上塞没用的按键呢？塞一个客服键我忍了，还把Windows的截图和PrtSc放一起？',
  path: 'use_snipaste_instead_snip_tool'
}, {
  title: '浏览器安装报错0x8004070c',
  time: '2024-02-29',
  tag: ['Chrome', 'Windows'],
  content: '在公司电脑里面安装Chrome一直失败，强迫症在忍了大半年之后，意外发现解决办法，下一回：来袭！Chrome！',
  path: 'finally_installed_chrome_at_my_office_computer'
}]

export {
  articles
}
export type {
  ArticleInformation
}
