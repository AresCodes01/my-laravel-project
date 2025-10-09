/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                lara: '#00ff00', // HEX sicher verwenden
            },
        },
    },
    plugins: [],
}
