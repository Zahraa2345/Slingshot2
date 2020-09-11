class Chain {
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 25,
        }
        this.pointB = pointB
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    
    

    attach(body){
        this.chain.bodyA = body;
    }
    
    
    
    fly() {
        this.chain.bodyA= null;
    }
     

    display(){
    
        if(this.chain.bodyA){
            var pointA=this.chain.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(5);
            stroke(99,40,11);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        
            
            if(pointA.x < 220) {
                line(pointA.x,pointA.y,pointB.x,pointB.y);
                //line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                //line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            
    
    }
    } 
    
    
    }
    