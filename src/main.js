import './style.css';

//-Definerer værdier fra json filen jeg vil have ind-->
// Constructor function for Album objekter
function Album(artist, album, year, rating) {
  this.artist = artist;
  this.album = album;
  this.year = year;
  this.rating = rating;
}

// Funktion til at tilføje en række til tabellen
function addRowToTable(album, tableBodyId) {
  let tableBody = document.getElementById(tableBodyId);
  let row = document.createElement('tr');
  row.className = `hover:bg-yellow-500 `;
  row.innerHTML = `
    <td class="p-2 text-black">${album.album}</td>
    <td>${album.artist}</td>
    <td>${album.year}</td>
    <td>${album.rating}</td>
  `;
  tableBody.appendChild(row);
}

// Henter JSON-data og viser det i tabellen
fetch('./albums.json')
  .then((response) => response.json())
  .then((albums) => {
    let albumObjects = [];
    // Opretter Album-objekter ud fra JSON-data
    for (let i = 0; i < albums.length; i++) {
      const album = new Album(
        albums[i].artistName,
        albums[i].albumName,
        albums[i].productionYear,
        albums[i].rating // Antager at 'rating' findes i JSON
      );
      albumObjects.push(album);
    }
    // Tilføjer hver album til tabellen
    albumObjects.forEach(function (album) {
      addRowToTable(album, 'album-table-body');
    });
  })
  .catch((error) => console.error('Fejl ved hentning af data:', error));

//tilføjer min eventlistener. så hvis et element med id "footer" bliver "click"
//så bliver p i den til noget andet.
document.getElementById('footer').addEventListener('click', function () {
  this.querySelector('p').textContent = 'To be continued';
});
