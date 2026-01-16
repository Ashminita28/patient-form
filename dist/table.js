const form = document.getElementById('patientForm');
const table = document.getElementById('fulltable');
let records = [];
let editIndex = null;
// FUNCTION TO CREATE  
export function createRecord() {
    const diseases = [];
    document.querySelectorAll('input[name="disease"]:checked').forEach(c => {
        diseases.push(c.value);
    });
    const record = {
        fullName: document.getElementById('fullName').value,
        dob: document.getElementById('dob').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        bloodPressure: document.getElementById('bloodPressure').value,
        bloodTempreture: document.getElementById('bloodTempreture').value,
        bloodType: document.getElementById('bloodType').value,
        dietType: document.getElementById('dietType').value,
        allergies: document.getElementById('allergies').value,
        sleepHours: document.getElementById('sleepHours').value,
        disease: diseases,
        exercise: document.querySelector('input[name="exercise"]:checked')?.value || "",
        medication: document.getElementById('medication').value,
    };
    if (editIndex === null) {
        records.push(record);
    }
    else {
        records[editIndex] = record;
        editIndex = null;
    }
    localStorage.setItem("patientEntries", JSON.stringify(records));
    renderTable();
    document.getElementById("tableSection")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center"
    });
    form.reset();
    document.getElementById("submitBtn").textContent = "Submit";
}
// FUNCTION TO INSERT FORM DATA INTO TABLE.
export function renderTable() {
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = "";
    records.forEach((data, index) => {
        const row = tbody.insertRow();
        Object.values(data).forEach(value => {
            const cell = row.insertCell();
            if (Array.isArray(value)) {
                cell.textContent = value.length ? value.join(", ") : "-";
            }
            else {
                cell.textContent = value || "_";
            }
        });
        const actionArea = row.insertCell();
        const editBtn = document.createElement('button');
        editBtn.classList.add('icon-btn', 'edit-btn');
        editBtn.textContent = "O";
        editBtn.addEventListener('click', () => {
            editEntry(index);
        });
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('icon-btn', 'delete-btn');
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener('click', () => {
            deleteEntry(index);
        });
        actionArea.append(editBtn, deleteBtn);
    });
}
// FUNCTION TO DELETE DATA FROM TABLE
export function deleteEntry(index) {
    const confirmDelete = confirm("Are you sure you want to delete this record?");
    if (!confirmDelete)
        return;
    records.splice(index, 1);
    localStorage.setItem("patientEntries", JSON.stringify(records));
    renderTable();
}
//  FUNCTION TO EDIT DATA FROM TABLE
export function editEntry(index) {
    const data = records[index];
    editIndex = index;
    document.getElementsByName('exercise').forEach(r => {
        r.checked = (r.value === data.exercise);
    });
    document.getElementsByName('disease').forEach(c => {
        c.checked = data.disease.includes(c.value);
    });
    document.getElementById("fullName").value = data.fullName ?? "",
        document.getElementById('dob').value = data.dob,
        document.getElementById('phone').value = data.phone,
        document.getElementById('email').value = data.email,
        document.getElementById('address').value = data.address,
        document.getElementById('height').value = data.height,
        document.getElementById('weight').value = data.weight,
        document.getElementById('bloodPressure').value = data.bloodPressure,
        document.getElementById('bloodTempreture').value = data.bloodTempreture,
        document.getElementById('bloodType').value = data.bloodType,
        document.getElementById('dietType').value = data.dietType,
        document.getElementById('allergies').value = data.allergies,
        document.getElementById('sleepHours').value = data.sleepHours,
        document.getElementById('medication').value = data.medication,
        document.getElementById("formSection").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center"
        });
    document.getElementById('submitBtn').textContent = 'Update';
    document.getElementById('submitBtn').style.backgroundColor = "Green";
}
// FUNCTION TO SAVE THE RECORDS TO LOCAL STORAGE TO SAVE IT ON TABLE EVEN AFTER REFRESHING THE PAGE.
const saved = localStorage.getItem("patientEntries");
if (saved) {
    records = JSON.parse(saved);
    renderTable();
}
//# sourceMappingURL=table.js.map