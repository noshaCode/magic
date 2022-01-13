function solve(input){
 const arr1 = input.slice(0,3);
 const arr2 = input.slice(3,6);
 const arr3 = input.slice(6,9);
 
 //row 
 if (
    sumArray(arr1) !== 15 ||
    sumArray(arr2) !== 15 ||
    sumArray(arr3) !== 15 
 ) {
     return false;
 }

 // column
 const col1 = [input[0], input[3], input[6]]
 const col2 = [input[1], input[4], input[7]]
 const col3 = [input[2], input[5], input[8]]

 if (
    sumArray(col1) !== 15 ||
    sumArray(col2) !== 15 ||
    sumArray(col3) !== 15 
 ) {
     return false;
 }

  // diagonal
  const diag1 = [input[0], input[4], input[8]]
  const diag2 = [input[6], input[4], input[2]]
 
  if (
     sumArray(diag1) !== 15 ||
     sumArray(diag2) !== 15
  ) {
      return false;
  }

  return true;

}

function sumArray(arr){
    return arr.reduce((sum, i)=>{
        return sum + i
     }, 0)
}




let input1=[8, 1, 6, 3, 5, 7, 4, 9, 2]
let input2=[2, 7, 6, 9, 5, 1, 4, 3, 8] 
let input3=[3, 5, 7, 8, 1, 6, 4, 9, 2] 
let input4=[8, 1, 6, 7, 5, 3, 4, 9, 2]
console.log(solve(input1))
console.log(solve(input2))
console.log(solve(input3))
console.log(solve(input4))
