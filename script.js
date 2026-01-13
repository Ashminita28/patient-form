
const successMsg=document.querySelector(".success_msg");
document.getElementById('patientForm').addEventListener('submit',function(e){
    e.preventDefault();
    if(!validateAll()){
        alert("FIX VALIDATION ERROR");
        const firstError=document.querySelector(".error");
        if(firstError){
          firstError.scrollIntoView({
            behavior:"smooth",
            block:"center"
          });
          firstError.focus();
        }
        return;
    }
    // document.getElementById("submitBtn").style.backgroungColor="#4070f4"
    createRecord();
    successMsg.showModal();
    document.getElementById('patientForm').reset ();
  });

  

