import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                "color-primary": "#01051e",
                "color-primary-light": "#020726",
                "color-primary-dark": "#010417",
                "color-secondary": "#ff7d3b",
                "color-gray": "#333",
                "color-white": "#fff",
                "color-blob": "#A427DF",
            },

        },
        container: {
            center: true,
            padding: {
                DEFAULT: "20px",
                md: "50px",
            }
        }

    },

    plugins: [forms],
};
