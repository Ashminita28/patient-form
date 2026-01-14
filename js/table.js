const form=document.getElementById('patientForm');
const table=document.getElementById('fulltable');
let records=[];
let editIndex=null;

// FUNCTION TO CREATE  
function createRecord(){
    const diseases=[];
    document.querySelectorAll('input[name="disease"]:checked').forEach(c=>{
        diseases.push(c.value);
        });
    const exercise=document.querySelector('input[name="exercise"]:checked');
    // console.log(exercise.value);
    
    const record={
        fullName:fullName.value,
        dob:dob.value,
        email:email.value,
        phone:phone.value,
        address:address.value,
        height:height.value,
        weight:weight.value,
        bloodPressure:bloodPressure.value,
        bloodTempreture:bloodTempreture.value,
        bloodType:bloodType.value,
        dietType:dietType.value,
        allergies:allergies.value,
        sleepHours:sleepHours.value,
        exercise:exercise.value,
        disease:diseases,
        medication:medication.value,
    }
    if(editIndex===null){
        records.push(record);
    }else{
        records[editIndex]=record;
        editIndex=null;
    }
    console.log(record);
    localStorage.setItem("patientEntries",JSON.stringify(records));
    renderTable();
    document.getElementById("tableSection").scrollIntoView({
        behavior:"smooth",
        block:"start",
        inline:"center"
    });
    form.reset();
    document.getElementById("submitBtn").textContent="Submit";
}

// FUNCTION TO INSERT FORM DATA INTO TABLE.

function renderTable(){
    const tbody=table.querySelector('tbody');
    tbody.innerHTML="";
    records.forEach((data,index)=>{
        const row=tbody.insertRow();
        Object.values(data).forEach(value=>{
            const cell=row.insertCell();
            if(Array.isArray(value)){
                cell.textContent=value.length?value.join(", "):"-"
            }else{
                cell.textContent=value||"_";
            }
        });
        const actionArea=row.insertCell();
        actionArea.innerHTML=`<button class="icon-btn edit-btn" onclick="editEntry(${index})">O</button>
    <button class="icon-btn delete-btn" onclick="deleteEntry(${index})">X</button>`;
    });
}


// FUNCTION TO DELETE DATA FROM TABLE

function deleteEntry(index){
    const confirmDelete=confirm("Are you sure you wnat to delete this record?")
    if(!confirmDelete) return;
    records.splice(index,1);
    localStorage.setItem("patientEntries",JSON.stringify(records));
    renderTable();
}

// FUNCTION TO EDIT DATA FROM TABLE

function editEntry(index){
    const data=records[index];
    editIndex=index;

    document.getElementsByName('exercise').forEach(r=>{
        r.checked=(r.value===data.exercise);
    });

    document.getElementsByName('disease').forEach(c=>{
        c.checked=data.disease.includes(c.value);
    })

    fullName.value=data.fullName;
    dob.value=data.dob;
    email.value=data.email;
    phone.value=data.phone;
    address.value=data.address,
    height.value=data.height,
    weight.value=data.weight,
    bloodPressure.value=data.bloodPressure,
    bloodTempreture.value=data.bloodTempreture,
    bloodType.value=data.bloodType,
    dietType.value=data.dietType,
    allergies.value=data.allergies,
    sleepHours.value=data.sleepHours,
    medication.value=data.medication


    document.getElementById("formSection").scrollIntoView({
        behavior:"smooth",
        block:"start",
        inline:"center"
    });
    document.getElementById('submitBtn').textContent='Update';
    document.getElementById('submitBtn').style.backgroundColor="Green"
}

// FUNCTION TO SAVE THE RECORDS TO LOCAL STORAGE TO SAVE IT ON TABLE EVEN AFTER REFRESHING THE PAGE.
    const saved=localStorage.getItem("patientEntries");
    if(saved){
        records=JSON.parse(saved);
        renderTable();
    }



