  function validateForm() {
    var a = document.forms["Form"]["name"].value;
    var b = document.forms["Form"]["DOB"].value;
    var c = document.forms["Form"]["martialStatus"].value;
    var d = document.forms["Form"]["ID"].value;
	var e = document.forms["Form"]["phoneNumber"].value;
    var f = document.forms["Form"]["address"].value;
    var g = document.forms["Form"]["Insurance company name"].value;
    var h = document.forms["Form"]["photo"].value;
	var i=  document.forms["Form"]["gender"].value;
 count=0;
 text="Please Fill ";
 count1=0;
 text1="";

    if (a == null || a == ""){
	text+="Name, ";
	count++;}
	if (d == null || d == ""){
	text+="National ID, ";
	count++;}
	if (e == null || e == ""){
	text+="Phone Number, ";
	count++;}
	if (b == null || b == ""){
	text+="Date of Birth, ";
	count++;}
	if (h == null || h == ""){
   text+="Photo, ";
	count++;}
	if (c == null || c == ""){
	text+="Martial Status, ";
	count++;}
	 if (f == null || f == ""){
	text+="Address, ";
	count++;}
	 if (g == null || g == ""){
	text+="Insurance company name, ";
	count++;}

	if (a.startsWith("0") || a.startsWith("1")|| a.startsWith("2")|| a.startsWith("3")|| a.startsWith("9")|| a.startsWith("4")|| a.startsWith("5")|| a.startsWith("6")|| a.startsWith("7")|| a.startsWith("8"))
	{text1+="\n*Name field cannot start with numbers*";
count1++;}
    
	if ((e.length>10 || e.length<10) && !(e==null|| e=="")){
	text1+="\n*Phone Number field cannot be less or more than 10 digits*";
	count1++;}
	
		if ((d.length>10 || d.length<10) && !(d==null|| d=="")){
	text1+="\n*National ID Field cannot be less or more than 10 digits*";
	count1++;}
	
  
  if(count>0 || count1>0) {
  if(count>0)
  alert(text+"Thank you");
  if(count1>0)
	  alert(text1);
  }
	  
  else{
	document.getElementById('header').innerHTML="*Patient Information*";
	document.getElementById('name1').innerHTML="Name:"+a;
	document.getElementById('PhoneNumber').innerHTML="Phone Number:"+e;
	document.getElementById('NID').innerHTML="National ID:"+d;
	document.getElementById('Gender').innerHTML="Gender:"+i;
	document.getElementById('dob').innerHTML="Date of Birth:"+b;
	document.getElementById('MS1').innerHTML="Martial Status:"+c;
	document.getElementById('address1').innerHTML="Address:"+f;
	document.getElementById('Icn').innerHTML="Insurance company name:"+g; 
  }
  document.getElementById('header').style.color='black';
  }
