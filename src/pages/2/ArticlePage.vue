<template>
  <div class="q-py-md text-body1">
    在工作内网的时候想用Go写一点小程序，协助工作，但是包怎么导入是个问题。
    之前一直是<code class="q-px-sm bg-grey-3 rounded-borders">go vendor</code>，但是某些软件会卡死在<code class="q-px-sm bg-grey-3 rounded-borders">go list</code>。
    虽然不清楚为什么会卡死，也大概知道有办法避免，但是感觉很难受。
    在网上搜了一圈都没有人有类似的问题，很奇怪。终于找到了还算不错的办法。
  </div>
  <div class="q-py-md text-body1">
    还算简单，先在外网下载好各种包，然后打包<code class="q-px-sm bg-grey-3 rounded-borders">%GOPATH%/pkg/mod/cache</code>，
    解压到内网，最后执行：
    <div class="q-pa-md bg-grey-3 rounded-borders">
      <code>go env -w  GOPROXY=file:///%GOPATH%/pkg/mod/cache/download</code>
    </div>
    至于要不要把<code class="q-px-sm bg-grey-3 rounded-borders">%GOPATH%</code>改成实际路径，这个我不确定，也懒得测试，我是用的绝对路径的。
  </div>
  <div class="q-py-md text-body1">
    之后的开发就和正常外网开发差不多了，不过不知道为什么有的时候会找不到包，还是有点瑕疵的。
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
