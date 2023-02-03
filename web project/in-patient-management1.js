
function validateFOrm(){

var a = document.forms["form"]["name"].value;	

   count=0;
   text="Please Fill ";
    if (a == null || a == ""){
	text+="Name, ";
	count++;}

	if (a.startsWith("0") || a.startsWith("1")|| a.startsWith("2")|| a.startsWith("3")|| a.startsWith("9")|| a.startsWith("4")|| a.startsWith("5")|| a.startsWith("6")|| a.startsWith("7")|| a.startsWith("8"))
	{text+="*Name field cannot start with numbers*";
    count++;}
  
	 if(count>0) {
   alert(text+"Thank you");}	
}

function pictureRc() {
alert("Name: Sara Khalid\nAdmission:2022/11/20\nDischarge Date:2023/1/1")}