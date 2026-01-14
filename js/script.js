

const successMsg=document.querySelector(".success_msg");

document.getElementById('patientForm').addEventListener('submit',function(e){
    e.preventDefault();
    const isvalidname=validateName();
    const isvaliddate=validateDate();
    const isvalidphone=validatePhone();
    const isvalidemail=validateEmail();
    const isvalidaddress=validateAddress();
    const isvalidheight=validateHeight();
    const isvalidweight=validateWeight();
    const isvalibloodtype=validateBloodtype();
    const isvaliddisease=validateDisease();
    const isvalidexercise=validateExercise();
    const isvalidprivacy=validatePrivacy();

    const isvalidform=isvalidname && isvaliddate && isvalidphone && isvalidemail && isvalidaddress && isvalidheight && isvalidweight && isvalibloodtype && isvaliddisease && isvalidexercise && isvalidprivacy;
    if(!isvalidform){
        const firstError=document.querySelector(".error");
        if(firstError){
          firstError.scrollIntoView({
            behavior:"smooth",
            block:"center"
          });
          firstError.focus();
        }
        e.preventDefault();
        return;
    }
    createRecord();

    successMsg.showModal();
    
  });

  

