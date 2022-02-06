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
var fight = function (enemyName){
    //Round intro
    while(playerHealth > 0 && enemyHealth > 0){

    //Fight or skip
        var fightPrompt = window.prompt("The robot asks will you FIGHT or FLEE? What will you do?");
        // Round Start
        if(fightPrompt === "FLEE" || fightPrompt === "flee"){
            var confirmSkip = window.confirm("You mean you won't fight " + enemyName + " the robot? The point of the game is to FIGHT the ROBOTS with SWORDS...");
            if (confirmSkip) {
                window.alert(enemyName + " has decided to spare your life for 10 coins. There's other robots to fight anyway");
                playerCoins = playerCoins - 10;
                console.log("playerCoins", playerCoins);
                break;
            }
        };
            
            
        enemyHealth = enemyHealth - playerAttack;

        console.log(
            playerName + " slashed " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        window.alert( 
            "You slashed " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
            // Check Enemy Health
        if(enemyHealth <= 0){
            console.log(playerName + " wins!");
            window.alert(enemyName + " incurred too much damage, then out of overwhelming shame commited robot seppoku, " + playerName + " wins!");
            playerCoins = playerCoins + 20;
            break;
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
            //check player health
        if(playerHealth <= 0){
            console.log("game over");
                if(playerCoins > 1){
                    window.alert("You stagger on your feet due to blood loss. " + enemyName + " chops you in half vertically and takes " + playerCoins + " bloody coins from your pockets while lauging robotically.");
                }
                else {
                    window.alert("You stagger on your feet due to blood loss. " + enemyName + " chops you in half vertically and takes " + playerCoins + " bloody coin from your pocket while lauging robotically.");
                }
                    break;
                
        } 
        else {
            console.log("attack again.");
            window.alert(enemyName + " is confused. Why aren't you dead " + playerName + "?!");
        }
        
    }
    
};


var startGame = function(){
    playerHealth = 100;
    playerAttack = 10;
    playerCoins = 10;
    
    for(var i=0; i < enemyNames.length; i++) {
        
        if(playerHealth > 0){
            window.alert("Round " + (i+1) + " vs " + enemyNames[i] + ", Cut him up " + playerName + "!");
            var pickEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickEnemyName);
            if(playerHealth > 0 && enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over. You should visit the store before another robot gets here. Would you like to visit the store?");
                if(storeConfirm){
                    shop();
                }
            } 
        } 
        else {
            window.alert("You die in disgrace.")
            break;
        }
    }

endGame();
};

var endGame = function(){
    if(playerHealth > 0){
        window.alert("Well fought, brave warrior. You beat all the robots and made it out with " + playerCoins + " coins. Don't spend it all in one place!");
    } 
    else {
        window.alert("You die in disgrace.");
    }
    var playAgain = window.confirm("Would you like to play again?");

    if (playAgain) {
        startGame();
    } 
    else {
        window.alert=("Thanks for playing, " + playerName + "! See you next time!");
    }
};


var shop = function(){
    var shopOptions = window.prompt(
        "Welcome to the store! Would you like to REFILL your health, UPGRADE your sword, or LEAVE? Don't waste my time!"
    );
    
    switch(shopOptions){
        case "REFILL":
        case "refill":
            if(playerCoins >=10){
                window.alert("For the price of 10 coins, you're back at 100 health again" + playerName);
                playerHealth = 100;
                playerCoins = playerCoins - 10;
                
        } 
        else {
            window.alert("You're too poor to afford this!");
        }
            break;
        case "UPRGADE":
        case "upgrade":
            if(playerCoins >= 6){
                window.alert("For the price of 6 coins you get this sweet new sword! You deal 10 more attack damage");
                playerAttack = playerAttack + 10;
                playerCoins = playerCoins - 6;
        }
        else {
            window.alert("You're too poor for this!");
        }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Well, good luck out there " + playerName);
            break;
        default:
            window.alert("Don't waste my time " + playerName + " do you want to REFILL or UPGRADE?");
            shop();
            break;
        
    }
};

startGame();
