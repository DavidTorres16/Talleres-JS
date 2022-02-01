// DOM objects

const wall_image = document.getElementById("wall_image")
const count_title = document.getElementById("count_title")
const minus_btn = document.getElementById("minus_btn")
const idk_btn = document.getElementById("idk_btn")
const add_btn = document.getElementById("add_btn")


// variables 

let count = 0

// functions

const printCount = () =>{
    count_title.textContent = count
    if(count >= 5 || count <= -5){
        wall_image.style.filter = "contrast(115%)"
    }
    else{
        wall_image.style.filter = "contrast(100%)"
    }
}

printCount()

const substractQuantity = () =>{
    count--
    printCount()
}

const addQuantity = () =>{
    count++
    printCount()
}

const idkFunction = () =>{

}

// events list

minus_btn.addEventListener("click", substractQuantity)
idk_btn.addEventListener("click", idkFunction)
add_btn.addEventListener("click", addQuantity)
