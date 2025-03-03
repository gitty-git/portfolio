module.exports = {
    purge: ['./public/**/*.html', './src/**/*.vue'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        minWidth: {
            'xl-head': '650px',
        },
        fontFamily: {
            'sans': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {
            screens: {
                'xl': '1440px',
            },
            fontSize: {
                'hello-xl': '25vw',
                'hello-sm': '11.2vw',
                '23vw': '2.3vw',
                '15vw': '1.5vw',
                '12vw': '1.2vw'
            },
            inset: {
                '20vh': '24px',
                '12p': '12%',
                '7p': '7%',
                '5p': '5vw'
            },
            scale: {
                'sm': '0.30',
                '85': '0.85',
                '175': '1.75',
            },

            height: {
                // '2vh': 'calc((15vw) * 10)',
                '2vh': '150vw',
                'vh': '100vw',
            },
            width: {
                '2xl-head': '36vw',
                'xl-head': '600px',
                'md-head': '70vw',
                'sm-head': '80vw',
                '44vw' : '44vw',
            },
            colors: {
                blueGray: '#7C97A0',
                orangeRed: '#EF5A38',
                graphiteBlack: '#393835',
                antiqueWhite: '#FAE6CC'
            },
            skew: {
                '30': '30deg',
                '-30': '-30deg',
            },
            rotate: {
                '15': '15deg',
                '-15': '-15deg',
                '-30': '-30deg',
                '30': '30deg',
                '-60': '-60deg',
                '60': '60deg',
            },
            transitionDuration: {
                '400': '400ms',
                '600': '600ms',
                '800': '800ms',
            }
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
}
