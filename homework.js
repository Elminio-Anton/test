
let money = +prompt("Ваш бюджет на месяц?",'1000');
let time = new Date(prompt("Введите вдату в формате YYYY-MM-DD",'2020-05-25'));
let appData = {
    money,
    time,
    expenses:{},
    optionalExpenses:{},
    income:0,
    savings: false,
    askExpenses(){
        let key = prompt("Введите обязательную статью расходов в этом месяце","beer");
        let value = +prompt("Во сколько обойдется","56");
        this.expenses = {[key]:value};
    },
    calcBudget(){
        let sum = 0;
        for (let key in this.expenses){
            sum+=this.expenses[key];
        }
        return sum/(30-time.getDate());
    },
};
appData.askExpenses();
alert(`your budget:${appData.calcBudget()}`);
