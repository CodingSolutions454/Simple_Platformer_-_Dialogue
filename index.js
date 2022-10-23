const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const progressBar = document.getElementsByClassName('progress-bar')[0]

// background width and height
canvas.width = 6500
canvas.height = 1100

const gravity = 1.5// player gravity
const enemy_1gravity = 1.5 // enemy Gravity

// background_1 class
class Background_1{
  constructor()
  {
  
  // background_1 velocity
  this.velocity = {x: 0, y: 0}

  // backgroud_1 world position
  this.position ={
  x: -15,
  y: 13
  }
   
  // get this image in its file location
  const image = new Image()
  // folder to search for this asset
  image.src = './Assets/Background_1.png'
  image. onload = () =>{
  
  // background_1 width, height and scale
  const scale = 1.7
  this.image = image
  // actual width is const scale
  this.width = image.width * scale
  // actual height is const scale
  this.height = image.height * scale 
  }
 }
 
 // draw this background_1
  draw(){
  c.drawImage (this.image, this.position.x, this.position.y, this.width, this.height)
  }
 
  // update the background image
  update(){
  if(this.image){
     this.draw()
     this.position.x += this.velocity.x
     this.position.y += this.velocity.y
   }
  }
}

// player class
class Player
{
 constructor()
 {
 
 // player posiion
 this.position ={
  x: 200,
  y: 100
 }
 
 // player velocity
 this.velocity = {
  x: 0, 
  y: 0}
 // player rotation
 this.rotation = 0

 // get this image in its file location
 const image = new Image()
 // Folder to search for the asset
 image.src = './Assets/Player_1_Stand_Right.png' 
 image. onload = () =>{
 
 // width, height and image
 const scale = 1.4
 this.image = image
 // Actual width is scale
 this.width = image.width * scale 
 // Actual height is scale
 this.height = image.height * scale 
  }
 }

 // Draw the player
 draw(){
 c.drawImage (this.image, this.position.x, this.position.y, this.width, this.height)
 }

 // Update the player image
 update(){
 if(this.image){
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }
  if(this.position.y + this.height + this.velocity.y <= canvas.height)
  this.velocity.y += gravity
 }
}

// enemy class
class Enemy_1{
  constructor() {
      
 // eneny world position
 this.position ={
  x: 600,
  y: 100
 }
 // enemy velocity 
 this.velocity = {
  x: 0, 
  y: 0}
 
 // get this image in its file location
 const image = new Image()
 // Folder to search for the assets
 image.src = './Assets/Enemy_1_Stand_Left.png' 
 image. onload = () =>{
 
 // width, height and image
 const scale = 1.4
 this.image = image
 // Actual width is scale
 this.width = image.width * scale 
 // Actual height is scale
 this.height = image.height * scale 
 
 }
 
 }

 // Draw the player
 draw(){
 c.drawImage (this.image, this.position.x, this.position.y, this.width, this.height)
 }
 
 // Update the player image
 update(){
 if(this.image){
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }
  if(this.position.y + this.height + this.velocity.y <= canvas.height)
  this.velocity.y += enemy_1gravity
 }
      
 }

  //Enemy_1 ai movement
  setInterval(function(){ // repeating function like tick in unreal engine. note to self
  console.log("execute AI random movement for enemy_1 after 1 second");
  // move the enemy at math random every 1 second
  enemy_1.velocity.x= Math.floor(Math.random() *4 -2)
  }, 1000);// = to 1 second

  // platform_1 class
  class Platform_1{
    constructor() {
      
      // platform_ world position
      this.position ={
       x: 0,
       y: 1100
    
      }

      // platform size
      this.width = 800
      this.height = 1
      }
      
    // draw the platform
    draw(){
      c.fillStyle = 'black' 
      c.fillRect(this.position.x , this. 
      position.y, this.width, this.height)
    }
  }

 // plaform_2 class
 class Platform_2{
  constructor() {
    
    // platform_ world position
    this.position ={
     x: 900,
     y: 1100
  
    }
    
    // platform size
    this.width = 800
    this.height = 20
    }

  // draw the platform
   draw(){
    c.fillStyle = 'black'
    c.fillRect(this.position.x , this. 
    position.y, this.width, this.height)
  }
}

// plaform_3 class
class Platform_3{
  constructor() {
    
    // platform_ world position
    this.position ={
     x: 1800,
     y: 1100
  
    }
    
    // platform size
    this.width = 800
    this.height = 20
    }

    // draw the platform
    draw(){
      c.fillStyle = 'black'
      c.fillRect(this.position.x , this. 
      position.y, this.width, this.height)
    }
}

// This projectile class
class Projectile_1{
 
  // position and velocity
  constructor({position, velocity}){
  this.position = position
  this.velocity = velocity
  
  // radius of the projectile
  this.radius = 5
  }
  
  // draw this projectile and fill with color
  draw(){
  c.beginPath()
  c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
  c.fillStyle = 'green'
  c.fill()
  c.closePath()
  c.rotate(this.rotation)
  }
  
  // Update 
  update(){
  this.draw()
  this.position.x += this.velocity.x
  this.position.y += this.velocity.y
  }
}

// This projectile class
class Particle_1{
 
  // position and velocity
  constructor({position, velocity, radius, color}){
  this.position = position
  this.velocity = velocity
  
  // radius, color and starting opacity
  this.radius = radius
  this.color = color
  this.opacity = 1
  }
  
  // draw this particle and fill with color
  draw(){
  c.save()
  c.globalAlpha = this.opacity
  c.beginPath()
  c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
  c.fillStyle = this.color
  c.fill()
  c.closePath()
  c.restore()
  }
  
  // Update 
  update(){
  this.draw()
  this.position.x += this.velocity.x
  this.position.y += this.velocity.y

  // minimum opacity for this object
  this.opacity -= 0.1
  }
}

// projectile class
class Enemy_1Projectile
{
 
 // position and velocity
 constructor({position, velocity}){
 this.position = position
 this.velocity = velocity
 
 // Set radius of the ufo projectile
 this.radius = 5
 }
 
 // draw this projectile and fill with color
 draw(){
 c.beginPath()
 c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
 c.fillStyle = 'red'
 c.fill()
 c.closePath()
 }
 
 // Update 
 update(){
 this.draw()
 this.position.x += this.velocity.x
 this.position.y += this.velocity.y
 }
}

// if the player falls below a platform or dies. reset to world pos and vel for all actors
 function init (){
  
  // refresh page
  window.location.reload();

  // restart game
  brestartGame = true
 
  // now that the game has been reset add player health back and enemy health
  playerHealth = 10
  enemy_1Health = 5
  
  // set the player health back to max (10)
  progressBar.style.setProperty('--width', width  = 10)

  player.position ={
    x: 100,
    y: 100
  }
 
  // player velocity
  player.velocity ={
    x: 0,
    y: 0
  }

  // enemy_1 world position
  enemy_1.position ={
    x: 600,
    y: 100
  }
 
  // enemy_1 velocity
  enemy_1.velocity ={
    x: 0,
    y: 0
  }

  // backgroud_1 world position
  background_1.position ={
    x: -15,
    y: 10
  }

  // platform_1 world position
   platform_1.position ={
    x: 0,
    y: 1100
  }
   // platform size
   platform_1.width = 800
   platform_1.height = 1
   
  // platform_2 world position
   platform_2.position ={
    x: 900,
    y: 1100
  }
   // platform size
   platform_2.width = 800
   platform_2.height = 20

   // platform_2 world position
   platform_3.position ={
    x: 1800,
    y: 1100
  }
   // platform size
   platform_3.width = 800
   platform_3.height = 20
  
  }
 
  // consts
 const background_1 = new Background_1 ()
 const player = new Player()
 const platform_1 = new Platform_1()
 const platform_2 = new Platform_2()
 const platform_3 = new Platform_3()
 const projectiles_1 = []
 const enemy_1projectiles = []
 const enemy_1 = new Enemy_1()
 const enemy_1s = []
 const particles_1 = []
 
 // consts keys
 const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}
 // let variable block scope
 let scrollOffset = 0
 
 // player variables
 // how many kills the player has
 var playerkills = 0
 // how many player lives the player has
 var playerLives = 3
 // player health value
 var playerHealth = 10
 // enemy_1 variables
 var enemy_1Health = 5
 // player dialogue value
 var playerDialogue = 1
 
 
 // animate function 
 function animate(){
 requestAnimationFrame(animate)
 c.fillStyle = 'black'
 c.clearRect(0, 0, canvas.width, canvas.height)
 // draw and update these objects on screen
 background_1.update()
 platform_1.draw()
 platform_2.draw()
 platform_3.draw()
 player.update()
 enemy_1.update()

 // if the main player runs out of lives its game over
 if(playerLives < 0){
 console.log('game over')
 }

 // if the player rotation is = to -0.1 then the player is facing right
 if(player.rotation = -0.1){
 bfacingRight = true
 }

 // if the player rotation is = to 0.1 then the player is not facing right but is facing left
 if(player.rotation = 0.1){
  bfacingRight = false
 }
 
 // if right key is pressed move the player right key(a)
 if (keys.right.pressed && player.position.x < 400){
 player.velocity.x
 player.rotation = -0.15
 // if the left is presses move left key(d)
 }else if (
 (keys.left.pressed && player.position.x > 100) || 
 
 // block the player from scrolling off the map
 (keys.left.pressed && scrollOffset === 0 && player.
  position.x > 0)
  ) {
   player.velocity.x = -5
 } else{
  player.velocity.x = 0
  if (keys.right.pressed) {
    scrollOffset += 5 
    platform_1.position.x -= 5
    background_1.position.x -= 4
  } else if (keys.left.pressed && scrollOffset > 0) {
    scrollOffset -= 5
    platform_1.position.x += 5
    background_1.position.x += 4
  }
 }

 // if the player has a collision with the enemy_1projectile
  enemy_1projectiles.forEach((enemy_1projectile) => {
  if(enemy_1projectile.position.x - enemy_1projectile.radius <=
   player.position.y + player.height &&
   enemy_1projectile.position.x + enemy_1projectile.radius >=
   player.position.x &&
   enemy_1projectile.position.x - enemy_1projectile.radius <=
   player.position.x + player.width &&
   enemy_1projectile.position.y + enemy_1projectile.radius >=
   player.position.y
  ){
   setTimeout(() =>{
   enemy_1projectiles.splice(enemy_1projectile,1)
   // remove 1 from player health if player hits enemy_1projectile
   playerHealth -= 1
   // for each time the player loses one health this will also reflect on the screen health bar
   const computedStyle = getComputedStyle(progressBar)
   const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
   progressBar.style.setProperty('--width', width  -1)
   
   // time out do once function note to self
   setTimeout(() =>{
    // for loop of 15 particles
    for (let i = 0; i < 15; i++){
    particles_1.push (new Particle_1({
      position:{
       
       // spawn particles_1 at this location
       x: player.position.x + player.width /2,
       y: player.position.y + player.width /2, 
      },
      velocity:{
       
       // spawn particles_1 at random
       x: (Math.random() -1)*10, 
       y: (Math.random() - 1)*10 
      },
       // actual size of particle_1
      radius: Math.random() * 5,
      
      // color of particle_1
      color: 'red' 
    }))
  }},0
  )

   // if the player health is less then 0 call function below
   if(playerHealth < 1){
   // restart game
    init () 
   }
   },0
  )}})
 
 // if enemy_1 has a collision with the projectile_1
  projectiles_1.forEach((projectile_1) => {
 if(projectile_1.position.x - projectile_1.radius <=
  enemy_1.position.y + enemy_1.height &&
  projectile_1.position.x + projectile_1.radius >=
  enemy_1.position.x &&
  projectile_1.position.x - projectile_1.radius <=
  enemy_1.position.x + enemy_1.width &&
  projectile_1.position.y + projectile_1.radius >=
  enemy_1.position.y
 ){
  setTimeout(() =>{
    projectiles_1.splice(projectile_1,1)
    // remove 1 from player health if player hits enemy_1projectile
    enemy_1Health -= 1
    // Move the enemy away from game world
    if(enemy_1Health < 1){
      enemy_1.velocity =0
    }
    },0
  )
  
  // time out do once function note to self
  setTimeout(() =>{
    // for loop of 15 particles
    for (let i = 0; i < 15; i++){
    particles_1.push (new Particle_1({
      position:{
       
       // spawn particles_1 at this location
       x: enemy_1.position.x + enemy_1.width /2, 
       y: enemy_1.position.y + enemy_1.width /2, 
      },
      velocity:{
       
       // spawn particles_1 at random
       x: (Math.random() -1)*10, 
       y: (Math.random() - 1)*10
      },
      radius: Math.random() * 5, 
      
      // color of particle_1
      color: 'red' 
      }))
    }},0
  )}}
  )
  
 // the player can move on platform_1
 if (player.position.y + player.height <=
  platform_1.position.y &&
  player.position.y + player.height +
  player.velocity.y >=
  platform_1.position.y &&
  player.position.x + player.width >=
  platform_1.position.x &&
  player.position.x <= platform_1.
  position.x + platform_1.width
 ) {
  player.velocity.y = 0 
 }

 // the player can move on platform_2
 if (player.position.y + player.height <=
  platform_2.position.y &&
  player.position.y + player.height +
  player.velocity.y >=
  platform_2.position.y &&
  player.position.x + player.width >=
  platform_2.position.x &&
  player.position.x <= platform_2.
  position.x + platform_2.width
 ) {
  player.velocity.y = 0
 }

 // the player can move on platform_3
 if (player.position.y + player.height <=
  platform_3.position.y &&
  player.position.y + player.height +
  player.velocity.y >=
  platform_3.position.y &&
  player.position.x + player.width >=
  platform_3.position.x &&
  player.position.x <= platform_3.
  position.x + platform_3.width
 ) {
  player.velocity.y = 0
 }
 
 // the enemy_1 can move on platform_1
 if (enemy_1.position.y + enemy_1.height <=
  platform_1.position.y &&
  enemy_1.position.y + enemy_1.height +
  enemy_1.velocity.y >=
  platform_1.position.y &&
  enemy_1.position.x + enemy_1.width >=
  platform_1.position.x &&
  enemy_1.position.x <= platform_1.
  position.x + platform_1.width
 
 ) {
  enemy_1.velocity.y = 0
 }

 // the enemy_1 can move on platform_1
 if (enemy_1.position.y + enemy_1.height <=
  platform_2.position.y &&
  enemy_1.position.y + enemy_1.height +
  enemy_1.velocity.y >=
  platform_2.position.y &&
  enemy_1.position.x + enemy_1.width >=
  platform_2.position.x &&
  enemy_1.position.x <= platform_2.
  position.x + platform_2.width
 ) {
  enemy_1.velocity.y = 0
 }
 
 // if the player has scrolled > 2000 yay you have completed the level
 if(scrollOffset > 2000) {
  // add playerDialogue of 1 so the dialogue can be created. this function is at gametext.js line 49 and 58
  playerDialogue += 1
  console.log('Level Complete')
  }
  
  // if the player falls lower then canvas height restart game
  if(player.position.y > canvas.height){
    init ()
    console.log('Try Again')
  }

  /** if the movement keys are pressed and the player is moving
   the world actors will scroll in the opposite direction to the player*/
  if (keys.right.pressed && player.position.x < 400){
   player.velocity.x = 5
   }else if (
   (keys.left.pressed && player.position.x > 100) || 
   (keys.left.pressed && scrollOffset === 0 && player.
   position.x > 0)
   ){
   
    player.velocity.x = -5
   } else {
    player.velocity.x = 0
    
    /** if the player is moving in a direction then platform_2
    we will move in the opposite direction*/
    if (keys.right.pressed) {
      scrollOffset += 5 
      platform_2.position.x -= 5
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= 5 
      platform_2.position.x += 5
    }

    /** if the player is moving in a direction then platform_3
    we will move in the opposite direction*/
    if (keys.right.pressed) {
      scrollOffset += 5 
      platform_3.position.x -= 5
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= 5 
      platform_3.position.x += 5
    }
    
   /** if the player is moving in a direction then enemy_1
    we will move in the opposite direction*/
    if (keys.right.pressed) {
      scrollOffset += 5 
      enemy_1.position.x -= 5
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= 5 
      enemy_1.position.x += 5
    }
  }
  
  // projectile_1 despawn function
   projectiles_1.forEach((projectile_1, index) => {
  if(projectile_1.position.y + projectile_1.radius <= 0) {
   setTimeout(() => {
   projectiles_1.splice(index, 1)
   }, 0)}else{
   projectile_1.update()
   }
  })
  
  // particle despawn function
  particles_1.forEach((particle_1, fx1) => {
    if (particle_1. opacity <= 0){
    setTimeout(() =>{
    particles_1.splice(fx1, 1)
    },0)
    }else
    particle_1.update()
  })
  
  // enemy_1 despawn function
   enemy_1s.forEach((enemy_1, index) => {
    if(enemy_1.position.y + enemy_1.radius <= 0) {
       setTimeout(() => {
       enemy_1s.splice(index,1 )
       }, 0)}else{
        enemy_1.update()
      }
  } )
  
  // enemy_1 despawn function
  enemy_1projectiles.forEach((enemy_1projectile, index) => {
    if(enemy_1projectile.position.y + enemy_1projectile.radius <= 0) {
       setTimeout(() => {
        enemy_1projectiles.splice(index, 1)
       }, 0)}else{
        enemy_1projectile.update()
      }
  } ) 
}
animate()

 
// event listener input (keydown)
 addEventListener('keydown',({ key}) => 
 {
  switch (key){
   case 'a':
   console.log('left')
   keys.left.pressed = true
   break
 
   case 's':
   console.log('down')
   break
   
   case 'd':
   console.log('Right')
   keys.right.pressed = true
   break
   
   case 'w':
   console.log('up')
  if(player.velocity.y < 1){
   player.velocity.y = 0
   break
  }
  
  // This is space bar
  case ' ': 
  console.log('up')
  if(player.velocity.y < 1){
  player.velocity.y = 0
  break
  }
}
})
 
 // event listener input (keydown)
 addEventListener('keyup',({ key}) => 
 {
  switch (key){
   case 'a':
   console.log('left')
   keys.left.pressed = false
   break
 
   case 's':
   console.log('down')
   break
   
   case 'd':
   console.log('Right')
   keys.right.pressed = false
   break

   
  case 'w':
  console.log('up')
  if(player.velocity.y  <1 ){
  player.velocity.y = -30
  
  }
  break
   
  // This is space bar
  case ' ': 
  console.log('up')
  if(player.velocity.y <1){
  player.velocity.y = -30
  }
  break
  
  case 'e': if(player.rotation = -0.1){
    console.log('Projectile1')
    projectiles_1.push(new Projectile_1({
    position:{
      
      x: player.position.x + player.width / 1,
      y: player.position.y + player.width / 2.2,
     },
   
     velocity:{
     x: 10, y:0
    }
  }))
}

/** if the player is facing, moving right and and firing a projectile
enemy_1 will fire a projectile in the direction of the player*/
case 'e': if(keys.right.pressed && player.position.x < 400 && player.rotation == -0.1){
  console.log('Projectile1')
  enemy_1projectiles.push(new Enemy_1Projectile({
  position:{
    
    x: enemy_1.position.x + enemy_1.width / 3,
    y: enemy_1.position.y + enemy_1.width /3
   },
 
   velocity:{
   x: -10, y:0
  }
}))
}

/** if the player is facing, moving left and and firing a projectile
enemy_1 will fire a projectile in the direction of the player*/
case 'e': if(keys.left.pressed && player.position.x > 100 && player.rotaion == 0.1){
  console.log('Projectile1')
  enemy_1projectiles.push(new Enemy_1Projectile({
  position:{
    
    x: enemy_1.position.x + enemy_1.width / 5,
    y: enemy_1.position.y + enemy_1.width /3
   },
 
   velocity:{
   x: 10, y:0
  }
}))
}

 }
})

