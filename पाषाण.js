class Stone{
	constructor(x,y,wa,hi){
		var options = {
			'restitution':0.8,
			'friction':0.9,
			'density':12
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width = wa;
        this.height = hi;
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height,options)
		World.add(world, this.body);

	}
	display()
	{
			var pos = this.body.position;
            var angle = this.body.angle;		
			push();
			translate(pos.x, pos.y);
            rotate(angle);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("#e00d8c");
			//draw the ellipse here to display the rubber ball

            rect(0,0,this.width,this.height);
			pop();
	}

}