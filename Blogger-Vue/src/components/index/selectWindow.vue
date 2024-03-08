<!--
 * @Author: Vinylonprophet 915390118@qq.com
 * @Date: 2022-07-19 11:53:37
 * @LastEditors: Vinylonprophet 915390118@qq.com
 * @LastEditTime: 2022-07-20 14:22:13
 * @FilePath: \blogger\src\components\index\selectWindow.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class=" h-110 flex">
    <div class=" w-64 h-full py-6 flex-shrink-0">
      <div class=" background-rainbow w-full h-full bg-black rounded-xl box-border flex items-end ">
        <div class="text-white ml-5 mb-6 z-20">
          <p class=" text-3xl font-semibold leading-10">Select<br>My<br>Notes</p>
          <p class=" mt-6 leading-6">Powered by<br><span class="text-cyan-200">Vinylon</span></p>
        </div>
      </div>
    </div>

    <div class=" ml-4 pl-14 py-6 h-full flex-grow-0 bg-transparent flex flex-nowrap overflow-x-auto">
      <select-article class=" z-0 flex-shrink-0"></select-article>
      <select-article class=" z-0 flex-shrink-0"></select-article>
      <select-article class=" z-0 flex-shrink-0"></select-article>
      <select-article class=" z-0 flex-shrink-0"></select-article>
      <select-article class=" z-0 flex-shrink-0"></select-article>
      <select-article class=" z-0 flex-shrink-0"></select-article>
      <select-article class=" z-0 flex-shrink-0"></select-article>
    </div>
  </div>
</template>

<script>
import selectArticle from './selectArticle.vue'
export default {
  components: { selectArticle },
  name: 'selectWindow'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar
{
    width:16px;
    height:16px;
    background-color:#F5F5F5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track{
  /* -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3); */
  /* border-radius: 10px; */
  background-color:#262626;
  /* background: linear-gradient(90deg,#434343,#434343 1px,#262626 0,#262626); */
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb{
  /* border-radius:10px; */
  /* -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3); */
  /* background-color:#555; */
  background: #434343;
  border-radius: 10px;
  box-shadow: inset 2px 2px 2px hsl(0deg 0% 100% / 25%), inset -2px -2px 2px rgb(0 0 0 / 25%);
}

.background-rainbow::before {
  content: "";
  background: linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%);
  position: absolute;
  top: -5px;
  left: -5px;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  /* z-index: 1; */
  border-radius: 12px;
}

.background-rainbow {
  /* margin-top: 4rem; */
  /* flex: 0 0 250px; */
  /* margin-right: 1rem; */
  position: relative;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: flex-end; */
  /* padding: 1.5rem; */
  transform: translateY(-10px);
}

.background-rainbow::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  /* z-index: 2; */
  border-radius: 8px;
}
</style>
