
document.getElementById("patientForm").addEventListener("submit", function (e) {
  console.log("enter the form ");
  
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const gender = document.getElementById("gender").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const bloodType = document.getElementById("bloodType").value;
  const chronicDisease = document.querySelectorAll(
    'input[name="disease"]:checked'
  );
  const exercise = document.querySelector('input[name="exercise"]:checked');
  const privacyAgreement = document.getElementById("privacy").checked;

  let valid = true;

  // NAME CONDITIONS
  // let nameError = document.getElementById("errorName");
  // if(fullName.length ===0) {
  //   nameError.textContent = " *Name is required";
  //   valid = false;
  // } 
  // else {
  //   nameError.textContent = "";
  // }
  // if(fullName.length < 3) {
  //   nameError.textContent = "*Name must have at least 3 characters";
  //   valid = false;
  // } 
  // else {
  //   nameError.textContent = "";
  // }
  // if(/[0-9]/.test(fullName)) {
  //   nameError.textContent = "*Name cannot contain numbers";
  //   valid = false; 
  // } 
  // else {
  //   nameError.textContent = "";
  // }
  // if (/[^a-zA-Z]/.test(fullName)) {
  //   nameError.textContent = "*Name cannot contain special characters";
  //   valid = false; 
  // } 
  // else {
  //   nameError.textContent = "";
  // }

  // DATE OF BIRTH CONDITIONS
  let dobError = document.getElementById("errorDob");
  const currentDate = new Date();
  if (!dob) {
    dobError.textContent = "*date of Birth required";
    valid = false;
  } else {
    dobError.textContent = "";
  }
  const dobDate=new Date(dob);
  let age = currentDate.getFullYear() - dobDate.getFullYear();
  const month = currentDate.getMonth() - dobDate.getMonth();

  if (month < 0 || (month === 0 && currentDate.getDate() < dobDate.getDate())) {
    age--;
  }
  if (age < 18) {
    dobError.textContent = "*Age should be above 18";
    valid = false;
  } 
  // else {
  //   dobError.textContent = "";
  // }
  

  // EMAIL CONDITIONS

  let emailError = document.getElementById("errorEmail");
  const ePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    emailError.textContent = "* Email required";
    valid = false;
  } 
  else {
    emailError.textContent = "";
  } 
  if (!ePattern.test(email)) {
    emailError.textContent = "*Invalid email format";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // GENDER 
  let genderError = document.getElementById("errorGender");
  if (gender === "") {
    genderError.textContent = "*gender required";
    valid = false;
  } else {
    genderError.textContent = "";
  }

  // PHONE NUMBER C0NDITIONS
  let phoneError = document.getElementById("errorPhone");
  if (phone === "") {
    phoneError.textContent = "*Phone number required";
    valid = false;
  } else {
    phoneError.textContent = "";
  }
  if (!/^[0-9]{10}$/.test(phone)) {
    phoneError.textContent = "*Enter 10 digit number";
    valid = false;   
  } else {
    phoneError.textContent = "";
  }


  // ADDRESS
  let addressError = document.getElementById("errorAddress");
    if (!address) {
      addressError.textContent = "Address required";
      valid = false;
    }else{
      addressError.textContent = "";
    }
  //   HEIGHT CONDITIONS
  let heightError = document.getElementById("errorHeight");
  if (!height) {
    heightError.textContent = "Height required";
    valid = false;
  } else {
    heightError.textContent = "";
  }
  if (height < 100 || height > 250) {
    heightError.textContent = "* height must be between 100 to 250";
    valid = false;
  } else {
    heightError.textContent = "";
  }

  //   WEIGHT CONDITIONS
  let weightError = document.getElementById("errorWeight");
  if (!weight) {
    weightError.textContent = "Weight required";
    valid = false;
  } else {
    weightError.textContent = "";
  }
  if (weight < 30 || weight > 200) {
    weightError.textContent = "* weigth must be between 30 to 200";
    valid = false;
  } else {
    weightError.textContent = "";
  }

  // PRIVACY CONDITIONS
  const privacyError = document.getElementById("errorPrivacy");
  if (!privacyAgreement) {
    alert("You must agree to the privacy policy");
    valid = false;
  } else {
    privacyError.textContent = "";
  }


  // CHRONIC DISEASES
  let diseaseError = document.getElementById("errorDisease");
  if (chronicDisease.length === 0) {
    diseaseError.textContent = "*select at least one";
    valid = false;
  }
  else {
    diseaseError.textContent = "";
  }

  // EXERCISE
  let exerciseError = document.getElementById("errorExercise");
  if (!exercise) {
    exerciseError.textContent = "*select one";
    valid = false;
    
  } else { 
     exerciseError.textContent = "";
  }
 

// BLOOD TYPE CONDITIONS
let bloodError = document.getElementById("errorBlood");
if (bloodType === "") {
  bloodError.textContent = "*Select blood group";
  valid = false;
} else {
  bloodError.textContent = "";
}

if (!valid) {
  alert("Please correct the highlighted error before submitting the form");
  e.preventDefault();
  return;
}

const data = {};

data.fullName = fullName;
data.dob = dob;
data.email = email;
data.phone = phone;
data.gender = gender;
data.height = height;
data.weight=weight;
data.bloodType =bloodType ;
data.chronicDisease =chronicDisease ;
data.exercise=exercise;
data. privacyAgreement= privacyAgreement;


console.log(data);
const stringifyData = JSON.stringify(data);
localStorage.setItem("patientForm", stringifyData);
alert("Form submitted successfully");
});