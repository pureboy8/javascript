function TryFunction(){
	var message,x;
	message = document.getElementById("p01");
	message.innerHTML = "";
	x = document.getElementById("demo").value;
	try{
		if(x == "") throw "值为空";
		if(isNaN(x)) throw "值不是一个数字";
		x = Number(x);
		if(x > 10) throw "值太大";
		if(x < 5) throw "值太小";
	}
	catch(err){
		message.innerHTML = "错误：" + err + ".";
	}
	finally{
		document.getElementById("demo").value = "";
	}
}

function ReturnMistake(){
	// var
	// power = 10;
	var power = 10;
	return
	power;
	// return power;

	// return power;
}

function ShowReturnMistake(){
	document.getElementById("returnType").innerHTML = typeof(ReturnMistake())
}