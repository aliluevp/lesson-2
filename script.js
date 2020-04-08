let money,
    time;
money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: [],
    savings: false
};

// let i = 0;
// do {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log("add expenses");
//         appData.expenses[a] = b;
//     } else {
//         console.log("!!!bad expenses");
//         i--;
//     }
// } while (i < 2);

// i = 0;
// while (i < 2) {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log("add expenses");
//         appData.expenses[a] = b;
//     } else {
//         console.log("!!!bad expenses");
//         i--;
//     } 
// }

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("add expenses");
        appData.expenses[a] = b;
    } else {
        console.log("!!!bad expenses");
        i--;
    }

}

//console.log("статья расходов - " + unswer1 + " составляет - " + appData.expenses[unswer1]);
//console.log("статья расходов - " + unswer3 + " составляет - " + appData.expenses[unswer3]);
appData.moneyPerDay = appData.budjet / 30;
alert("Ваш бюджет на 1 день - " + appData.moneyPerDay);


if (appData.moneyPerDay < 100) {
    console.log("Низкий уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка определения остатка");
}