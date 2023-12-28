<template>
  <div>
    <div class="text-h4 q-py-sm">主页</div>
    <q-slide-transition>
      <div v-show="clarify">
        <q-banner class="bg-primary text-white round-radius">
          我们通过使用 Microsoft Clarity 来了解您如何使用我们的网站来改进我们的页面。使用我们的网站，即表示您同意我们和 Microsoft 可以收集和使用这些数据。
          <template v-slot:action>
            <q-btn flat color="white" label="确定" @click="clarify = false" />
          </template>
        </q-banner>
      </div>
    </q-slide-transition>
    <div class="q-py-sm">
      <q-card flat class="bg-grey-2 round-radius">
        <q-card-section class="text-h5">
          最近文章
        </q-card-section>
        <template v-for="(article, index) in recentArticles" :key="index">
          <q-separator inset />
          <q-card-section>
            <div class="text-h6 q-px-sm q-pb-sm">
              <a :href="`/article/${article.path}`">{{ article.title }}</a>
            </div>
            <div class="text-body1 q-px-sm q-pb-sm">
              {{ article.content }}
            </div>
            <div>
              <q-chip icon="event">{{ article.time }}</q-chip>
              <q-chip v-for="(tag, i) in article.tag" :key="i">{{ tag }}</q-chip>
            </div>
          </q-card-section>
        </template>
      </q-card>
    </div>
    <div class="q-py-sm">
      <q-card flat class="bg-grey-2 round-radius">
        <q-card-section class="text-h5">
          留言板
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <q-btn unelevated rounded color="blue" icon="forum" label="查看留言" to="/comments" class="m3-button q-mr-sm" />
          <q-btn unelevated rounded color="black" label="前往Github留言" class="m3-button" href="https://github.com/arect/personal_page/issues/new" />
        </q-card-section>
      </q-card>
    </div>
    <div class="q-py-sm">
      <q-card flat class="bg-grey-2 round-radius">
        <q-card-section class="text-h5">
          友链
        </q-card-section>
        <q-separator inset />
        <q-list class="q-py-md">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img alt="Jimmy的头像" src="https://blog.jimmyholoveslife.cn/usr/uploads/2022/06/3312055002.jpg" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                Jimmy Ho
              </q-item-label>
              <q-item-label caption>
                码力超强大佬一枚
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn flat round icon="link" href="https://www.jimmyholoveslife.cn/" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://blog.jimmyholoveslife.cn/usr/uploads/2022/07/4284623754.jpg" alt="SAGIRI的头像">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                SAGIRI
              </q-item-label>
              <q-item-label caption>
                会一点 Python / JavaScript / C / C++，正在学习 Rust，打算学习 Go（咕咕<br>
                目前北京航空航天大学 & 巴黎萨克雷大学硕士在读
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn flat round icon="link" href="https://blog.sagiri.tech/" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
    <div class="row justify-center">
      <q-btn flat rounded label="萌ICP备 20202030号" href="https://icp.gov.moe/?keyword=20202030" />
    </div>
    <div class="row justify-center">
      <q-btn flat rounded label="开往 TRAVELING" href="https://www.travellings.cn/go.html" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { articles } from 'src/pages/articles'
import { ref } from 'vue'

const recentArticles = articles.slice(0, 5)
const clarify = ref(true)
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

.round-radius {
  border-radius: 12px
}

.m3-button {
  height: 40px;
  padding-left: 24px;
  padding-right: 24px;
}
</style>
