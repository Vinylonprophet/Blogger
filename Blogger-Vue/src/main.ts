/*
 * @Author: Vinylonprophet 915390118@qq.com
 * @Date: 2022-07-15 11:26:27
 * @LastEditors: Vinylonprophet 915390118@qq.com
 * @LastEditTime: 2022-07-15 11:30:44
 * @FilePath: \blogger\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import Index from './views/index/index.vue'
import router from './router'
import store from './store'
import './index.css'

createApp(Index).use(store).use(router).mount('#app')
