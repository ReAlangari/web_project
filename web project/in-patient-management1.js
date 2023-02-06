
	
const In_patient = document.querySelectorAll('.In-patient');
console.log(In_patient);

In_patient.forEach((patient, i) => {



    if (patient.classList.contains('empty')) {
        console.log(patient);

        document.getElementById("form").innerHTML += `

       <div class="hidden" id="p-${i}">
       <fieldset>
       <span class="close" onclick="this.parentElement.style.display='none';">&times;</span> 

       <legend style="text-align: center;">patient information</legend>
       <ul>
           <li>
               <label for="name${i}" style="text-align: center;">Name:</label><br>
               <input type="text" id="name${i}" name="name${i}" onfocus="this.value=''" value="Enter the patient name" class="Name"><br>
           </li>
           <li>
               <label for="Date${i}" style="text-align: center;">Discharge date:</label>
               <input type="date" id="Date${i }" name="Date${i}"><br>
           </li>
           <li>
           <button id="enter-${i}">Enter</button>
           </li>
       </ul>
   </fieldset>
   </div>
      
       
    `

       console.log(document.querySelector(`#enter-${i}`));
        document.querySelector(`#enter-${i}`).addEventListener("click", () => {
          
                let a =document.getElementById(`name${i}`).value;
                let c =document.getElementById(`Date${i}`).value;

             console.log(a);
             count = 0;
		     count1=0;
		     text1="";
             text = "Please Fill ";
			 date= new Date(c);
            if (a == null || a == "" || a=="Enter the patient name") {
                text += "Name, ";
                count++;
             
            }
			  if (c== null || c==""){
		     text+="Discharge Date, ";
	         count++;
	         }

            if (a.startsWith("0") || a.startsWith("1") || a.startsWith("2") || a.startsWith("3") || a.startsWith("9") || a.startsWith("4") || a.startsWith("5") || a.startsWith("6") || a.startsWith("7") || a.startsWith("8")) {
                text1 += "\nName field cannot start with numbers";
                count1++;
            }
			 if(date<new Date()){
             text1+="\nDate should be today's or after today's date";
             count1++;}
			

             if(count>0 || count1>0) {
              if(count>0)
             alert(text+"Thank you");
             if(count1>0)
	         alert(text1);}
             if(count==0&&count1==0){
                document.getElementById("form").innerHTML = `
                                <div class="hidden" id="p-${i}">
                             
                                <label for="name${i}">Patient name:</label>
                                </br>
                                <input type="text" id="name${i }" name="name${i }" disabled value="${a}">
                                </br>
                                <label for="Date${i }">discharge dates:</label>
                                </br>
                                <input type="date" id="Date${i }" name="Date${i}" disabled value="${c}">
                                </br>
                                  </div> 
                                ` ;
								
                                patient.children[0].src="images/occupied-bed.png";}
           
          

        });

    }else{
        
        document.getElementById("form").innerHTML += `

        <div class="hidden" id="p-${i}">
        <fieldset>
        <span class="close" onclick="this.parentElement.style.display='none';">&times;</span> 
 
        <legend style="text-align: center;">patient information</legend>
        <ul>
            <li>
                <label for="name" style="text-align: center;">Name:</label><br>
                <input type="text" id="name" name="name" value="Ahmad" class="Name" readonly disabled><br>
            </li>
            <li>
                <label for="Date" style="text-align: center;">Discharge date:</label>
                <input type="text" id="Date" name="Date" value="2023-3-3" readonly disabled><br>
            </li>
            <li>
            <label for="Date" style="text-align: center;">admission date:</label>
            <input type="text" id="Date" name="Date" value="${new Date()}"readonly disabled><br>
        </li>
        </ul>
    </fieldset>
    </div>` ;

    }

});

In_patient.forEach((patient, i) => {
    patient.addEventListener('click', () => {


       
        document.getElementById(`p-${i}`).classList.remove("hidden");
      
    });

        

});
	
		
