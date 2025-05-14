import { Main } from '../../config/config.js';

$(document).ready(() => {
    $(`#Main_root`).html(`
        <center>
            <div id="loading" class="p-5">
            <img src="./src/img/logojd.png" alt="Cargando..." /><br>
            <h1 class="text-dark">Cargando informacion...</h1>
            </div>
        </center>
    <div class="container-fluid bg-light px-4">
        <!-- Filtros -->
        <div class="row g-3 mb-4">
            <div class="col-md-3">
                <label for="unitsSelect" class="form-label">Unidad:</label>
                <select id="unitsSelect" class="form-select"></select>
            </div>
            <div class="col-md-3">
                <label for="startDate" class="form-label">Fecha de Inicio:</label>
                <input type="datetime-local" id="startDate" class="form-control">
            </div>
            <div class="col-md-3">
                <label for="endDate" class="form-label">Fecha de Fin:</label>
                <input type="datetime-local" id="endDate" class="form-control">
            </div>
            <div class="col-md-3 d-grid">
                <button id="searchButton" class="btn btn-primary">Buscar</button>
            </div>
        </div>

        <!-- Tarjetas de métricas -->
        <div class="row text-center mb-4">
            <div class="col-md-3">
                <div class="card shadow border-0">
                    <div class="card-body">
                        <h6 class="text-muted">Tanque al inicio</h6>
                        <h4 class="fw-bold" ><span class="kpis" id="consumoInicial" >0<span/> Litros</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card shadow border-0">
                    <div class="card-body">
                        <h6 class="text-muted">Tanque al final</h6>
                        <h4 class="fw-bold" ><span class="kpis" id="consumoFinal" >0<span/> Litros</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card shadow border-0">
                    <div class="card-body">
                        <h6 class="text-muted">Rendimiento</h6>
                        <h4 class="fw-bold text-success" ><span class="kpis" id="rendimiento" >0<span/> KM/Litros</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card shadow border-0">
                    <div class="card-body">
                        <h6 class="text-muted">Kilómetros Recorridos</h6>
                        <h4 class="fw-bold text-info"><span class="kpis" id="kmRecorridos">0<span/> KM</h4>
                    </div>
                </div>
            </div>
        </div>

        <!-- Gráfica y Mapa -->
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow border-0 p-3">
                    <h5 class="fw-bold">Gráfica de Consumo</h5>
                    <div id="graficaConsumo" style="height: 350px;"></div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card shadow border-0 p-3">
                    <h5 class="fw-bold">Mapa del Recorrido</h5>
                    <div id="map" style="height: 350px;"></div>
                </div>
            </div>
        </div>
        
        <!-- Detalles Adicionales -->
        <div class="row text-center mt-4">
            <div class="col-md-4">
                <div class="card shadow border-0">
                    <div class="card-body">
                        <h6 class="text-muted">Tiempo de Viaje</h6>
                        <h4 class="fw-bold" ><span class="kpis" id="tiempoViaje">0<span/> Horas</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow border-0">
                    <div class="card-body">
                        <h6 class="text-muted">Velocidad Promedio</h6>
                        <h4 class="fw-bold text-warning" ><span class="kpis" id="velocidadPromedio">0<span/> KM/H</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow border-0">
                    <div class="card-body">
                        <h6 class="text-muted">Combustible consumido</h6>
                        <h4 class="fw-bold text-danger" ><span class="kpis" id="combustible_consumido">0<span/> Litros</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    getLoading('#loading');
});

function getLoading(tag) {
    $(tag).fadeIn();
    setTimeout(() => {
        $(tag).fadeOut();
    }, 5000);
}