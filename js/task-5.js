
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
    

