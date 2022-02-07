window.alert("Welcome to Robots with Swords! Where human warriors fight robots with regular ol' swords!");

var fightOskip = function() {
    var fightPrompt = window.prompt("The robot asks will you FIGHT or FLEE? What will you do?");
//conditional recursive function
    if(fightPrompt === "" || fightPrompt === null){
        window.alert("Don't test my robot patience " + playerInfo.name + " answer my question!");
        return fightOskip();
    }
    fightPrompt = fightPrompt.toLowerCase();

    if(fightPrompt === "flee"){
        var confirmSkip = window.confirm("You mean you won't fight the robot? The point of the game is to FIGHT the ROBOTS with SWORDS...");
        if (confirmSkip) {
            window.alert("The robot has decided to spare your life for 10 coins. There's other robots to fight anyway");
            playerInfo.coins = Math.max(0, playerInfo.coins - 10);
            console.log("playerInfo.coins = ", playerInfo.coins);
            return true;
        }
    } else{
         return false;
    }
};

var fight = function (enemyInfo){
    //Round intro
    var isPlayerTurn = true;

    if(Math.random() > 0.5){
        isPlayerTurn = false;
    }

    while(playerInfo.health > 0 && enemyInfo.health > 0){
        if(isPlayerTurn) {
            //Fight or skip
            if (fightOskip()) {
                break;
            }

            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);  
                
            enemyInfo.health = Math.max(0, enemyInfo.health - damage);

            console.log(
                playerInfo.name + " slashed " + enemyInfo.name + ". " + enemyInfo.name + " now has " + enemyInfo.health + " health remaining."
            );
            window.alert( 
                "You slashed " + enemyInfo.name + ". " + enemyInfo.name + " now has " + enemyInfo.health + " health remaining."
            );
                // Check Enemy Health
            if(enemyInfo.health <= 0){
                console.log(playerInfo.name + " wins!");
                window.alert(enemyInfo.name + " incurred too much damage, then out of overwhelming shame commited robot seppoku, " + playerInfo.name + " wins!");
                playerInfo.coins = playerInfo.coins + 20;
                break;
            } else {
                console.log("attack again.");
                window.alert(enemyInfo.name + " is not impressed, keep fighting " + playerInfo.name + "!");
            }; 
    } else {            //Check Player health
            var damage = randomNumber(enemyInfo.attack - 3, enemyInfo.attack);    

            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(
                enemyInfo.name + " hit " + playerInfo.name + ", " + playerInfo.name+ " has " + playerInfo.health + " health remaining."
            );
            window.alert(
                enemyInfo.name + " slashed you! Holy cow " + playerInfo.name + ", you're bleeding pretty good there! You have " + playerInfo.health + " health remaining!"
            );
                //check player health
            if(playerInfo.health <= 0){
                console.log("game over");
                    if(playerInfo.coins > 1){
                        window.alert("You stagger on your feet due to blood loss. " + enemyInfo.name + " chops you in half vertically and takes " + playerInfo.coins + " bloody coins from your pockets while lauging robotically.");
                    }
                    else {
                        window.alert("You stagger on your feet due to blood loss. " + enemyInfo.name + " chops you in half vertically and takes " + playerInfo.coins + " bloody coin from your pocket while lauging robotically.");
                    }
                        break;
                    
            } 
            else {
                console.log("attack again.");
                window.alert(enemyInfo.name + " is confused. Why aren't you dead " + playerInfo.name + "?!");
            }
        }
        isPlayerTurn = !isPlayerTurn
    }
    
};


var startGame = function(){
    playerInfo.reset();
    
    for(var i=0; i < enemyInfo.length; i++) {
        
        if(playerInfo.health > 0){
            //window.alert("Welcome to Robots with Swords! Where human warriors fight robots with regular ol' swords!");
            window.alert("Draw swords, time to fight a robot " + playerInfo.name + "!");
            window.alert("Round " + (i+1) + " vs " + enemyInfo[i].name + ", Cut him up " + playerInfo.name + "!");
            
            var pickEnemyObj = enemyInfo[i];
            pickEnemyObj.health = randomNumber(40, 60);
            fight(pickEnemyObj);
            
            if(playerInfo.health > 0 && enemyInfo.length - 1) {
                var storeConfirm = window.confirm("You should visit the store before another robot gets here. Would you like to visit the store?");
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
    if(playerInfo.health > 0){
        window.alert("Well fought, brave warrior. You beat all the robots and made it out with " + playerInfo.coins + " coins. Don't spend it all in one place!");
    } 
    else {
        window.alert("You die in disgrace.");
    }
    var playAgain = window.confirm("Would you like to play again?");

    if (playAgain) {
        startGame();
    } 
    else {
        window.alert=("Thanks for playing, " + playerInfo.name + "! See you next time!");
    }
};


var shop = function(){
    var shopOptions = window.prompt(
        "Welcome to the store! Type 1 to REFILL your health, type 2 to UPGRADE your sword, or type 3 to LEAVE! Don't waste my time!"
    );    
    
    shopOptions = parseInt(shopOptions);
    
    switch(shopOptions){
        case 1:
            playerInfo.refillHealth();
            break;
        case 1:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Well, good luck out there " + playerInfo.name);
            break;
        default:
            window.alert("Don't waste my time " + playerInfo.name + " do you want to REFILL or UPGRADE?");
            shop();
            break;        
    }
};

var randomNumber = function(min, max){
    var value = Math.floor(Math.random()*(max - min +1) + min);

    return value;
};

var getPlayerName = function() {
    var getPN = window.prompt("Every warrior has a cool name. What do you call yourself?");
    while (getPN === "" || getPN === null){
        getPN = prompt("Hold on there butt head, identify yourself!")
    }
    console.log("Player known as " + getPN);
    return getPN;
};

var playerInfo = {
    name : getPlayerName(),
    health : 100,
    attack : 10,
    coins : 10,
    reset : function(){
        this.health = 100;
        this.coin = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if(playerInfo.coins >=10){
            window.alert("For the price of 10 coins, you're back at 85 health again" + playerInfo.name);
            this.health = 85;
            this.coin -= 10;              
        } 
        else {
            window.alert("You're too poor to afford this!");
        }
    },
    upgradeAttack: function(){
        if(playerInfo.coins >= 6){
            window.alert("For the price of 6 coins you get this sweet new sword! You deal 10 more attack damage");
            this.attack += 10;
            this.coin -= 6;
        }
        else {
            window.alert("You're too poor for this!");
        }
    }
};
console.log(playerInfo);



var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Minotron",
        attack: randomNumber(10,14)
    },
    { 
        name: "Virus",
        attack: randomNumber(10,14)
    },
    {
        name: "Leadfoot",
        attack: randomNumber(10,14)
    },
    {
        name: "Meningitis",
        attack: randomNumber(10,14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]["attack"]);



startGame();
