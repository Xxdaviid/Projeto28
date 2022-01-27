class Launcher{
    constructor(body,ancora){
    var options={
    
    pointB:ancora,
    stiffness:0.004,
    length:1    
    }
this.bodyA=body
    this.pointB=ancora
    this.launcher= Constraint.create(options);
    World.add(world,this.launcher);
    }
    fly(){
    this.launcher.bodyA=null;    
    }
attach(body){
this.launcher.bodyA=body;
}
    display(){
    if(this.launcher.bodyA){
    var pontoA=this.bodyA.position;
    var pontoB=this.pointB;
    strokeWeight(4);
    line(pontoA.x,pontoA.y,pontoB.x,pontoB.y);
    }
    
    }
    }