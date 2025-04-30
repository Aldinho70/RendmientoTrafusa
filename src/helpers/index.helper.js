import Map from '../utils/map.js';
import Speed from '../utils/speed.js';
import Utils from '../utils/utils.js';
import { params } from '../config/config.js';
import Haversine from '../utils/Haversine.js';
import Timestamp from '../utils/timestamp.js';
import Performance from '../utils/performance.js';
import Highcharts from '../api/highchart/index.highchart.js';
import MessagesService from '../api/wialon/messages.wialon.js';
class index_helper {
    
    /**
     * Funcion para cargar las unidades disponibles
     */
        getUnits = async (sdk) => {
            const units = await sdk.init();

            this.generateHTMLSelect(units, '#unitsSelect');
        }
    /* ------------------------------------------- */

    /**
     * Funcion para generar el HTML del Select, se muestran todas las unidades
     */
        generateHTMLSelect = (units, id) => {
            $('#unitsSelect').select2();
            units.forEach(unit => {
                // console.log( unit.getId(), unit.getName() );      
                $(id).append(`<option value="${unit.getId()}">${unit.getName()}</option>`);
            });
        }
    /* --------------------------------------------------------------------- */

    /**
     * Funcion para generar el HTML del Select, se muestran todas las unidades
     */
        generateHTMLInfo = (data, id) => {
            $(id).html(`${data}`);
        }
    /* --------------------------------------------------------------------- */

    /**
     * Funcion para cargar los mensajes totales de una unidad
     */
        getMessagesLoader = async (unit, from, to ) => {
            const _from = Timestamp.toUnixTimestamp(from); 
            const _to = Timestamp.toUnixTimestamp(to);             

            const messageService = new MessagesService(unit, _from, _to);
            const unit_messages = await messageService.loadMessages();
            const unit_data = await messageService.getInfoUnit(unit);
            const name = unit_data.getName();
            // console.log( unit_data.getName(), unit_messages );

            const { messages, count } = unit_messages;

            if (messages.length > 0) {
                console.log(messages);

                const coordinates = [];
                const speeds = [];
                const combustibles = [];

                messages.map(element => {
                    const {
                        t: timestamp = 0,   
                        pos: posicion = {},     
                        p: parametros = {}  
                    } = element;
                
                    const {
                        x: longitud = 0,
                        y: latitud = 0,
                        s: speed = 0
                    } = posicion || {}; 

                    const combustible = Utils.getValueParams( parametros, params, name );
                    
                    if( combustible !== null ){
                        combustibles.push( Math.round(combustible) );                        
                    }
                    
                    if (latitud && longitud) {
                        coordinates.push([latitud, longitud]);
                    }
                    
                    speeds.push(speed);
                    
                    const fecha = Timestamp.getTimeByTimestamp(timestamp);
                });
                
                Map.dibujarRecorrido( coordinates );
                
                const totalStop = Speed.totalStops(speeds);
                this.generateHTMLInfo(`${totalStop} paradas`, '#paradas');
                
                const promedio = Speed.calcularPromedioVelocidad(speeds);
                // console.log(`Promedio de velocidad: ${promedio.toFixed(2)} km/h`);
                this.generateHTMLInfo(`${promedio.toFixed(2)} Km/h`, '#velocidadPromedio');
                
                const start_combustible = combustibles[0];
                const end_combustible = combustibles[combustibles.length - 1];
                const {
                    t: start,
                } = messages[0];
                const {
                    t: end,
                } = messages[messages.length - 1];

                Highcharts.initChart( {start_combustible, end_combustible} );
                
                this.generateHTMLInfo(`${(start_combustible)} Litros`, '#consumoInicial');
                this.generateHTMLInfo(`${(end_combustible)} Litros`, '#consumoFinal');
                
                const elapsedTime = Timestamp.getElapsedTime(start, end);
                // console.log(`Tiempo transcurrido: ${elapsedTime.formatted}`);
                this.generateHTMLInfo(elapsedTime.formatted, '#tiempoViaje');
                
                const totalKm = Haversine.calculateDistanceByLatLong(coordinates);
                // console.log(`Distancia total recorrida: ${totalKm} km`);
                this.generateHTMLInfo(`${totalKm}KM`, '#kmRecorridos');

                this.generateHTMLInfo(`${Performance.calcularCombustible(combustibles)} Litros`, '#combustible_consumido');

                // const rendimiento = Performance.calcularRendimiento(totalKm, (start_combustible), (end_combustible));
                const rendimiento = Performance.calcularRendimiento(totalKm, combustibles);
                
                // console.log(`Rendimiento del combustible: ${rendimiento.toFixed(2)} km/l`);
                this.generateHTMLInfo(`${rendimiento.toFixed(1)*10} km/l`, '#rendimiento');


            } else {
                console.log('No hay mensajes');
            }
        }
    /* --------------------------------------------------- */

}
export default new index_helper();