const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
const tile_url= 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const mymap = L.map('mapid').setView([30,0], 3);
const attribution ='&copy; <a href="https://www.https://www.openstreetmap.org/copyright">Openstreetmap</a> contributors';
const tiles = L.tileLayer(tile_url,{ attribution })
const issIcon = L.icon({
  iconUrl: "assets/images/iss.png",
  iconSize: [50,50],
  iconAnchor: [25, 16],
});
const marker = L.marker([0, 0],{icon : issIcon}).addTo(mymap);
const checkbox = document.getElementById('isCentered')

tiles.addTo(mymap)

async function getData(){
  const response = await fetch(api_url)
  const data = await response.json()
  document.getElementById('lat').textContent = data.latitude.toFixed(2)
  document.getElementById('lon').textContent = data.longitude.toFixed(2)
  marker.setLatLng([data.latitude,data.longitude])
  if(checkbox.checked == true){
    mymap.setView([data.latitude,data.longitude])
  }
}
setInterval(getData, 5000); 