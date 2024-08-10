<template>
  <div class="footer">

    <h3 class="f-title">
      获取掌阅iReader
    </h3>

    <div class="f-left">
      <p class="explain">
        下载iOS版
      </p>
    </div>

    <div class="f-right">
      <p class="explain">
        下载Android版
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"



</script>

<style scoped>
.footer {
  width: 31.25rem;
  height: 9.375rem;
  margin: 1.875rem auto;
  background-color: #e6e6e6;
  border-radius: .625rem;
}

.f-title {
  width: 31.25rem;
  color: #212121;
  text-align: center;
  padding: 1.5625rem 0;
}

.f-left {
  float: left;
  width: 10rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: .3125rem;
  background-color: #212121;
  padding: .1875rem .5rem;
  margin-left: 3.125rem;
  text-align: center;
}

.f-right {
  float: right;
  width: 10rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: .3125rem;
  padding: .1875rem .5rem;
  background-color: #4caf50;
  margin-right: 3.125rem;
  text-align: center;
}

.explain {
  color: #fff;
  font-size: .875rem;
}
</style>