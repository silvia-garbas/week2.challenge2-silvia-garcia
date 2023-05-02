export default strictEquals;

let valueA = 1;
let valueB = "1";

const strictEquals = (valueA, valueB) => {
  let result = Object.is(valueA, valueB);
  console.log(result);
};
// if (Object.is(valueA, Nan))

strictEquals(valueA, valueB);
