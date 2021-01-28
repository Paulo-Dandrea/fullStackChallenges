const splitBillbyUsers = require('./splitBillbyUsers');

describe('splitBillbyUsers()', () => {
  it('Should return a message if one or two of the entries are a empty array', () => {
    let items = [];
    let users = [];
    let response = splitBillbyUsers(items, users);
    let expectedResponse = {
      message: 'One of your entries are empty, try again',
    };

    expect(response).toEqual(expectedResponse);
    // Com um preenchido
    items = [{ name: 'pedregulho', quantity: 308, priceInCentavos: 1 }];
    users = [];

    response = splitBillbyUsers(items, users);

    expect(response).toEqual(expectedResponse);

    // Com outro preenchido

    items = [];
    users = [{ email: 'luctus.ut@seddictum.edu' }];

    response = splitBillbyUsers(items, users);

    expect(response).toEqual(expectedResponse);
  });

  it('Should return an dictionary object with the bill divided by user email', () => {
    items = [
      { name: 'pedregulho', quantity: 3, priceInCentavos: 30 },
      {
        name: 'pedreira',
        quantity: 1,
        priceInCentavos: 5,
      },
      {
        name: 'stone',
        quantity: 1,
        priceInCentavos: 5,
      },
    ];
    users = [
      {
        email: 'why@stone.edu',
      },
      {
        email: 'paulo.dandrea@stone.edu',
      },
      {
        email: 'should.be.your.next.programmer@stone.edu',
      },
    ];

    const expectedResponse = {
      'why@stone.edu': 34,
      'paulo.dandrea@stone.edu': 33,
      'should.be.your.next.programmer@stone.edu': 33,
    };
    const response = splitBillbyUsers(items, users);

    expect(response).toEqual(expectedResponse);
  });
});
