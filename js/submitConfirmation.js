//SUBMIT CONFIRMATION BUTTON 

const okbtn=document.querySelector('.ok_btn');

okbtn.addEventListener('click',function(){
      successMsg.close();
      document.getElementById('patientForm').reset ();
});


