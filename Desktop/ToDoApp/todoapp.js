let myToDos = [{
    text: "Vyniest kos",
    completion: false
}, {
    text: "Ist nakupit",
    completion: false
}, {
    text: "Upratat",
    completion: true
}, {
    text: "Nakrmit psa",
    completion: true
}, {
    text: "Nakrmit macku",
    completion: false
}]

let myToDoLeft = myToDos.filter(function(oneToDo){
    return oneToDo.completion === false
})

console.log(myToDoLeft.length)

const paragraph = document.createElement("p")
paragraph.textContent = `Este ostava urobit uloh: ${myToDoLeft.length}`
document.querySelector("main").appendChild(paragraph)

for(let i = 0; i < myToDos.length; i++){
    let paragraph = document.createElement("p")
    paragraph.textContent = myToDos[i].text
    document.querySelector("main").appendChild(paragraph)
}

/*for (let i = 0; i < myToDos.length; i++){
    let paragraph = document.createElement("p")
    if(myToDos[i].completion === false){
        paragraph.textContent = myToDos[i].text
        document.querySelector("main").appendChild(paragraph)
    }
} */

document.querySelector(".mybtn").addEventListener("click", function(event){
    console.log("klik")
})



