Obstaclerun = {
  container: document.getElementById("obstaclerun_container"),
  obstacles: [],
  playerImages: [],

  init: function () {
    for (let i = 0; i < 6; i++) {
      this.obstacles.push(this.createObstacle());
    }
    //Will have to change startSim to startGame later
    this.startSimulation();

    this.renderObstacles();


   // this.render();
   //this.startGame();
  },

 /**  createPlayer: function () {
    let playerdiv = document.createElement("div"); 
    playerdiv.className = "player"
    this.container.append(playerdiv);
    let player = {
      x_pos: Math.random()* 600,
      y_pos: Math.random()* 500, 
      x_velocity: Math.random()* 1,
      y_velocity: Math.random()* 1, 
      radius:5 , 
      element: playerdiv
    }
    return player; 
  }, **/


  //createPlayer: function (){
  // let player = document.createElement("div")
  // fishes.classname= "player"
  //let playerArray = [
  // {object: 'player', image: "https://img.favpng.com/2/6/13/image-fish-portable-network-graphics-download-png-favpng-ebhYVWTEHGsTG2iafehsBLJP8.jpg"},
  // ]
  
  // for (let i = 0; i < this.player.length; i + = 1){
  // var playerImage = this.player[i]
  // var obj = getRandomItem(playerArray) 
  // this.playerArray[i].push(this.player)
  // player[i].innerHTML = obj.name + '<img srcs="" + ' > '
  // document.getElementById('animation_container').appendChild(fishImage);
  // }
 // }, 

  createObstacle: function () {
    let obstaclediv = document.createElement("div");
    obstaclediv.className = "obstacle";
    this.container.append(obstaclediv);
    let obstacle = {
      x_pos: Math.random() * 400,
      y_pos:  Math.random() * 400 ,
      x_velocity: Math.random() * 10 - 1,
      y_velocity:Math.random() * 10 - 1,
      radius: 5,
      element: obstaclediv
    }
    return obstacle;
  },

 //will have to change this later
     startSimulation: function () {
    this.simulation = window.setInterval(this.animateObstacles.bind(Obstaclerun), 30);
  },

  animateObstacles: function () {
    this.bounceObstacles();
    this.moveObstacles();
    this.renderObstacles();
  },

  bounceObstacles: function () {
    for (i = 0; i < this.obstacles.length; i++) {
      if (this.obstacles[i].x_pos + (this.obstacles[i].radius * 2) > 895) {
        this.obstacles[i].x_pos = 895 - this.obstacles[i].radius * 2;
        this.obstacles[i].x_velocity = this.obstacles[i].x_velocity * -1;
      } else if (this.obstacles[i].x_pos < 0) {
        this.obstacles[i].x_pos = 0;
        this.obstacles[i].x_velocity = this.obstacles[i].x_velocity * -1;
      }


      if (this.obstacles[i].y_pos + (this.obstacles[i].radius * 2) > 580) {
        this.obstacles[i].y_pos = 580 - this.obstacles[i].radius * 2;
        this.obstacles[i].y_velocity = this.obstacles[i].y_velocity * -1;
      } else if (this.obstacles[i].y_pos < 0) {
        this.obstacles[i].y_pos = 0;
        this.obstacles[i].y_velocity = this.obstacles[i].y_velocity * -1;
      }

    }
  },

  moveObstacles: function () {

    for (i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].x_pos = this.obstacles[i].x_pos + this.obstacles[i].x_velocity;
        this.obstacles[i].y_pos = this.obstacles[i].y_pos + this.obstacles[i].y_velocity;
    }
  },
  renderObstacles: function () {
    for (i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].element.style.top = this.obstacles[i].y_pos + "px";
      this.obstacles[i].element.style.left = this.obstacles[i].x_pos + "px";
    }

  },

  //will need a start button here 
  startGame: function (){

  },
  endGame: function() {

  },
  
 /**  render:function() {
    for(let i = 0; i <1; i++){
      this.player[i].element.style.top = this.people[i].y_pos + "px"
      this.player[i].element.style.left = this.people[i].x_pos + "px"
  } 
},**/
}

Obstaclerun.init();