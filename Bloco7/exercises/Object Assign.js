const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    child: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

    const pessoa = {
        name: 'Roberto',
      };
      
      const lastName = {
        lastName: 'Silva',
      };
      
      const clone = Object.assign(pessoa, lastName);
      
      console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
      console.log(pessoa); // { name: 'Roberto', lastName: 'Silva' }
      
  