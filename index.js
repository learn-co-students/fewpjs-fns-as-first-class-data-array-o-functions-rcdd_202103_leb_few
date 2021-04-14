/*function wakeDog() {
  console.log("Wake Byron the poodle");
}
function leashDog() {
  console.log("Leash Byron the poodle");
}
function walkToPark() {
  console.log("Walk to the park with Byron the poodle");
}
function throwFrisbee() {
  console.log("Throw the frisbee for Byron the poodle");
}
function Unleash() {
  console.log("Unleash Byron the poodle");
}*/
//let dog= [dogName, dogBreed];
/*function wakeDog(dogName, dogBreed) {
//  console.log("Wake ${dogName} the ${dogBreed}");
  return "Wake ${dogName} the ${dogBreed}";
}
function leashDog(dogName,dogBreed) {
//  console.log("Leash ${dogName} the ${dogBreed}");
  return "Leash ${dogName} the ${dogBreed}";
}
function walkToPark(dogName, dogBreed) {
//  console.log("Walk to the park with ${dogName} the ${dogBreed}");
  return "Walk to the park with ${dogName} the ${dogBreed}";
}
function throwFrisbee(dogName, dogBreed) {
//  console.log("Throw the frisbee for ${dogName} the ${dogBreed}");
  return "Throw the frisbee for ${dogName} the ${dogBreed}";
}
function Unleash(dogName, dogBreed) {
//  console.log("Unleash ${dogName} the ${dogBreed}");
  return "Unleash ${dogName} the ${dogBreed}";
}

let routine =[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
//function exersiceDog (dogName,dogBreed){
  //let dogName="Byron";
  //let dogBreed="poodle";
/*  for (let i=0; i<length.routine;i++){
return routine[i];
  }
  console.log(exersiceDog(Bryan, poodle))
}*/
/*const exerciseDog = function(dogName, dogBreed) {
  return routine.map(action => action(dogName, dogBreed));
}*/

function wakeDog(dogName, dogBreed) {
    return (`Wake ${dogName} the ${dogBreed}`);
}
function leashDog(dogName, dogBreed) {
  return (`Leash ${dogName} the ${dogBreed}`);
}
function walkToPark(dogName, dogBreed) {
  return (`Walk to the park with ${dogName} the ${dogBreed}`);
}
function throwFrisbee(dogName, dogBreed) {
  return (`Throw the frisbee for ${dogName} the ${dogBreed}`);
}
function walkHome(dogName, dogBreed) {
  return (`Walk home with ${dogName} the ${dogBreed}`);
}
function unleashDog(dogName, dogBreed) {
  return (`Unleash ${dogName} the ${dogBreed}`);
}
var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
function exerciseDog(dog, breed) {
  return routine.map(fn => fn(dog, breed))
}
