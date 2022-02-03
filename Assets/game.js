//Player name entry
window.alert("Welcome to Robots with Swords, chop a robot to pieces like you're Jeffrey friggin Dahmer!");

// Player Values
var playerName = window.prompt("Every warrior has a cool name. What do you call yourself?");
var playerHealth = 100;
var playerAttack = 10;
var playerCoins = 10;

//Enemy Values
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


console.log(playerName);

// Start Robot Fight
function fight(){
    window.alert("Draw swords, time to fight a robot " + playerName + "!");
};
fight();

var enemyintro = function(){
    window.alert("Meet your Opponent " + enemyName + "!");
    window.alert("Now fight the motherfucker");
};

enemyintro();


function fightenemy(){
    window.prompt("Will you fight or flee?");
};

var fightenemy = function(){
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " slashed " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    window.alert( 
        "You slashed " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
};

fightenemy();



var enemyfight = function(){
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " hit " + playerName + ", " + playerName+ " has " + playerHealth + " health remaining."
    );
    window.alert(
        enemyName + " slashed you back! Oh shit " + playerName + ", you're bleeding pretty good there! You have " + playerHealth + " health remaining!"
    );
    
    if(enemyHealth === 0){
        console.log(playerName + " wins!");
        window.alert(enemyName + "incurred too much damage and commited robot seppoku, " + playerName + " wins!");
    };
    else{
        console.log("attack again.");
        window.alert(enemyName + " is not impressed, keep fighting " + playerName + "!");
    };        
    if(playerHealth === 0){
        console.log(
        "Player is dead.");
        window.alert(){
        if(playerCoins > 1){
            "You stagger on your feet due to blood loss. " + enemyName + " chops you in half vertically and takes " + playerCoins + " bloody coins from your pockets while lauging robotically. You die in disgrace."}
        else{
            "You stagger on your feet due to blood loss. " + enemyName + " chops you in half vertically and takes " + playerCoins + " bloody coin from your pocket while lauging robotically. You die in disgrace."
        );
    };
};

enemyfight();



