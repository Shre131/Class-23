class BOX {
constructor(x,y,width,height) { 
    var Options={
        restitution:0.7
    }
    this.body=Bodies.rectangle(x,y,width,height,Options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);

}
display() {
    var pos=this.body.position;
    var angle=this.body.angle;
    push()
    translate(pos.x,pos.y);
    rotate(angle)
    angleMode(RADIANS);
    rectMode(CENTER) 
rect(0,0,this.width,this.height);
pop()

}
}