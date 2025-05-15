class Perfomance {

    calcularRendimiento(distanciaKm, combustibleLitros) {
        if (combustibleLitros <= 0) {
            return null;
        }
        return distanciaKm / combustibleLitros;
    }

    calcularConsumoReal(combustible) {
        let consumo = 0;

        for (let i = 0; i < combustible.length - 1; i++) {
            let actual = combustible[i].fuel;
            let siguiente = combustible[i + 1].fuel;

            if (siguiente < actual) {
                consumo += (actual - siguiente);
            }
        }

        return consumo;
    }

    suavizarCombustible(data, ventana = 3) {
        const resultado = [];
        const mitad = Math.floor(ventana / 2);

        for (let i = 0; i < data.length; i++) {
            let inicio = Math.max(0, i - mitad);
            let fin = Math.min(data.length, i + mitad + 1);
            let segmento = data.slice(inicio, fin);

            let promedio = segmento.reduce((sum, obj) => sum + obj.fuel, 0) / segmento.length;

            resultado.push({
                ...data[i],
                fuel_suavizado: parseFloat(promedio.toFixed(2))
            });
        }

        return resultado;
    }



}

export default new Perfomance();