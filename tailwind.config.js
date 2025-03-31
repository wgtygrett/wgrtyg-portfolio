/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],  // Ensure this includes ts files
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',  // Blinking cursor
        rotate: 'rotate 5s ease-in-out infinite',   // Full rotation with pause
      },
      colors: {
        'navy-blue': '#1B0067',
        'navy-blue-desat': '#3F005C',
        'eggplant': '#67004B',
        'eggplant-desat': '#7A0040',
        'blue-violet': '#4F0067',
        'blue-violet-desat': '#6C0061',
        'wine': '#670018',
        'wine-desat': '#7A0029',
        'emerald': '#00523F',
        'emerald-desat': '#3B5A4E',
        'gold': '#e5b243',
        'tech-blue-dark': '#2a6f96',
        'tech-blue-light': '#e1f0f7',
        'tech-blue-gray': '#15384b',
        'tech-blue-mid': '#006796',
        'tech-blue-bright': '#00a3ff',
        'tech-blue': '#007dc4'
      },
      keyframes: {
        blink: {
          '50%': { opacity: 0 },  // Blinking underscore effect
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },    // Start at 0 degrees
          '40%': { transform: 'rotate(180deg)' }, // Rotate 180 degrees in 2 seconds
          '60%': { transform: 'rotate(180deg)' }, // Pause at 180 degrees (1 second)
          '100%': { transform: 'rotate(360deg)' }, // Complete 360 degrees after 1 second pause
        },
      },
      screens: {
        'xs': {max: '639px' },
      },
      fontFamily: {
        // inter: ['Inter', 'sans-serif'],
        // montserrat: ['Montserrat', 'sans-serif'],
        // syncopate: ['Syncopate', 'sans-serif'],
        monodisplay: ['Major Mono Display', 'monospace'],
        // mono: ['Courier New', 'Courier', 'monospace'],  // Sets monospace to system default monospace

      },
    },
  },
  plugins: [],
}
