//SUBMIT CONFIRMATION BUTTON 
import { successMsg } from "./index.js";
const okbtn = document.querySelector('.ok_btn');
okbtn.addEventListener('click', function () {
    successMsg.close();
    document.getElementById('patientForm').reset();
});
//# sourceMappingURL=submitConfirmation.js.map