export const TOKEN = "fa54a97c1348167613707146e3ce1c2163C874116C8222C592D6EF7CB721C8F09EB9A4C9";
export const CDN = "https://hst-api.wialon.com";

/* configuracion de sensores y parametros necesarios para  */
export const params = {
    /* test */
        combustible: {
            adc1:{
                device: 'noNameDevice',
                equation: function (value) {
                    return ( value/ 1000 ) * 280;
                },
                units: ['GAFI 679 GAS']
            },
            m_asgn1_raw: {
                device: 'noNameDevice',
                equation: function (value) {
                    const ConvString = value.toString();
                    const FirstTwo = ConvString.substring(0, 2);
                    const hexToDecimal = parseInt(FirstTwo, 16);
                    const Porcentaje = (hexToDecimal * 100) / 255
                    return (Porcentaje/100) * 197
                },
                units: ['GAFI 679 OBD']
            },
            SensL: {
                device: 'noNameDevice',
                equation: function (value) {
                    return `El valor del sensor es: ${value}`;
                }
            },
            can_fuel_level_p: {
                device: 'noNameDevice',
                equation: function (value) {
                    const capacidadTotalLitros = 45;
                    return (value / 100) * capacidadTotalLitros;
                },                
                units: ['GAFI - 516']
            }
        },
    /* test */

    odometer: ['odometer']
}

/* Configuraciones del componente Navbar */
export const Navbar = {
    brand: 'Rendimiento de combustible',
    img_brand: './src/img/' + 'TicsaTrafusa_logo.png', /* brand principal */
    img_brand_2: './src/img/' + 'logojd.png',/* brand secundario */
    items: [
        { label: 'Dashboard', icon: 'fas fa-tachometer-alt', to: '/dashboard' },
        { label: 'Unidades', icon: 'fas fa-car-side', to: '/units' },
        { label: 'Mensajes', icon: 'fas fa-envelope', to: '/messages' },
        { label: 'Ajustes', icon: 'fas fa-cog', to: '/settings' },
    ],
}

/* Configuraciones del componente Main */
export const Main = {
    class_bootstrap: 'primary' /* color de algunos componentes(buttons, label, background, etc) */
}

/* Configuraciones del componente Footer */
export const Footer = {
    copyright: 'Diseñado por JMBobadilla 2025 para uso exclusivo de Jornada Digital. Todos los derechos reservados.',
    links: [
        { label: 'Acerca de', to: '/about' },
        { label: 'Términos y condiciones', to: '/terms' },
        { label: 'Política de privacidad', to: '/privacy' },
    ],
}

/**
 * KM RECORRIDOS  - ODOMETRO
 * LITROS CONSUMIDOS - TANQUES
 * Tiempos
 * velocidad
 */

/**
 * USUARIO: DASHCOMB TRAFUSA
 * CONTRASEÑA: Dash-2025
 */