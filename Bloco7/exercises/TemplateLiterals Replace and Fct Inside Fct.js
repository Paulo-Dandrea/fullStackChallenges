const substituteXonPhrase = (wordInvader) => {
  const baseString = 'Tryber x aqui';
  let newPhrase = baseString.replace('x', wordInvader);
  return newPhrase;
};

substituteXonPhrase('Neneco da Mamãe');

const skills = ['Javascript', 'HTML', 'CSS', 'Rock in Opposition', 'Tics'];

const studentProfile = (name) => {
  const tryber = substituteXonPhrase(name);
  const sortedSkills = skills.sort();
  const presentantion = `${tryber}!
    Minhas cinco principais habilidades são: 
    1. ${sortedSkills[0]}.
    2. ${sortedSkills[1]}.
    3. ${sortedSkills[2]}.
    4. ${sortedSkills[3]}.
    5. ${sortedSkills[4]}.
    `;
  return presentantion;
};
console.log(studentProfile('Nenequito'));
