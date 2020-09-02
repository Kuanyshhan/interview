// let a = 5
// let b = a
// b++
// console.log('a=', a)
// console.log('b=', b)

let a = [1, 2, 3]
let b = a
b.push(4)
console.log('a', a)
console.log('b', b)
let c = [1, 2, 3, 4]
console.log(a == c)
console.log(b == c)