
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var particle;
 
var gameState = "playing";

var Grond;
var score1 = 0;


function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Grond = new Ground(240,695,800,10);
	
	border1 = new Ground(480,400,20,800);
	border2 = new Ground(0,400,20,800);

	

	for(var k = 0; k<=width; k = k+80){
		divisions.push(new division(k,height-divisionHeight/2, 10, divisionHeight));
		}
	
		for(var j = 40; j <= width; j = j+50){
			plinkos.push(new Plinko(j,75));
		}

		for(var j = 20; j <= width; j = j+60){
			plinkos.push(new Plinko(j,155));
		}

		for(var j = 40; j <= width; j = j+50){
			plinkos.push(new Plinko(j,235));
		}

		for(var j = 140; j <= width; j = j+50){
			plinkos.push(new Plinko(j,295));
		}

		for(var j = 140; j <= width; j = j+50){
			plinkos.push(new Plinko(j,355));
		}
		
		for(var j = 30; j <= width/2; j = j+50){
			plinkos.push(new Plinko(j,415));
		}
		
		for(var j = 140; j <= width; j = j+50){
			plinkos.push(new Plinko(j,475));
		}
		

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  a();

  textSize(10)
  fill("white");
  text("Score:"+ score1, 600,280);


 



	for(var k = 0; k<divisions.length; k++){
        divisions[k].display();
		}
		
		for(var k = 0; k<particles.length; k++){
			particles[k].display();
			}

		for(var j = 0; j<plinkos.length;j++){
			plinkos[j].display();
			}

	
	Grond.display();

	if(particle!=null){
		particle.display();
		if(particle.body.position.y>760){
			if(particle.body.position.x<300){
				score1 = score1 + 500; 
				particle = null;
			}
		}
	}
	

    
}

function a(){
	if(frameCount%60 === 0){
		particles.push(new Particle(random(width/2-10, width/2+10),10));
	}
	
}



function mousePressed(){
	if(gameState !== "end"){
		particle = new Particle(mouseX,10, 10, 10);
	}
}









