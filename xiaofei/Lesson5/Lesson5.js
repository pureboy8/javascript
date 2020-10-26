function validateForm(){
	var x = document.forms["myForm"]["fname"].value;
	if(x == null || x == ""){
		alert("需要输入名字.");
		return false;
	}
}

function validateEmail(){
	var x = document.forms["emailForm"]["email"].value;
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
	if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length){
		alert("不是一个有效的email地址");
		return false;
	}
	

}

function validateNum(){
	var inpObj = document.getElementById("id1");
	if (inpObj.checkValidity() == false){
		document.getElementById("demo").innerHTML = inpObj.validationMessage;
	}
}