let input;
let total = 0;

while(true) {
    input = prompt(`Введите число`);

    if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }

    const notANumber = isNaN(input);
    
    if (notANumber) {
        alert(`Было введено не число, попробуйте еще раз`);
        continue;
    } 
    total += Number(input);
}


