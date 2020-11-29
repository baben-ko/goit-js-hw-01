
const ADMIN_PASSWORD = 'jqueryismyjam';
const welcome = 'Добро пожаловать!';
const cancel = 'Отменено пользователем!';
const error = 'Доступ запрещен, неверный пароль!';
let message;
const password = prompt(`Введите пароль администратора`);

if (password === ADMIN_PASSWORD) {
    message = welcome;
}
else if (password === null) {
    message = cancel;
}
else  {
  message = error;
}

 alert(message);
