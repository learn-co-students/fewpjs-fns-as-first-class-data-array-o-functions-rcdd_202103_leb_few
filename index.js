
function leashDog(dogName, dogBreed) {
  return (`Leash ${dogName} the ${dogBreed}`);
}


function walkToPark (dogName, dogBreed) {
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


function wakeDog(dogName, dogBreed) {
  return (`Wake ${dogName} the ${dogBreed}`);
}




// const n1 = wakeDog();
// const n2 = leashDog();
// const n3 = walkHome();
// const n4 = throwFrisbee();
// const n5 = walkHome();
// const n6 = unleashDog();

//const routine = [n1, n2, n3, n4, n5, n6];

let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

const  exerciseDog = (dogName, dogBreed) => {
  let newArr = []
  for (let i=0; i < routine.length; i++){
    newArr.push(routine[i](dogName, dogBreed));
  } return newArr;

}
exerciseDog("Esther", "Dalmation");
