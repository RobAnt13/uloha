// OOP a metody

class Department {
    depName: string
    number: number
    
    constructor(depN: string, nu: number){
        this.depName = depN
        this.number = nu
    }

    describe() {
        console.log("Oddelenie " + this.depName + " ma cislo " + this.number)
    }
}

const HRdep = new Department("Human resources", 100)
const MAdep = new Department("Marketing", 200)
const FIdep = new Department("Finance", 300)

HRdep.describe()
MAdep.describe()
FIdep.describe()






