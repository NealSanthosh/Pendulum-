class Chain {
    constructor(bodyA,bodyB){
        var option ={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.1,
            length: 300
        }
        this.chain = Matter.Constraint.create(option)
        World.add(world,this.chain);
    }
}