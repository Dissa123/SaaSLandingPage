import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '115px': '115px',
        '39px': '39px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
      },

      // Customize font Sizes
      fontSize: {
        h1: ['90px', { lineHeight: 'auto' }],
        h2: ['54px', { lineHeight: 'auto' }],
        h4: ['26px', { lineHeight: 'auto' }],
        h5: ['18px', { lineHeight: 'auto' }],
        BodyLarge: ['22px', { lineHeight: 'auto' }],
        BodySmallTag: ['14px', { lineHeight: 'auto' }],
        BodyMedium: ['16px', { lineHeight: 'auto' }],
        BodyS: ['14px', { lineHeight: 'auto' }],
        BodyBold: ['16px', { lineHeight: 'auto' }],
        BodySbold: ['14px', { lineHeight: 'auto' }],
        Tag: ['13px', { lineHeight: 'auto' }],

        // for arrow icon
        arrowIcon:'4px'
      },

      // Font Weight
      fontWeight:{
        normal: '400',
        bold: '700',
        semibold: '600',
        light: '300',
        extrabold: '800',
      },

      // Add Background Color
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #feecff 0%, #fecaff 12%, #feb5ff 27%, #ffdbf7 40%, #fff4d6 49%, #f3fcd7 59%, #d2f5ee 71%, #c3efff 84%, #fbefff 100%)',

        'custom-gradient-hero': 'linear-gradient(to bottom, #000000, #200D42,#4F21A1,#A46EDB)',

        'custom-gradient-fouth': 'linear-gradient(to bottom, #6d1449, #2e026d)',
      },

      // Header padding
      padding:{
        'header-padding':'8px 110px 8px 110px',
        'button-padding': '10px 15px 10px 15px',
        'header-down':'20px 20px 20px 20px'
      },

      borderRadius:{
        'buttonBorder': '10px',
        'custom-curve': '0 0 50% 50%',
      }
       

    
    },
  },
  plugins: [],
};
export default config;
