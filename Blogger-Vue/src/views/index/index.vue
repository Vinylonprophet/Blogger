<!--
 * @Author: Vinylonprophet 915390118@qq.com
 * @Date: 2022-07-15 11:31:40
 * @LastEditors: Vinylonprophet 915390118@qq.com
 * @LastEditTime: 2022-08-03 22:45:53
 * @FilePath: \blogger\src\views\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="h-screen w-full index-bg-color overflow-auto">
    <navbar class="fixed w-full z-50"></navbar>
    <!-- <select-window class=" mx-10 mt-40"></select-window> -->
    <select-window class=" mx-10 my-auto absolute top-0 bottom-0 left-0 right-0"></select-window>
  </div>
</template>

<script>
import navbar from '@/components/header/navbar.vue'
import SelectWindow from '@/components/index/selectWindow.vue'
export default {
  name: 'Index',
  components: { navbar, SelectWindow }
}
</script>

<style>
.index-bg-color{
  background-color: #262626;
}
</style>
