

const myBox = document.getElementById("myBox")

const callAPI = async () => {
    const url = "https://map.jsdc.com.tw/sanxia/api/source/list?page=1&per_page=8"

    const response = await fetch(url, {
        method: 'get'
    })

    const responseContent = await response.json()

    for (let i = 0; i < responseContent.length; i++) {
        const newElement = document.createElement("div")
        newElement.innerHTML = responseContent[i].name

        newElement.style.backgroundColor = 'black'
        newElement.style.color = 'white'
        myBox.appendChild(newElement)
        // console.log(ptag)
    }
}

callAPI()







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
