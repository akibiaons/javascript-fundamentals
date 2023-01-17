// JavaScript Functions Practice from The Net Ninja

/*
Functions fall under the object type in the 
data type list.

Functions are a box with code that does paticular
actions which we can wall later to run the code
in that specific block.

We can define the code once and run it multiple times

For example, if we have a webpage with a button with code we want
to run, we can use a function for the pressing animation of that box to be used multiple tim
-es in the future.
*/

//Making my function below 
/*
function greet () {
    console.log('Hello there');
}
*/
// Above is a code block for a function....

// Unless called for the function wont show up in
// the console log...Look below
/*
greet();
greet();
greet();
*/
// The code above is a function declaration, we can also do it 
// with variables as shown below...
/*
const speak = function (){
    console.log('You slept 4 hours on average go sleep please!')
};
// Above is a function expression...
speak();
*/ 
// Above we call the function expression...

// Hoisting in JS is a way to leave our funtions
// at the top of the file before all JS is ran..

// This means we can declare a function declaration and have it running...
/*
const speak = function(name, time){
    console.log(`Good ${time} ${name}`);
};

speak('Arthur', 'evening');
*/
// The example above has what we consider to be an argument...
/*
just declaring some empty parameter values when calling the function will show undefined for example:

speak();
*/
/*
However, you can give the parameters some default values...
*/
/*
const speak = function(name = 'luigi', time = 'night'){
    console.log(`Good ${time} ${name}.`)
};

speak(); 
*/
// This empty function declatation does not print anything but the default parameter it was
// -already set to print out... 
// Adding in parameters when calling a function will override them.
/*
const calcArea = function(radius){
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);
/* 
Over here we take the calcArea function and create 
the radius of a circle or something, we take it out
of it's block and can call it using the area variable
now...
*/

// For example, we can take the area and now calculate the volume and pass in the value of area...
/*
const calcVol = function(area){

};
calcVol(area);
*/
// Above is an example of taking the value from area from the exercise below 
// and passing it into another function below it...

/*
Below we will be looking at arrow functions
*/

//Arrow function below...
const calcArea = (radius) => {
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log('area is:', area);