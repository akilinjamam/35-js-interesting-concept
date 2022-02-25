// what is the difference between double and single equals ?

// simple defination :

// double equals compare two values but dont compare the types of two values. this is complex. normally suggested not to use.
// triple equals compare not only values but also compare type of the values. this straight forward. suggested to use.


// complex defination :

// in actual, when double equals compare two values, it convert the values into number and then compare. doesnt matter in which format the value exists in the variable. if any string(letter) is given in the variable as value. it will convert it into  number 1. if you put any number in the string , it will convert it into that number that was given as string. if you put boolean true, it will convert into number 1 by defult. if you put boolean false, it will convert it into number 0 by defult. this is quite complex method. thats why recommended not to use double equals. recommended to use triple equals.   


let x = 1;
let y = true;

if (x == y) {
    console.log('this is true');
}

else {
    console.log('this is false')
}