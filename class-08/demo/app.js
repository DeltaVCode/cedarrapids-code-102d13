// for loop 
function askUser() {
  let answer = prompt("Is shampoo or conditioner better?");
  for(let index = 1; index < 3; index++){
    if(answer !== 'shampoo'){
      answer = prompt('try again, there is a right answer');
    } else {
      alert('you know it!');
      index = 3;
    }
  }
}

// while loop
// function askUser() {
//   let answer = prompt("Is shampoo or conditioner better?"); 
//   while(answer !== 'shampoo'){
//     answer = prompt('try again!');
//   }
//   alert('youuuuu got it!');
// }



