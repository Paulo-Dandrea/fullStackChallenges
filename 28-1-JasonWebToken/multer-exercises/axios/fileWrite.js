const axios = require('axios');

const body = {
  texto: 'o bixo tá pegando'
}

axios.post('http://localhost:3000/files/write', body)
.then(res => console.log(res.status))
.catch(error => console.log(error))