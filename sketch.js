const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight = 280;

function setup() {
  createCanvas(485, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(235, 790, 500, 25);

  for (var k = 0; k <= width; k = k + 80 ){
divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight) )
  }
  for (var j = 40; j <= width; j = j + 50 ){
    plinkos.push(new Plinko(j, 75, 10) )
  }
  for (var j = 15; j <= width-10; j = j + 50 ){
      plinkos.push(new Plinko(j, 175, 10) )
  }
  for (var j = 40; j <= width -10; j = j + 50 ){
      plinkos.push(new Plinko(j, 275, 10) )
  }
  for (var j = 15; j <= width -10; j = j + 50 ){
      plinkos.push(new Plinko(j, 375, 10) )
  }
  Engine.run(engine); 
}
function draw() {
  background(0);  
  Engine.update(engine);

  if(frameCount % 60 === 0){
    particle = new Particle(random(width/2-10, width/2+10), 10, 10);
    particles.push(particle);
  }
  
  for (var k = 0; k < divisions.length; k = k +1 ){
    divisions[k].display();
  }
    for (var j = 0; j < plinkos.length; j = j + 1 ){
      plinkos[j].display();
   }
 
   for (var j = 0; j < particles.length; j++ ){
    particles[j].display();
}  

  ground.display();
  drawSprites();
}