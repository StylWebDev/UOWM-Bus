import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite"
import Import from "unplugin-auto-import/vite"
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue(), vueDevTools(),
  Components(
      {
        dirs: ['./src/components', './src/layouts'],
        extensions: ['vue'],
        deep: true,
          resolvers: [(compName) => {
            if (compName.startsWith('Icon')) return {name: compName, from: "@iconify/vue"}
          }]
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
              {
                  "greek-utils": [
                      "toGreek",
                      "toGreeklish"
                  ],
                  "vanilla-tilt": [["default", "VanillaTilt"]]
              }
          ],
          dirs: [
              './src/stores'
          ],
      })
  ],
})
