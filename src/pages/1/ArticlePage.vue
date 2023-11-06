<template>
  <div>
    <q-card flat class="bg-grey-1 q-mb-md">
      <q-card-section>
        <pre><code>{{ code }}</code></pre>
      </q-card-section>
    </q-card>
    <div class="text-h5 q-mb-md">
      Hello, World!
    </div>
    <div class="text-body1 q-mb-md">
      这就是第一篇文章了，如此懒惰的我居然又开始折腾这玩意了，是不是意味着我很闲？<br>
      非也，非也。<br>
      本来在技术部做的好好的，领导强制把我调去业务部门，<span style="color: rgba(0,0,0,0)">我日你妈傻逼东西，操你妈！</span><br>
      原因就是这样。
    </div>
  </div>
</template>

<script setup lang="ts">
const code = `
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
`.trim()

</script>

<style scoped>

</style>
