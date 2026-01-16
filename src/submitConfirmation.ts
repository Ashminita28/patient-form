//SUBMIT CONFIRMATION BUTTON 
import { successMsg } from "./index.js";
const okbtn=document.querySelector('.ok_btn') as HTMLButtonElement;

okbtn.addEventListener('click',function(){
      successMsg.close();
      (document.getElementById('patientForm') as HTMLFormElement).reset ();
});