document.getElementById("fullName").addEventListener("input", validateName);
document.getElementById("dob").addEventListener("change", validateDate);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("phone").addEventListener("input", validatePhone);
document.getElementById("address").addEventListener("input", validateAddress);
document.getElementById("height").addEventListener("input", validateHeight);
document.getElementById("weight").addEventListener("input", validateWeight);

document.getElementById("bloodPressure").addEventListener("input",validateBloodpressure);
document.getElementById("bloodTempreture").addEventListener("input",validateBloodtemp);
document.getElementById("bloodType").addEventListener("change", validateBloodtype);
document.getElementById("sleepHours").addEventListener("input",validateSleephours);

document.getElementsByName("disease").forEach((c) => {
  c.addEventListener("change", validateDisease);
});
document.getElementsByName("exercise").forEach((r) => {
  r.addEventListener("change", validateExercise);
});

document.getElementById("privacy").addEventListener("change", validatePrivacy);


// value of fields
const val = fullName.value.trim();
const nameError = document.getElementById("errorName");

const dval = dob.value;
const dobError = document.getElementById("errorDob");

const emval=email.value.trim();
const emailError = document.getElementById("errorEmail");

const pval=phone.value.trim();
const phoneError=document.getElementById("errorPhone");

const aval=address.value.trim();
const addressError = document.getElementById("errorAddress");

const heightError = document.getElementById("errorHeight");
const hval = height.value;

const weightError = document.getElementById("errorWeight");
const wval = weight.value;

const bloodError = document.getElementById("errorBlood");

const diseaseError = document.getElementById("errorDisease");
const checks = document.getElementsByName("disease");
const checked = 0;

const exerciseError = document.getElementById("errorExercise");
const radios = document.getElementsByName("exercise");
const selected = false;


const privacyError = document.getElementById("errorPrivacy");









// VALIDATE NAME INPUT FIELD
function validateName() {
  if (val === "") {
    nameError.textContent = " *Name is required";
    return false;
  }
  if (/[^A-Za-z]+$/.test(val)) {
    nameError.textContent = "*Letters only";
    return false;
  }
  nameError.textContent = "";
  return true;
}


// VALIDATE DATE INPUT FIELD
function validateDate() {
  const today = new Date().toISOString().split("T")[0];
  dob.max = today;
  const currentDate = new Date();
  if (!dval) {
    dobError.textContent = "*date of Birth required";
    return false;
  }
  const dobDate = new Date(dval);
  const age = currentDate.getFullYear() - dobDate.getFullYear();
  const month = currentDate.getMonth() - dobDate.getMonth();

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


// VALIDATE EMAIL INPUT FIELD
function validateEmail() {
  const ePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emval) {
    emailError.textContent = "* Email required";
    return false;
  }
  if (!ePattern.test(emval)) {
    emailError.textContent = "*Invalid email format";
    return false;
  }
  emailError.textContent = "";
  return true;
}


// VALIDATE PHONE INPUT FIELD
function validatePhone() {
  if(pval.length>10){
    pval=pval.slice(0,10);
  }
  if (pval === "") {
    phoneError.textContent = "*Phone number required";
    return false;
  }
  // if (!isNaN(pval)) {
  //   phoneError.textContent = "*digits only";
  //   return false;
  // }
  phoneError.textContent = "";
  return true;
}

// VALIDATE ADDRESS INPUT FIELD
function validateAddress() {
  if (!aval) {
    addressError.textContent = "Address required";
    return false;
  }
  addressError.textContent = "";
  return true;
}


// VALIDATE HEIGHT INPUT FIELD
function validateHeight() {
  if (hval == "") {
    heightError.textContent = "Height required";
    return false;
  }
  if (hval < 100 || hval > 250) {
    heightError.textContent = "* height must be between 100 to 250";
    return false;
  }
  heightError.textContent = "";
  return true;
}

// VALIDATE WEIGHT INPUT FIELD
function validateWeight() {
  
  if (!wval) {
    weightError.textContent = "Weight required";
    return false;
  }
  if (wval < 30 || wval > 200) {
    weightError.textContent = "* weigth must be between 30 to 200";
    return false;
  }
  weightError.textContent = "";
  return true;
}


//VALIDATE DROP-DOWN INPUT FIELD
function validateBloodtype() {
  if (bloodType === "") {
    bloodError.textContent = "*Select blood group";
    return false;
  }
  bloodError.textContent = "";
  return true;
}

 // VALIDATE BLOODPRESSURE INPUT FIELD

function validateBloodpressure(){
  const pressureError=document.getElementById("errorPressure");
  const bpval=bloodPressure.value;
  if(bpval<70 || bpval>250){
    pressureError.textContent="*Blood Pressure must be between (70-250 mmHg)"
    return false;
  }
  pressureError.textContent="";
  return true;
}

// VALIDATE BLOOD TEMP. INPUT FIELD
function validateBloodtemp(){
  const tempError=document.getElementById("errorTemp");
  const btval=bloodTempreture.value;
  if(btval<30 || btval>45){
    tempError.textContent="*Blood temprature must be between (30 - 45 degree celcius)"
    return false;
  }
  tempError.textContent=" ";
  return true;
}

// VALIDATE SLEEPHOURS INPUT FIELD
function validateSleephours(){
   const sleepError=document.getElementById("errorSleep");
   const sval=sleepHours.value;
   if(sval<0 || sval>24){
    sleepError.textContent="*Sleep hour must be betwwen 0 to 24 hours";
    return false;
   }
   sleepError.textContent="";
   return true;
}

// VALIDATE CHECKBOX INPUT FIELD

function validateDisease() {
  
  checks.forEach((r) => {
    if (r.checked) checked++;
  });
  if (checked === 0) {
    diseaseError.textContent = "*select at least one";
    return false;
  }
  diseaseError.textContent = "";
  return true;
}

// VALIDATE RADIO INPUT FIELD

function validateExercise() {
  
  radios.forEach((r) => {
    if (r.checked) selected = true;
  });
  if (!selected) {
    exerciseError.textContent = "select at least one";
    return false;
  }
  exerciseError.textContent = "";
  return true;
}


// VALIDATE PRIVACY INPUT FIELD
function validatePrivacy() {
  
  if (!privacy.checked) {
    privacyError.textContent="* please agree to the privacy policy";
    return false;
  }
  privacyError.textContent = "";
  return true;
}

function validateRequired(){
  if (val === "" || !dval || !emval || pval==="" || !aval || hval=="" || wval=="" || bloodType==="" ||checked===0 || !selected || !privacy.checked) {
    nameError.textContent = " *Name is required";
    dobError.textContent="*Date of birth required";
    emailError.textContent = "*Email required";
    phoneError.textContent = "*Phone number required";
    addressError.textContent = "*Address required";
    heightError.textContent = "*Height required";
    weightError.textContent="*Weight required";
    bloodError.textContent = "*Select blood group";
    diseaseError.textContent = "*Select at least one";
    exerciseError.textContent = "*Select at least one";
    privacyError.textContent="*Please agree to the privacy policy";
    return false;
  }
  return true;
}

function validateAll() {
  return (validateRequired() && (validateName() && validateDate() && validateAddress() && validateEmail() && validatePhone()  &&  validateHeight() && validateWeight()
&& validateBloodtype() && validateDisease() && validateExercise() && validatePrivacy()));
}
