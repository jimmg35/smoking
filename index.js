
// 初始化地圖
const map = L.map('myMap').setView(
  [24, 121.5],
  16
)

// 加入OSM底圖
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);



let isCircleLoaded = false
let circle;

// 偵測地圖點擊事件
map.on('click', function (e) {
  if (!isCircleLoaded) {
    // 加入圓圈
    circle = L.circle(e.latlng, { radius: 3000 })
    map.addLayer(circle)
    isCircleLoaded = true
  }
})

const myInput = document.getElementById("myInput")
myInput.addEventListener('change', function (e) {
  if (!circle) return
  circle.setRadius(e.target.value)
})


// create a red polygon from an array of LatLng points
var latlngs = [[25, 121], [25, 121.5], [24, 121.5], [24, 121]];

var polygon = L.polygon(latlngs, { color: 'red' }).addTo(map);



document.getElementById("myBtn").addEventListener('click', function () {
  if (!circle) return
  const geojson = circle.toGeoJSON()
  console.log(geojson)

  // 用turf造出circle 然後丟進intersect
  // hint
  // turf circle, turf intersect
  // leaflet circle method(getRadius, getLatLng)

})