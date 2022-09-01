 //dispenseElements

 let dispenseCardSelectEl = document.getElementById("dispenseCardSelect");
 let dispenseCardQuantityEl = document.getElementById("dispenseCardQuantity");
 let dispenseCardCheckboxEl = document.getElementById("dispenseCardCheckbox");
 let dispenseButtonEl = document.getElementById("dispenseButton");
 let dispenseCardClearButtonEl = document.getElementById("dispenseCardClearButton");

 //refill elements 

 let stockRefillCardTeaLeavesQuantityEl = document.getElementById("stockRefillCardTeaLeavesQuantity");
 let stockRefillCardCoffeePowderQuantityEl = document.getElementById("stockRefillCardCoffeePowderQuantity");
 let stockRefillCardSugerQuantityEl = document.getElementById("stockRefillCardSugerQuantity");
 let stockRefillCardMilkQuantityEl = document.getElementById("stockRefillCardMilkQuantity");
 let stockRefillCardWaterQuantityEl = document.getElementById("stockRefillCardWaterQuantity");

 let refillButtonEl = document.getElementById("refillButton");
 let refillClearButtonEl = document.getElementById("refillClearButton");

 //consumed Elements
 let consumedTeaLeavesEl = document.getElementById("consumedTeaLeaves");
 let consumedCoffeePowderEl = document.getElementById("consumedCoffeePowder");
 let consumedSugerEl = document.getElementById("consumedSuger");
 let consumedMilkEl = document.getElementById("consumedMilk");
 let consumedWaterEl = document.getElementById("consumedWater");

 // remaining Elements
 let remainingTeaLeavesEl = document.getElementById("remainingTeaLeaves");
 let remainingCoffeePowderEl = document.getElementById("remainingCoffeePowder");
 let remainingSugerEl = document.getElementById("remainingSuger");
 let remainingMilkEl = document.getElementById("remainingMilk");
 let remainingWaterEl = document.getElementById("remainingWater");

 //LeakageElements
 let leakageInformationOfMilkEl = document.getElementById("leakageInformationOfMilk");
 let leakageInformationOfWaterEl = document.getElementById("leakageInformationOfWater");

 //Beverage Elements
 let beverageDetailsOfStrongCoffeeEl = document.getElementById("beverageDetailsOfStrongCoffee");
 let beverageDetailsOfLightCoffeeEl = document.getElementById("beverageDetailsOfLightCoffee");
 let beverageDetailsOfStrongTeaEl = document.getElementById("beverageDetailsOfStrongTea");
 let beverageDetailsOfLightTeaEl = document.getElementById("beverageDetailsOfLightTea");
 let beverageDetailsOfSellingPriceEl = document.getElementById("beverageDetailsOfSellingPrice");


 // quantity

 let dispenseObject = {
     quantity: 0,

 };


 //consumed stock
 const consumedStock = {
     teaLeaves: 0,
     coffeePowder: 0,
     suger: 0,
     milk: 0,
     water: 0
 };

 //remaining stock
 const remainingStock = {
     teaLeaves: 500,
     coffeePowder: 500,
     suger: 600,
     milk: 8000,
     water: 15000
 };

 // Beverage Information 

 const beverageInformation = {
     strongCoffee: 0,
     lightCoffee: 0,
     strongTea: 0,
     lightTea: 0
 };

 // Leakage leakage
 const leakageInformation = {
     milk: 0,
     water: 0
 };

 //selling price 

 let sellingPrice = {
     price: 0
 };

 //dispense clear button

 dispenseCardClearButtonEl.onclick = function() {
     dispenseCardSelectEl.value = "Strong Coffee";
     dispenseCardQuantityEl.value = 0;
 };
 //dispense button

 dispenseButtonEl.onclick = function() {
     let quantity = parseInt(dispenseCardQuantityEl.value);
     dispenseObject.quantity = dispenseObject.quantity + quantity;
     if (dispenseCardSelectEl.value === "Strong Coffee") {
         consumedStock.teaLeaves = quantity * (consumedStock.teaLeaves + 0);
         consumedStock.coffeePowder = quantity * (consumedStock.coffeePowder + 4);
         consumedStock.milk = quantity * (consumedStock.milk + 50);
         consumedStock.water = quantity * (consumedStock.water + 100);
         remainingStock.teaLeaves = quantity * (remainingStock.teaLeaves - 0);
         remainingStock.coffeePowder = quantity * (remainingStock.coffeePowder - 4);
         remainingStock.milk = quantity * (remainingStock.milk - 50);
         remainingStock.water = quantity * (remainingStock.water - 100);

         if (dispenseCardCheckboxEl.checked === true) {
             consumedStock.suger = quantity * (consumedStock.suger + 2);
             remainingStock.suger = quantity * (remainingStock.suger - 2);
         } else {
             consumedStock.suger = quantity * (consumedStock.suger + 0);
             remainingStock.suger = quantity * (remainingStock.suger + 0);
         }
     }
     if (dispenseCardSelectEl.value === "Light Coffee") {
         consumedStock.teaLeaves = quantity * (consumedStock.teaLeaves + 0);
         consumedStock.coffeePowder = quantity * (consumedStock.coffeePowder + 2);
         consumedStock.milk = quantity * (consumedStock.milk + 60);
         consumedStock.water = quantity * (consumedStock.water + 100);
         remainingStock.teaLeaves = quantity * (remainingStock.teaLeaves - 0);
         remainingStock.coffeePowder = quantity * (remainingStock.coffeePowder - 2);
         remainingStock.milk = quantity * (remainingStock.milk - 60);
         remainingStock.water = quantity * (remainingStock.water - 100);
         if (dispenseCardCheckboxEl.checked === true) {
             consumedStock.suger = quantity * (consumedStock.suger + 1.5);
             remainingStock.suger = quantity * (remainingStock.suger - 1.5);
         } else {
             consumedStock.suger = quantity * (consumedStock.suger + 0);
             remainingStock.suger = quantity * (remainingStock.suger - 0);
         }
     }
     if (dispenseCardSelectEl.value === "Strong Tea") {
         consumedStock.teaLeaves = quantity * (consumedStock.teaLeaves + 4);
         consumedStock.coffeePowder = quantity * (consumedStock.coffeePowder + 0);
         consumedStock.milk = quantity * (consumedStock.milk + 30);
         consumedStock.water = quantity * (consumedStock.water + 150);
         remainingStock.teaLeaves = quantity * (remainingStock.teaLeaves - 4);
         remainingStock.coffeePowder = quantity * (remainingStock.coffeePowder - 0);
         remainingStock.milk = quantity * (remainingStock.milk - 30);
         remainingStock.water = quantity * (remainingStock.water - 150);
         if (dispenseCardCheckboxEl.checked === true) {
             consumedStock.suger = quantity * (consumedStock.suger + 2);
             remainingStock.suger = quantity * (remainingStock.suger - 2);
         } else {
             consumedStock.suger = quantity * (consumedStock.suger + 0);
             remainingStock.suger = quantity * (remainingStock.suger - 0);
         }
     }
     if (dispenseCardSelectEl.value === "Light Tea") {
         consumedStock.teaLeaves = quantity * (consumedStock.teaLeaves + 3);
         consumedStock.coffeePowder = quantity * (consumedStock.coffeePowder + 0);
         consumedStock.milk = quantity * (consumedStock.milk + 40);
         consumedStock.water = quantity * (consumedStock.water + 150);
         remainingStock.teaLeaves = quantity * (remainingStock.teaLeaves - 3);
         remainingStock.coffeePowder = quantity * (remainingStock.coffeePowder - 0);
         remainingStock.milk = quantity * (remainingStock.milk - 40);
         remainingStock.water = quantity * (remainingStock.water - 150);
         if (dispenseCardCheckboxEl.checked === true) {
             consumedStock.suger = quantity * (consumedStock.suger + 1.5);
             remainingStock.suger = quantity * (remainingStock.suger - 1.5);
         } else {
             consumedStock.suger = quantity * (consumedStock.suger + 0);
             remainingStock.suger = quantity * (remainingStock.suger - 0);
         }
     }
     //consumed Information
     consumedTeaLeavesEl.textContent = consumedStock.teaLeaves;
     consumedCoffeePowderEl.textContent = consumedStock.coffeePowder;
     consumedSugerEl.textContent = consumedStock.suger;
     consumedMilkEl.textContent = consumedStock.milk;
     consumedWaterEl.textContent = consumedStock.water;
     //remainin information
     remainingTeaLeavesEl.textContent = remainingStock.teaLeaves;
     remainingCoffeePowderEl.textContent = remainingStock.coffeePowder;
     remainingSugerEl.textContent = remainingStock.suger;
     remainingMilkEl.textContent = remainingStock.milk;
     remainingWaterEl.textContent = remainingStock.water;

     //leakageInformation
     if (remainingStock.milk === 200) {
         leakageInformation.milk = leakageInformation.milk + 10;
     }
     if (remainingStock.water === 500) {
         leakageInformation.water = leakageInformation.water + 25;
     }

     leakageInformationOfMilkEl.textContent = leakageInformation.milk;
     leakageInformationOfWaterEl.textContent = leakageInformation.water;

     //beverage Information

     if (dispenseCardSelectEl.value === "Strong Coffee") {
         beverageInformation.strongCoffee = beverageInformation.strongCoffee + dispenseObject.quantity;
     }
     if (dispenseCardSelectEl.value === "Light Coffee") {
         beverageInformation.lightCoffee = beverageInformation.lightCoffee + dispenseObject.quantity;
     }
     if (dispenseCardSelectEl.value === "Strong Tea") {
         beverageInformation.strongTea = beverageInformation.strongTea + dispenseObject.quantity;
     }
     if (dispenseCardSelectEl.value === "Light Tea") {
         beverageInformation.lightTea = beverageInformation.lightTea + dispenseObject.quantity;
     }
     beverageDetailsOfStrongCoffeeEl.textContent = beverageInformation.strongCoffee;
     beverageDetailsOfLightCoffeeEl.textContent = beverageInformation.lightCoffee;
     beverageDetailsOfStrongTeaEl.textContent = beverageInformation.strongTea;
     beverageDetailsOfLightTeaEl.textContent = beverageInformation.lightTea;

     //alert messages

     if (remainingStock.teaLeaves === 50) {
         alert("Remaining Tea Leaves 50 units only Refill it");
     }
     if (remainingStock.coffeePowder === 50) {
         alert("Remaining Coffee Power 50 units only Refill it");
     }
     if (remainingStock.suger === 50) {
         alert("Remaining Suger 50 units only Refill it");
     }

     if (remainingStock.milk === 4000) {
         alert("Remaining Milk 4000 units only Refill it");

     }
     if (remainingStock.water === 600) {
         alert("Remaining Water 600 units only Refill it");
     }
     //selling price 
     let sellingPriceRupee = (beverageInformation.strongCoffee * 17.5) + (beverageInformation.lightCoffee * 16.5) + (beverageInformation.strongTea * 15.50) + (beverageInformation.lightTea * 15);
     sellingPrice.price = sellingPriceRupee;
     beverageDetailsOfSellingPriceEl.textContent = sellingPrice.price;


 };



 // stock refill details dependencies 

 //stock clear button 
 refillClearButtonEl.onclick = function() {
     stockRefillCardTeaLeavesQuantityEl.value = "";
     stockRefillCardCoffeePowderQuantityEl.value = "";
     stockRefillCardSugerQuantityEl.value = "";
     stockRefillCardMilkQuantityEl.value = "";
     stockRefillCardWaterQuantityEl.value = "";
 }

 //refill button

 refillButtonEl.onclick = function() {
     remainingStock.teaLeaves = remainingStock.teaLeaves + parseInt(stockRefillCardTeaLeavesQuantityEl.value);
     remainingStock.coffeePowder = remainingStock.coffeePowder + parseInt(stockRefillCardCoffeePowderQuantityEl.value);
     remainingStock.suger = remainingStock.suger + parseInt(stockRefillCardSugerQuantityEl.value);
     remainingStock.milk = remainingStock.milk + parseInt(stockRefillCardMilkQuantityEl.value);
     remainingStock.water = remainingStock.water + parseInt(stockRefillCardWaterQuantityEl.value);
     remainingTeaLeavesEl.textContent = remainingStock.teaLeaves;
     remainingCoffeePowderEl.textContent = remainingStock.coffeePowder;
     remainingSugerEl.textContent = remainingStock.suger;
     remainingMilkEl.textContent = remainingStock.milk;
     remainingWaterEl.textContent = remainingStock.water;

 }
