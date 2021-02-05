class Particle {
    constructor(x, y){

        var options = {isStatic: false, restitution: 0.7, friction: 0.5, density: 1};
        this.body = Matter.Bodies.circle(x, y, 10 ,options); 
        this.radius = 10;
        
        
        this.colour = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);

        
        }
        display(){
            push();
            ellipseMode(RADIUS);
            fill(this.colour);
            ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
            pop();
            
        }



}