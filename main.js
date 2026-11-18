// 29. Computador adivinha. Pense em um número de 1 a 100. O computador deve tentar adivinhar usando a estratégia de dividir o intervalo ao meio. Responda "maior", "menor" ou "acertou". Exiba a quantidade de tentativas.

let minimumNumber = 1;
let maximumNumber = 100;
let attempts = 0;
let guessedCorrectly = false;

console.log("Pense em um número entre 1 e 100.");

while (minimumNumber <= maximumNumber && !guessedCorrectly) {
    const guess = Math.floor((minimumNumber + maximumNumber) / 2);

    attempts++;

    const answer = prompt(
        `Meu palpite é ${guess}. O número é maior, menor ou acertei?`
    ).toLowerCase();

    if (answer === "acertou") {
        guessedCorrectly = true;
        console.log(`Acertei! Foram necessárias ${attempts} tentativa(s).`);
    } else if (answer === "maior") {
        minimumNumber = guess + 1;
    } else if (answer === "menor") {
        maximumNumber = guess - 1;
    } else {
        console.log("Resposta inválida. Digite maior, menor ou acertou.");
        attempts--;
    }
}

if (!guessedCorrectly) {
    console.log("As respostas foram inconsistentes. Não foi possível encontrar o número.");
}