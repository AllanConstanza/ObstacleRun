Obstaclerun = {
  container: document.getElementById("obstaclerun_container"),
  obstacles: [],
  players: [],
  startbutton: document.getElementById("start"),
  simulation: undefined,


  init: function () {
    for (let i = 0; i < 12; i++) {
      this.obstacles.push(this.createObstacle());
    }
    Obstaclerun.renderObstacles();

    for (let i = 0; i < 1; i++) {
      this.players.push(this.createPlayer());
    }
    Obstaclerun.renderPlayer();

    this.startbutton.onclick = function () {
      Obstaclerun.startGame();
    }

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
      radius: 5,
      element: obstaclediv
    }
    return obstacle;
  },


  startGame: function () {
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

  // Creating Player here


  createPlayer: function () {
    let playerdiv = document.createElement("div");
    playerdiv.className = "player";
    this.container.append(playerdiv);
    let player = {
      x_pos:  200,
      y_pos:  400,
      radius: 5,
      element: playerdiv
    }
    return player;
  },

  animatePlayer: function () {
    this.movePlayer();
    this.renderPlayer();
  },

  movePlayer: function () {

  },

  renderPlayer: function () {
    for (i = 0; i < this.players.length; i++) {
      this.players[i].element.style.top = this.players[i].y_pos + "px";
      this.players[i].element.style.left = this.players[i].x_pos + "px";
    }
  },

  movePlayer:function () {
    window.onkeydown = function(event){

    }

    window.onkeyup = function (event){
      
    }
  }

}

Obstaclerun.init();