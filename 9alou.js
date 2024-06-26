let lawl;
let thani;
let thalth;
let majmou3;
let m1 = document.getElementById("pa");

function admis(num){
  console.log(num > 10)
  if (num > 10){
    m1.innerHTML = "mabrouuuuuuk";
  }
  else{
    m1.innerHTML = "alh 8alb nxt time :)";
  }
}

function hmm() {  

  lawl = document.getElementById("1").valueAsNumber;
  thani = document.getElementById("2").valueAsNumber;
  thalth = document.getElementById("3").valueAsNumber;
  majmou3 = document.getElementById("maj");

  majmou3.innerHTML = (lawl+(thalth+thani)*2)/5;
  admis(parseFloat(majmou3.textContent));
}

if (5>4){
  console.log("hello world")
}