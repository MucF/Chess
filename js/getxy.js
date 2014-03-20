	function getxy(n)   //判断棋子要落在哪一格
	{
		for(var i=70;i<=960;i+=60)
		{
			if(n-i>=-25&&n-i<=25)
			{
				return i;
			}
		}
		return 0;
	}