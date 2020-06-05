  const factorialize = (num) => num <= 1 ? 1 : (num * factorialize(num - 1));

  console.log(factorialize(4));
  console.log(factorialize(5));
  console.log(factorialize(6));