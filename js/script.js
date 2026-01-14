

const successMsg=document.querySelector(".success_msg");

document.getElementById('patientForm').addEventListener('submit',function(e){
    e.preventDefault();
    if(!validateAll()){
        const firstError=document.querySelector(".error");
        alert('Fix validation error');
        if(firstError){
          firstError.scrollIntoView({
            behavior:"smooth",
            block:"center"
          });
          firstError.focus();
        }
        return;
    }
    createRecord();

    successMsg.showModal();
    
  });

  

