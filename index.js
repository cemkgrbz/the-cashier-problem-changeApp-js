import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";

function cashier(price, cash) {

    let amountOfNotes;
    let change = cash - price;

    console.log(chalk.yellow(`Price: €${price}`));
    console.log(chalk.yellow(`Payment: €${cash}`));

    if(change < 0) {
        console.log(chalk.yellow(`Customer should pay €${price - cash} more`))
    } else {
        console.log(chalk.yellow(`Change: €${change}`));
    }

    console.log(gradient.vice("------------------"));


    const money = [
        500,
        200,
        100,
        50,
        20,
        10,
        5,
        2,
        1,
        0.50,
        0.20,
        0.10,
        0.05,
        0.02,
        0.01
    ]

    if (change === 0) {

        console.log(chalk.greenBright("Thanks for the payment. Have a nice day 💰 💰 💰"))
        console.log(gradient.vice("------------------------------------------------------\n\n"));

    } else if (change < 0) {

        console.log(chalk.bgRedBright(`Eyy, the money is not enough.. Give me ${price-cash}€ more or I'll kick you out!! 👊 👊 👊`))
        console.log(gradient.vice("------------------------------------------------------\n\n"));

    } else {

        for(let i=0; i < money.length; i++){
            if(change >= money[i]){

            amountOfNotes = Math.floor(change/money[i]);
            change = (change % money[i]).toFixed(2);

            console.log(chalk.magentaBright(`${amountOfNotes} x €${money[i]}`))
            }

        }
        console.log(gradient.instagram('Thanks for the payment. Here is your change. It was a pleasure for us to see you here!! 🌞 🌞 🌞'))
        console.log(gradient.vice("------------------------------------------------------\n\n"));

    }
}

const cashFiglet = figlet(("** CASHIER **"), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});















cashier(3.75,50);

cashier(4.73,20);

cashier(32,20);


cashier(10,10);



