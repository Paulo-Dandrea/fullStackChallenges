
const makeAndObject = (objectName,newKeyName,value) => {
    const newKey = newKeyName;      
    objectName[newKey] = value;
    return objectName;
}
const object = {};
console.log(makeAndObject(object, 'nome', 'Clancy'));

console.log(makeAndObject(object, 'idade', 36))

const object2 = {};

console.log(makeAndObject(object2,'name', 'Pássaro'));

console.log(object);