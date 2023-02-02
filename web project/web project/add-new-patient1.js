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
    if (a == null || a == ""){
	alert("Please Fill Name field");
	count++;}
	if (d == null || d == ""){
	alert("Please Fill National ID field");
	count++;}
	if (e == null || e == ""){
	alert("Please Fill Phone Number field");
	count++;}
	if (b == null || b == ""){
	alert("Please Fill Date of Birth field");
	count++;}
	if (h == null || h == ""){
    alert("Please Fill Photo field");
	count++;}
	if (c == null || c == ""){
	alert("Please Fill Martial Status field");
	count++;}
	 if (f == null || f == ""){
	alert("Please Fill Address field");
	count++;}
	 if (g == null || g == ""){
	alert("Please Fill Insurance company name field");
	count++;}

	if (a.startsWith("0") || a.startsWith("1")|| a.startsWith("2")|| a.startsWith("3")|| a.startsWith("9")|| a.startsWith("4")|| a.startsWith("5")|| a.startsWith("6")|| a.startsWith("7")|| a.startsWith("8"))
	{alert("Name field cannot start with numbers");
count++;}
    
	if ((e.length>10 || e.length<10) && !(e==null|| e=="")){
	alert("Phone Number field cannot be less or more than 10 digits");
	count++;}
  
  if(count>0) ;
	  
  else{
	document.getElementById('header').innerHTML="*Patient Information*";
	document.getElementById('name1').innerHTML="Name:"+a;
	document.getElementById('PhoneNumber').innerHTML="Phone Number:"+e;
	document.getElementById('NID').innerHTML="National ID:"+d;
	document.getElementById('Gender').innerHTML="Gender:"+i;
	document.getElementById('dob').innerHTML="Date of Birth:"+b;
	document.getElementById('photo1').innerHTML="Photo:"+h;
	document.getElementById('MS1').innerHTML="Martial Status:"+c;
	document.getElementById('address1').innerHTML="Address:"+f;
	document.getElementById('Icn').innerHTML="Insurance company name:"+g;
  }
  document.getElementById('header').style.color='black';
  }