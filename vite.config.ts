import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite"
import Import from "unplugin-auto-import/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue(),
  Components(
      {
        dirs: ['./src/components', './src/layouts'],
        extensions: ['vue'],
        deep: true
      }
  ),
      Import({
          include: [
              /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
              /\.vue$/,
              /\.vue\?vue/, // .vue
              /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
              /\.md$/, // .md
          ],
          imports: [
              "vue",
              "pinia",
              "vue-router",
              "vue-i18n",

          ],
          dirs: [
              './src/stores'
          ],
      })
  ],
})
