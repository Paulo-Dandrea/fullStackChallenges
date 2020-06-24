const messageDelay = () => Math.floor(Math.random() * 3000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9) / 5 + 32;
const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) =>
  console.log(
    `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`
    );

// definição da função sendMarsTemperature...

const sendMarsTemperature = (callbackGetTemp, callbackMessadelay) => {
  setTimeout(() => {
    callbackGetTemp(getMarsTemperature());
    console.log('Hora de tomar um banho de Sol sem protetor')
  }, callbackMessadelay());
};

sendMarsTemperature(temperatureInFahrenheit, messageDelay); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet, messageDelay); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

//Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature um callback que contenha as ações a serem tomadas em cima da temperatura.
