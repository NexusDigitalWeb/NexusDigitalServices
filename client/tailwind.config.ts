import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'tablet': "500px",
        'tablet-md': "620px"
      },
      fontFamily: {
        'main': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
