  // Jest will pass if the function tested is async and the test isn't use done();

const fetchData = callback => {

  setTimeout(() => {
    callback('peanut butter');
  }, 1000);

}

test('the data is peanut butter', (done) => {
    function callback(data) {
      expect(data).toBe('peanut butter');   
      done();  
    }
  
    fetchData(callback);
  });

  // To work with Promises :

const fetchDataPromise = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 300);
  })
}

  test('the data is peanut butter', () => {
    expect.assertions(1);
    return fetchDataPromise().then(data => {
      expect(data).toBe('peanut butter');
    });
  });


  // Jest error 

const fetchDataPromiseError = () => {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      reject('error');
    }, 300);
  })
}

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataPromiseError().catch(e =>
    expect(e).toMatch('error')
  );
});

test('the data is peanut butter', () => {
  expect.assertions(1);
  return expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return expect(fetchDataPromiseError()).rejects.toMatch('error')
});

test('expect to async await to fail', async () => {
  expect.assertions(1);
  try {
    await fetchDataPromiseError();
  } catch (e) {
    expect(e).toMatch('error');
  }
})

test('expect to fetchDataPromise to pass', async () => {
  expect.assertions(1);
  const data = await fetchDataPromise();
  expect(data).toBe('peanut butter');
})

// Usar mais este tipo abaixo . Async and Await

test('the data is peanut butter', async () => {
  expect.assertions(1);
  await expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  await expect(fetchDataPromiseError()).rejects.toMatch('error');
});