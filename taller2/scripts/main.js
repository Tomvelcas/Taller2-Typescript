import { series } from './data.js';
function renderSeriesTable(series) {
    var tableBody = document.getElementById('tabla-de-series');
    var detailsContainer = document.getElementById('details-container');
    var totalSeasons = 0;
    var numeroSeries = series.length;
    series.forEach(function (x) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(x.id, "</td>\n            <td><a href=\"#\" class=\"series-link\">").concat(x.name, "</a></td>\n            <td>").concat(x.channel, "</td>\n            <td>").concat(x.seasons, "</td>\n        ");
        tableBody.appendChild(row);
        // Evento de clic en el nombre de la serie para mostrar los detalles
        row.querySelector('.series-link').addEventListener('click', function (event) {
            event.preventDefault(); // Evita que el enlace recargue la página
            showDetails(x);
        });
        totalSeasons += x.seasons;
    });
    var promedio = totalSeasons / numeroSeries;
    var promedioRow = document.createElement('tr');
    promedioRow.innerHTML = "\n        <td colspan=\"3\">Promedio de temporadas</td>\n        <td>".concat(promedio, "</td>\n    ");
    tableBody.appendChild(promedioRow);
    // Función para mostrar los detalles de la serie seleccionada
    function showDetails(serie) {
        detailsContainer.innerHTML = "\n            <img src=\"".concat(serie.image, "\" alt=\"").concat(serie.name, "\">\n            <h2>").concat(serie.name, "</h2>\n            <p>").concat(serie.description, "</p>\n            <p><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.link, "</a></p>\n        ");
    }
}
renderSeriesTable(series);
