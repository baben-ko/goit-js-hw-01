

let deliveryCountry = prompt(`Введите страну`);

deliveryCountry = deliveryCountry.toLowerCase();

console.log(deliveryCountry);

let cost;

switch (deliveryCountry) {

    case 'китай':
        cost = 100;
        deliveryCountry = "Китай";
        alert(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    
    case 'чили':
        cost = 250;
        deliveryCountry = "Чили";
        alert(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    
    case 'австралия':
        cost = 170;
        deliveryCountry = "Австралию";
        alert(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    
    case 'индия':
        cost = 80;
        deliveryCountry = "Индию";
        alert(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    
    case 'ямайка':
        cost = 120;
        deliveryCountry = "Ямайку";
        alert(`Доставка на ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    
    default:
        alert(`В вашей стране доставка не доступна`);
    
    }