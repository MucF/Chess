function onSt(e) 
	{       
		x=(e.clientX);
       	y=(e.clientY);
       	x=getxy(x);
        y=getxy(y);
        if(x==0||y==0||req[(x-70)/60][(y-70)/60]==1)return;
        if(b)
        {
        	pic.src = "img/b.png";   
        }
        else	
        {
        	pic.src = "img/w.png"; 
        }
        b=!b;
        
        context.drawImage(pic,x-38,y-38,60,60);

        req[(x-70)/60][(y-70)/60]=1;
	}