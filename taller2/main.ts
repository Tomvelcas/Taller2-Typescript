import { series } from './data.js';
import { serie } from './serie.js';

function renderSeriesTable(series: serie[]): void {
    const tableBody: HTMLElement = document.getElementById('tabla-de-series')!;
    const detailsContainer: HTMLElement = document.getElementById('details-container')!;
    let totalSeasons: number = 0;
    const numeroSeries = series.length;

    series.forEach((x) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${x.id}</td>
            <td><a href="#" class="series-link">${x.name}</a></td>
            <td>${x.channel}</td>
            <td>${x.seasons}</td>
        `;
        tableBody.appendChild(row);

        // Evento de clic en el nombre de la serie para mostrar los detalles
        row.querySelector('.series-link')!.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que el enlace recargue la página
            showDetails(x);
        });

        totalSeasons += x.seasons;
    });

    const promedio = totalSeasons / numeroSeries;
    const promedioRow = document.createElement('tr');
    promedioRow.innerHTML = `
        <td colspan="3">Promedio de temporadas</td>
        <td>${promedio}</td>
    `;
    tableBody.appendChild(promedioRow);

    // Función para mostrar los detalles de la serie seleccionada
    function showDetails(serie: serie): void {
        detailsContainer.innerHTML = `
            <img src="${serie.image}" alt="${serie.name}">
            <h2>${serie.name}</h2>
            <p>${serie.description}</p>
            <p><a href="${serie.link}" target="_blank">${serie.link}</a></p>
        `;
    }
}

renderSeriesTable(series);
