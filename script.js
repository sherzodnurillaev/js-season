// zadanie 1 

// Спрашивать какой месяц - клиент вводит номер месяца например 3 - март
// Программа должна сказать какой это сезон

let month = prompt("Введите месять или число:").trim()

if (month.toLowerCase() === "january" || month.toLowerCase() === "январь" || month.toLowerCase() === "1") {
    console.log("Зима")
} else if (month.toLowerCase() === "february" || month.toLowerCase() === "февраль" || month.toLowerCase() === "2") {
    console.log("Зима");
} else if (month.toLowerCase() === "march" || month.toLowerCase() === "март" || month.toLowerCase() === "3") {
    console.log("Весна");
} else if (month.toLowerCase() === "april" || month.toLowerCase() === "апрель" || month.toLowerCase() === "4") {
    console.log("Весна");
} else if (month.toLowerCase() === "may" || month.toLowerCase() === "май" || month.toLowerCase() === "5") {
    console.log("Весна");
} else if (month.toLowerCase() === "june" || month.toLowerCase() === "июнь" || month.toLowerCase() === "6") {
    console.log("Лето");
} else if (month.toLowerCase() === "jule" || month.toLowerCase() === "июль" || month.toLowerCase() === "7") {
    console.log("Лето");
} else if (month.toLowerCase() === "august" || month.toLowerCase() === "август" || month.toLowerCase() === "8") {
    console.log("Лето");
} else if (month.toLowerCase() === "september" || month.toLowerCase() === "сентябрь" || month.toLowerCase() === "9") {
    console.log("Осен");
} else if (month.toLowerCase() === "october" || month.toLowerCase() === "октябрь" || month.toLowerCase() === "10") {
    console.log("Осень");
} else if (month.toLowerCase() === "november" || month.toLowerCase() === "ноябрь" || month.toLowerCase() === "11") {
    console.log("Осень");
} else if (month.toLowerCase() === "december" || month.toLowerCase() === "декабрь" || month.toLowerCase() === "12") {
    console.log("Зима");
} else {
    console.error(month + " не найден (Введите конкретный месяц или число)");
} 

// zadanie 2 
// Српашивать какое число - например 15 - 2 декада

let dec = +prompt("Введите число:").trim()

if (dec >= 1 && dec <= 14) {
    console.log(dec + " - 1 декад");
} else if (dec >= 15 && dec <= 31) {
    console.log(dec + " - 2 декад");
} else {
    console.error(dec + " не найден (Введите конкретный месяц или число)");
}
