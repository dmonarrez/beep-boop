//check if number includes 1, 2, or 3
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
//find all numbers less than input
function numbersLessThan(num) {
  let numsArr = [];
  for(var i = 0; i <= num; i ++){
    let numString = i.toString();
    numsArr.push(numString);
  }
  //returns an array of numbers type:string
  return numsArr
}

//final beep boop function
function beepBoop(num, name) {
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
    //user input
    let number = $("#number").val();
    let name = $("#name").val();
    //change robot image
    $("#happyBot").removeClass("happyBot").addClass("crazyBot");
    $("#crazyBot").removeClass("crazyBot").addClass("happyBot");
    //return logic to user
    $("#result").text(beepBoop(number, name)).show();

  });
});
