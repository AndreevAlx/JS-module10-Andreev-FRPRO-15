let num = +prompt('Введите значение');

if (typeof num != 'number' || isNaN(num)) {
    console.log("Упс, кажется, вы ошиблись")
} else if (num % 2 === 0) {
    console.log("Вы ввели " + num + ", это число четное")
} else {
    console.log("Вы ввели " + num + ", это число нечетное")
}