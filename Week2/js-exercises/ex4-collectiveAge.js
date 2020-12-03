function collectiveAge(people) {
  const agesArray = people.map(yearsOld => yearsOld.age)
  const ageSum = agesArray.reduce((total, age) => { return total + age }, 0)
  return ageSum
}

const hackYourFutureMembers = [{
  name: 'Wouter',
  age: 33
},
{
  name: 'Federico',
  age: 32
},
{
  name: 'Noer',
  age: 27
},
{
  name: 'Tjebbe',
  age: 22
},
];

console.log("The collective age of the HYF team is: " + collectiveAge(hackYourFutureMembers));
