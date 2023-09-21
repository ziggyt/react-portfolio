/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#dddddd',
                secondary: '#2ecc71'
            }
        }
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require('@tailwindcss/forms'),
        // eslint-disable-next-line no-undef
        require('@tailwindcss/typography'),
    ],
}


