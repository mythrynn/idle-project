  var merchX = 1.2;
	var workerX = 1.01;
	var farmX = 1.1;
	var lumberX = 1.1;
	var equipmentX = 1.3;

	var gold = 21;
  var food = 0;
  var wood = 0;
  var stone = 0;
  var iron = 0;

	var house = 0;
	var HouseX = 1.1;
	var nextHouseCost = Math.floor(20000 * Math.pow(HouseX, house));
  var houseRate = house;


  var workers = 2;
  var totalWorkers = 0;
  var farmers = 0;
  var lumberjacks = 0;
  var merchants = 0;
  var shops = 0;

	var equipmentLevel = 0;
	var equipmentCost = 0;
	var nextEquipmentCost = Math.floor(1000 * Math.pow(1.3,equipmentLevel));
  var axesLevel = 0;
	var axesCost = 0;
	var nextAxesCost = Math.floor(10000 * Math.pow(1.3,axesLevel));

  var foodRate = farmers * (equipmentLevel + 1);
  var woodRate = lumberjacks;
  var merchRate = 0;
  var merchWood = 0;

  var nextWorkerCost = Math.floor(5 * Math.pow(workerX, totalWorkers));
  var nextLumberjackCost = Math.floor(1500 * Math.pow(lumberX,lumberjacks));
  var nextMerchantCost = Math.floor(150 * Math.pow(merchX,merchants));
  var nextFarmerCost = Math.floor(10 * Math.pow(farmX, farmers));

  var world = 1;
  var sellAmount = 1;
  var thirdResource2 = Math.floor(wood/3);
  var max2 = food;
  var thirdResource = thirdResource2;
  var max = max2;

  var showTut = 0;
  var firstSell = 0;
  var firstMerchant = 0;
  var resource = document.getElementById("merchNum").value;

function sendVal() {
	document.getElementById('food').innerHTML = formatNumber(food);
	document.getElementById('foodNum').innerHTML = formatNumber(food);
	document.getElementById("gold").innerHTML = formatNumber(gold);
	document.getElementById("wood").innerHTML = formatNumber(wood);
	document.getElementById("stone").innerHTML = formatNumber(stone);
	document.getElementById("iron").innerHTML = formatNumber(iron);
	document.getElementById("House").innerHTML = formatNumber(house);

  nextWorkerCost = Math.floor(5 * Math.pow(workerX, totalWorkers));
	document.getElementById("farmers").innerHTML = formatNumber(farmers);
	document.getElementById("lumberjacks").innerHTML = formatNumber(lumberjacks);
	document.getElementById("merchants").innerHTML = formatNumber(merchants);
	document.getElementById("merchants2").innerHTML = formatNumber(merchants);
	document.getElementById('workers').innerHTML = formatNumber(workers);
	document.getElementById('workers2').innerHTML = formatNumber(workers);
	document.getElementById('workers3').innerHTML = formatNumber(workers);
	document.getElementById('workerCost').innerHTML = formatNumber(nextWorkerCost);
	document.getElementById('shops').innerHTML = formatNumber(shops);
  document.getElementById("merchRate").innerHTML = 2 * merchants + merchWood;

	nextMerchantCost = Math.floor(150 * Math.pow(merchX,merchants));
  nextHouseCost = Math.floor(20000 * Math.pow(HouseX, house));
	document.getElementById('merchantCost').innerHTML = formatNumber(nextMerchantCost);
  document.getElementById('lumberjackCost').innerHTML = formatNumber(Math.floor(1500 * Math.pow(lumberX, lumberjacks)));
	document.getElementById('farmerCost').innerHTML = formatNumber(Math.floor(10 * Math.pow(farmX, farmers)));
	document.getElementById('houseCost').innerHTML = formatNumber(nextHouseCost);
  houseRate = house;
$('#houseRate').html(houseRate);

	nextEquipmentCost = formatNumber(Math.floor(1000 * Math.pow(equipmentX, equipmentLevel)));
	$('#equipmentLevel').html(equipmentLevel);
	$('#equipmentCost').html(nextEquipmentCost);

  nextAxesCost = formatNumber(Math.floor(10000 * Math.pow(1.3,axesLevel)));
  $('#axesLevel').html(axesLevel);
	$('#axesCost').html(nextAxesCost);

	woodRate = lumberjacks * (axesLevel + 1);
	foodRate = farmers * (equipmentLevel + 1);
	thirdResource = thirdResource2;
	if (resource == 0){
		thirdResource2 = Math.floor(food/3);
    max = food;
		max2 = food;
		document.getElementById('res').innerHTML = "food";
		document.getElementById('res2').innerHTML = "food";
		document.getElementById("resAmt").innerHTML = "1 gold per ";
    $('#woodTotal').html(formatNumber(max));
    $('#wood2').html( "food.");
	}
	if (resource == 1){
		thirdResource2 = Math.floor(wood/3);
    max = wood;
		max2 = 50 * wood;
		document.getElementById('res').innerHTML = "wood";
		document.getElementById('res2').innerHTML = "wood";
		document.getElementById("resAmt").innerHTML = "50 gold per";
    $('#woodTotal').html(max);
    $('#wood2').html( "wood.");
		}

	document.getElementById('foodRate').innerHTML = formatNumber(foodRate);
  document.getElementById('woodRate').innerHTML = formatNumber(woodRate);
	document.getElementById('max').innerHTML = formatNumber(max);
	document.getElementById('max2').innerHTML = formatNumber(max2);
  document.getElementById('thirdResource').innerHTML = formatNumber(thirdResource);
}

function isEven(n) {
  return n == parseFloat(n)? !(n%2) : void 0;
}

function woodChop (number){
	wood = wood + (number * (axesLevel + 1));
	};

function farm (number){
	food = food + (number * (equipmentLevel + 1));
  };

function bringWorker (number){
  workers = workers + houseRate;
}

function upgradeAxes (){
  	axesCost = Math.floor(10000 * Math.pow(1.3, axesLevel));
  	if(gold >= axesCost) {
  		axesLevel = axesLevel + 1;
  		gold = gold - axesCost;
  	}
  	sendVal();
}
function upgradeEquipment (){
	equipmentCost = Math.floor(1000 * Math.pow(1.3, equipmentLevel));
	if(gold >= equipmentCost) {
		equipmentLevel = equipmentLevel + 1;
		gold = gold - equipmentCost;
	}
	sendVal();
}

function hireWorker (){
	var workerCost = Math.floor(5 * Math.pow(workerX, totalWorkers));
	if(gold >= workerCost && food >= 3){
		workers = workers + 1;
		totalWorkers = totalWorkers + 1;
		gold = gold - workerCost;
		food = food - 3;
		document.getElementById('workers').innerHTML = formatNumber(workers);
		document.getElementById('workers2').innerHTML = formatNumber(workers);
		document.getElementById('workers3').innerHTML = formatNumber(workers);
		document.getElementById('gold').innerHTML = formatNumber(gold);
	}
	nextWorkerCost = Math.floor(5 * Math.pow(workerX, totalWorkers));
	document.getElementById('workerCost').innerHTML = formatNumber(nextWorkerCost);
}

function hireFarmer(){
	var farmerCost = Math.floor(10 * Math.pow(farmX, farmers));
	if(gold >= farmerCost && workers >= 1){
		farmers = farmers + 1;
		workers = workers - 1;
		gold = gold - farmerCost;
	};
  sendVal();
};

function hireLumberjack(){
	var lumberjackCost = Math.floor(1500 * Math.pow(lumberX,lumberjacks));
	if(gold >= lumberjackCost && workers >= 1){
		lumberjacks = lumberjacks + 1;
		workers = workers - 1;
		gold = gold - lumberjackCost;
	};
	sendVal();
};

function hireMerchant() {
	var merchantCost = Math.floor(150 * Math.pow(merchX,merchants));
	if(gold >= merchantCost && workers>= 1){
		merchants = merchants + 1;
		workers = workers - 1;
		gold = gold - merchantCost;
	};
	 sendVal();
	if(merchants>0){
		firstMerchant = 1;
	}
}
function pickResource(){
	resource = document.getElementById("merchNum").value;
}

function sellRes(amount){
	resource = document.getElementById("merchNum").value
	if (resource == 0 && food >= amount){
		thirdResource2 = Math.floor(food/3);
		max2 = food;
			food = food - amount;
			gold = gold + amount;
	}
	if (resource == 1 && wood >= amount){
		thirdResource2 = Math.floor(wood/3);
		max2 = wood * 50;
			wood = wood - amount;
			gold = gold + (amount*50);
	}
	if(firstSell == 0){
		firstSell=1;
	}
	sendVal();
	checkTut();
}

function merchSell(amount) {
	var h = merchWood + 2 * merchants;
  if (food >= amount){
  food = food - amount;
  gold = gold + 2 * amount;
}
  if (wood >= amount){
  wood = wood - amount;
  gold = gold + (amount*100);
  merchWood = merchants * 100;
}
if (wood < amount){
  merchWood = 0;
}
	document.getElementById("merchRate").innerHTML = h;
}

function prettify(input){
  var output = Math.round(input * 1000000)/1000000;
	return output;
}

function save(){
	var save = {
	  gold: gold,
		food: food,
		foodRate: foodRate,
		workers: workers,
		farmers: farmers,
	  lumberjacks: lumberjacks,
		merchants: merchants,
    wood: wood,
	  world: world,
		showTut: showTut,
		firstSell: firstSell,
		firstMerchant: firstMerchant,
		totalWorkers: totalWorkers,
		equipmentLevel: equipmentLevel,

    axesLevel: axesLevel,

		equipmentCost: equipmentCost,
		nextEquipmentCost: nextEquipmentCost,

		house: house,
		nextHouseCost: nextHouseCost,

    axesLevel: axesLevel,
		axesCost: axesCost,
		nextAxesCost: nextAxesCost,

	}
	localStorage.setItem("save",JSON.stringify(save));
	$('#saving').html("Game Saved").fadeIn('slow');
	$('#saving').delay('2000').fadeOut('slow');
};

function loadGame() {
	$('#saving').hide();
  $('#givegold').hide();
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.workers !== "undefined") workers = savegame.workers;
	if (typeof savegame.farmers !== "undefined") farmers = savegame.farmers;
  if (typeof savegame.food !== "undefined") food = savegame.food;
  if (typeof savegame.foodRate !== "undefined") foodRate = savegame.foodRate;
	if (typeof savegame.lumberjacks !== "undefined") lumberjacks = savegame.lumberjacks;
	if (typeof savegame.merchants !== "undefined") merchants = savegame.merchants;
  if (typeof savegame.wood !== "undefined") wood = savegame.wood;
  if (typeof savegame.woodRate !== "undefined") woodRate = savegame.woodRate;
	if (typeof savegame.merchRate !== "undefined") merchRate = savegame.merchRate;
	if (typeof savegame.gold !== "undefined") gold = savegame.gold;
	if (typeof savegame.world !== "undefined") world = savegame.world;
	if (typeof savegame.house !== "undefined") house = savegame.house;
	showTut = savegame.showTut;
	firstSell = savegame.firstSell;
	firstMerchant = savegame.firstMerchant;
	totalWorkers = savegame.totalWorkers;
	equipmentLevel = savegame.equipmentLevel;

  axesLevel = savegame.axesLevel;

	equipmentCost = savegame.equipmentCost;
	nextEquipmentCost = savegame.nextEquipmentCost;

	nextHouseCost = savegame.nextHouseCost;

  axesLevel = savegame.axesLevel;
  axesCost = savegame.axesCost;
  nextAxesCost = savegame.nextAxesCost;

	sendVal();
	checkTut();
}

function deleteSave() {
	localStorage.removeItem("save")
}

var ranges = [
  { divider: 1e30 , suffix: 'N' },
  { divider: 1e27 , suffix: 'Oc' },
  { divider: 1e24 , suffix: 'Sp' },
  { divider: 1e21 , suffix: 'Sx' },
  { divider: 1e18 , suffix: 'Qi' },
  { divider: 1e15 , suffix: 'Qa' },
  { divider: 1e12 , suffix: 'T' },
  { divider: 1e9 , suffix: 'B' },
  { divider: 1e6 , suffix: 'M' },
  { divider: 1e3 , suffix: 'k' }
];

function formatNumber(n) {
  for (var i = 0; i < ranges.length; i++) {
    if (n >= ranges[i].divider) {
      return (n / ranges[i].divider).toFixed(2) + ranges[i].suffix;
    }
  }
  return n.toFixed();
}

window.setInterval(function() {
	woodChop(lumberjacks);
	farm(farmers);
  sendVal();
}, 1000);

window.setInterval(function() {
  save();
}, 300000);

window.setInterval(function() {
	merchSell(merchants);
}, 3000);

window.setInterval(function() {
  bringWorker(house);
}, 30000)

function openHTab(evt, HTabName) {
    var i, HTabcontent, HTablinks;
    HTabcontent = document.getElementsByClassName("HTabcontent");
    for (i = 0; i < HTabcontent.length; i++) {
        HTabcontent[i].style.display = "none";
    }
    HTablinks = document.getElementsByClassName("HTablinks");
    for (i = 0; i < HTablinks.length; i++) {
        HTablinks[i].className = HTablinks[i].className.replace(" active", "");
    }
    document.getElementById(HTabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function openVTab(evt, VTabName) {
    // Declare all variables
    var j, VTabcontent, VTablinks;

    // Get all elements with class="tabcontent" and hide them
    VTabcontent = document.getElementsByClassName("VTabcontent");
    for (j = 0; j < VTabcontent.length; j++) {
        VTabcontent[j].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    VTablinks = document.getElementsByClassName("VTablinks");
    for (j = 0; j < VTablinks.length; j++) {
        VTablinks[j].className = VTablinks[j].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(VTabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function checkTut(){
	if (farmers > 1 && showTut >= 0){
			document.getElementById('tutText1').textContent = "Congratulations! You have your first farmers!";
			document.getElementById('tutText2').textContent = "Sell some food to hire more workers.";
			showTut=1;
		}

	if (firstSell ==1 && totalWorkers >=4 && showTut >=1){
		document.getElementById('tutText1').textContent = "Congratulations! You have made your first few sales and hired more workers!";
		document.getElementById('tutText2').textContent = "Keep selling your food and hire a merchant to make sales for you!";
		document.getElementById("merchantTab").style.display = "inherit";
		showTut=2;
	}
	if (firstMerchant ==1 && showTut >= 2){
		document.getElementById('tutText1').textContent = "Congratulations! You have a merchant!";
		document.getElementById('tutText2').textContent = "Your farmers could use some new equipment, upgrade it to speed them up!";
		document.getElementById("farmerUpgrade").style.display = "inherit";
		showTut=3;
	}
	if (equipmentLevel >= 3 && showTut >= 3){
		document.getElementById('tutText1').textContent = "Wow! Your kingdom is off to a great start!";
		document.getElementById('tutText2').textContent = "It looks like it is time to hire a lumberjack!";
		document.getElementById("woodTab").style.display = "inherit";
		showTut=4;
	}
  if (lumberjacks >= 10 && showTut >= 4){
    document.getElementById('tutText1').textContent = "You have quite a few lumberjacks now.";
		document.getElementById('tutText2').textContent = "Maybe it's time to upgrade them!";
    document.getElementById("lumberjackUpgrade").style.display = "inherit";
    showTut=5;
  }
  if (axesLevel >= 2 && showTut >= 5){
    document.getElementById('tutText1').textContent = "You need a lot more workers to keep making progress.";
		document.getElementById('tutText2').textContent = "Build some houses and workers will come on their own to live in them.";
    document.getElementById("landTab").style.display = "inherit";
    showTut=6;
  }
}

function giveGold(){
	gold = gold + 1000000;
	workers = workers + 50;
  totalWorkers = totalWorkers + 50;
}

function manualSave(){
  ga('send', {
  hitType: 'event',
  eventCategory: 'Save',
  eventAction: 'saved',
  eventLabel: 'Manual Save'
});
}

function buyHouse(){
	houseCost = Math.floor(20000 * Math.pow(HouseX, house));
	if(gold >= houseCost && workers >= 5 && wood >=1000){
		house = house + 1;
		workers = workers - 5;
		wood = wood - 1000
		gold = gold - houseCost;
		document.getElementById('House').innerHTML = formatNumber(house);
		document.getElementById('workers').innerHTML = formatNumber(workers);
		document.getElementById('gold').innerHTML = formatNumber(gold);
		document.getElementById('wood').innerHTML = formatNumber(wood);
	}
	nextHouseCost = Math.floor(20000 * Math.pow(HouseX,house));
  document.getElementById('houseCost').innerHTML = formatNumber(nextHouseCost);
}
