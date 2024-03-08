<!--
 * @Author: Vinylonprophet 915390118@qq.com
 * @Date: 2022-07-19 15:08:13
 * @LastEditors: Vinylonprophet 915390118@qq.com
 * @LastEditTime: 2022-07-21 00:11:11
 * @FilePath: \blogger\src\components\index\selectArticle.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class=" selectArticle -ml-6 w-64 text-white rounded-3xl">
    <article class=" h-full p-6 flex flex-col">
      <p class=" mb-4">Article <span class=" text-gray-400 font-light">on July 19, 2022</span></p>
      <h1 class=" font-semibold text-xl mb-6">There is a mind map about the basic use of html</h1>
      <p class=" text-orange-400 font-semibold">
        @font-palette-values  base-palette  github
      </p>
      <div class=" mt-auto mb-0 h-auto flex items-center">
        <div class=" w-10 h-10">
          <img src="../../static/img/person/avatar.jpg" class=" h-full w-full rounded-full bg-cover bg-center bg-no-repeat">
        </div>
        <div class=" ml-4 text-sm font-semibold">Vinylon Prophet</div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'selectArtice'
}
</script>

<style>
.selectArticle{
  background: linear-gradient(85deg,#434343,#262626);
  transition: transform 0.2s;
  transition-timing-function: ease;
  box-shadow: -2rem 0 3rem -2rem #000;
  height: 95%;
}
.selectArticle:hover{
  transform: rotate(5deg);
  /* transform: translate(-.5rem,-1rem) rotate(5deg); */
  transform-origin: 100% 0%;
}
</style>
