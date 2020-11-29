const credits = 23580;
const pricePerDroid = 3000;
let message;

let totalPrice = prompt(`Введите кол-во дроидов, которые хотите купить. Стоимость 1 дроида ${pricePerDroid} кредитов. Ваш баланс ${credits} кредитов`);

if (totalPrice === null) {
    message = 'Отменено пользователем!';
}
else if (totalPrice * pricePerDroid > credits) {

    message = 'Недостаточно средств на счету!';      
}  
else {
    totalPrice = Number(totalPrice);
    const finalCredits = credits - totalPrice * pricePerDroid
    message = `Вы купили ${totalPrice} дроидов, на счету осталось ${finalCredits} кредитов.`;
    
}

console.log(message);




