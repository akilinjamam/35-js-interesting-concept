// what is local scop?

// a variable which is decleared under the funcion,. that variable will work under that function, it will not workable out of function. if you decleare it from out. it will show you error messege. this is called local scop. example : a parameter under function. and any let and const variable under function.

// what is global scop?

// the variable which is workable from all side. if doesnt matter where the variabele under any function, condition, for or while loop.

// example: the variable which is decleared with var and without any let, const, var.

// block scop

// let and const are block scop. it means the variable will not work from outside. if they are kept under bracket.


function sum(p, q) {
    p + q;
}
const result = sum(2, 3);
console.log(result);