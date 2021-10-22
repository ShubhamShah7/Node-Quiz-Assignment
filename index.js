const rs = require("readline-sync")
const chalk = require('chalk');

var score = 0;
console.log(chalk.green('\n Welcome to The Indian Railway Quiz Game!!!\n'));

var playerName = rs.question("What is your good name? ");
console.log(chalk.cyan(`Welcome ${playerName}`));

var firstQ =  {
    q: "Which is the india's Fastest Train?",
    a: "Rajdhani Express",
    b: "Duranto Express",
    c: "Gatiman Express",
    d: "Tejas Express",
    ans: "c"
}

var secondQ =  {
    q: "Which is the india's Most Premium Train?",
    a: "Rajdhani Express",
    b: "Duranto Express",
    c: "Gatiman Express",
    d: "Tejas Express",
    ans: "a"
}

var thirdQ =  {
    q: "From which city rajdhani start or end?",
    a: "Chennai",
    b: "Mumbai",
    c: "Howrah",
    d: "Delhi",
    ans: "d"
}

var fourthQ =  {
    q: "What is the highest speed of India's Fastest Train ? \n",
    a: "160",
    b: "165",
    c: "180",
    d: "170",
    ans: "a"
}

var fifthQ =  {
    q: "What is the highest speed of Rajdhani Express ?\n",
    a: "160",
    b: "130",
    c: "150",
    d: "140",
    ans: "b"
}

var qArray = [firstQ, secondQ, thirdQ, fourthQ, fifthQ]
for (let i = 0; i < qArray.length; i++){
    playGame(qArray[i].q,qArray[i].a,qArray[i].b,qArray[i].c,qArray[i].d,qArray[i].ans)   
}
console.log(chalk.yellow("\n Final Score is " + score))

function playGame(questions, A, B, C, D, Ans) {
    console.log(chalk.blueBright.bold(questions));
    console.log(chalk.yellow("A : " + A))
    console.log(chalk.yellow("B : " + B))
    console.log(chalk.yellow("C : " + C))
    console.log(chalk.yellow("D : " + D))
    var answer = rs.question("Choose option : ")
    if (answer.toUpperCase() == Ans.toUpperCase()) {
        console.log(chalk.green.bold("Correct Answer"));
        score += 5;
    } else {
        console.log(chalk.red("Oops wrong Answerrrrrrr"))
        if (Ans === "A")
            answer = A;
        else if(Ans === "B")
            answer = B;
        else if (Ans === "C")
            answer = C;
        else if (Ans === "D")
            answer = D;
        console.log(chalk.green.bold("Correct answer is " + answer))
        score -= 2
    }
    console.log(chalk.yellow("Your score is " + score))
    console.log(chalk.grey('\n------------------------------------------------------------------------\n'))
}