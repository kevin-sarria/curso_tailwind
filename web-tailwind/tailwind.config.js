module.exports = {

    theme: {
        extend: {
            backgroundImage: theme => ({
                'body-pattern': "url('../img/pattern.png')"
            }),
            colors: {
                "azul-claro": "#37bcf9",
                "azul-oscuro": "#0370b9"
            },
            animation: {
                'spin-low': 'spin 2s linear infinite',
                'from-below': 'fromBellow 500ms linear',
                'from-right': 'fromRight 300ms linear'
            },
            keyframes: {
                fromBellow: {
                    '0%': { transform: 'transaleY(0%)' },
                    '50%': { transform: 'translateY(200%)' },
                    '100%': { transform: 'transaleY(0%)' }
                },
                fromRight: {
                    '0%': { transform: 'translateX(200%)' },
                    '100%': { transform: 'transalteX(0%)' }

                }
            }
        }
    },
    variants: {
        animation: [ 'responsive', 'hover', 'group-hover' ],
        animate: [ 'responsive', 'hover', 'group-hover' ]
    }

}