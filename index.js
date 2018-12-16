var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
var cassie = "Cassie";
// Add your functions and code here

function destructivelyAppendKitten(cassie){
  kittens.push(cassie);
  return kittens;
}

function destructivelyPrependKitten(cassie){
  kittens.unshift(cassie);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}