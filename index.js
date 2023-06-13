// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push(name);
}

function destructivelyPrependCat(name){
  cats.unshift(name);
}

function destructivelyRemoveLastCat(){
  cats.splice(cats.length - 1, 1);
}

function destructivelyRemoveFirstCat(){
  cats.splice(cats[0], 1);
}

function appendCat(name){
  return [...cats, name];
}

function prependCat(name){
  return [name, ...cats];
}

function removeLastCat(){
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat(){
  return cats.slice(1);
}