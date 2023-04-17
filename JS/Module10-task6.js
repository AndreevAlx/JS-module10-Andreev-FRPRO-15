let arr = [1 , 2 , 3 , 4 , 5];

function hasTwins(array){
  return array.length !== new Set(array).size;
}