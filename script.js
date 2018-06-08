var enemy_health = 100;
var normal_attack = 30;
var special_attack = 40;
var enemy_health_text = document.getElementById("enemy-health-text");
var enemy_bar = document.getElementById("enemy-bar");
var enemy_normal_attack = 10;
var enemy_special_attack = 20;
var player_health = 100;
var player_health_text = document.getElementById("player-health-text");
var player_bar = document.getElementById("player-bar");
var player_level = 1;
var enemy_pic = document.getElementById("enemy-pic");
var player_level_text = document.getElementById('level');
var enemy_text = document.getElemetById('enemy_text');

function normal() {
  enemy_health -= normal_attack;
  enemyAttacks();
  updateHealth();
  gameCheck();    
}

function special() {
  enemy_health -= normal_attack;
  enemyAttacks();
  updateHealth();
  gameCheck();    
}

function gameCheck() {
  if (player_health <= 0) {
    alert("You died, game over!");
    reset();
  } 

  else if (enemy_health <= 0) {
    alert("You win! You have leveled up!");
    levelUp();
  }
}

function updateHealth() {
  player_health_text.innerHTML = player_health;
  player_bar.value = player_health;
  enemy_health_text.innerHTML = enemy_health;
  enemy_bar.value = enemy_health;
}

function enemySelectsMove() {
  var randomEnemyMoves = [enemy_normal_attack, enemy_special_attack];
  var enemyChoice = randomEnemyMoves[Math.floor(Math.random() * randomEnemyMoves.length)];
  return enemyChoice;
}

function enemyAttacks() {
  var enemyTurn = enemySelectsMove();
  if (enemyTurn === enemy_normal_attack) {
    alert("You attack. Enemy used Normal Attack!");
    player_health -= enemy_normal_attack;
  } else if (enemyTurn === enemy_special_attack) {
    alert("You attack. Enemy used Special Attack!");
    player_health -= enemy_special_attack;
  }
}

function levelUp() {
  player_level++;
  player_level_text.innerHTML = player_level;
  window["level" + player_level]();
}

function level2() {
  enemy_pic.src = "http://bsdacademysandbox.com/curriculum/wp-content/uploads/2017/06/bear-37287_640.png";
  document.body.style.backgroundImage = "url('http://bsdacademysandbox.com/curriculum/wp-content/uploads/2017/06/landscape-1844230_1280.png')";
  enemy_health = 150;
  enemy_normal_attack = 20;
  enemy_special_attack = 40;
  player_health = 150;
  normal_attack = 40;
  special_attack = 50;
  player_bar.max = player_health;
  enemy_bar.max = enemy_health;
  updateHealth();
}

function level3() {
  enemy_pic.src = "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fclipartix.com%2Fwp-content%2Fuploads%2F2016%2F06%2FFree-monster-clipart-2.png&f=1";
  document.body.style.backgroundImage = "url('http://bsdacademysandbox.com/curriculum/wp-content/uploads/2017/06/landscape-1844230_1280.png')";
  enemy_health = 200;
  enemy_normal_attack = 20;
  enemy_special_attack = 40;
  player_health = 200;
  normal_attack = 40;
  special_attack = 60;
  player_bar.max = player_health;
  enemy_bar.max = enemy_health;
  updateHealth();
}

function level4() {
  enemy_pic.src = "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fdragon-clipart.clipartonline.net%2F_%2Frsrc%2F1468860991806%2Fhome%2FBaby-Dragon-Cartoon-Clip-Art_104.png%3Fheight%3D400%26width%3D400&f=1";
  document.body.style.backgroundImage = "url('http://bsdacademysandbox.com/curriculum/wp-content/uploads/2017/06/landscape-1844230_1280.png')";
  enemy_health = 250;
  enemy_normal_attack = 30;
  enemy_special_attack = 60;
  player_health = 250;
  normal_attack = 50;
  special_attack = 70;
  player_bar.max = player_health;
  enemy_bar.max = enemy_health;
  updateHealth();
}

function level5() {
  enemy_pic.src = "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fshrek%2Fshrek_PNG2.png&f=1";
  document.body.style.backgroundImage = "url('http://bsdacademysandbox.com/curriculum/wp-content/uploads/2017/06/landscape-1844230_1280.png')";
  enemy_health = 260;
  enemy_normal_attack = 35;
  enemy_special_attack = 60;
  player_health = 250;
  normal_attack = 50;
  special_attack = 70;
  player_bar.max = player_health;
  enemy_bar.max = enemy_health;
  updateHealth();
}

function reset() {
  enemy_pic.src = "http://bsdacademysandbox.com/curriculum/wp-content/uploads/2017/06/cartoon-1299393_640.png";
  document.body.style.backgroundImage = "url('http://bsdacademysandbox.com/curriculum/wp-content/uploads/2017/06/landscape-1844226_1280.png')";
  player_level = 1;
  player_health = 100;
  enemy_health = 100;
  normal_attack = 30;
  enemy_normal_attack = 10;
  enemy_special_attack = 20;
  updateHealth();
} 
