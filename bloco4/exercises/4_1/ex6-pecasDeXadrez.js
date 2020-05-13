let pecaDeXadrez = 'cavalo marinho';
pecaDeXadrez = pecaDeXadrez.toLowerCase();
let movement;
switch (pecaDeXadrez) {
    case "king":
        movement = 'One square'
        break;
    case "queen":
        movement = 'Everything she wants'
        break;
    case "bishop":
        movement = "It depends of Pope's mood of the day"
        break;
    case 'pawns':
        movement = 'one square, one pinga per day'
        break;
    default:
        movement = 'Não existe esta peça não Fiiii'
    }


console.log (movement);