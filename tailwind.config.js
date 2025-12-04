// // module.exports = {
// //   darkMode: 'class', // enable class-based dark mode
// //   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
// //   theme: {
// //     extend: {
// //       animation: {
// //         fade: 'fadeIn 0.6s ease-out forwards',
// //       },
// //       keyframes: {
// //         fadeIn: {
// //           '0%': { opacity: 0, transform: 'translateY(20px)' },
// //           '100%': { opacity: 1, transform: 'translateY(0)' },
// //         },
// //       },
// //     },
// //   },
// //   plugins: [],
// // };
// /** 


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'brand-green': '#22c55e',
//       },
//       keyframes: {
//         fadeInUp: {
//           '0%': { opacity: 0, transform: 'translateY(16px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' }
//         }
//       },
//       animation: {
//         'fade-up': 'fadeInUp 0.6s ease-out both'
//       }
//     }
//   },
//   plugins: [],
// }
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}