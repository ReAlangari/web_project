function pictureRc() {
alert("Name: Sara Khalid\nAdmission:2022/11/20\nDischarge Date:2023/1/1")} 




function validateform() {
	count=0;
	count1=0;
	text="Please Fill ";
	text1="";
	var a = document.forms["form"]["name"].value;
	var b=  document.forms["form"]["Date"].value;
	date= new Date(b);
	
	if (a== null || a==""){
		text+="Patient name, ";
	count++;
	}
		if (b== null || b==""){
		text+="Discharge Date, ";
	count++;
	}
  if (a.startsWith("0") || a.startsWith("1")|| a.startsWith("2")|| a.startsWith("3")|| a.startsWith("9")|| a.startsWith("4")|| a.startsWith("5")|| a.startsWith("6")|| a.startsWith("7")|| a.startsWith("8"))
	{text1+="\nName field cannot start with numbers";
count1++;}

if(date<new Date()){
text1+="\nDate should be today's or after today's date";
count1++;}

	
 if(count>0 || count1>0) {
  if(count>0)
  alert(text+"Thank you");
  if(count1>0)
	  alert(text1);
  }
}
		
		
