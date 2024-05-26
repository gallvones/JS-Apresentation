function soma(a = 8,b = 10) {
    if(a > b){
        return a + b
    } else if(a === b){
        return a - b
    } else {
        return a * b
    }
}
console.log(soma())