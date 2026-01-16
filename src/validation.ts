const fullName = document.getElementById("fullName") as HTMLInputElement;
const dob = document.getElementById("dob") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const phone = document.getElementById("phone") as HTMLInputElement;
const address = document.getElementById("address") as HTMLTextAreaElement;
const height = document.getElementById("height") as HTMLInputElement;
const weight = document.getElementById("weight") as HTMLInputElement;
const bloodPressure = document.getElementById("bloodPressure") as HTMLInputElement;
const bloodTempreture = document.getElementById("bloodTempreture") as HTMLInputElement;
const bloodType = document.getElementById("bloodType") as HTMLSelectElement;
const privacy = document.getElementById("privacy") as HTMLInputElement;
const disease = document.querySelectorAll('input[name="disease"]') as NodeListOf<HTMLInputElement>;
const exercise = document.querySelectorAll('input[name="exercise"]') as NodeListOf<HTMLInputElement>;
const sleepHours=document.getElementById("sleepHours") as HTMLInputElement;

console.log(exercise.length);
console.log(disease.length);

// VALIDATE NAME FIELD
export function validateName(): boolean {
  const nameError = document.getElementById("errorName") as HTMLElement;
  if (fullName.value.trim() === "") {
    nameError.textContent = "*Name is required";
    return false;
  }
  if (/[^A-Za-z]+$/.test(fullName.value.trim())) {
    nameError.textContent = "*Letters only";
    return false;
  }
  nameError.textContent = "";
  return true;
}


// VALIDATE DOB FIELD
export function validateDob(): boolean {
  const dobError = document.getElementById("errorDob") as HTMLSpanElement;
  if (!dob.value) {
    dobError.textContent = "*Date of birth required";
    return false;
  }
  const today: string = new Date().toISOString().slice(0, 10);
  dob.max = today;
  const currentDate: Date = new Date();
  const dobDate: Date = new Date(dob.value);
  if (dobDate > currentDate) {
    dobError.textContent = "*Date of Birth cannot be in future";
    return false;
  }
  let age: number = currentDate.getFullYear() - dobDate.getFullYear();
  const month: number = currentDate.getMonth() - dobDate.getMonth();
  if (month < 0 || (month === 0 && currentDate.getDate() < dobDate.getDate())) {
    age--;
  }
  if (age < 18) {
    dobError.textContent = "*Age should be above 18";
    return false;
  }
  dobError.textContent = "";
  return true;
}


// VALIDATE  EMAIL FIELD
export function validateEmail(): boolean {
  const emailError = document.getElementById("errorEmail") as HTMLSpanElement;

  const ePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    emailError.textContent = "*Email required";
    return false;
  }
  if (!ePattern.test(email.value.trim())) {
    emailError.textContent = "*Invalid email format";
    return false;
  }
  emailError.textContent = "";
  return true;
}


// VALIDATE PHONE NUMBER FIELD
export function validatePhone(): boolean {
  let pval = phone.value.trim();
  const phoneError = document.getElementById("errorPhone") as HTMLSpanElement;

  if (pval.length > 10) {
    pval = pval.slice(0, 10);
  }
  if (pval === "") {
    phoneError.textContent = "*Phone number required";
    return false;
  }
  phoneError.textContent = "";
  return true;
}


// VALIDATE ADDRESS FIELD
export function validateAddress(): boolean {
  let aval = address.value.trim();
  const addressError = document.getElementById(
    "errorAddress"
  ) as HTMLSpanElement;
  if (!aval) {
    addressError.textContent = "*Address required";
    return false;
  }
  addressError.textContent = "";
  return true;
}


// VALIDATE HEIGHT FIELD
export function validateHeight(): boolean {
  const heightError = document.getElementById("errorHeight") as HTMLSpanElement;
  const hval = Number(height.value);
  if (!hval) {
    heightError.textContent = "*Height required";
    return false;
  }
  if (hval < 100 || hval > 250) {
    heightError.textContent = "*Height must be between 100 to 250";
    return false;
  }
  heightError.textContent = "";
  return true;
}


// VALIDATE WEIGHT FIELD
export function validateWeight(): boolean {
  const weightError = document.getElementById(
    "errorWeight"
  ) as HTMLInputElement;
  const wval = Number(weight.value);
//   console.log(wval);
  if (!wval) {
    weightError.textContent = "*Weight required";
    return false;
  }
  if (wval < 30 || wval > 200) {
    weightError.textContent = "*Weigth must be between 30 to 200";
    return false;
  }
  weightError.textContent = "";
  return true;
}

// VALIDATE BLOOD TYPE FIELD
export function validateBloodtype(): boolean {
  const bloodError = document.getElementById("errorBlood") as HTMLSelectElement;
  if (bloodType.value === "") {
    bloodError.textContent = "*Select blood group";
    return false;
  }
  bloodError.textContent = "";
  return true;
}


// VALIDATE DISEASE FIELD
export function validateDisease():boolean{
  const diseaseError = document.getElementById("errorDisease") as HTMLSpanElement;
  let checked = 0;
  disease.forEach((c) => {
    if (c.checked) checked++;
  });
  if (checked === 0) {
    diseaseError.textContent = "*Select at least one";
    return false;
  }
  diseaseError.textContent = "";
  return true;
}


// VALIDATE EXERCISE FIELD
export function validateExercise():boolean{
  const exerciseError = document.getElementById("errorExercise") as HTMLInputElement;
  let selected = false;
  exercise.forEach((r) => {
    if (r.checked) selected = true;
  });
  if (!selected) {
    exerciseError.textContent = "*Select at least one";
    return false;
  }
  console.log(selected);
  exerciseError.textContent = "";
  return true;
}


// VALIDATE PRIVACY FIELD
export function validatePrivacy(): boolean {
  const privacyError = document.getElementById(
    "errorPrivacy"
  ) as HTMLInputElement;
  if (!privacy.checked) {
    privacyError.textContent = "*Please agree to the privacy policy";
    return false;
  }
  privacyError.textContent = "";
  return true;
}

// VALIDATE BLOOD PRESSURE
function validateBloodpressure() {
  const pressureError = document.getElementById("errorPressure") as HTMLSpanElement;
  const bpval = Number(bloodPressure.value);
  if (bpval < 70 || bpval > 250) {
    pressureError.textContent = "*Blood Pressure must be between (70-250 mmHg)";
    return false;
  }
  pressureError.textContent = "";
  return true;
}

// VALIDATE BLOOD TEMP. INPUT FIELD
function validateBloodtemp() {
  const tempError = document.getElementById("errorTemp") as HTMLSpanElement;
  const btval = Number(bloodTempreture.value);
  if (btval < 30 || btval > 45) {
    tempError.textContent =
      "*Blood temprature must be between (30 - 45 degree celcius)";
    return false;
  }
  tempError.textContent = " ";
  return true;
}

// VALIDATE SLEEPHOURS INPUT FIELD
function validateSleephours() {
  const sleepError = document.getElementById("errorSleep") as HTMLInputElement;
  const sval = Number(sleepHours.value);
  if (sval < 0 || sval > 24) {
    sleepError.textContent = "*Sleep hour must be betwwen 0 to 24 hours";
    return false;
  }
  sleepError.textContent = "";
  return true;
}


fullName.addEventListener('input',()=>{
    validateName();
})
dob.addEventListener('change',()=>{
    validateDob();
})
email.addEventListener('input',()=>{
    validateEmail();
})
phone.addEventListener('input',()=>{
    validatePhone();
})
address.addEventListener('input',()=>{
    validateAddress();
})
height.addEventListener('input',()=>{
    validateHeight();
})
weight.addEventListener('input',()=>{
    validateWeight();
})
bloodPressure.addEventListener('input',()=>{
    validateBloodpressure();
})
bloodTempreture.addEventListener('input',()=>{
    validateBloodtemp();
})
bloodType.addEventListener('change',()=>{
    validateBloodtype();
})
sleepHours.addEventListener('input',()=>{
    validateSleephours();
})

disease.forEach(checkbox=>{
    checkbox.addEventListener('change',()=>{
    validateDisease();
})
});

exercise.forEach(radio=>{
    radio.addEventListener('change',()=>{
    validateExercise();
})
})
privacy.addEventListener('change',()=>{
    validatePrivacy();
})

