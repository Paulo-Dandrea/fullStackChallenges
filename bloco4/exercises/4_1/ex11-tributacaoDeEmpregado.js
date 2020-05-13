
let aliquotaINSS;
let aliquotaIR = 0;
let grossSalary = 9500;
// Salario base após INSS
let salaryBase
// Salário líquido
let netSalary;

if (grossSalary < 1039) {
    aliquotaINSS = grossSalary * 0.075;
} else if (grossSalary >= 1039 && grossSalary < 2098.6) {
    aliquotaINSS = grossSalary * 0.09;
} else if (grossSalary > 2098.61 && grossSalary < 3134.40) {
    aliquotaINSS = grossSalary * 0.12;
} else if (grossSalary > 3134.41 && grossSalary < 6101.06) {
    aliquotaINSS = grossSalary * 0.14;
} else if (grossSalary > 6101.07) {
    aliquotaINSS = 854.15
}

salaryBase = grossSalary - aliquotaINSS

// console.log(salaryBase)

if (salaryBase >= 1903 && salaryBase < 2826.65) {
    aliquotaIR = (salaryBase * 0.075) - 142.80
} else if (salaryBase > 2826.65 && salaryBase < 3751.05) {
    aliquotaIR = (salaryBase * 0.15) - 354.80
} else if (salaryBase > 3751.05 && salaryBase < 4664.68) {
    aliquotaIR = (salaryBase * 0.225) - 636.13
} else if (salaryBase > 4664.69) {
    aliquotaIR = (salaryBase * 0.275) - 869.36
}

netSalary = salaryBase - aliquotaIR

console.log (`O seu salário líquido é de R$ ${netSalary.toFixed(2)}`)