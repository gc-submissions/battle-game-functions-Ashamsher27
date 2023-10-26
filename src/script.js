"use strict";

let randomDamage = () => {
   return Math.floor(Math.random() * 10) + 1; //works! 
}

let chooseOption = (opt1, opt2) => {                 //works! 
    let randNum = Math.floor(Math.random() * 2);
    return randNum === 0 ? opt1 : opt2;
}


function attackPlayer(health) {
    return (health - randomDamage());
}

let logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

let logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

let isDead = (health) => {
    return health <= 0;
}

function fight (player1, player2, player1Health, player2Health) { 
    while (player1Health > 0 && player2Health > 0) {
        let attacker = chooseOption(player1, player2); 

         if (attacker === player1) {
             player2Health = attackPlayer(player2Health);
             logHealth(player2, player2Health);
             if (isDead(player2Health)) {
                 logDeath(player1, player2);
                 break;
             }
         } else {
            player1Health = attackPlayer(player1Health); 
             logHealth(player1, player1Health);
             if (isDead(player1Health)) {
                 logDeath(player2, player1);
                 break;
             }
         }                                     
     }
 }

fight("BJ Clark", "Jon Plumb", 100, 100);


//PLEASE IGNORE THE REST - I am trying to collect my thoughts and figure out WHO THE HECK replaced my brain cells with LEGOS??? UGHH. When I find them, they shall suffer. This is just how I'm thinking through the extended challenge. 
// function remainingHealth(player1Health, player2Health) {
//     do { function getGrade(health) {
//         if (health >= 90) {
//              return `A`;
//          } else if (health >= 80) {
//              return 'B';
//          } else if (health >= 70) {
//              return 'C';
//          } else if (health >= 60) {
//              return 'D';
//          } else {
//              return 'F';
//          }
//      }
//     } while (fight(isDead(player1Health))||fight(isDead(player2Health)) );
// }

// function getGrade(player1Health, player2Health) {
//     // while (logDeath(player2, player1), logDeath(player1, player2)) {
//         if (player1Health,  player2Health >= 90) {
//              return `A`;
//          } else if (player1Health, player2Health >= 80) {
//              return 'B';
//          } else if (player1Health, player2Health >= 70) {
//              return 'C';
//          } else if (player1Health, player2Health >= 60) {
//              return 'D';
//          } else {
//              return 'F';
//          }
//         }


