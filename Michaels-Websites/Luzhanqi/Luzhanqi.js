function judge() {
    var input1 = document.getElementById("userInput1").value;
    var input2 = document.getElementById("userInput2").value;
	if(input1 == 10 || input2 == 10)
	{
		alert("Tie!");
	}
	else if(input1 == 11 || input2 == 11)
	{
		if(input1 == 9)
		{
			alert("Player1 wins!");
		}
		else if(input2 == 9)
		{
			alert("Player2 wins!");
		}
		else if(input1 == 11)
		{
			alert("Player1 wins!");
		}
		else if(input2 == 11)
		{
			alert("Player2 wins!");
		}
	}
	else if(input1 == 12 || input2 == 12)
	{
		if(input1 == 12)
		{
		alert("Player2 wins!");
		}
		else if(input2 == 12)
		{
		alert("Player1 wins!");
		}
	}
	else if(input1 < input2)
	{
		alert("Player1 wins!");
	}
	else if(input1 > input2)
	{
		alert("Player2 wins!");
	}
	else
	{
		alert("Tie!");
	}
}