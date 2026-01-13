document.getElementById("fullName").addEventListener("input", validateName);
document.getElementById("dob").addEventListener("change", validateDate);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("phone").addEventListener("input", validatePhone);
document.getElementById("gender").addEventListener("change", validateGender);
document.getElementById("address").addEventListener("input", validateAddress);
document.getElementById("height").addEventListener("input", validateHeight);
document.getElementById("weight").addEventListener("input", validateWeight);

// document.getElementById("bloodPressure").addEventListener("input",validateBloodpressure);
// document.getElementById("bloodPressure").addEventListener("input",validateBloodtemp);
document
  .getElementById("bloodType")
  .addEventListener("change", validateBloodtype);
// document.getElementById("dietType").addEventListener("change",validateDiettype);
document.getElementById("allergies").addEventListener("input",validateAllergy);
document.getElementById("sleepHours").addEventListener("input",validateSleephours);

document.getElementsByName("disease").forEach((c) => {
  c.addEventListener("change", validateDisease);
});
document.getElementsByName("exercise").forEach((r) => {
  r.addEventListener("change", validateExercise);
});

// document.getElementById("medication").addEventListener("input",validateCurrentmedication);
document.getElementById("privacy").addEventListener("change", validatePrivacy);

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

function validateDate() {
  let dobError = document.getElementById("errorDob");
  const today = new Date().toISOString().split("T")[0];
  dob.max = today;
  const currentDate = new Date();
  const dval = dob.value;
  if (!dval) {
    dobError.textContent = "*date of Birth required";
    return false;
  }
  const dobDate = new Date(dval);
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

function validateEmail() {
  let emailError = document.getElementById("errorEmail");
  const ePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emval = email.value.trim();

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

function validatePhone() {
  let phoneError = document.getElementById("errorPhone");
  const pval = phone.value.trim();
  if(pval.length>10){
    pval=pval.slice(0,10);
  }
  if (pval === "") {
    phoneError.textContent = "*Phone number required";
    return false;
  }
  // if (!/^d{10}$/.test(phone)) {
  //   phoneError.textContent = "*digits only";
  //   return false;
  // }
  phoneError.textContent = "";
  return true;
}

function validateAddress() {
  let addressError = document.getElementById("errorAddress");
  const aval = address.value.trim();
  if (!aval) {
    addressError.textContent = "Address required";
    return false;
  }
  addressError.textContent = "";
  return true;
}

function validateGender() {
  let genderError = document.getElementById("errorGender");
  if (gender === "") {
    genderError.textContent = "*gender required";
    return false;
  }
  genderError.textContent = "";
  return true;
}

function validateHeight() {
  let heightError = document.getElementById("errorHeight");
  const hval = height.value;
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

function validateWeight() {
  let weightError = document.getElementById("errorWeight");
  const wval = weight.value;
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

function validateBloodtype() {
  let bloodError = document.getElementById("errorBlood");
  if (bloodType === "") {
    bloodError.textContent = "*Select blood group";
    return false;
  }
  bloodError.textContent = "";
  return true;
}

// function validateDiettype(){
  
// }

function validateAllergy(){
   
}
function validateSleephours(){
    
}
function validateDisease() {
  let diseaseError = document.getElementById("errorDisease");
  const checks = document.getElementsByName("disease");
  let checked = 0;
  checks.forEach((r) => {
    if (r.checked) checked++;
  });
  if (checked === 0) {
    diseaseError.textContent = "select at least one";
    return false;
  }
  diseaseError.textContent = "";
  return true;
}
function validateExercise() {
  let exerciseError = document.getElementById("errorExercise");
  const radios = document.getElementsByName("exercise");
  let selected = false;
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

// function validateCurrentmedication(){

// }

function validatePrivacy() {
  let privacyError = document.getElementById("errorPrivacy");
  if (!privacy.checked) {
    alert("You must agree to the privacy policy");
    return false;
  }
  privacyError.textContent = "";
  return true;
}

const data={};
data.fullName=fullName;

console.log(data);

function validateAll() {
  return (validateName() && validateDate() && validateAddress() && validateEmail() && validatePhone() && validateGender() &&  validateHeight() && validateWeight()
&& validateBloodtype() && validateDisease() && validateExercise() && validatePrivacy());
}
