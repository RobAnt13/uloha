// Fibonacci 

let fibSeq = function(){
    let sum = 1
    for (let i = 0; i < 100; i = i + sum) {
        sum = sum + i;
    }      
    return sum;
}
console.log(fibSeq());



let sum = 1

for (let i = 0; i < 100; i = i + sum){
    sum = sum + i, console.log(i);
}
console.log(sum);