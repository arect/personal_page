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
}]

export {
  articles
}
export type {
  ArticleInformation
}
