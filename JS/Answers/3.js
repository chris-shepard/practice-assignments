/*
Solution Resources: https://www.w3schools.com/js/js_array_iteration.asp
*/

let array = [1, 2, 3, 4, 5];

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
};

array.forEach(item => console.log(item));

array.map(item => console.log(item));