
let randomArray = [];
//Write a function to generate a random array
function genRandomArray(array){
  for (var i = 0; i < 20; i++){
    array.push(Math.floor(Math.random()*300));
  }
}

//Insertion Sort:
function insertionSort(array){
  for (var i = 1; i < array.length; i++){
    var key = array[i];  //indicates the index i for which array[0 to i-1] is sorted.
    var j = i - 1;
    while(j >= 0  && array[j]>key){
      array[j+1] = array[j];
      j = j - 1;
    }
    //By the end of this, array[j] is no longer > key, hence j+1 is the correct index for the key
    array[j+1] = key;
  }
}

genRandomArray(randomArray);
console.log(randomArray);
insertionSort(randomArray);
console.log(randomArray);

//Conclusion: Ok! Seems to work!





//Run the two functions above and in the meantime, log them out to see if it works.