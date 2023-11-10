<template>
  <div v-if="loading" class="row justify-center q-pa-xl">
    <q-spinner color="primary" size="xl" />
  </div>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div v-if="!loading">
      <q-card v-for="(comment, index) in comments" :key="index" flat class="q-mb-md bg-grey-2 round-radius" >
        <q-card-section horizontal class="q-pl-sm">
          <q-card-section>
            <div class="text-body1 text-weight-bolder">
              {{ comment.user.login }}
            </div>
            <div class="text-h5">
              {{ comment.title.toUpperCase() }}
            </div>
          </q-card-section>
          <q-space />
          <q-card-section>
            <q-avatar rounded size="72px">
              <img alt="avatar" :src="comment.user.avatar_url">
            </q-avatar>
          </q-card-section>
        </q-card-section>
        <q-card-section>
          <q-chip square class="q-py-md round-radius">{{ format(comment.created_at) }}</q-chip>
        </q-card-section>
      </q-card>
    </div>
  </transition>
</template>

<script setup lang="ts">
import axios, { AxiosResponse } from 'axios'
import { Comment } from 'pages/model'
import { ref } from 'vue'

const loading = ref<boolean>(true)
const comments = ref<Comment[]>([])
axios.get<Comment[]>('https://api.github.com/repos/arect/personal_page/issues').then((data: AxiosResponse<Comment[]>) => {
  comments.value = data.data
  comments.value = comments.value.sort((a, b) => b.number - a.number)
}).catch(() => {
  // TODO
}).finally(() => {
  loading.value = false
})

const format = (str: string): string => {
  let diff = ((new Date()).getTime() - Date.parse(str)) / 1000
  if (diff < 60) {
    return `发布于 ${diff.toFixed(0)} 秒前`
  }
  diff = diff / 60
  if (diff < 60) {
    return `发布于 ${diff.toFixed(0)} 分钟前`
  }
  diff = diff / 60
  if (diff < 24) {
    return `发布于 ${diff.toFixed(0)} 小时前`
  }
  diff = diff / 24
  return `发布于 ${diff.toFixed(0)} 天前`
}
</script>

<style scoped>
.round-radius {
  border-radius: 12px
}
</style>
