const assert = require('assert')

const rectangleArea = (width, height) => {
    console.log(width, height)
    return width * height
} 

const rectangle1 = [1, 2]
const rectangle2 = [3, 5]
const rectangle3 = [6, 9]
const rectangles = [rectangle1, rectangle2, rectangle3]

for(index of rectangles) {
    assert.equal(rectangleArea(...index), index[0]*index[1]) // altere a chamada da funcao rectangleArea
}
    
