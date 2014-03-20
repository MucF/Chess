	function drawRect() {
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");
	 	for(var x=60;x<=900;x+=60)
		{	
			//context.strokeStyle="green";
			context.beginPath();
			context.moveTo(60,x);
			context.lineTo(900,x);
			context.stroke();
			context.beginPath();
			context.moveTo(x,60);
			context.lineTo(x,900);
			context.stroke();
		}
	}