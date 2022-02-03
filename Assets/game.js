//Player name entry
window.alert("Welcome to Robots with Swords, chop a robot to pieces like you're Jeffrey friggin Dahmer!");

// Player Values
var playerName = window.prompt("Every warrior has a cool name. What do you call yourself?");
var playerHealth = 100;
var playerAttack = 10;
var playerCoins = 10;

console.log(playerName, playerHealth, playerAttack);

//Enemy Values
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


// Start Robot Fight
var fight = function (){
    //Round intro
    window.alert("A challenger approaches!");
    //Fight or skip
    var fightPrompt = window.prompt("The robot asks will you FIGHT or FLEE? What will you do?");
    // Round Start
    if(fightPrompt === "FIGHT"||fightPrompt === "fight"){   
        enemyHealth = enemyHealth - playerAttack;
        window.alert("Draw swords, time to fight a robot " + playerName + "!");
        window.alert("Meet your Opponent " + enemyName + "!");
        console.log(
            playerName + " slashed " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        window.alert( 
            "You slashed " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
            // Check Enemy Health
        if(enemyHealth <= 0){
            console.log(playerName + " wins!");
            window.alert(enemyName + "incurred too much damage and commited robot seppoku, " + playerName + " wins!");
        } else {
            console.log("attack again.");
            window.alert(enemyName + " is not impressed, keep fighting " + playerName + "!");
        }; 
            //Check Player health
        playerHealth = playerHealth - enemyAttack
        console.log(
            enemyName + " hit " + playerName + ", " + playerName+ " has " + playerHealth + " health remaining."
        );
        window.alert(
            enemyName + " slashed you back! Holy cow " + playerName + ", you're bleeding pretty good there! You have " + playerHealth + " health remaining!"
        );
        if(playerHealth <= 0){
            console.log("game over");
                if(playerCoins > 1){
                    window.alert("You stagger on your feet due to blood loss. " + enemyName + " chops you in half vertically and takes " + playerCoins + " bloody coins from your pockets while lauging robotically. You die in disgrace.");
                }else {
                    window.alert("You stagger on your feet due to blood loss. " + enemyName + " chops you in half vertically and takes " + playerCoins + " bloody coin from your pocket while lauging robotically. You die in disgrace.");
                };
        } else {
            console.log("attack again.");
            window.alert(enemyName + " is confused. Why aren't you dead " + playerName + "?!");
        };
    }else if(fightPrompt === "FLEE" || fightPrompt === "flee"){
        var confirmSkip = window.confirm("You mean you won't fight " +enemyName+ " the robot?");
        if (confirmSkip) {
            window.alert(enemyName + " has decided to spare your life for 2 coins. There's other robots to fight anyway");
            playerCoins = playerCoins - 2;
        } else {
            fight();
        }
    } else {
        window.prompt("What? I don't want your excuses! Will you *hint hint* FIGHT or FLEE?");
    };
};

fight();