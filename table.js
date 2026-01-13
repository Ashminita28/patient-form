const form=document.getElementById('patientForm');
const table=document.getElementById('fulltable');
let headersAdded=false;

function createRecord(){
    const formData=new FormData(form);
    const entry=Object.fromEntries(formData); 
    entry.disease=formData.getAll("disease");
    
    if(editIndex===null){
        // document.getElementById("tableSection").textContent="NO RECORDS PRESENT";
        entries.push(entry);
    }else{
        entries[editIndex]=entry;
        editIndex=null;
    }
    console.log(entries);
    localStorage.setItem("patientEntries",JSON.stringify(entries));
    renderTable();
    document.getElementById("tableSection").scrollIntoView({
        behavior:"smooth",
        block:"start",
        inline:"center"
    });
    form.reset();
    document.getElementById("submitBtn").textContent="Submit";
    

}

function renderTable(){
    const tbody=table.querySelector('tbody');
    tbody.innerHTML="";
    if(!headersAdded && entries.length>0){
        const thead=table.querySelector('thead tr');
        thead.innerHTML="";
        Object.keys(entries[0]).forEach(key=>{
            const th=document.createElement('th');
            th.textContent=key.charAt(0).toUpperCase()+key.slice(1);
            thead.appendChild(th);
        });
        const th=document.createElement('th');
        th.textContent="Actions";
        thead.appendChild(th);
        headersAdded=true;
    }
    entries.forEach((data,index)=>{
        const row=tbody.insertRow();
        Object.values(data).forEach(value=>{
            const cell=row.insertCell();
            if(Array.isArray(value)){
                cell.textContent=value.length?value.join(", "):"-"
            }else{
                cell.textContent=value||"_";

            }
            
        });
        const actionCell=row.insertCell();
        actionCell.innerHTML=`<button class="edit-btn" onclick="editEntry(${index})">EDIT</button>
    <button class="delete-btn" onclick="deleteEntry(${index})">DELETE</button>`;

    });
}


function deleteEntry(index){
    const confirmDelete=confirm("Are you sure you wnat to delete this record?")
    if(!confirmDelete) return;
    entries.splice(index,1);
    localStorage.setItem("patientEntries",JSON.stringify(entries));
    renderTable();
}

function editEntry(index){
    const data=entries[index];
    editIndex=index;
    Object.keys(data).forEach(key=>{

        if(Array.isArray(data[key])){
            document.querySelectorAll(`input[name="${key}"]`).forEach(checkbox=>{
                checkbox.checked=data[key].includes(checkbox.value);
            });
        }else{
            form[key].value=data[key];
        }
    })
    document.getElementById("formSection").scrollIntoView({
        behavior:"smooth",
        block:"start",
        inline:"center"
    });
    document.getElementById('submitBtn').textContent='Update';
    document.getElementById('submitBtn').style.backgroundColor="Green"
}

window.onload=function(){
    const saved=localStorage.getItem("patientEntries");
    if(saved){
        entries=JSON.parse(saved);
        renderTable();
    }
};


