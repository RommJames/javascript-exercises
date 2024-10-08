// const people = [
//     {
//       name: 'Carly',
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: 'Ray',
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: 'Jane',
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ];
const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

function getAge(yearOfBirth, yearOfDeath){

    if(!yearOfDeath){
        yearOfDeath = new Date().getFullYear()
    }        
    return yearOfDeath - yearOfBirth
}

const findTheOldest = function(arr) {    
   let list = arr.map((person)=> [person.name, getAge(person.yearOfBirth, person.yearOfDeath)]).sort((a, b)=> a[1] > b[1] ? -1 : 1);
//    "a: ", a, "-- b: ", b
   console.log(list);
   let oldest = arr.find((person)=> person.name === list[0][0]);   
   console.log(oldest);
   return oldest;
};
findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
