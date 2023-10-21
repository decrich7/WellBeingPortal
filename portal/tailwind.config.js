/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html",
        "./src/**/*.{html,js,jsx}",
        "./src/components/**/**/.{html,js,jsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require("tw-elements/dist/plugin.cjs"), require('flowbite/plugin')],
}

