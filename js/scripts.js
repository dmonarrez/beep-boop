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
  let numsArr = []
  for(var i = 0; i < num; i ++){
    numsArr.push(i);
  }
  return numsArr
}

function beepBoop(num) {
  let beepBoopArr = [];
}



$(document).ready(function (){
  $("#pig-latin").submit(function (event){
    event.preventDefault();
    //input sentence
    let number = $("#number").val();

    $("#result").text();
  });
});
