const password = "qwerty";
const confirmPassword = prompt("Введите пароль:");

if (password == confirmPassword) {
  console.log("Пароли совпадают");
} else {
  console.log("Пароли не совпадают");
}
