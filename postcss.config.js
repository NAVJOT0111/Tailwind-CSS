module.exports = {
    theme: {
        extend: {
          screens: {
            'sm': '700px',
            'md': '900px',
            'lg': '1000px',
            'navjot': '3690px',
          },
          spacing: {
            '10': '100px',
            '1': '1px',
            'c-nav': '11px',
            'navjott': '10px',
            '20': '20px',
            '1': '100px',
            '100': '100px',
            'custom-n': '1000px',
          },
        },
      },
      
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  };
  
  /** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.html"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  