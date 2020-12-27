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


  },

  timer: function () {


  },
  render:function() {
    for(let i = 0; i <1; i++){
      this.player[i].element.style.top = this.people[i].y_pos + "px"
      this.player[i].element.style.left = this.people[i].x_pos + "px"
  }
},
}

Obstaclerun.init();