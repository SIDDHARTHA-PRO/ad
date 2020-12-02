class Bob{
    constructor(x,y,r){
         var options={
             isStatic:true,
             restitution:0.5,
             density:0.5,
             friction:1
         }
        this.body=Bodies.circle(x,y,r,options)
        this.x=x
        this.y=y
        this.r=r
        World.add(world,this.body)

    }
    display(){
       

        fill ("brown")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.r)
          
  
  
    }
    


}