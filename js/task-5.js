
const CHINA = "китай";
const CHILIE = "чили";
const AUSTRALIA = "австралия";
const INDIA = "индия";
const JAMAICA = "ямайка";

let correctDisplayCountryInAlert;
let cost;

let deliveryCountry = prompt(`Введите страну`);

deliveryCountry = deliveryCountry.toLowerCase();

switch (deliveryCountry) {

    case CHINA:
        cost = 100;
        correctDisplayCountryInAlert = "в Китай";
        break;
    
    case CHILIE:
        cost = 250;
        correctDisplayCountryInAlert = "в Чили";
        break;
    
    case AUSTRALIA:
        cost = 170;
        correctDisplayCountryInAlert = "в Австралию";
        break;
    
    case INDIA:
        cost = 80;
        correctDisplayCountryInAlert = "в Индию";
        break;
    
    case JAMAICA:
        cost = 120;
        correctDisplayCountryInAlert = "на Ямайку";
        break;
    
    default:
        alert(`В вашей стране доставка не доступна`);
    
}

alert(`Доставка ${correctDisplayCountry} будет стоить ${cost} кредитов`);




// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
    

