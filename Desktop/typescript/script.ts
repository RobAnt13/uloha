// Callback funkcia = funkcia ako parameter inej funkcie


/*
function y(nejakeCislo: number){
    console.log(nejakeCislo)
}
*/


const y = (nejakeCislo) => console.log(nejakeCislo)
y(10)
y(90)

function sum(n1: number, n2: number, callBackFun: (n3: number) => void){
    const result = n1 + n2
    callBackFun(result)
}

sum(5, 30, (nejakeCislo) => console.log(nejakeCislo))





