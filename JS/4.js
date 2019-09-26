/*
Add a ' + ' to the function so it returns [ 10, 20, 30, 40, 50] as numbers
*/

let array = [1, 2, 3, 4, 5];

const addZero = () => {
  array.map((item, i) => {
    let newNum = item.toString();
    array[i] = (newNum + 0);
  });
}

addZero();

console.log(array);