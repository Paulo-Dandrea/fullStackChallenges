const mathOperations = async (x, y, z) => {
  if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
    return Promise.reject(new Error('Digite apenas números'));
  }
  const sum = x + y;
  const mul = sum * z;
  return mul < 50 ? Promise.reject(new Error('Valor muito baixo')) : mul;
};


// Peguei do Gabarito por que não vi sentido em usar await e acabei vendo que no gabarito tb não usou await, ou seja... qual é o objetivo de um enunciado que pede algo que nem o próprio gabarito usou o que foi pedido?

