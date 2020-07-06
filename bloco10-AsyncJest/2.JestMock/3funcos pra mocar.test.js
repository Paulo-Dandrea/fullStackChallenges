 // Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
 const pratica = require('./pratica');
const { strToUpper } = require('./pratica');

 jest.mock('./pratica');

 test('should return with upperCase', () => {

    strToUpper.mockImplementation((str) => str.toLowerCase());
    // expect(pratica.strToUpper('asa')).toBe('ASA');
    expect(pratica.strToUpper('Asa')).toBe('asa');

    // expect(pratica.firstLetter('vamo')).toBe('v');

    // expect(pratica.concat2('vamo', 'que vamo')).toBe('vamoque vamo');
});