$( document ).ready(function() {
    // console.log( "ready!" );
 
  var gameMin = 19;
  var gameMax = 120;
  var crystalMin = 1;
  var crystalMax = 12;
  var numCrystals = 4;
  var crystalValues = [];
  var blueCrystal;
  var greenCrystal;
  var redCrystal;
  var yellowCrystal;
  var scoreCurrent = 0;
  var targetNumber;
  var seriesWins = 0;
  var seriesLosses = 0;
  var value = 0;
  var resetGame=0;


  var active = 0; 

  //html elements
  var $targetNumber = $(".target-number");
  var $seriesWins = $(".series-wins-value");
  var $seriesLosses = $(".series-losses-value");
  var $scoreCurrent = $(".score-current-value");
  var $restart = $(".action-restart");
  var $crystals = $(".crystal");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}


function init() {
  targetNumber = getRandomInt(gameMin, gameMax);
  $targetNumber.append(targetNumber);
  scoreCurrent = 0;
  $scoreCurrent.html(scoreCurrent);

  console.log("random #: " + targetNumber);

  for (var i = 0; i < $crystals.length; i++) {
    var random = getRandomInt(crystalMin, crystalMax);
    crystalValues[i] = random;
    console.log("crystal values: " + random);
  }
  console.log(crystalValues);
  blueCrystal = crystalValues[0];
  greenCrystal = crystalValues[1];
  redCrystal = crystalValues[2];
  yellowCrystal = crystalValues[3];
  console.log("blue crystal: " + blueCrystal);
  console.log("green crystal: " + greenCrystal);
  console.log("red crystal: " + redCrystal);
  console.log("yellow crystal: " + yellowCrystal);

  //remove all click listeners
  $crystals.off('click');

  //attach click listeners
  $crystals.on("click", function(event) {  //attaches click handler to every crystal w/o using a for loop
    var elemID = $(this).attr("id");
    console.log($(this).attr('class'));

    if (elemID === 'crystal-blue') {
      console.log('clicked blue crystal: ' + blueCrystal);
      scoreCurrent += blueCrystal;
      $scoreCurrent.html(scoreCurrent);
      console.log("current score: " + parseInt(scoreCurrent));

      checkScore();
    } 

    if (elemID === 'crystal-green') {
      console.log('clicked green crystal: ' + greenCrystal);
      scoreCurrent += greenCrystal;
      $scoreCurrent.html(scoreCurrent);
      console.log("current score: " + parseInt(scoreCurrent));

      checkScore();
    
    }
    if (elemID === 'crystal-red') {
      console.log('clicked red crystal');
      scoreCurrent += redCrystal;
      $scoreCurrent.html(scoreCurrent);
      console.log("current score: " + parseInt(scoreCurrent));

      checkScore();
    } 
    if (elemID === 'crystal-yellow') {
      console.log('clicked yellow crystal');
      scoreCurrent += yellowCrystal;
      $scoreCurrent.html(scoreCurrent);
      console.log("current score: " + parseInt(scoreCurrent));

      checkScore();
    }

    }) 

  active = 1; 
 }

 function checkScore() {
  $seriesWins;
  $seriesLosses;

  if (scoreCurrent < targetNumber) {
    return;
  } else if (scoreCurrent === targetNumber) {
    seriesWins++;
    $seriesWins.html(seriesWins);
    active = 0;
    alert("You Win");


  } else {
    seriesLosses++;
    $seriesLosses.html(seriesLosses);
    active = 0;
    alert("You Loose");
  
    }
 };

console.log("losses: " + seriesLosses);
console.log("wins: " + seriesWins);

function restartAll() {
  $restart.on(".action-restart", function() {
    init()
 
  });

};

init();


});


