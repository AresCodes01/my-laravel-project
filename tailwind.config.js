// tailwind.config.js
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                laracast: 'rgb(0, 255, 0)', // jetzt korrekt
            },
        },
    },
    plugins: [],
}
