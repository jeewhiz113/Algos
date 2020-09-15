
let randomArray = [];
//Write a function to generate a random array
function genRandomArray(array){
  for (var i = 0; i < 20; i++){
    array.push(Math.floor(Math.random()*300));
  }
}

//implement selection sort here:

function selectionSort(array){
  //move the boundary of the unsorted subarray in this outer for loop
  for (var i = 0; i < array.length; i++){
    //find the index of min element in the unsorted array
    var minIndex = i;
    for (var j = i + 1; j < array.length; j++){
      if (array[j] < array[minIndex]){
        minIndex = j;
      }
    }
    //swap the current index (which is i) with the minIndex
    var temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
}



genRandomArray(randomArray);
console.log(randomArray);
selectionSort(randomArray);
console.log(randomArray);