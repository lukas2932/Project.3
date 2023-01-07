const main = document.getElementById("main");

const gameName = document.getElementById("gameName");
const startButton = document.getElementById("startButton");

const levelButton = document.getElementById("levelButton");
const shopButton = document.getElementById("shopButton");

const levels = document.getElementById("levels");

const sandbox = document.getElementById("sandbox");

const shop = document.getElementById("shop");
const info = document.getElementById("info");

const shopKnife = document.getElementById("shopKnife");
const shopEnhancedKnife = document.getElementById("shopEnhancedKnife");
const shopBetterShoes = document.getElementById("shopBetterShoes");
const shopMoreHP = document.getElementById("shopMoreHP");
const shopLockpick = document.getElementById("shopLockpick");

const backButton = document.getElementById("backButton");

const money = document.getElementById("money");

const inventory = document.getElementById("inventory");
const inventoryButton = document.getElementById("inventoryButton");
const inventoryBar = document.getElementById("inventoryBar");
const inventoryNoItems = document.getElementById("inventoryNoItems");

const itemOne = document.getElementById("itemOne");
const itemTwo = document.getElementById("itemTwo");
const itemThree = document.getElementById("itemThree");
const itemFour = document.getElementById("itemFour");
const itemFive = document.getElementById("itemFive");
const itemSix = document.getElementById("itemSix");
const itemSeven = document.getElementById("itemSeven");
const itemEight = document.getElementById("itemEight");
const itemNine = document.getElementById("itemNine");
const itemTen = document.getElementById("itemTen");
const itemElleven = document.getElementById("itemElleven");
const itemTwelve = document.getElementById("itemTwelve");
const itemThirdteen = document.getElementById("itemThirdteen");

const itemBoxOne = document.getElementById("itemBoxOne");
const itemBoxTwo = document.getElementById("itemBoxTwo");
const itemBoxThree = document.getElementById("itemBoxThree");
const itemBoxFour = document.getElementById("itemBoxFour");
const itemBoxFive = document.getElementById("itemBoxFive");
const itemBoxSix = document.getElementById("itemBoxSix");
const itemBoxSeven = document.getElementById("itemBoxSeven");
const itemBoxEight = document.getElementById("itemBoxEight");
const itemBoxNine = document.getElementById("itemBoxNine");
const itemBoxTen = document.getElementById("itemBoxTen");
const itemBoxElleven = document.getElementById("itemBoxElleven");
const itemBoxTwelve = document.getElementById("itemBoxTwelve");
const itemBoxThirdteen = document.getElementById("itemBoxThirdteen");

const inventorySellButtonOne = document.getElementById("inventorySellButtonOne");
const inventorySellButtonTwo = document.getElementById("inventorySellButtonTwo");
const inventorySellButtonThree = document.getElementById("inventorySellButtonThree");
const inventorySellButtonFour = document.getElementById("inventorySellButtonFour");
const inventorySellButtonFive = document.getElementById("inventorySellButtonFive");
const inventorySellButtonSix = document.getElementById("inventorySellButtonSix");
const inventorySellButtonSeven = document.getElementById("inventorySellButtonSeven");
const inventorySellButtonEight = document.getElementById("inventorySellButtonEight");
const inventorySellButtonNine = document.getElementById("inventorySellButtonNine");
const inventorySellButtonTen = document.getElementById("inventorySellButtonTen");
const inventorySellButtonElleven = document.getElementById("inventorySellButtonElleven");
const inventorySellButtonTwelve = document.getElementById("inventorySellButtonTwelve");
const inventorySellButtonThirdteen = document.getElementById("inventorySellButtonThirdteen");

const buyButtonEnhancedKnife = document.getElementById("buyButtonEnhancedKnife");
const buyButtonKnife = document.getElementById("buyButtonKnife");
const buyButtonShoes = document.getElementById("buyButtonShoes");
const buyButtonMoreHP = document.getElementById("buyButtonMoreHP");
const buyButtonLockpick = document.getElementById("buyButtonLockpick");

const levelOne = document.getElementById("levelOne");
const levelTwo = document.getElementById("levelTwo");
const levelThree = document.getElementById("levelThree");
const levelFour = document.getElementById("levelFour");
const levelFive = document.getElementById("levelFive");
const levelSix = document.getElementById("levelSix");
const levelSeven = document.getElementById("levelSeven");
const levelEight = document.getElementById("levelEight");

const levelBoxOne = document.getElementById("levelBoxOne");
const levelBoxTwo = document.getElementById("levelBoxTwo");
const levelBoxThree = document.getElementById("levelBoxThree");
const levelBoxFour = document.getElementById("levelBoxFour");
const levelBoxFive = document.getElementById("levelBoxFive");
const levelBoxSix = document.getElementById("levelBoxSix");
const levelBoxSeven = document.getElementById("levelBoxSeven");
const levelBoxEight = document.getElementById("levelBoxEight");
const failLevelResult = document.getElementById("failLevelResult");

const enemy = document.getElementById("enemy");
const enemyImage = document.getElementById("enemyImage");

const enemyHealth = document.getElementById("enemyHealth");
const thiefHealth = document.getElementById("thiefHealth");

const thief = document.getElementById("thief");
const stealButton = document.getElementById("stealButton");
const stealProgress = document.getElementById("stealProgress");
const car = document.getElementById("car");
const carImage = document.getElementById("carImage");
const robResults = document.getElementById("robResults");
const backRobberyButton = document.getElementById("backRobberyButton");
const imageOne = document.getElementById("imageOne");
const imageTwo = document.getElementById("imageTwo");
const imageThree = document.getElementById("imageThree");
const robberyRecieveOne = document.getElementById("robberyRecieveOne");
const robberyRecieveTwo = document.getElementById("robberyRecieveTwo");
const robberyRecieveThree = document.getElementById("robberyRecieveThree");

const endGameNadpis = document.getElementById("endGameNadpis");

let enemyHealthPro = 100;
let enemyAttack = 10;
let enemyAppearTime = 4050;

let thiefHealthPro = 100;
let thiefHealthBoost = 0;
let thiefAttack = 1;
let thiefRobAcceleration = 4;

let moneyPro = 0;

let thiefSpeed = 4;
let thiefSpeedStealButton = 4050;
let thiefAttackAnimationPro = 15;


function stealButtonAppear() {
  stealButton.style.display = "block";
}


function robResult() {
  robResults.style.display = "block";
}


function infoInventoryBackup() {
  info.innerHTML = "You can obtain items by completing levels or buying them in the shop.";
}


function enemyAppear() {
  car.style.display = "none";
  thief.style.animation = "none";
  thief.style.left = "15%";
  enemy.style.display = "block";
  stealProgress.style.display = "none";
  enemyImage.src = "/res/img/ownerOne.png";
  thiefHealth.style.display = "block";
}


function thiefDeath() {
      enemyImage.onclick = () => {
        enemyHealthPro = 0;
      }

      endGame();
      backRobberyButton.onclick = () => {
      robResults.style.display = "none";
      thief.style.display = "none";
      car.style.display = "none";
      shopButton.style.display = "block";
      levelButton.style.display = "block";
      inventory.style.display = "block";
      money.style.display = "block";
      stealProgress.style.display = "none";
      stealButton.style.display = "none";
      enemy.style.display = "none";
    };
  }


function endGame() {
  main.style.backgroundColor = "black";
  main.style.width = "100%";
  main.style.height = "1000px";
  main.style.overflow = "hidden";
  main.style.margin = "0";
  thief.style.display = "none";
  enemy.style.display = "none";
  endGameNadpis.style.display = "block";
  endGameNadpis.innerHTML = "The thief is death. If you want to start over, press the refresh button.";
}


function infoShopBackup(){
      info.innerHTML = "There you can buy some items.";
}


function AfterLevel(){
  itemBoxTwo.style.display = "none";
  itemTwo.innerHTML = "";
  itemBoxFive.style.display = "none";
  itemFive.innerHTML = "";
  thiefAttack = 1;
  shopKnife.style.display = "block";
  shopEnhancedKnife.style.display = "none";
}


function stealButtonDeactive(){
  stealButton.onmouseover = () => {
    stealButton.style.color = "white";
  }
  stealButton.style.cursor = "none";
}


function stealButtonActivate() {
  stealButton.onmouseover = () => {
    stealButton.style.color = "red";
  }
  stealButton.onmouseout = () => {
    stealButton.style.color = "white";
  }
  stealButton.style.cursor = "pointer";
}


function thiefAttackAnimation() {
  enemyImage.onmousedown = () => {
    thiefAttackAnimationPro += 2;
    thief.style.left = thiefAttackAnimationPro + "%"
  }

  enemyImage.onmouseup = () => {
    thiefAttackAnimationPro -= 2;
    thief.style.left = thiefAttackAnimationPro + "%";
  }
}

function thiefAttackAnimationAfter(){
  enemyImage.onmousedown = () => {
    thiefAttackAnimationPro += 0;
    thief.style.left = thiefAttackAnimationPro + "%"
  }

  enemyImage.onmouseup = () => {
    thiefAttackAnimationPro -= 0;
    thief.style.left = thiefAttackAnimationPro + "%";
  }
}


function BattleLevelTwo(){
  let enemyDefeatLevelTwoInterval = setInterval(() => {
    if(enemyHealthPro <= 0){
      clearInterval(enemyDefeatLevelTwoInterval);

      enemyImage.onclick = () => {
        enemyHealthPro -= 0;
        enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
      }

      thiefAttackAnimationAfter();

      robResult();
      robberyRecieveOne.innerHTML = "Your recieved an item2";
      itemBoxThree.style.display = "block";
      itemThree.innerHTML = "Item2";
      inventorySellButtonThree.innerHTML = "Sell (100$)";
    }
    
    if(thiefHealthPro <= 0){
      clearInterval(enemyDefeatLevelTwoInterval);
      endGame();
    }
  },1)

  let enemyDamageLevelTwoInterval = setInterval(() => {
    thiefHealthPro -= enemyAttack;
    thiefHealth.innerHTML = "Health: " + thiefHealthPro;
    if(thiefHealthPro < 0){
      clearInterval(enemyDamageLevelTwoInterval);
    }
    if(enemyHealthPro <= 0){
      clearInterval(enemyDamageLevelTwoInterval);
    }
    
  }, 1000)
}


function BattleLevelThree(){
  let enemyDefeatLevelThreeInterval = setInterval(() => {
    if(enemyHealthPro <= 0){
      clearInterval(enemyDefeatLevelThreeInterval);

      enemyImage.onclick = () => {
        enemyHealthPro -= 0;
        enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
      }

      thiefAttackAnimationAfter();

      robResult();
      robberyRecieveOne.innerHTML = "Your recieved an item3";
      itemBoxFour.style.display = "block";
      itemFour.innerHTML = "Item3";
      inventorySellButtonFour.innerHTML = "Sell (150$)";
    }
    
    if(thiefHealthPro <= 0){
      clearInterval(enemyDefeatLevelThreeInterval);
      endGame();
    }
  },1)

  let enemyDamageLevelThreeInterval = setInterval(() => {
    enemyAttack = 15;
    thiefHealthPro -= enemyAttack;
    thiefHealth.innerHTML = "Health: " + thiefHealthPro;
    if(thiefHealthPro < 0){
      clearInterval(enemyDamageLevelThreeInterval);
      endGame();
    }
    if(enemyHealthPro <= 0){
      clearInterval(enemyDamageLevelThreeInterval);
    }
  }, 1000)
}


function BattleLevelFour(){
  let enemyDefeatLevelFourInterval = setInterval(() => {
    if(enemyHealthPro <= 0){
      clearInterval(enemyDefeatLevelFourInterval);

      enemyImage.onclick = () => {
        enemyHealthPro -= 0;
        enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
      }

      thiefAttackAnimationAfter();

      robResult();
      robberyRecieveOne.innerHTML = "Your recieved an item4";
      itemBoxSix.style.display = "block";
      itemSix.innerHTML = "Item4";
      inventorySellButtonSix.innerHTML = "Sell (200$)";
    }
    
    if(thiefHealthPro <= 0){
      clearInterval(enemyDefeatLevelFourInterval);
      endGame();
    }
  },1)

  let enemyDamageLevelFourInterval = setInterval(() => {
    enemyAttack = 25;
    thiefHealthPro -= enemyAttack;
    thiefHealth.innerHTML = `${"Health: " + thiefHealthPro}`;
    if(thiefHealthPro < 0){
      clearInterval(enemyDamageLevelFourInterval);
      endGame();
    }
    if(enemyHealthPro <= 0){
      clearInterval(enemyDamageLevelFourInterval);
    }
  }, 1000)
}


function BattleLevelFive(){
  let enemyDefeatLevelFiveInterval = setInterval(() => {
    if(enemyHealthPro <= 0){
      clearInterval(enemyDefeatLevelFiveInterval);

      enemyImage.onclick = () => {
        enemyHealthPro -= 0;
        enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
      }

      thiefAttackAnimationAfter();

      robResult();
      robberyRecieveOne.innerHTML = "Your recieved an item5";
      itemBoxSeven.style.display = "block";
      itemSeven.innerHTML = "Item5";
      inventorySellButtonSeven.innerHTML = "Sell (300$)";
    }
    
    if(thiefHealthPro <= 0){
      clearInterval(enemyDefeatLevelFiveInterval);
      endGame();
    }
  },1)

  let enemyDamageLevelFiveInterval = setInterval(() => {
    enemyAttack = 30;
    thiefHealthPro -= enemyAttack;
    thiefHealth.innerHTML = `${"Health: " + thiefHealthPro}`;
    if(thiefHealthPro < 0){
      clearInterval(enemyDamageLevelFiveInterval);
      endGame();
    }
    if(enemyHealthPro <= 0){
      clearInterval(enemyDamageLevelFiveInterval);
    }
  }, 1000)
}


function BattleLevelSix(){
  let enemyDefeatLevelSixInterval = setInterval(() => {
    if(enemyHealthPro <= 0){
      clearInterval(enemyDefeatLevelSixInterval);

      enemyImage.onclick = () => {
        enemyHealthPro -= 0;
        enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
      }

      thiefAttackAnimationAfter();

      robResult();
      robberyRecieveOne.innerHTML = "Your recieved an item6";
      itemBoxNine.style.display = "block";
      itemNine.innerHTML = "Item6";
      inventorySellButtonNine.innerHTML = "Sell (400$)";
    }
    
    if(thiefHealthPro <= 0){
      clearInterval(enemyDefeatLevelSixInterval);
      endGame();
    }
  },1)

  let enemyDamageLevelSixInterval = setInterval(() => {
    enemyAttack = 30;
    thiefHealthPro -= enemyAttack;
    thiefHealth.innerHTML = `${"Health: " + thiefHealthPro}`;
    if(thiefHealthPro < 0){
      clearInterval(enemyDamageLevelSixInterval);
      endGame();
    }
    if(enemyHealthPro <= 0){
      clearInterval(enemyDamageLevelSixInterval);
    }
  }, 500)
}


function BattleLevelSeven(){
  let enemyDefeatLevelSevenInterval = setInterval(() => {
    if(enemyHealthPro <= 0){
      clearInterval(enemyDefeatLevelSevenInterval);

      enemyImage.onclick = () => {
        enemyHealthPro -= 0;
        enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
      }

      thiefAttackAnimationAfter();

      robResult();
      robberyRecieveOne.innerHTML = "Your recieved an item7";
      itemBoxTen.style.display = "block";
      itemTen.innerHTML = "Item7";
      inventorySellButtonTen.innerHTML = "Sell (500$)";
    }
    
    if(thiefHealthPro <= 0){
      clearInterval(enemyDefeatLevelSevenInterval);
      endGame();
    }
  },1)

  let enemyDamageLevelSevenInterval = setInterval(() => {
    enemyAttack = 35;
    thiefHealthPro -= enemyAttack;
    thiefHealth.innerHTML = `${"Health: " + thiefHealthPro}`;
    if(thiefHealthPro < 0){
      clearInterval(enemyDamageLevelSevenInterval);
      endGame();
    }
    if(enemyHealthPro <= 0){
      clearInterval(enemyDamageLevelSevenInterval);
    }
  }, 500)
}


function BattleLevelEight(){
  let enemyDefeatLevelEightInterval = setInterval(() => {
    if(enemyHealthPro <= 0){
      clearInterval(enemyDefeatLevelEightInterval);

      enemyImage.onclick = () => {
        enemyHealthPro -= 0;
        enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
      }

      thiefAttackAnimationAfter();

      robResult();
      robberyRecieveOne.innerHTML = "Your recieved an item8";
      itemBoxElleven.style.display = "block";
      itemElleven.innerHTML = "Sandbox";
      inventorySellButtonElleven.innerHTML = "Sell";
    }
    
    if(thiefHealthPro <= 0){
      clearInterval(enemyDefeatLevelEightInterval);
      endGame();
    }
  },1)

  let enemyDamageLevelEightInterval = setInterval(() => {
    enemyAttack = 25;
    thiefHealthPro -= enemyAttack;
    thiefHealth.innerHTML = `${"Health: " + thiefHealthPro}`;
    if(thiefHealthPro < 0){
      clearInterval(enemyDamageLevelEightInterval);
      endGame();
    }
    if(enemyHealthPro <= 0){
      clearInterval(enemyDamageLevelEightInterval);
    }
  }, 250)
}


startButton.onclick = () => {
  startButton.style.display = "none";
  gameName.style.display = "none";
  levelButton.style.display = "block";
  shopButton.style.display = "block";
  money.style.display = "block";
  inventory.style.display = "block";
};


levelButton.onclick = () => {
  levels.style.display = "block";
  levelButton.style.display = "none";
  shopButton.style.display = "none";
  backButton.style.display = "block";
  inventory.style.display = "none";
  levelBoxOne.style.color = "black";
  info.style.display = "block";
  info.innerHTML = "Complete levels from 1-8.<br>If the thief dies, the game is over."

  levelOne.onmouseover = () => {
    levelOne.style.color = "red";
  };

  levelOne.onmouseout = () => {
    levelOne.style.color = "black";
  };

  backButton.onclick = () => {
    levelButton.style.display = "block";
    shopButton.style.display = "block";
    levels.style.display = "none";
    shop.style.display = "none";
    backButton.style.display = "none";
    inventoryBar.style.display = "none";
    inventory.style.display = "block";
    info.style.display = "none";
  };
};


shopButton.onclick = () => {
  levelButton.style.display = "none";
  shopButton.style.display = "none";
  shop.style.display = "block";
  backButton.style.display = "block";
  inventory.style.display = "none";
  info.style.display = "block";  
  info.innerHTML = "There you can buy some items.";

  backButton.onclick = () => {
    levelButton.style.display = "block";
    shopButton.style.display = "block";
    levels.style.display = "none";
    shop.style.display = "none";
    backButton.style.display = "none";
    inventoryBar.style.display = "none";
    inventory.style.display = "block";
    info.style.display = "none";
  };
};


inventoryButton.onclick = () => {
  levelButton.style.display = "none";
  shopButton.style.display = "none";
  inventoryBar.style.display = "block";
  inventory.style.display = "none";
  backButton.style.display = "block";
  info.style.display = "block";
  info.innerHTML = "You can obtain items by completing levels or buying them in the shop."
  
  backButton.onclick = () => {
    levelButton.style.display = "block";
    shopButton.style.display = "block";
    levels.style.display = "none";
    shop.style.display = "none";
    backButton.style.display = "none";
    inventoryBar.style.display = "none";
    inventory.style.display = "block";
    info.style.display = "none";
  };
};


levelOne.onclick = () => {
  inventory.style.display = "none";
  backButton.style.display = "none";
  money.style.display = "none";
  levels.style.display = "none";
  thief.style.display = "block";
  car.style.display = "flex";
  carImage.src = "./res/img/carOne.JPG";
  levelBoxOne.style.display = "none";
  levelBoxTwo.style.color = "black";
  thiefHealth.style.display = "none";
  thief.style.animation = `${"thief-animation " + thiefSpeed + "s linear forwards"}`;
  info.innerHTML = "";

  levelTwo.onmouseover = () => {
    levelTwo.style.color = "red";
  };

  levelTwo.onmouseout = () => {
    levelTwo.style.color = "black";
  };

  setTimeout(stealButtonAppear, thiefSpeedStealButton);
  
  stealButton.addEventListener('click', () => {
    stealProgress.style.display = "block";
    setTimeout(robResult, 4100);
    setTimeout(stealButtonDeactive, 4050);
    stealProgress.style.animation =  "steal-progress " + thiefRobAcceleration + "s linear forwards";
    robberyRecieveOne.innerHTML = "You recieved an itemOne";
    itemBoxOne.style.display = "block";
    itemOne.innerHTML = "Item1";
    inventorySellButtonOne.innerHTML = "Sell (50$)";
  },{once : true})

  backRobberyButton.onclick = () => {
    robResults.style.display = "none";
    thief.style.display = "none";
    car.style.display = "none";
    shopButton.style.display = "block";
    levelButton.style.display = "block";
    inventory.style.display = "block";
    money.style.display = "block";
    stealProgress.style.display = "none";
    stealButton.style.display = "none";
    info.style.display = "none";
    shopLockpick.style.display = "block";
    shopKnife.style.display = "block";
    shopBetterShoes.style.display = "block";
    shopMoreHP.style.display = "block";
    shopEnhancedKnife.style.display = "none";
    stealButtonActivate();


    levelTwo.onclick = () => {
      info.innerHTML = "";
      inventory.style.display = "none";
      backButton.style.display = "none";
      money.style.display = "none";
      levels.style.display = "none";
      thief.style.display = "block";
      car.style.display = "flex";
      levelBoxTwo.style.display = "none";
      levelBoxThree.style.color = "black";
      shopEnhancedKnife.style.display = "none";
      carImage.src = "./res/img/carTwo.JPG";
      thief.style.animation = `${"thief-animation " + thiefSpeed + "s linear forwards"}`;
      setTimeout(stealButtonAppear, thiefSpeedStealButton);
      

      levelThree.onmouseover = () => {
        levelThree.style.color = "red";
      };

      levelThree.onmouseout = () => {
        levelThree.style.color = "black";
      };

      stealButton.addEventListener('click', () => {
        stealProgress.style.display = "block";
        stealProgress.style.animation = "steal-progress " + thiefRobAcceleration + "s linear forwards";
        setTimeout(enemyAppear, enemyAppearTime);
        setTimeout(BattleLevelTwo, enemyAppearTime);
        
        enemyImage.onclick = () => {
          enemyHealthPro -= thiefAttack;
          enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
        };

        thiefAttackAnimation();
      },{once : true});

      backRobberyButton.onclick = () => {
        robResults.style.display = "none";
        thief.style.display = "none";
        car.style.display = "none";
        shopButton.style.display = "block";
        levelButton.style.display = "block";
        inventory.style.display = "block";
        money.style.display = "block";
        stealProgress.style.display = "none";
        stealButton.style.display = "block";
        enemy.style.display = "none";
        enemyHealthPro = 100;
        enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
        thiefHealthPro = (100 + thiefHealthBoost);
        thiefHealth.innerHTML = "Health: " + thiefHealthPro;
        stealButton.style.display = "none";
        shopEnhancedKnife.style.display = "none";
        AfterLevel();
      };

      levelThree.onclick = () => {
          info.innerHTML = "";
          inventory.style.display = "none";
          backButton.style.display = "none";
          money.style.display = "none";
          levels.style.display = "none";
          thief.style.display = "block";
          car.style.display = "flex";
          levelBoxThree.style.display = "none";
          levelBoxFour.style.color = "black";
          shopEnhancedKnife.style.display = "none";
          carImage.src = "./res/img/carThree.JPG";
          thief.style.left = "1.3%";
          thief.style.animation = `${"thief-animation " + thiefSpeed + "s linear forwards"}`;
          thiefHealth.style.display = "none";
          setTimeout(stealButtonAppear, thiefSpeedStealButton);

          levelFour.onmouseover = () => {
            levelFour.style.color = "red";
          };

          levelFour.onmouseout = () => {
            levelFour.style.color = "black";
          };

          stealButton.addEventListener('click', () => {
            stealProgress.style.display = "block";
            stealProgress.style.animation =  "steal-progress " + thiefRobAcceleration + "s linear forwards";
            setTimeout(enemyAppear, enemyAppearTime);
            setTimeout(BattleLevelThree, enemyAppearTime);
          
            enemyImage.onclick = () => {
              enemyHealthPro -= thiefAttack;
              enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
            };

            thiefAttackAnimation();
          },{once : true});

        backRobberyButton.onclick = () => {
          robResults.style.display = "none";
          thief.style.display = "none";
          car.style.display = "none";
          shopButton.style.display = "block";
          levelButton.style.display = "block";
          inventory.style.display = "block";
          money.style.display = "block";
          stealProgress.style.display = "none";
          stealButton.style.display = "block";
          enemy.style.display = "none";
          enemyHealthPro = 100;
          enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
          thiefHealthPro = (100 + thiefHealthBoost);
          thiefHealth.innerHTML = `${"Health: " + thiefHealthPro}`;
          stealButton.style.display = "none";
          AfterLevel();
        };
        
          levelFour.onclick = () => {
            info.innerHTML = "";
            inventory.style.display = "none";
            backButton.style.display = "none";
            money.style.display = "none";
            levels.style.display = "none";
            thief.style.display = "block";
            car.style.display = "flex";
            levelBoxFour.style.display = "none";
            levelBoxFive.style.color = "black";
            shopEnhancedKnife.style.display = "none";
            carImage.src = "./res/img/carFour.JPG";
            thief.style.left = "1.3%";
            thief.style.animation = `${"thief-animation " + thiefSpeed + "s linear forwards"}`;
            thiefHealth.style.display = "none";
            setTimeout(stealButtonAppear, thiefSpeedStealButton);
        
            levelFive.onmouseover = () => {
              levelFive.style.color = "red";
            };

            levelFive.onmouseout = () => {
              levelFive.style.color = "black";
            };

            stealButton.addEventListener('click', () => {
              stealProgress.style.display = "block";
              stealProgress.style.animation =  "steal-progress " + thiefRobAcceleration + "s linear forwards";
              setTimeout(enemyAppear, enemyAppearTime);
              setTimeout(BattleLevelFour, enemyAppearTime);
        
              enemyImage.onclick = () => {
                enemyHealthPro -= thiefAttack;
                enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
              };

              thiefAttackAnimation();
            }, {once : true});

          backRobberyButton.onclick = () => {
            robResults.style.display = "none";
            thief.style.display = "none";
            car.style.display = "none";
            shopButton.style.display = "block";
            levelButton.style.display = "block";
            inventory.style.display = "block";
            money.style.display = "block";
            stealProgress.style.display = "none";
            stealButton.style.display = "block";
            enemy.style.display = "none";
            enemyHealthPro = 100;
            enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
            thiefHealthPro = (100 + thiefHealthBoost);
            thiefHealth.innerHTML = "Health: " + thiefHealthPro;
            stealButton.style.display = "none";
            AfterLevel();
          };
        
            levelFive.onclick = () => {
              info.innerHTML = "";
              inventory.style.display = "none";
              backButton.style.display = "none";
              money.style.display = "none";
              levels.style.display = "none";
              thief.style.display = "block";
              car.style.display = "flex";
              levelBoxFive.style.display = "none";
              levelBoxSix.style.color = "black";
              shopEnhancedKnife.style.display = "none";
              carImage.src = "./res/img/carFive.JPG";
              thief.style.left = "1.3%";
              thief.style.animation = `${"thief-animation " + thiefSpeed + "s linear forwards"}`;
              thiefHealth.style.display = "none";
              setTimeout(stealButtonAppear, thiefSpeedStealButton);
        
              levelSix.onmouseover = () => {
                levelSix.style.color = "red";
              };

              levelSix.onmouseout = () => {
                levelSix.style.color = "black";
              };

              stealButton.addEventListener('click', () => {
                stealProgress.style.display = "block";
                stealProgress.style.animation =  "steal-progress " + thiefRobAcceleration + "s linear forwards";
                setTimeout(enemyAppear, enemyAppearTime);
                setTimeout(BattleLevelFive, enemyAppearTime);
        
                enemyImage.onclick = () => {
                  enemyHealthPro -= thiefAttack;
                  enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
                };

                thiefAttackAnimation();
              }, {once : true});

              backRobberyButton.onclick = () => {
              robResults.style.display = "none";
              thief.style.display = "none";
              car.style.display = "none";
              shopButton.style.display = "block";
              levelButton.style.display = "block";
              inventory.style.display = "block";
              money.style.display = "block";
              stealProgress.style.display = "none";
              stealButton.style.display = "block";
              enemy.style.display = "none";
              enemyHealthPro = 100;
              enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
              thiefHealthPro = (100 + thiefHealthBoost);
              thiefHealth.innerHTML = `${"Health: " + thiefHealthPro}`;
              stealButton.style.display = "none";
              AfterLevel();
            };
            
        
              levelSix.onclick = () => {
                info.innerHTML = "";
                inventory.style.display = "none";
                backButton.style.display = "none";
                money.style.display = "none";
                levels.style.display = "none";
                thief.style.display = "block";
                car.style.display = "flex";
                levelBoxSix.style.display = "none";
                levelBoxSeven.style.color = "black";
                shopEnhancedKnife.style.display = "none";
                carImage.src = "./res/img/carSix.PNG";
                thief.style.left = "1.3%";
                thief.style.animation = `${"thief-animation " + thiefSpeed + "s linear forwards"}`;
                thiefHealth.style.display = "none";
                setTimeout(stealButtonAppear, thiefSpeedStealButton);
        
                levelSeven.onmouseover = () => {
                  levelSix.style.color = "red";
                };

                levelSeven.onmouseout = () => {
                  levelSix.style.color = "black";
                };

                stealButton.addEventListener('click', () => {
                  stealProgress.style.display = "block";
                  stealProgress.style.animation =  "steal-progress " + thiefRobAcceleration + "s linear forwards";
                  setTimeout(enemyAppear, enemyAppearTime);
                  setTimeout(BattleLevelSix, enemyAppearTime);
        
                  enemyImage.onclick = () => {
                    enemyHealthPro -= thiefAttack;
                    enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
                 };

                 thiefAttackAnimation();
                }, {once : true});

                backRobberyButton.onclick = () => {
                robResults.style.display = "none";
                thief.style.display = "none";
                car.style.display = "none";
                shopButton.style.display = "block";
                levelButton.style.display = "block";
                inventory.style.display = "block";
                money.style.display = "block";
                stealProgress.style.display = "none";
                stealButton.style.display = "block";
                enemy.style.display = "none";
                enemyHealthPro = 100;
                enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
                thiefHealthPro = (100 + thiefHealthBoost);
                thiefHealth.innerHTML = `${"Health: " + thiefHealthPro}`;
                stealButton.style.display = "none";
                AfterLevel();
              };
            
        
                levelSeven.onclick = () => {
                  info.innerHTML = "";
                  inventory.style.display = "none";
                  backButton.style.display = "none";
                  money.style.display = "none";
                  levels.style.display = "none";
                  thief.style.display = "block";
                  car.style.display = "flex";
                  levelBoxSeven.style.display = "none";
                  levelBoxEight.style.color = "black";
                  shopEnhancedKnife.style.display = "none";
                  carImage.src = "./res/img/carSeven.JPG";
                  thief.style.left = "1.3%";
                  thief.style.animation = `${"thief-animation " + thiefSpeed + "s linear forwards"}`;
                  thiefHealth.style.display = "none";
                  setTimeout(stealButtonAppear, thiefSpeedStealButton);
        
                  levelEight.onmouseover = () => {
                    levelEight.style.color = "red";
                  };

                  levelEight.onmouseout = () => {
                    levelEight.style.color = "black";
                  };

                  stealButton.addEventListener('click', () => {
                    stealProgress.style.display = "block";
                    stealProgress.style.animation =  "steal-progress " + thiefRobAcceleration + "s linear forwards";
                    setTimeout(enemyAppear, enemyAppearTime);
                    setTimeout(BattleLevelSeven, enemyAppearTime);
        
                  enemyImage.onclick = () => {
                      enemyHealthPro -= thiefAttack;
                      enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
                    };

                    thiefAttackAnimation();
                  }, {once : true});

                  backRobberyButton.onclick = () => {
                  robResults.style.display = "none";
                  thief.style.display = "none";
                  car.style.display = "none";
                  shopButton.style.display = "block";
                  levelButton.style.display = "block";
                  inventory.style.display = "block";
                  money.style.display = "block";
                  stealProgress.style.display = "none";
                  stealButton.style.display = "block";
                  enemy.style.display = "none";
                  enemyHealthPro = 100;
                  enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
                  thiefHealthPro = (100 + thiefHealthBoost);
                  thiefHealth.innerHTML = `${"Health: " + thiefHealthPro}`;
                  stealButton.style.display = "none";
                  AfterLevel();
                };
                
        
                  levelEight.onclick = () => {
                    info.innerHTML = "";
                    inventory.style.display = "none";
                    backButton.style.display = "none";
                    money.style.display = "none";
                    levels.style.display = "none";
                    thief.style.display = "block";
                    car.style.display = "flex";
                    levelBoxSeven.style.display = "none";
                    levelBoxEight.style.color = "black";
                    shopEnhancedKnife.style.display = "none";
                    carImage.src = "./res/img/carEight.JPG";
                    thief.style.left = "1.3%";
                    thief.style.animation = `${"thief-animation " + thiefSpeed + "s linear forwards"}`;
                    thiefHealth.style.display = "none";
                    setTimeout(stealButtonAppear, thiefSpeedStealButton);

                    stealButton.addEventListener('click', () => {
                      stealProgress.style.display = "block";
                      stealProgress.style.animation =  "steal-progress " + thiefRobAcceleration + "s linear forwards";
                      setTimeout(enemyAppear, enemyAppearTime);
                      setTimeout(BattleLevelEight, enemyAppearTime);
        
                    enemyImage.onclick = () => {
                        enemyHealthPro -= thiefAttack;
                        enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
                      };

                      thiefAttackAnimation();
                    }, {once : true});

                    backRobberyButton.onclick = () => {
                    robResults.style.display = "none";
                    thief.style.display = "none";
                    car.style.display = "none";
                    shopButton.style.display = "block";
                    levelButton.style.display = "block";
                    inventory.style.display = "block";
                    money.style.display = "block";
                    stealProgress.style.display = "none";
                    stealButton.style.display = "block";
                    enemy.style.display = "none";
                    enemyHealthPro = 100;
                    enemyHealth.innerHTML = `${"Health: " + enemyHealthPro}`;
                    thiefHealthPro = 100 + thiefHealthBoost;
                    thiefHealth.innerHTML = `${"Health: " + thiefHealthPro}`;
                    stealButton.style.display = "none";
                    levelBoxOne.style.display = "block";
                    levelBoxTwo.style.display = "block";
                    levelBoxThree.style.display = "block";
                    levelBoxFour.style.display = "block";
                    levelBoxFive.style.display = "block";
                    levelBoxSix.style.display = "block";
                    levelBoxSeven.style.display = "block";
                    levelBoxEight.style.display = "block";
                    AfterLevel();

                  };
                } 
              } 
            } 
          } 
        } 
      }
    };
  };
};


buyButtonKnife.onclick = () => {
  if (moneyPro < 50) {
    info.innerHTML = "Not enough money";
    setTimeout(infoShopBackup, 1000);
  }
  if (moneyPro >= 50) {
    moneyPro -= 50;
    itemBoxTwo.style.display = "block";
    itemTwo.innerHTML = "Knife";
    info.innerHTML = "You bought a Knife";
    setTimeout(infoShopBackup, 1000);
    money.innerHTML = moneyPro + "$";
    inventorySellButtonTwo.innerHTML = "Sell (40$)";
    thiefAttack += 2;
    shopKnife.style.display = "none";
    shopEnhancedKnife.style.display = "block";
  }
};


buyButtonEnhancedKnife.onclick = () => {
  if (moneyPro < 200) {
    info.innerHTML = "Not enough money";
    setTimeout(infoShopBackup, 1000);
  }
  if (moneyPro >= 200) {
    moneyPro -= 200;
    itemBoxFive.style.display = "block";
    itemFive.innerHTML = "Enchanced Knife";
    info.innerHTML = "You bought an Enhanced Knife";
    setTimeout(infoShopBackup, 1000);
    money.innerHTML = moneyPro + "$";
    inventorySellButtonFive.innerHTML = "Sell (150$)";
    thiefAttack += 2;
    shopEnhancedKnife.style.display = "none";
  }
};


buyButtonShoes.onclick = () => {
  if (moneyPro < 10) {
    info.innerHTML = "Not enough money";
    setTimeout(infoShopBackup, 1000);
  }
  if (moneyPro >= 10) {
    moneyPro -= 10;
    itemBoxEight.style.display = "block";
    itemEight.innerHTML = "Better Shoes";
    info.innerHTML = "You bought an Better Shoes";
    setTimeout(infoShopBackup, 1000);
    money.innerHTML = moneyPro + "$";
    inventorySellButtonEight.innerHTML = "Sell (5$)";
    thiefSpeed -= 2;
    thiefSpeedStealButton -= 2000;
    shopBetterShoes.style.display = "none";
  }
}


buyButtonMoreHP.onclick = () => {
  if (moneyPro < 10) {
    info.innerHTML = "Not enough money";
    setTimeout(infoShopBackup, 1000);
  }
  if (moneyPro >= 25) {
    moneyPro -= 25;
    info.innerHTML = "You bought a More HP";
    setTimeout(infoShopBackup, 1000);
    money.innerHTML = moneyPro + "$";
    thiefHealthBoost += 10;
    thiefHealthPro = (100 + thiefHealthBoost);
    thiefHealth.innerHTML = "Health: " + thiefHealthPro;
  }
}

buyButtonLockpick.onclick = () => {
  if (moneyPro < 10) {
    info.innerHTML = "Not enough money";
    setTimeout(infoShopBackup, 1000);
  }
  if (moneyPro >= 10) {
    moneyPro -= 10;
    itemBoxThirdteen.style.display = "block";
    itemThirdteen.innerHTML = "Lockpick";
    info.innerHTML = "You bought a Lockpick";
    setTimeout(infoShopBackup, 1000);
    money.innerHTML = moneyPro + "$";
    inventorySellButtonThirdteen.innerHTML = "Sell (5$)";
    shopLockpick.style.display = "none";
    thiefRobAcceleration -= 2;
    enemyAppearTime -= 2000;
  }
}


inventorySellButtonOne.onclick = () => {
  itemBoxOne.style.display = "none";
  itemOne.innerHTML = "";
  moneyPro += 50;
  money.innerHTML = moneyPro + "$";
  info.innerHTML = "You sold an item1 for 50$";
  setTimeout(infoInventoryBackup, 1000);
};


inventorySellButtonTwo.onclick = () => {
  itemBoxTwo.style.display = "none";
  itemTwo.innerHTML = "";
  moneyPro += 40;
  money.innerHTML = moneyPro + "$";
  info.innerHTML = "You sold a knife for 40$";
  setTimeout(infoInventoryBackup, 1000);
  shopKnife.style.display = "block";
};


inventorySellButtonThree.onclick = () => {
  itemBoxThree.style.display = "none";
  itemThree.innerHTML = "";
  moneyPro += 100;
  money.innerHTML = moneyPro + "$";
  info.innerHTML = "You sold a item2 for 100$";
  setTimeout(infoInventoryBackup, 1000);
};


inventorySellButtonFour.onclick = () => {
  itemBoxFour.style.display = "none";
  itemFour.innerHTML = "";
  moneyPro += 150;
  money.innerHTML = moneyPro + "$";
  info.innerHTML = "You sold a item3 for 150$";
  setTimeout(infoInventoryBackup, 1000);
};


inventorySellButtonFive.onclick = () => {
  itemBoxFive.style.display = "none";
  itemFive.innerHTML = "";
  moneyPro += 150;
  money.innerHTML = moneyPro + "$";
  info.innerHTML = "You sold an Enhanced Knife for 150$";
  setTimeout(infoInventoryBackup, 1000);
  shopEnhancedKnife.style.display = "block";
};


inventorySellButtonSix.onclick = () => {
  itemBoxSix.style.display = "none";
  itemSix.innerHTML = "";
  moneyPro += 200;
  money.innerHTML = moneyPro + "$";
  info.innerHTML = "You sold a item4 for 200$";
  setTimeout(infoInventoryBackup, 1000);
}


inventorySellButtonSeven.onclick = () => {
  itemBoxSeven.style.display = "none";
  itemSeven.innerHTML = "";
  moneyPro += 300;
  money.innerHTML = moneyPro + "$";
  info.innerHTML = "You sold a item5 for 300$";
  setTimeout(infoInventoryBackup, 1000);
}


inventorySellButtonEight.onclick = () => {
  itemBoxEight.style.display = "none";
  itemEight.innerHTML = "";
  moneyPro += 5;
  money.innerHTML = moneyPro + "$";
  info.innerHTML = "You sold a Better Shoes for 5$";
  setTimeout(infoInventoryBackup, 1000);
  shopBetterShoes.style.display = "block";
}


inventorySellButtonNine.onclick = () => {
  itemBoxNine.style.display = "none";
  itemNine.innerHTML = "";
  moneyPro += 400;
  money.innerHTML = moneyPro + "$";
  info.innerHTML = "You sold a item6 for 400$";
  setTimeout(infoInventoryBackup, 1000);
}


inventorySellButtonTen.onclick = () => {
  itemBoxTen.style.display = "none";
  itemTen.innerHTML = "";
  moneyPro += 500;
  money.innerHTML = moneyPro + "$";
  info.innerHTML = "You sold a item7 for 500$";
  setTimeout(infoInventoryBackup, 1000);
}


inventorySellButtonElleven.onclick = () => {
  itemBoxElleven.style.display = "none";
  itemElleven.innerHTML = "";
  moneyPro += 1000000;
  money.innerHTML = moneyPro + "$";
  info.innerHTML = "Now, you are in Sandbox Mode";
  setTimeout(() => {
    info.innerHTML = "SandBox Mode";
  }, 2000);
  setTimeout(() => {
    info.innerHTML = "You can obtain items by completing levels or buying them in the shop.";
  }, 2500)
  sandbox.style.display = "block";
}

inventorySellButtonThirdteen.onclick = () => {
  itemBoxThirdteen.style.display = "none";
  itemThirdteen.innerHTML = "";
  moneyPro += 5;
  money.innerHTML = moneyPro + "$";
  info.innerHTML = "You sold a lockpick for 5$";
  setTimeout(infoInventoryBackup, 1000);
  thiefRobAcceleration += 2;
  enemyAppearTime += 2000;
}
