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


const In_patient = document.querySelectorAll('.In-patient');
console.log(In_patient
)

In_patient.forEach((patient, i) => {



    if (patient.classList.contains('empty')) {
        console.log(patient)

        document.getElementById("form").innerHTML += `

       <div class="hidden" id="p-${i}">
       <fieldset>
       <span class="close" onclick="this.parentElement.style.display='none';">&times;</span> 

       <legend style="text-align: center;">patient information</legend>
       <ul>
           <li>
               <label for="name${i }" style="text-align: center;">Name:</label><br>
               <input type="text" id="name${i}" name="name${i }" value="Enter the patient name" class="Name"><br>
           </li>
           <li>
               <label for="Date${i }" style="text-align: center;">Discharge date:</label>
               <input type="date" id="Date${i }" name="Date${i }"><br>
           </li>
           <li>
           <button id="enter-${i}">Enter</button>
           </li>
       </ul>
   </fieldset>
   </div>
      
       
    `; 

       console.log(  document.querySelector(`#enter-${i}`))
        document.querySelector(`#enter-${i}`).addEventListener("click", () => {
          
                let a =document.getElementById(`name${i}`).value
                let c =document.getElementById(`Date${i}`).value

          console.log(a)
         count = 0;
            text = "Please Fill ";
            if (a == null || a == "") {
                text += "Name, ";
                count++;
             
            }

            if (a.startsWith("0") || a.startsWith("1") || a.startsWith("2") || a.startsWith("3") || a.startsWith("9") || a.startsWith("4") || a.startsWith("5") || a.startsWith("6") || a.startsWith("7") || a.startsWith("8")) {
                text += "*Name field cannot start with numbers*";
                count++;
            

            }

            if (count > 0) {
                alert(text+ "Thank you");
             
                document.getElementById("form").innerHTML = `
                                <div class="hidden">
                             
                                <label for="name${i}">Patient name:</label>
                                </br>
                                <input type="text" id="name${i }" name="name${i }" disabled value="${a}">
                                </br>
                                <label for="Date${i }">discharge dates:</label>
                                </br>
                                <input type="date" id="Date${i }" name="Date${i}" disabled value="${c}">
                                </br>
                                  </div>
                                `
                                patient.children[0].src="images/occupied-bed.png"
           }
          

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
                <input type="text" id="name" name="name" value="Ahmad" class="Name" disable><br>
            </li>
            <li>
                <label for="Date" style="text-align: center;">Discharge date:</label>
                <input type="text" id="Date" name="Date" value="2023-3-3" disable><br>
            </li>
            <li>
            <label for="Date" style="text-align: center;">admission date date:</label>
            <input type="text" id="Date" name="Date" value="${new Date()}" disable><br>
        </li>
        </ul>
    </fieldset>
    </div>`

    }


});

In_patient.forEach((patient, i) => {
    patient.addEventListener('click', () => {


       
        document.getElementById(`p-${i}`).classList.remove("hidden")
      
    });

        

})

