function OnClickBtnEvent(){
	document.getElementById("time").innerHTML = Date();
}


function SayHi(time){
	var sentence;
	if(time < 10){
		sentence = "早上好";
	}
	else if(time >= 10 && time < 20){
		sentence = "今天好";
	}
	else{
		sentence = "晚上好";
	}
	document.getElementById("sayHi").innerHTML = sentence;
}

function ShowDay(){
	var d = new Date().getDay();
	var day;
	switch(d){
		case 0:
			day = "周日";
			break;
		case 1:
			day = "周一";
			break;
		case 2:
			day = "周二";
			break;
		case 3:
			day = "周三";
			break;
		case 4:
			day = "周四";
			break;
		case 5:
			day = "周五";
			break;
		default:
			day = "周六";
			break;
	}
	document.getElementById("showDay").innerHTML = "今天是"+day;
}

function ShowNum(){
	var sentence = '';
	for(var i = 1;i<=100;++i){
		sentence += i + ","
	}
	document.getElementById("forLoop").innerHTML = sentence;
}

function ShowName(){
	var names = ["小红","小刚","小飞"];
	var sentence = '';
	for(var index in names){
		sentence += names[index];
	}
	document.getElementById("forIn").innerHTML = sentence;
}

function ShowNumWhile(){
	var index = 1;
	var sentence = '';
	while(index <= 100){
		sentence += index +',';
		index++;
	}
	document.getElementById("whileLoop").innerHTML = sentence;
}

function ShowNumBreak(num){
	var sentence = '';
	for(var index = 1;index <= 10;index++){
		if(index == num)
			break;
		sentence += index + ',';
	}
	document.getElementById("break").innerHTML = sentence;
}

function ShowNumContinue(num){
	var sentence = '';
	for (var index = 1;index <= 10;index++){
		if (index == num)
			continue;
		sentence += index + ',';
	}
	document.getElementById("continue").innerHTML = sentence;
}