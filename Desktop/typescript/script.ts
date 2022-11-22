const house = {
    windows: 4,
    doors: 1,
    color: "white",
    height: 50
}

const house2 = {
    windows: 8,
    doors: 5,
    color: "red",
    height: 80
}

function aboutHouse(myObject){
    console.log("This house have " + house.windows + " windows. Number of doors is " + house.doors + ". Color of house is " + house.color + ". Height of house is " + house.height + " meters.")
    console.log(`This house have ${myObject.windows} windows. Number of doors is ${myObject.doors}. Color of the house is ${myObject.color}. Height of house is ${myObject.height} meters.`)
}

aboutHouse(house)
aboutHouse(house2)


