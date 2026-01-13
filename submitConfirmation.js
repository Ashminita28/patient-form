const openModalBtn=document.querySelector(".btn");
const successMsg=document.querySelector(".success_msg");

openModalBtn.addEventListener("click",function(){
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
        else{
          successMsg.showModal();
        }
        // return;
    }
})