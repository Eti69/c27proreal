class Circle{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            'restitution':1.3,
            'friction':5,
            'density':1
        }
    
    this.radius=radius,
    this.x=x,
    this.y=y,
    this.body=Bodies.circle(this.x,this.y,this.radius,options);
    World.add(world,this.body);
    
    }
    
    display(){
    
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS)
    strokeWeight(5);
    stroke('black');
    fill('red');
    ellipse(0,0,this.radius,this.radius)
    pop();
    
    }
    
    }