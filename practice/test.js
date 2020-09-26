

/*
  Write a function to return pair with given difference in an array.
  [5, 18, -8, 12, 80] with diff = 13 then return [5, -8]


*/

function pairWithGivenDiff(array, diff){
  let set = new Set();
  for (var i =0; i < array.length; i++){
    var current = array[i];
    //does the set contain current - diff or current + diff
    if (set.has(current + diff)){
      return [current, current + diff];
    }
    if (set.has(current-diff)){
      return [current, current-diff];
    }
    set.add(current);
  }
}

console.log(pairWithGivenDiff([5, 6, -8, 12, 80], 13));