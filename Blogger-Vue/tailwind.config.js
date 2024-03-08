/*
 * @Author: Vinylonprophet 915390118@qq.com
 * @Date: 2022-07-15 11:27:51
 * @LastEditors: Vinylonprophet 915390118@qq.com
 * @LastEditTime: 2022-07-20 09:56:36
 * @FilePath: \blogger\tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  // purge: [],
  // important: true,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        // 'extra-loose': '2.5',
        12: '3rem',
        16: '4rem',
        32: '8rem'
      },
      height: {
        '9/10': '90%',
        104: '416px',
        110: '440px'
      },
      backgroundImage: {
        'icon-search': "url('/src/static/img/navbar/search.svg')"
      },
      backgroundSize: {
        '50%': '50%',
        '66%': '66%',
        8: '2rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
