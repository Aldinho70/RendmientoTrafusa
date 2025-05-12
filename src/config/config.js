export const TOKEN = "fa54a97c1348167613707146e3ce1c2163C874116C8222C592D6EF7CB721C8F09EB9A4C9";
export const CDN = "https://hst-api.wialon.com";

/* configuracion de sensores y parametros necesarios para  */
export const params = {
        combustible: {
            "TFS - 109":{
                name: 'Combustible Total',
                type: 'fuel level',
                id: 34,
                units: ['GAFI 679 GAS']
            },
        },
        combustible_usado: {
            "TFS - 109":{
                name: 'Combustible utilizado',
                id: 27,                
            },
        },

    odometer: ['odometer']
}

/* Configuraciones del componente Navbar */
export const Navbar = {
    brand: 'Rendimiento de combustible',
    img_brand: './src/img/' + 'asmex2.png', /* brand principal */
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