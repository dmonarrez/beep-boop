//check if first digit is 1 2 or 3
//if it isnt check the next diget (if possible) or print number
function checkFor321(num, name) {
  let value
  if(num.includes('3')){
    value = "I'm sorry, " + name +". I'm afraid I can't do that.";
  } else if(num.includes('2')){
    value = 'boop';
  } else if(num.includes('1')){
    value = 'beep';
  } else {
    value = num;
  }
  return value
}
//checkFor321('32');

function numbersLessThan(num) {
  let numsArr = [];
  for(var i = 0; i <= num; i ++){
    let numString = i.toString();
    numsArr.push(numString);
  }
  //returns an array of numbers type:string
  return numsArr
}


function beepBoop(num, name) {
  //debugger;
  let beepBoopArr = [];
  let numsLessThan = numbersLessThan(num);

  for(var i = 0; i < numsLessThan.length; i++) {
    beepBoopArr.push(checkFor321(numsLessThan[i], name));
  }
  return beepBoopArr.join(', ');
}



$(document).ready(function (){
  $("#pig-latin").submit(function (event){
    event.preventDefault();
    //input sentence
    let number = $("#number").val();
    let name = $("#name").val();

    $("#happyBot").removeClass("happyBot").addClass("crazyBot");
    $("#crazyBot").removeClass("crazyBot").addClass("happyBot");
    $("#result").text(beepBoop(number, name)).show();

  });
});
