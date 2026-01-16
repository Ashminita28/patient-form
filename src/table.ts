const form=document.getElementById('patientForm') as HTMLFormElement;
const table=document.getElementById('fulltable') as HTMLTableSectionElement;
interface record{
    fullName:string,
    dob:string,
    email:string,
    phone:string,
    address:string,
    height:string,
    weight:string,
    bloodPressure:string,
    bloodTempreture:string,
    bloodType:string,
    dietType:string,
    medication:string,
    allergies:string,
    sleepHours:string,
    disease:string[],
    exercise:string,

}
let records :record[]=[];
let editIndex:number | null = null;

// FUNCTION TO CREATE  

export function createRecord():void{
    const diseases:string[]=[];
    (document.querySelectorAll('input[name="disease"]:checked') as NodeListOf<HTMLInputElement>).forEach(c=>{
        diseases.push(c.value);
        });
const record={
        fullName:(document.getElementById('fullName') as HTMLInputElement).value,
        dob:(document.getElementById('dob') as HTMLInputElement).value,
        phone:(document.getElementById('phone') as HTMLInputElement).value,
        email:(document.getElementById('email') as HTMLInputElement).value,
        address:(document.getElementById('address') as HTMLInputElement).value,
        height:(document.getElementById('height') as HTMLInputElement).value,
        weight:(document.getElementById('weight') as HTMLInputElement).value,
        bloodPressure:(document.getElementById('bloodPressure') as HTMLInputElement).value,
        bloodTempreture:(document.getElementById('bloodTempreture') as HTMLInputElement).value,
        bloodType:(document.getElementById('bloodType') as HTMLInputElement).value,
        dietType:(document.getElementById('dietType') as HTMLInputElement).value,
        allergies:(document.getElementById('allergies') as HTMLInputElement).value,
        sleepHours:(document.getElementById('sleepHours') as HTMLInputElement).value,
        disease : diseases,
        exercise :(document.querySelector('input[name="exercise"]:checked') as HTMLInputElement)?.value||"",
        medication:(document.getElementById('medication') as HTMLInputElement).value,
    }
    
    if(editIndex===null){
        records.push(record);
    }else{
        records[editIndex]=record;
        editIndex=null;
    }
    localStorage.setItem("patientEntries",JSON.stringify(records));
    renderTable();
    document.getElementById("tableSection")?.scrollIntoView({
        behavior:"smooth",
        block:"start",
        inline:"center"
    });
    form.reset();
    (document.getElementById("submitBtn") as HTMLButtonElement).textContent="Submit";
}

// FUNCTION TO INSERT FORM DATA INTO TABLE.

export function renderTable(){
    const tbody=table.querySelector("tbody") as HTMLTableSectionElement;
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
        const editBtn=document.createElement('button');
        editBtn.classList.add('icon-btn','edit-btn');
        editBtn.textContent="O";
        editBtn.addEventListener('click',()=>{
            editEntry(index);
        })

        const deleteBtn=document.createElement('button');
        deleteBtn.classList.add('icon-btn', 'delete-btn');
        deleteBtn.textContent="X";
        deleteBtn.addEventListener('click',()=>{
            deleteEntry(index);
        })
        actionArea.append(editBtn,deleteBtn);
    });
}

// FUNCTION TO DELETE DATA FROM TABLE

export function deleteEntry(index:number):void{
    const confirmDelete=confirm("Are you sure you want to delete this record?");
    if(!confirmDelete) return;
    records.splice(index,1);
    localStorage.setItem("patientEntries",JSON.stringify(records));
    renderTable();
}

//  FUNCTION TO EDIT DATA FROM TABLE

export function editEntry(index:number) :void{
    const data=records[index];
    editIndex=index;
    (document.getElementsByName('exercise') as NodeListOf<HTMLInputElement>).forEach(r=>{
        r.checked=((r as HTMLInputElement).value===data!.exercise);
    });

    (document.getElementsByName('disease') as NodeListOf<HTMLInputElement>).forEach(c=>{
        c.checked=data!.disease!.includes(c.value);
    });
    (document.getElementById("fullName") as HTMLInputElement).value=data!.fullName??"",
    (document.getElementById('dob') as HTMLInputElement).value=data!.dob,
    (document.getElementById('phone') as HTMLInputElement).value=data!.phone,
    (document.getElementById('email') as HTMLInputElement).value=data!.email,
    (document.getElementById('address') as HTMLInputElement).value=data!.address,
    (document.getElementById('height') as HTMLInputElement).value=data!.height,
    (document.getElementById('weight') as HTMLInputElement).value=data!.weight,
    (document.getElementById('bloodPressure') as HTMLInputElement).value=data!.bloodPressure,
    (document.getElementById('bloodTempreture') as HTMLInputElement).value=data!.bloodTempreture,
    (document.getElementById('bloodType') as HTMLInputElement).value=data!.bloodType,
    (document.getElementById('dietType') as HTMLInputElement).value=data!.dietType,
    (document.getElementById('allergies') as HTMLInputElement).value=data!.allergies,
    (document.getElementById('sleepHours') as HTMLInputElement).value=data!.sleepHours,
        
    (document.getElementById('medication') as HTMLInputElement).value=data!.medication,
        
    
    (document.getElementById("formSection") as HTMLInputElement).scrollIntoView({
        behavior:"smooth",
        block:"start",
        inline:"center"
    });
    (document.getElementById('submitBtn') as HTMLInputElement).textContent='Update';
    (document.getElementById('submitBtn') as HTMLInputElement).style.backgroundColor="Green"
}

// FUNCTION TO SAVE THE RECORDS TO LOCAL STORAGE TO SAVE IT ON TABLE EVEN AFTER REFRESHING THE PAGE.
    const saved=localStorage.getItem("patientEntries");
    if(saved){
        records=JSON.parse(saved);
        renderTable();
    }

