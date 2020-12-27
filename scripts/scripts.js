Obstaclerun = {
  container: document.getElementById("obstaclerun_container"),
  obstacles: [],
  playerImages: [],

  init: function () {
    for (let i = 0; i < 1; i++) {
      this.obstacle.push(this.createObstacle());
    }
    this.render();
    this.startGame();
  },

  createPlayer: function () {
    let obstaclediv = document.createElement("div"); 
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
  },

  createObstacle: function () {


  },

  timer: function () {


  },
}

Obstaclerun.init();