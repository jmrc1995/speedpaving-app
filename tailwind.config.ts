  import type { Config } from "tailwindcss";

  export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/flowbite/**/*.js"  
    ],
    
    corePlugins: {
      // Make sure these aren't disabled
      scrollSnapType: true,
      scrollSnapAlign: true,
      scrollBehavior: true,
    },
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",

        },
        fontFamily:{
          proxima: ["rama-gothic-c", "sans-serif"],
        
        },
        keyframes: {
          driveAcross: {
            '0%': { transform: 'translateX(-100%)', opacity: '1' },
            '90%': { opacity: '1' },
            '100%': { transform: 'translateX(120vw)', opacity: '0' },
          },
        },
        animation: {
          'drive-truck': 'driveAcross 4s ease-in-out forwards',
        },
      },
    },
    plugins: [
      require("flowbite/plugin")//Imports flowbite as plugin
    ],
  } satisfies Config;
