const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  
  const [,,...arr ] = list;
  
  return arr;
}
const arr = removeFirstTwo(source);

console.log(removeFirstTwo(source))

