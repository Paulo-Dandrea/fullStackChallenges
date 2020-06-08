const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listaHabilidadesENiveis = (objetoStudent) => {
  const skills = Object.keys(objetoStudent);
  let skillsPresentation = ``;

  for (let i = 0; i < skills.length; i += 1) {
    skillsPresentation += `
    Nome da Habilidade: ${skills[i]} Nível: ${objetoStudent[skills[i]]
    }
    `;
  }

  console.log(skillsPresentation);
  return skillsPresentation;
};

listaHabilidadesENiveis(student2);
listaHabilidadesENiveis(student1);
// console.log(listaHabilidadesENiveis(student2));
