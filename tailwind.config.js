module.exports = {
    purge: ['./public/**/*.html', './src/**/*.vue'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {
            colors: {
                blueGray: '#7C97A0',
                orangeRed: '#EF5A38',
                graphiteBlack: '#393835',
                antiqueWhite: '#FAE6CC'
            },
            rotate: {
                '-30': '-30deg',
                '30': '30deg',
            }
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
}