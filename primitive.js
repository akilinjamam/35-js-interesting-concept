// types of data

/* 
1.number
2.string
3.boolean
4.undefined
5.null
6.object
7.symbol
*/


// primitive:
// primitive dont follow the reference , if one variable is decleared and in the other variable , the first variable is used as a value of other variable and console it,  we will get the same result of two variables. if we change the value of variable of first one, the change will not affect the second one. thats why it is called primitive.


let a = 'hellow';
let b = a;
// console.log(a, b);

a = 'gelo'
// console.log(a, b)

// non-primitive:
// non-primitive  follows the reference , if one variable is decleared and in the other variable , the first variable is used as a value of other variable and console it,  we will get the same result of two variables. if we change the value of variable of first one, the change will  affect the second one. the resullt of the two variable will be same. thats why it is called non-primitive.

let x = { job: 'web Developer' };

const y = x;
console.log(x, y);

x.job = 'fron end developer'

console.log(x, y)
