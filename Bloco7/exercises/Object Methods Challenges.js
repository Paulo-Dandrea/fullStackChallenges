const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//   Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addKeyAndValueToObject = (objectTarget, keyToAdd, valueToAddToKey) => {
  return (objectTarget[keyToAdd] = valueToAddToKey);
};

addKeyAndValueToObject(lesson2, 'turno', 'manhã');
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeyOfAnObject = (objectTarget) => Object.keys(objectTarget);
console.log(listKeyOfAnObject(lesson3));

// Crie uma função para mostrar o tamanho de um objeto.
const returnSizeOfAnObject = (objectTarget) =>
  Object.entries(objectTarget).length;
console.log('Size of an object: ');
console.log(returnSizeOfAnObject(lesson3));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjectsValue = (objectTarget) => Object.values(objectTarget);
console.log(
  `Valores guardados nas chaves do objeto: ${listObjectsValue(lesson3)}`
);

//5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = (source1, source2, source3) => {
  // const lessonUM = source1.toString()
  let superObject = Object.assign(
    { lesson1: source1 },
    { lesson2: source2 },
    { lesson3: source3 }
  );
  return superObject;
};
console.log('All Lessons: ');
console.log(allLessons(lesson1, lesson2, lesson3));

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const superObject2 = allLessons(lesson1, lesson2, lesson3);

const howManyStudents = (objetao) => {
  return (
    objetao.lesson1.numeroEstudantes +
    objetao.lesson2.numeroEstudantes +
    objetao.lesson3.numeroEstudantes
  );
};

console.log(
  `Número de estudantes em todas as turmas: ${howManyStudents(superObject2)}`
);

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByNumber = (whatLesson, position) => {
  const whatLessonArray = Object.entries(whatLesson);
  return whatLessonArray[position][1];
};

console.log(
  `Valor da chave da lição selecionada: ${getValueByNumber(lesson1, 0)}`
);
console.log(
  `Valor da chave da lição selecionada: ${getValueByNumber(lesson2, 1)}`
);
console.log(
  `Valor da chave da lição selecionada: ${getValueByNumber(lesson3, 2)}`
);

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (object, keyName, keyValue) => {
  if (Object.keys(object).includes(keyName)) {
    return object[keyName].includes(keyValue);
  }
};
// verifyPair(lesson3);
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
console.log(verifyPair(lesson2, 'materia', 'Carlos'));
// expected: false
console.log(verifyPair(lesson2, 'materia', 'História'));
// expected: true

// --------------------- BONUS -----------

// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const superObject3 = allLessons(lesson1, lesson2, lesson3);

const howManyStudentsWentToMathClasses = (objetao) => {
  let studentsWentToMath = 0;
  for (let i = 0; i < Object.keys(objetao).length; i++) {
    if (objetao[Object.keys(objetao)[i]].materia.includes('Matemática')) {
      studentsWentToMath += objetao[Object.keys(objetao)[i]].numeroEstudantes;
    }
  }
  return studentsWentToMath;
};

console.log(
  `Quantidade de estudantes que foram na aula de matemática: ${howManyStudentsWentToMathClasses(
    superObject3
  )}`
);

// 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (objetao, targetProf) => {
  const objetaoArray = Object.keys(objetao);
  let studentsWentToMath = 0;
  const classesThatProfgave = [];

  for (let i = 0; i < objetaoArray.length; i++) {
    if (objetao[objetaoArray[i]].professor.includes(targetProf)) {
      studentsWentToMath += objetao[objetaoArray[i]].numeroEstudantes;
      classesThatProfgave.push(objetao[objetaoArray[i]].materia);
    }
  }
  const teachersReportObjectfied = Object.assign(
    {},
    { professor: targetProf },
    { aulas: classesThatProfgave },
    { estudantes: studentsWentToMath }
  );

  return teachersReportObjectfied;
};
console.log(createReport(superObject3, 'Maria Clara'));
console.log(createReport(superObject3, 'Carlos'));

// const objectArray = Object.entries(numbers);

// objectArray.forEach(([key, value]) => {
//   console.log(key); // 'one'
//   console.log(value); // 1
// });
