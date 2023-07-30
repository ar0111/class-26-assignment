// const song = "Ami bangla gan Gai ani Banglar gan gai";
// console.log(song);
// console.log(song.toLocaleLowerCase());
// console.log(song.toLocaleUpperCase());

const input = 'blackCow';
const savedInfo = 'blackcow';

// if(input.toLocaleLowerCase() == savedInfo.toLocaleLowerCase()) {
//     console.log("Info exists");
// }else{
//     console.log("Not Exist");
// }

const books = [
    "Himu",
    "and Himu",
    "Enjoy your life",
    "Dujon Dujoner",
    "Dujon Dujoner",
    "Data Structure and Algorithm with someone",
    "Problem Solving with someone"
]

// const searching = 'solving';
const searching = 'someone';
const output = [];

for(const book of books){
    if(book.toLocaleLowerCase().endsWith('someone')){
        output.push(book);
    }
}

// console.log(output);

// for(const book of books){
//     if(book.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
//         output.push(book);
//     }
// }

// for(const book of books){
//     // console.log(book);
//     if(book.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1){
//         output.push(book);
//     }
// }

// console.log(output);

const song = "Ami banglai gan Gai ani Banglar gan gai";
// console.log(song);
// console.log(song.split(" "));
// console.log(song.slice(4, 11));
// const substr = song.substr(4, 7);
const substring = song.substring(4, 7);
// console.log(substr);
// console.log(substring);

const firstName = "Arafat";
const lastName = " Rahman";

const fullName = firstName.concat(lastName);
// console.log(fullName);

const programmers = [
    "Arafat Rahman",
    "Shuvo",
    "Sabbir Ahmad",
    "Shaowriar",
    "Habibur",
    "Sanjida Yeasin"
]

// console.log(programmers.join(","));

// const MIpersons = [
//     "Arafat Rahman",
//     "Shuvo",
//     "Sabbir Ahmad",
//     "Shaowriar",
//     "Habibur",
//     "Sanjida Yeasin"
// ]

// if(MIpersons.includes("Habibur")){
//     console.log("Hablu is exist");
// }else{
//     console.log("Hablu is not exist");
// }

// if(MIpersons.indexOf("Habibur") != -1){
//     console.log("Hablu is exist");
// }else{
//     console.log("Hablu is not exist");
// }

// function biggestName(array){
//     if(Array.isArray(array) == false){
//         return "Please provide a valid Array";
//     }else{
//         let biggest = '';
//         for(const person of array){
//             if(person.length > biggest.length){
//                 biggest = person;
//             }
//         }

//         return biggest;
//     }
// }

// console.log(biggestName(MIpersons));

const first5Numbers = [1, 2, 3, 4, 5];
const last5Numbers = [6, 7, 8, 9, 10];

const combined = first5Numbers.concat(last5Numbers);
// console.log(combined);
const numberSlice = combined.slice(2, 5);
const numberSplice = combined.splice(2, 5);
// console.log(numberSlice);
// console.log(numberSplice);

const luckyNumbers = [9, 8, 1, 3, 5, 7, 6];
// console.log(luckyNumbers.sort());
// console.log(luckyNumbers.sort().reverse());

const MIpersons = [
    "Arafat Rahman",
    "Shuvo",
    "Sabbir Ahmad",
    "Shaowriar",
    "Habibur",
    "Sanjida Yeasin"
]

const sortedMIPersons = MIpersons.sort();
// console.log(sortedMIPersons.reverse());

function allNumbers(num1, num2){
    // console.log(arguments[5]);
    let total = 0;
    for(const number of arguments){
        // console.log(number);
        total += number;
    }

    return total;
}

const result = allNumbers(10, 20, 30, 50, 60, 70, 80, 90, 100);

// console.log(result);

function allMIPersonsName(firstName){
    let name = "";
    for(const person of arguments){
        name = name + person;
    }

    return name;
}

// console.log(allMIPersonsName(MIpersons));

const myName = "Arafat";
try{
    myName = "Rahman";
}catch(err){
    console.log(err);
}

console.log(myName);

const myFriendsName = "Tony";
console.log(myFriendsName);