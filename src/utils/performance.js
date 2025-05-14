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
            let actual = combustible[i];
            let siguiente = combustible[i + 1];

            if (siguiente < actual) {
                consumo += (actual - siguiente);
            }
        }

        return consumo;
    }


}

export default new Perfomance();