class Iron{
	constructor(x,y,wo,ha){
		var options = {
			'restitution':0.8,
			'friction':3,
			'density':30
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width = wo;
        this.height = ha;
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height,options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos = this.body.position;
            var angle = this.body.angle;		
			push();
			translate(ironpos.x, ironpos.y);
            rotate(angle);
			rectMode(CENTER);
			strokeWeight(3);
			stroke("#630103");
			fill("#d90000");
			//draw the ellipse here to display the rubber ball

            rect(0,0,this.width,this.height);
			pop();
	}

}