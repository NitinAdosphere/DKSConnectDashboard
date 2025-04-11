/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                customBox: '0px 4px 12px -2px #4040401A'
            },
            colors: {
                primary: '#105E96',
                secondary: '#1C1C1C',
                customGray: '#505050',
                bgBlue: '#EFF6FA'
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif']
            },
            fontSize: {
                font10: '10px',
                font12: '12px',
                font13: '13px',
                font14: '14px',
                font15: '15px',
                font16: '16px',
                font18: '18px',
                font20: '20px',
                font22: '22px',
                font24: '24px',
                font28: '28px',
                font30: '30px',
                font32: '32px',
                font36: '36px',
                font40: '40px',
                font42: '42px',
                font48: '48px',
                font50: '50px',
                font64: '64px'
            },
            screens: {
                '2xl': '1600px'
            }
        },
        plugins: []
    }
}
