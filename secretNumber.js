let min = 1;
let max = 100;
let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Компьютер 1 загадал число: ${secretNumber}.`);

while (true) {
    let guess = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Компьютер 2: Пробую число ${guess}.`);

    if (guess < secretNumber) {
        console.log("Компьютер 1: Больше.");
        min = guess + 1;
    } else if (guess > secretNumber) {
        console.log("Компьютер 1: Меньше.");
        max = guess - 1;
    } else {
        console.log("Компьютер 1: Угадал!");
        break;
    }
}