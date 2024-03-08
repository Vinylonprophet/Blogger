<!--
 * @Author: Vinylonprophet 915390118@qq.com
 * @Date: 2022-07-15 11:53:00
 * @LastEditors: Vinylonprophet 915390118@qq.com
 * @LastEditTime: 2022-07-21 10:30:54
 * @FilePath: \blogger\src\components\header\navbar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class=" w-full h-16 border-b-white bg-gradient-to-r from-black to-gray-500 border-b-2 px-6 flex items-center">
    <!-- bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 -->
    <div class=" w-auto text-white font-bold text-3xl leading-12 float-left px-4 border-r-2 border-white">Vinylon's blog</div>
    <ul class=" h-full">
      <li class=" relative float-left px-6 h-full leading-16 text-center text-sm font-bold text-white cursor-pointer hover:text-orange-400 hover:bg-slate-300 hover:bg-opacity-25">About</li>
      <li class=" relative float-left px-6 h-full leading-16 text-center text-sm font-bold text-white cursor-pointer hover:text-orange-400 hover:bg-slate-300 hover:bg-opacity-25">Article</li>
      <li class=" relative float-left px-6 h-full leading-16 text-center text-sm font-bold text-white cursor-pointer hover:text-orange-400 hover:bg-slate-300 hover:bg-opacity-25">Project</li>
      <li class=" relative float-left px-6 h-full leading-16 text-center text-sm font-bold text-white cursor-pointer hover:!text-orange-400 hover:bg-slate-300 hover:bg-opacity-25">
        Notes
        <ul class=" absolute hidden left-1/2 -translate-x-1/2">
          <li class="bg-black px-6 text-white hover:border-b-2 hover:border-white cursor-pointer hover:text-orange-400 hover:bg-opacity-90">Html</li>
          <li class="bg-black px-6 text-white hover:border-y-2 hover:border-white cursor-pointer hover:text-orange-400 hover:bg-opacity-90">Css</li>
          <li class="bg-black px-6 text-white hover:border-y-2 hover:border-white cursor-pointer hover:text-orange-400 hover:bg-opacity-90">JavaScript</li>
        </ul>
      </li>
      <li class=" relative float-left px-6 h-full leading-16 text-center text-sm font-bold text-white cursor-pointer hover:text-orange-400 hover:bg-slate-300 hover:bg-opacity-25">Lists</li>
    </ul>
    <div class=" bg-white mx-4 cursor-pointer rounded-full w-10 h-10 ml-auto flex items-center justify-center bg-icon-search bg-no-repeat bg-center bg-66%">
      <!-- <img src="../../static/img/navbar/search.svg" class="h-2/3 w-2/3 bg-cover bg-no-repeat bg-center" alt="search"> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

ul li:hover ul {
  display: block;
}

</style>
