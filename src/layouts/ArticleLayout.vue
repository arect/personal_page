<template>
  <q-layout view="hHh LpR fFf" class="non-selectable">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <b>AREC{{ title }}T</b>
        </q-toolbar-title>
        <q-space />
        <q-btn dense flat round icon="train" href="https://www.travellings.cn/go.html">
          <q-tooltip>开往</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
        <div class="row justify-center">
          <div class="col-xl-6 col-lg-7 col-md-8 col-sm-10 col-xs-12">
            <router-view/>
          </div>
        </div>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn unelevated color="primary" icon="home" class="fab-button" to="/" />
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const title = 'C'.repeat(Math.random() * 20)
</script>

<style scoped>
.fab-button {
  border-radius: 16px;
  height: 56px;
  width: 56px;
}
</style>
