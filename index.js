


const map = L.map('myMap').setView(
    [25.02563718675026, 121.52727768988933],
    16
)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);






var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://map.jsdc.com.tw/sanxia/api/resource/geojson?uri=28222", requestOptions)
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        const geojson = JSON.parse(response.content)

        console.log(geojson)

        L.geoJSON(geojson)
            .bindPopup(function (layer) {
                return layer.feature.properties['標題'];
            })
            .addTo(map)

    })


// const myBox = document.getElementById("myBox")

// const callAPI = async () => {
//     const url = "https://map.jsdc.com.tw/sanxia/api/source/list?page=1&per_page=8"

//     const response = await fetch(url, {
//         method: 'get'
//     })

//     const responseContent = await response.json()

//     for (let i = 0; i < responseContent.length; i++) {
//         const newElement = document.createElement("div")
//         newElement.innerHTML = responseContent[i].name

//         newElement.style.backgroundColor = 'black'
//         newElement.style.color = 'white'
//         myBox.appendChild(newElement)
//         // console.log(ptag)
//     }
// }

// callAPI()







// const myColorPicker = document.getElementById("myColorPicker")

// myColorPicker.addEventListener('change', function (e) {
//     myBox.style.backgroundColor = this.value
// })

// const myGreenBtn = document.getElementById("myGreenBtn")
// const myBlueBtn = document.getElementById("myBlueBtn")
// const myRedBtn = document.getElementById("myRedBtn")

// const toColor = (color) => {
//     myBox.style.backgroundColor = color
// }

// myGreenBtn.onclick = () => { toColor("#17ff5d") }
// myBlueBtn.onclick = () => { toColor("#17ff5d") }
// myRedBtn.onclick = () => { toColor("#17ff5d") }

// myBox.style.backgroundColor = '#878787'

// const myButton = document.createElement("button")
// myButton.innerHTML = 'my button'
// myBox.appendChild(myButton)
