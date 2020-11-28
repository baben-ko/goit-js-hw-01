const credits = 23580;
const pricePerDroid = 3000;

let totalPrice = prompt(`Введите кол-во дроидов, которые хотите купить. Стоимость 1 дроида ${pricePerDroid} кредитов. Ваш баланс ${credits} кредитов`);

if (totalPrice === null) {
    alert(`Отменено пользователем!`);
}
else if (totalPrice * pricePerDroid > credits) {

alert(`Недостаточно средств на счету!`);      
}  
else {
    totalPrice = Number(totalPrice);
    alert(`Вы купили ${totalPrice} дроидов, на счету осталось ${credits - totalPrice * pricePerDroid} кредитов.`);
    
}


