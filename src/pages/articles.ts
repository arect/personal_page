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
}]

export {
  articles
}
export type {
  ArticleInformation
}
