import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite auto-injects a render-blocking <link rel="stylesheet"> for the
// built CSS bundle, which isn't editable from the static index.html
// source (it doesn't exist until build time). Lighthouse flags that as
// render-blocking, so this plugin rewrites the generated tag to the
// standard "preload + async apply" pattern after the HTML is emitted,
// with a <noscript> fallback for JS-disabled clients.
function asyncCssPlugin() {
  return {
    name: 'async-css',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet"([^>]*?) href="([^"]+\.css)"([^>]*)>/g,
        (match, before, href, after) => {
          const attrs = `${before}${after}`
          return (
            `<link rel="preload" as="style"${attrs} href="${href}">` +
            `<link rel="stylesheet"${attrs} href="${href}" media="print" onload="this.media='all';this.onload=null;">` +
            `<noscript><link rel="stylesheet"${attrs} href="${href}"></noscript>`
          )
        }
      )
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    asyncCssPlugin(),
  ],
})