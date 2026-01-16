import { validateName, validateDob, validateEmail, validatePhone, validateAddress, validateHeight, validateWeight, validateBloodtype, validateDisease, validateExercise, validatePrivacy } from './validation.js';
import { createRecord } from './table.js';
const form = document.getElementById('patientForm');
export const successMsg = document.querySelector(".success_msg");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isvalidname = validateName();
    const isvaliddob = validateDob();
    const isvalidemail = validateEmail();
    const isvalidphone = validatePhone();
    const isvalidaddress = validateAddress();
    const isvalidheight = validateHeight();
    const isvalidweight = validateWeight();
    const isvalidbloodtype = validateBloodtype();
    const isvaliddisease = validateDisease();
    const isvalidexercise = validateExercise();
    const isvalidprivacy = validatePrivacy();
    const isvalidform = isvalidname && isvaliddob && isvalidphone && isvalidemail && isvalidaddress && isvalidheight && isvalidweight && isvalidbloodtype && isvalidexercise && isvaliddisease && isvalidprivacy;
    if (!isvalidform) {
        const firstError = document.querySelector(".error");
        if (firstError) {
            firstError.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            firstError.focus();
        }
        e.preventDefault();
        return;
    }
    createRecord();
    successMsg.showModal();
});
//# sourceMappingURL=index.js.map