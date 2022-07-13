const { resolve } = require('path')

// import vue from '@vitejs/plugin-vue'
//
// /**
//  * https://vitejs.dev/config/
//  * @type {import('vite').UserConfig}
//  */
// export default {
//     plugins: [vue()],
//     server: {                // ← ← ← ← ← ←
//         host: '0.0.0.0'    // ←  The new content  ←
//     }                        // ← ← ← ← ← ←
// }

module.exports = {

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                services: resolve(__dirname, 'services.html'),
                agency: resolve(__dirname, 'agency.html'),
                consulting: resolve(__dirname, 'consulting.html'),
            }
        }
    }
}

module.exports = {
    // remove modules you don't need
    modules: [
        'virtual',
        'keyboard',
        'mousewheel',
        'navigation',
        'pagination',
        'scrollbar',
        'parallax',
        'zoom',
        'lazy',
        'controller',
        'a11y',
        'history',
        'hash-navigation',
        'autoplay',
        'thumbs',
        'free-mode',
        'grid',
        'manipulation',
        'effect-fade',
        'effect-cube',
        'effect-flip',
        'effect-coverflow',
        'effect-creative',
        'effect-cards',
    ],
};

module.exports = {
    devtool: "source-map",
}

