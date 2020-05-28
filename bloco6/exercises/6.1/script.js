const selectEstado = document.getElementById('estado');
const estadoArray = ['São Paulo', 'Minas Gerais', 'Santa Catarina']


function populate(){
    for (let index = 0; index < estadoArray.length; index++) {
        const element = estadoArray[index];
        let option = document.createElement('option');
        option.value = (element.toLowerCase());
        option.innerHTML = element
        selectEstado.appendChild(option)     
        console.log(element.toLowerCase())
    }
}
populate()