let wakeDog=function(dogName="Byron", dogBreed="poodle") {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
}
let  leashDog=function(dogName="Byron", dogBreed="poodle") {
  return `Leash ${dogName} the ${dogBreed}`;}
let  walkToPark=function(dogName="Byron", dogBreed="poodle") {
  return `Walk to the park with ${dogName} the ${dogBreed}`;}
let  throwFrisbee=function(dogName="Byron", dogBreed="poodle") {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;}
let  walkHome=function(dogName="Byron", dogBreed="poodle") {
  return`Walk home with ${dogName} the ${dogBreed}`;}
let  unleashDog=function(dogName="Byron", dogBreed="poodle") {
  return`Unleash ${dogName} the ${dogBreed}`;}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog, breed) {
  return routine.map(func => func(dog, breed))
}
