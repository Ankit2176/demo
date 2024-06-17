console.log('Hellow World !');


let name = 'Ankit';
let Age = 23;
let iscorrect = true;
let isTheir = undefined;
let selecttedColor = null;


////------------------objects
let person = {
    id: 1,
    class: 8
}
console.log(person)



person.class = '9'
console.log(person.class)



person["id"] = 10;
console.log(person.id)



let selection = "id"
person[selection] = 5;
console.log(person.id);


//---------------------arrays


let selecttedColor1 = ['red', 'blue'];
selecttedColor1[2] = 'green'
console.log(selecttedColor1);
console.log(selecttedColor1[2]);
console.log(selecttedColor1.length);


//----------functions


function greet(name, lastname) {             // -- name is parameter
    console.log('hellow ' + name + ' ' + lastname);
}

greet('Max', 'Sharma');   //function calling 


// calculating valur using function

function square(number) {
    return number * number;
}

console.log("Square " + square(5));






// javascript operators 
//arithmetic operators

let x = 10;
let y = 5;

console.log(x + y);   //addition
console.log(x - y);   //Substract

console.log(x * y);  // muiltipication

console.log(x / y);  //divsion

console.log(x % y); //remander of division

console.log(x ** y);  // exponenation   x to the power y
// increment 
console.log(x++);
console.log(++x);
// decrement
console.log(x--);
console.log(--x);




// assignment operatort


x += 5;

console.log(x);

// compariaon opertor

let z = 2;

console.log(z > 0);    // boolean value output

console.log(z >= 7);


console.log(z === 2);
console.log(z !== 2);


// strict equality opertaor

console.log('2' === 2);   // three equal checking datatype of value  


// lose equality opertaor

console.log('2' == 2);  // two equal checkin only value 

console.log(true == 1);


//ternety opertor

// if a customer has more than 100 points, they are a 'gold' customer, otherwise they are a 'silver' customer.


let point = 140;
let type = point > 100 ? 'gold' : 'silver';   // here they are basically working like if else condtion using only opertor 

console.log(type);



//logical opertor

// AND (&&)

console.log(true && true);

let highincome = false;
let goodcredit = true;

let eiligiblity = highincome && goodcredit;

console.log("eloigibility", eiligiblity)

// OR(||)


console.log(true || false);

let highincome1 = false;
let goodcredit1 = true;

let eiligiblity1 = highincome || goodcredit;

console.log("eligibilty1", eiligiblity1)


//  NOT (!)


let applicationRefused = !eiligiblity1

console.log("aaplication ", applicationRefused)


// logical operator with non boolean

// swaping values 

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;


console.log(a);
console.log(b);


// control flow 
// if else 
// if hour is between 6am to 12pm : googd morning
//if it is between 12pm to 6pm : good afternoon
// otherwise : good evening 


let hour = 16;
if (hour >= 6 && hour < 12) {
    console.log('good morning ')
}
else if (hour >= 12 && hour < 18) {
    console.log('good afternoon')
}
else
    console.log('good evening ')




// switce case 

let role = 'guest'

switch (role) {
    case 'guest':
        console.log('welcome to guset');
        break;

    case 'dum':
        console.log('welcm dum');
        break;

    default:
        console.log('unknown User')
}


// for loop 


for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0)
        console.log('this is i"', i);
}


//while loop 

let k = 0;
while (k <= 5) {
    if (k % 2 !== 0)
        console.log('this is k', k);
    k++;
}

// do while loop

let j = 0;
do {
    if (j % 2 !== 0)
        console.log('this is j', j);
    j++;
} while (j <= 5);


// for -in loop

const person11 = {
    name11: 'mosh'
    , age11: 5
};
for (let key in person11)
    console.log(key, person11[key]);

//for of loop 
const colors = ['red', 'green', 'blue'];

for (let color of colors)
    console.log(color);




//function that return max number in two 

function Max(number1, number2) {

    if (number1 > number2) {
        console.log("number 1 i s greater");
    }
    else {
        console.log("number 2 is greater ")
    }
}


Max(6, 6)


// landscap or poitrait 

function picture(H, W) {
    return (H > W) ? "poitrait" : "landscap ";
}

let number = picture(14, 16)

console.log(number)

// fizzbuzz

//speed limit check game 
checkSpeed(90);


function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const pointLimit = 12

    if (speed <= speedLimit)
        console.log("ok");

    else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint)
        if (points >= pointLimit)
            console.log('licence Suspend ');

        else {
            console.log(points + " point got on " + speed + "km/h speed")
        }
    }
}



//odd even number 

showNumbers(67)

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++)
        (i % 2 === 0) ? console.log(i, "Even") : console.log(i, "odd");

}


// count thruthy value

const array = [1, 2, 3, 4, null, undefined, 0, false,]

console.log(countTruthy(array))

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++
    return count;


}


//string property 

const movie = {
    title: 'munjya',
    year: 2002,
};


showProperty(movie)
function showProperty(obj) {

    for (let key in obj) {

        console.log(key, obj[key]);
    }

}

///

console.log(sum(10));
function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    return sum;
}


//

const marks = [100, 97, 90]
console.log(calculateGrade(marks))

function calculateGrade(marks) {

    let sum = 0;
    for (let mark of marks)
        sum = sum + mark;
    let avarage = sum / marks.length;

    if (avarage < 60) return 'F';

    if (avarage < 70) return 'D';

    if (avarage < 80) return 'C';

    if (avarage < 90) return 'B';
    return 'A';



}

// star patter 



showStars(6)
function showStars(Rows) {

    for (let i = 1; i <= Rows; i++) {
        let star = '';
        for (let j = 1; j <= i; j++) {
            star += '*';

        }
        console.log(star)
    }
}


//prime number

primes(20);
function primes(limit) {

    for (let number = 2; number <= limit; number++) {
        let isprime = true;
        for (let fector = 2; fector < number; fector++) {
            if (number % fector === 0) {
                isprime = false;
                break;
            }
        }
        if (isprime) console.log(number);
    }


}



//object exercise 1

let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
}
let address1 = {
    street: 'a1',
    city: 'b1',
    zipCode: 'c1'
}

function showAddress(address, address1) {

    for (let key in address)
        console.log(key, address[key]);

    for (let key1 in address1)
        console.log(key1, address1[key1]);

}

showAddress(address);


// EX - 2 factory function

let home = homeAddress('a', 'b', 'c');

console.log(home)

function homeAddress(street, city, zip) {
    return {
        city,
        street,
        zip
    };
}


// pascalotation 

let home1 = new Address('a', 'b', 'c');

console.log(home1)

function Address(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;

}

/// 


let add1 = new Address('a', 'b', 'c');
let add2 = new Address('a', 'b', 'c');

function areEqual(add1, add2) {
    return add1.city === add2.city &&
        add1.street === add2.street &&
        add1.zip === add2.zip;
}


function areSame(add1, add2) {
    return add1 === add2
}



console.log(areEqual(add1, add2));

console.log(areSame(add1, add2));

// blog post



let post = new Post('a', 'b', 'c')

console.log(post);


function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.Comments = [{ ko: "joy" }];
    this.isLive = false;

}



// array from range 1

const numbers = arrayFromRange(-10, -4);
console.log(numbers);

function arrayFromRange(min, max) {

    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}

// Include 2


const page = [1, 2, 3, 4];

console.log(includes11(page, 1));


function includes11(array11, searElement) {
    for (let element of array11)

        if (element === searElement)
            return true;
    return false;

}


// Execpt =3

const num = [1, 2, 3, 4];

const output = execpt(num, [1]);

console.log(output);

function execpt(array, excluded) {
    const output = [];
    for (let ele of array)

        if (!excluded.includes(ele))
            output.push(ele);
    return output;

}

//move

const mm1 = [1, 2, 3, 4];

const output11 = move(mm1, 3, 0);



console.log(mm1);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid Offset');
        return;
    }

    const output11 = [...array];
    const elemettt = output11.splice(index, 1)[0];
    output11.splice(position, 0, elemettt);
    return output11;
}



/// 

const member = [1, 2, 4,3, 4, 5];

const count = countOccurence(member, 4);
console.log(count);

function countOccurence(array, searchelement) {

    //     let count =0;

    //      for(let kil of array)
    //         if (kil === searchelement)
    //             count++;
    //         return count

    //  }

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchelement) ? 1 : 0;
        console.log(accumulator, current, searchelement);
        return accumulator + occurence;

    }, 0);
}

// max number

const maxNum = [1,2,3,4,9,5,5,5,8];

const max = getMax(maxNum);
console.log(max);

function getMax(array){
 if (array.length === 0) return undefined ;

// let max = array[0];

// for (let i =1; i<array.length ; i++)
//     if(array[i]>max)
//         max = array[i];
//      return max ;

// 

return array.reduce((a,b) => (a>b) ? a:b);

}