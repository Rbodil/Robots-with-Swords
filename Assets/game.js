//Player name entry
window.alert("Welcome to Robots with Swords, where human warriors fight robots with regular ol' swords!");

// Player Values
var playerName = window.prompt("Every warrior has a cool name. What do you call yourself?");
var playerHealth = 100;
var playerAttack = 10;
var playerCoins = 10;

console.log(playerName, playerHealth, playerAttack);

//Enemy Values
var enemyNames = ["Roborto", "Minotron", "Virus", "Leadfoot", "Meningitis"];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i=0; i<enemyNames.length; i++ ){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i]+" is at " + i +" index");
};

window.alert("A challenger approaches!");
window.alert("Draw swords, time to fight a robot " + playerName + "!");




// Start Robot Fight
var fight = function (enemyNames){
    //Round intro
    while(playerHealth > 0 && enemyHealth > 0){

    //Fight or skip
        var fightPrompt = window.prompt("The robot asks will you FIGHT or FLEE? What will you do?");
        // Round Start
        if(fightPrompt === "FLEE" || fightPrompt === "flee"){
            var confirmSkip = window.confirm("You mean you won't fight " +enemyNames+ " the robot? The point of the game is to FIGHT the ROBOTS with SWORDS...");
            if (confirmSkip) {
                window.alert(enemyNames + " has decided to spare your life for 10 coins. There's other robots to fight anyway");
                playerCoins = playerCoins - 10;
                console.log("playerCoins", playerCoins);
                break;
            }
        }
            
            
        enemyHealth = enemyHealth - playerAttack;

        console.log(
            playerName + " slashed " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
        window.alert( 
            "You slashed " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
            // Check Enemy Health
        if(enemyHealth <= 0){
            console.log(playerName + " wins!");
            window.alert(enemyNames + " incurred too much damage and commited robot seppoku, " + playerName + " wins!");
            playerCoins = playerCoins +20;
            break;
        } else {
            console.log("attack again.");
            window.alert(enemyNames + " is not impressed, keep fighting " + playerName + "!");
        }; 
            //Check Player health
        playerHealth = playerHealth - enemyAttack
        console.log(
            enemyNames + " hit " + playerName + ", " + playerName+ " has " + playerHealth + " health remaining."
        );
        window.alert(
            enemyNames + " slashed you back! Holy cow " + playerName + ", you're bleeding pretty good there! You have " + playerHealth + " health remaining!"
        );
            //check player health
        if(playerHealth <= 0){
            console.log("game over");
                if(playerCoins > 1){
                    window.alert("You stagger on your feet due to blood loss. " + enemyNames + " chops you in half vertically and takes " + playerCoins + " bloody coins from your pockets while lauging robotically.");
                }else {
                    window.alert("You stagger on your feet due to blood loss. " + enemyNames + " chops you in half vertically and takes " + playerCoins + " bloody coin from your pocket while lauging robotically.");
                break;
                };
        } else {
            console.log("attack again.");
            window.alert(enemyNames + " is confused. Why aren't you dead " + playerName + "?!");
        }
    }
};

for(var i=0; i < enemyNames.length; i++) {
    if(playerHealth > 0){
        window.alert("Round " + (i+1) + " vs " + pickEnemyName + ", Cut him up" + playerName + "!");
        var pickEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickEnemyName);
    } else {
        window.alert("You die in disgrace.")
        break;
    }


}


// game states

// WIN - Player defeats all the robots
//     * fight all robots
//     * defeats all robots