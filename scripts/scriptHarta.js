var map = L.map('map').setView([45.416480, 23.372528], 17)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

var marker = L.marker([45.416480, 23.372528]).addTo(map)
marker.bindPopup("<b>NovaLex Law Firm</b>")