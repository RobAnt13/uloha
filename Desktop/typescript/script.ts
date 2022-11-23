class House {
    street: string
    number: number
    floors: number

    constructor(str: string, num: number, flo: number){
        this.street = str
        this.number = num
        this.floors = flo
    }

}

const house1 = new House("Sevcenkova", 1, 4)
const house2 = new House("Pekna", 5, 9)
const house3 = new House("Skareda", 7, 3)

console.log(house1.street)
console.log(house2.street)
console.log(house3.street)

console.log(house1.number)
console.log(house2.number)
console.log(house3.number)

console.log(house1.floors)
console.log(house2.floors)
console.log(house3.floors)






