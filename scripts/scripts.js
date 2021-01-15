Obstaclerun = {
  container: document.getElementById("obstaclerun_container"),
  obstacles: [],
  players: [],
  treasures: [],
  startbutton: document.getElementById("start"),
  simulation: undefined,



//Andi 
  init: function () {

    for (let i = 0; i < 1; i++) {
      this.players.push(this.createPlayer());
    }


    Obstaclerun.renderPlayer();

    this.startbutton.onclick = function () {

      Obstaclerun.startGame();
    }




    //Allan 
    window.onkeydown = function (event) {

      console.log(event.keyCode)
      if (event.keyCode == 38) {
        this.moveUp()

      } else if (event.keyCode == 37) {
        this.moveLeft()

      } else if (event.keyCode == 39) {
        this.moveRight()

      }
      else if (event.keyCode == 40) {
        this.moveDown()

      }
    }.bind(Obstaclerun)





  }, //Andi
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

//Allan
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

    var button = document.getElementById('start');
    button.remove();

  },




//Andi 
  animateObstacles: function () {
    this.bounceObstacles();
    this.moveObstacles();
    this.renderObstacles();
    this.checkforCollision();

  },
//Andi
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
//Andi
  moveObstacles: function () {

    for (i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].x_pos = this.obstacles[i].x_pos + this.obstacles[i].x_velocity;
      this.obstacles[i].y_pos = this.obstacles[i].y_pos + this.obstacles[i].y_velocity;
    }
  },//Andi
  renderObstacles: function () {
    for (i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].element.style.top = this.obstacles[i].y_pos + "px";
      this.obstacles[i].element.style.left = this.obstacles[i].x_pos + "px";
    }

  },
//Allan
  checkforCollision: function () {

    for (let i = 0; i < this.obstacles.length; i++) {
      let shark = this.obstacles[i]
      for (j = 0; j < this.players.length; j++) {

       let dx = shark.x_pos - this.players[j].x_pos;
        let dy = shark.y_pos - this.players[j].y_pos;
        let distance = Math.sqrt(dx * dx + dy * dy); 

        



        if (distance < this.players[j].radius + shark.radius) {

          this.createRestartbutton()
          console.log("Collision detected")
          shark.x_velocity = 0;
          shark.y_velocity = 0;
        }
      }


    }
  },

//Allan
  createRestartbutton: function () {
    let restart = document.createElement("BUTTON");
    restart.className = "restartbutton";
    restart.innerHTML = "Try again";


    this.container.appendChild(restart);

    restart.onclick = function (){
     Obstaclerun.restartGame(); 
      
    }

  },
//Allan
  restartGame: function () {
    console.log("Hello")
    let restart = document.getElementsByClassName('BUTTON')
    restart.remove();
  
  },




//Allan
  createPlayer: function () {
    let playerdiv = document.createElement("div");
    playerdiv.className = "player";
    this.container.append(playerdiv);
    let player = {
      x_pos: 100,
      y_pos: 100,
      radius: 1,
      element: playerdiv
    }
    return player;
  },
//Allan
  animatePlayer: function () {
    this.renderPlayer();
  },




//Allan
  moveUp: function () {
    for (i = 0; i < this.players.length; i++) {
      this.players[i].element.style.top = parseInt(this.players[i].element.style.top) - 20 + 'px';
      this.players[i].y_pos = this.players[i].y_pos -20;


    
    }
  },
//Allan
  moveRight: function () {
    for (i = 0; i < this.players.length; i++) {
      this.players[i].element.style.left = parseInt(this.players[i].element.style.left) + 20 + 'px';
      this.players[i].x_pos = this.players[i].x_pos +20;
      


    }
  },
  moveLeft: function () {
    for (i = 0; i < this.players.length; i++) {
      this.players[i].element.style.left = parseInt(this.players[i].element.style.left) - 20 + 'px';
      this.players[i].x_pos = this.players[i].x_pos -20;

    }
  }, 

  moveDown: function () {
    for (i = 0; i < this.players.length; i++) {
      this.players[i].element.style.top = parseInt(this.players[i].element.style.top) + 20 + 'px';
      this.players[i].y_pos = this.players[i].y_pos +20;

    }
  },
//Allan
  renderPlayer: function () {
    for (i = 0; i < this.players.length; i++) {
      this.players[i].element.style.top = this.players[i].y_pos + "px";
      this.players[i].element.style.left = this.players[i].x_pos + "px";
    }
  },




  //Andi
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


  //Andi
  renderTreasures: function () {
    for (i = 0; i < this.treasures.length; i++) {
      this.treasures[i].element.style.top = this.treasures[i].y_pos + "px";
      this.treasures[i].element.style.left = this.treasures[i].x_pos + "px";
    }
  },



  checkforWin: function () {

  },

  //Andi
  animateTreasures: function () {
    this.renderTreasures();
    this.checkforWin();
  },

}

Obstaclerun.init();