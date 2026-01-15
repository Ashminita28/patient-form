document.getElementById("fullName").addEventListener("input", validateName);
document.getElementById("dob").addEventListener("change", validateDate);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("phone").addEventListener("input", validatePhone);
document.getElementById("address").addEventListener("input", validateAddress);
document.getElementById("height").addEventListener("input", validateHeight);
document.getElementById("weight").addEventListener("input", validateWeight);
document.getElementById("bloodPressure").addEventListener("input", validateBloodpressure);
document.getElementById("bloodTempreture").addEventListener("input", validateBloodtemp);
document.getElementById("bloodType").addEventListener("change", validateBloodtype);
document.getElementById("sleepHours").addEventListener("input", validateSleephours);

document.getElementsByName("disease").forEach((c) => {
  c.addEventListener("change", validateDisease);
});
document.getElementsByName("exercise").forEach((r) => {
  r.addEventListener("change", validateExercise);
});
document.getElementById("privacy").addEventListener("change", validatePrivacy);


// VALIDATE NAME INPUT FIELD
function validateName() {
  const val = fullName.value.trim();
  const nameError = document.getElementById("errorName");

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
  const dval = dob.value;
  const dobError = document.getElementById("errorDob");

  const today = new Date().toISOString().split("T")[0];
  dob.max = today;
  const currentDate = new Date();
  const dobDate = new Date(dval);
  if (!dval) {
    dobError.textContent = "*date of Birth required";
    return false;
  }
  if(dobDate>currentDate){
    dobError.textContent="*Date of Birth cannot be in future";
    return false;
  }
  let age = currentDate.getFullYear() - dobDate.getFullYear();
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
const emval = email.value.trim();
const emailError = document.getElementById("errorEmail");

  const ePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emval) {
    emailError.textContent = "*Email required";
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
  const pval = phone.value.trim();
const phoneError = document.getElementById("errorPhone");

  if (pval.length > 10) {
    pval = pval.slice(0, 10);
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
  const aval = address.value.trim();
const addressError = document.getElementById("errorAddress");
  if (!aval) {
    addressError.textContent = "*Address required";
    return false;
  }
  addressError.textContent = "";
  return true;
}

// VALIDATE HEIGHT INPUT FIELD
function validateHeight() {
  const heightError = document.getElementById("errorHeight");
const hval = height.value;
  if (hval == "") {
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

// VALIDATE WEIGHT INPUT FIELD
function validateWeight() {
  const weightError = document.getElementById("errorWeight");
const wval = weight.value;
console.log(wval);
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

//VALIDATE DROP-DOWN INPUT FIELD

function validateBloodtype() {
  const bloodError = document.getElementById("errorBlood");
  if (bloodType.value==="") {
    bloodError.textContent = "*Select blood group";
    return false;
  }
  bloodError.textContent = "";
  return true;
}

// VALIDATE BLOODPRESSURE INPUT FIELD

function validateBloodpressure() {
  const pressureError = document.getElementById("errorPressure");
  const bpval = bloodPressure.value;
  if (bpval < 70 || bpval > 250) {
    pressureError.textContent = "*Blood Pressure must be between (70-250 mmHg)";
    return false;
  }
  pressureError.textContent = "";
  return true;
}

// VALIDATE BLOOD TEMP. INPUT FIELD
function validateBloodtemp() {
  const tempError = document.getElementById("errorTemp");
  const btval = bloodTempreture.value;
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
  const sleepError = document.getElementById("errorSleep");
  const sval = sleepHours.value;
  if (sval < 0 || sval > 24) {
    sleepError.textContent = "*Sleep hour must be betwwen 0 to 24 hours";
    return false;
  }
  sleepError.textContent = "";
  return true;
}

// VALIDATE CHECKBOX INPUT FIELD

function validateDisease() {
  const diseaseError = document.getElementById("errorDisease");
  const checks = document.getElementsByName("disease");
  let checked = 0;

  checks.forEach((r) => {
    if (r.checked) checked++;
  });
  if (checked === 0) {
    diseaseError.textContent = "*Select at least one";
    return false;
  }
  diseaseError.textContent = "";
  return true;
}

// VALIDATE RADIO INPUT FIELD

function validateExercise() {
  
  const exerciseError = document.getElementById("errorExercise");
  const radios = document.getElementsByName("exercise");
  let selected = false;

  radios.forEach((r) => {
    if (r.checked) selected = true;
  });
  if (!selected) {
    exerciseError.textContent = "*Select at least one";
    return false;
  }
  exerciseError.textContent = "";
  return true;
}

// VALIDATE PRIVACY INPUT FIELD
function validatePrivacy() {
const privacyError = document.getElementById("errorPrivacy");

  if (!privacy.checked) {
    privacyError.textContent = "*Please agree to the privacy policy";
    return false;
  }
  privacyError.textContent = "";
  return true;
}



