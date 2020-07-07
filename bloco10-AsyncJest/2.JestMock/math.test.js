const math = require('./math');
const { somar } = require('./math');

it('should return 5(3+2)', async () => {
    await expect(somar(3,2)).resolves.toEqual(5);
});
