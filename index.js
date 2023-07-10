
// let myBtn = document.getElementById("my_btn")
// let myBtnMinus = document.getElementById("my_btn_minus")
// let myBulletin = document.getElementById("my_number")
// let myNumber = 0

// myBulletin.innerHTML = myNumber


// // arrow function
// const addNumber = () => {
//     myNumber += 10
//     myBulletin.innerHTML = myNumber
// }

// const minusNumber = () => {
//     myNumber -= 10
//     myBulletin.innerHTML = myNumber
// }

// myBtn.onclick = addNumber
// myBtnMinus.onclick = minusNumber


const mySend = document.getElementById("my_send")
const myInput = document.getElementById("my_input")
const myBox = document.getElementById("myBox")
const myProduct = document.getElementById("myProduct")

const sendMessage = () => {
    // myInput.value
    const newLine = document.createElement("p")
    newLine.innerHTML = myProduct.innerHTML
    myBox.appendChild(newLine)
    // myInput.value = ""
}

// mySend.onclick = sendMessage
myProduct.onclick = sendMessage