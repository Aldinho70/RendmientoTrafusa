class Perfomance {

    calcularRendimiento(distanciaRecorrida, combustibleInicial, combustibleFinal) {
        const combustibleConsumido = combustibleInicial - combustibleFinal;

        // if (combustibleConsumido <= 0) {
        //     throw new Error("El combustible consumido debe ser mayor a 0.");
        // }

        const rendimiento = distanciaRecorrida / combustibleConsumido;
        return rendimiento; // Retorna el rendimiento en km/l
    }

    // // Ejemplo de uso:
    // const distanciaRecorrida = 150; // En km
    // const combustibleInicial = 20;  // En litros
    // const combustibleFinal = 10;    // En litros

    // try {
    //     const rendimiento = calcularRendimiento(distanciaRecorrida, combustibleInicial, combustibleFinal);
    //     console.log(`Rendimiento del combustible: ${rendimiento.toFixed(2)} km/l`);
    // } catch (error) {
    //     console.error(error.message);
    // }


    calcularRendimiento2(kmRecorridos, listaLitros) {
        this.calcularCombustible(listaLitros);
        console.log(kmRecorridos);
        

        let consumoReal = 0;

        for (let i = 1; i < listaLitros.length; i++) {
            if (listaLitros[i] < listaLitros[i - 1]) {
                consumoReal += listaLitros[i - 1] - listaLitros[i]; // Solo suma consumo real
            }
        }

        if (consumoReal <= 0) {
            return "No hay consumo de combustible registrado.";
        }

        return kmRecorridos / consumoReal; // km por litro
    }

    calcularRendimiento(kilometros, litrosConsumidos) {
        
        const litros = this.calcularCombustible( litrosConsumidos ); 
        if (litros <= 0) {
          throw new Error("Los litros consumidos deben ser mayores a 0");
        }
        const rendimiento = kilometros / litros;
        return rendimiento;
      }
      

    calcularCombustible(arrayCombustible) {
        let consumo = 0;
        for (let i = 1; i < arrayCombustible.length; i++) {
            const anterior = arrayCombustible[i - 1];
            const actual = arrayCombustible[i];

            if (actual < anterior) {
                consumo += (anterior - actual);
            }
        }
        return consumo;
    }
}

export default new Perfomance();