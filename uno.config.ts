import {
  mergeConfigs,
  presetUno,
  presetAttributify,
  presetIcons,
  presetMini,
  presetWebFonts,
  transformerDirectives,
} from "unocss";
import config from "./.nuxt/uno.config.mjs"

export default mergeConfigs([config, {
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        devicon: () =>
          import("@iconify-json/devicon/icons.json").then((i) => i.default),
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default),
      },
    }),
    presetMini(),
    presetWebFonts(),
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      primary: "#1E201E",
      secondary: "#3C3D37",
      grass: "#697565",
      light: "#E2DFD0",
      bright: "#F97300",
    },
  },
}]);
