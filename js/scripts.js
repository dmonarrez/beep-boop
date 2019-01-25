//check if first digit is 1 2 or 3
//if it isnt check the next diget (if possible) or print number
function checkFor321(num) {
  if(num == 3) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  } else if(num == 2) {
    return 'Boop!'
  } else if(num == 1) {
    return 'Beep!'
  } else {
    return num
  }
}

function numbersLessThan(num) {
  let numsArr = [];
  for(var i = 0; i < num; i ++){
    let numString = i.toString();
    numsArr.push(numString);
  }
  return numsArr
}

function beepBoop(num) {
  let beepBoopArr = [];
  let numsLessThan = numbersLessThan(num);
  //for every num less than num
  for(let i = 0; i < numsLessThan.length; i++) {
    //for every digit in numLessThan[i]
    for(let j = 0; j < numsLessThan[i].length; j++) {
        beepBoopArr.push(checkFor321(numbersLessThan[i][j]));
    }
  }
}



$(document).ready(function (){
  $("#pig-latin").submit(function (event){
    event.preventDefault();
    //input sentence
    let number = $("#number").val();

    $("#result").text();
  });
});
