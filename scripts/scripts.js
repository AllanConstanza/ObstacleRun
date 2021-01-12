Obstaclerun = {
  container: document.getElementById("obstaclerun_container"),
  obstacles: [],
  players: [],
  treasures: [],
  startbutton: document.getElementById("start"),
  simulation: undefined,



  init: function () {

    for (let i = 0; i < 1; i++) {
      this.players.push(this.createPlayer());
    }
    Obstaclerun.renderPlayer();

    this.startbutton.onclick = function () {
      Obstaclerun.startGame();
    }


    //Moving player 

    window.onkeydown = function (event) {
  
      console.log(event.keyCode)
      if (event.keyCode == 38) {
         this.moveUp()

      } else if(event.keyCode == 37) {
      this.moveLeft()

      } else if(event.keyCode == 39) {
        this.moveRight()

      }
      else if(event.keyCode == 40) {
        this.moveDown()

      }
    } .bind(Obstaclerun)





  },
  createObstacle: function () {
    let obstaclediv = document.createElement("div");
    obstaclediv.className = "obstacle";
    this.container.append(obstaclediv);
    let obstacle = {
      x_pos: Math.random() * 800,
      y_pos: Math.random() * 400,
      x_velocity: Math.random() * 10 - 1,
      y_velocity: Math.random() * 10 - 1,
      radius: 30,
      element: obstaclediv
    }
    return obstacle;

  },


  startGame: function () {
    for (let i = 0; i < 8; i++) {
      this.obstacles.push(this.createObstacle());
    }
    for (let i = 0; i < 1; i++) {
      this.treasures.push(this.createTreasure());
    }
    Obstaclerun.renderTreasures();
    Obstaclerun.renderObstacles();
    this.simulation = window.setInterval(this.animateObstacles.bind(Obstaclerun), 30);
    this.simulation = window.setInterval(this.animateTreasures.bind(Obstaclerun), 30);


  },

  removestartButton: function () {
   
  
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








  createPlayer: function () {
    let playerdiv = document.createElement("div");
    playerdiv.className = "player";
    this.container.append(playerdiv);
    let player = {
      x_pos: 0,
      y_pos: 0,
      radius: 5,
      element: playerdiv
    }
    return player;
  },

  animatePlayer: function () {
    this.renderPlayer();
    this.checkforCollision();
  },

  moveUp:function (){
    for (i = 0; i < this.players.length; i++) {
    this.players[i].element.style.top=parseInt(this.players[i].element.style.top)-8 +'px';
    }
  },
  
  moveRight: function(){
    for (i = 0; i < this.players.length; i++) {
      this.players[i].element.style.left = parseInt(this.players[i].element.style.left) +8 + 'px';
    }
  },
  moveLeft: function(){
    for (i = 0; i < this.players.length; i++) {
      this.players[i].element.style.left = parseInt(this.players[i].element.style.left) -8 + 'px';
    }
  }, 

  moveDown: function(){
    for (i = 0; i < this.players.length; i++) {
      this.players[i].element.style.top = parseInt(this.players[i].element.style.top) +8 + 'px';
    }
  }, 

  renderPlayer: function () {
    for (i = 0; i < this.players.length; i++) {
      this.players[i].element.style.top = this.players[i].y_pos + "px";
      this.players[i].element.style.left = this.players[i].x_pos + "px";
    }
  },

  checkforCollision: function () {

  },



  // Creating the treasure chest 
  createTreasure: function () {
    let treasurediv = document.createElement("div");
    treasurediv.className = "treasure";
    this.container.append(treasurediv);
    let treasure = {
      x_pos: 700,
      y_pos: 490,
      x_velocity: Math.random() * 15,
      y_velocity: Math.random() * 15,
      radius: 30,
      element: treasurediv
    }
    return treasure;
  },

 /**  moveTreasures: function () {
    for (i = 0; i < this.treasures.length; i++) {
      this.treasures[i].x_pos = this.treasures[i].x_pos + this.treasures[i].x_velocity;
      this.treasures[i].y_pos = this.treasures[i].y_pos + this.treasures[i].y_velocity;
    }
  }, **/

  renderTreasures: function () {
    for (i = 0; i < this.treasures.length; i++) {
      this.treasures[i].element.style.top = this.treasures[i].y_pos + "px";
      this.treasures[i].element.style.left = this.treasures[i].x_pos + "px";
    }
  },

 /**  bounceTreasures: function () {
    for (i = 0; i < this.treasures.length; i++) {
      if (this.treasures[i].x_pos + (this.treasures[i].radius * 2) > 895) {
        this.treasures[i].x_pos = 895 - this.treasures[i].radius * 2;
        this.treasures[i].x_velocity = this.treasures[i].x_velocity * -1;
      } else if (this.treasures[i].x_pos < 0) {
        this.treasures[i].x_pos = 0;
        this.treasures[i].x_velocity = this.treasures[i].x_velocity * -1;
      }


      if (this.treasures[i].y_pos + (this.treasures[i].radius * 2) > 580) {
        this.treasures[i].y_pos = 580 - this.treasures[i].radius * 2;
        this.treasures[i].y_velocity = this.treasures[i].y_velocity * -1;
      } else if (this.treasures[i].y_pos < 0) {
        this.treasures[i].y_pos = 0;
        this.treasures[i].y_velocity = this.treasures[i].y_velocity * -1;
      }

    }
  }, **/

  checkforWin: function () {

  },

  animateTreasures: function () {
  //  this.bounceTreasures();
  //  this.moveTreasures();
    this.renderTreasures();
    this.checkforWin();
  },

}

Obstaclerun.init();