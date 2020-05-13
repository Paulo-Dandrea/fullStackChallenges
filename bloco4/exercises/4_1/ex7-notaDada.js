let percentageOfRightAnswers = "Juarez";
let result;

switch (true) {
    case percentageOfRightAnswers > 100 || percentageOfRightAnswers < 0:
        result = "número impossível"
        break;

    case percentageOfRightAnswers >= 90 && percentageOfRightAnswers < 100:
        result = percentageOfRightAnswers + " é A"
        break;
    case percentageOfRightAnswers >= 80:
        result = percentageOfRightAnswers + " é B"
        break;
    case percentageOfRightAnswers >= 70:
        result = percentageOfRightAnswers + ' é C'
        break;
    case percentageOfRightAnswers >= 60:
        result = percentageOfRightAnswers + ' é D'

    case percentageOfRightAnswers < 60:
        result = percentageOfRightAnswers + ' é baixo demais, estude mais'
        break;

    default:
        result = percentageOfRightAnswers + " é um numero mesmo?"
}

console.log(result);