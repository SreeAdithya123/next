/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            colors: {
                'teal': {
                    800: '#0F4C5C',
                    900: '#1a6b80'
                },
                'orange': {
                    500: '#F36F21',
                    600: '#ff8a47'
                }
            }
        },
    },
    plugins: [],
}
