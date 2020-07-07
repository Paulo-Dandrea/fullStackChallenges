function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


let randomNumber = () => Math.floor(Math.random() * 100);

const isDivisible = (number) => {
  console.log ((randomNumber() % number) === 0)
  console.log(number);
  return (randomNumber() % number) === 0
}

module.exports = { randomRgbColor, randomNumber, isDivisible };

