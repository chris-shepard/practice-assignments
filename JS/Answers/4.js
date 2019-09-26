/*
Solution Resource: https://www.w3schools.com/js/js_type_conversion.asp *Under 'The Unary + Operator'*
*/

let array = [1, 2, 3, 4, 5];

const addZero = () => {
  array.map((item, i) => {
    let newNum = item.toString();

    //         |
    //         V
    array[i] = + (newNum + 0);
  });
}

addZero();

console.log(array);