let DeleteButton = document.querySelector(".DeleteUser");
let AddButton = document.querySelector(".AddUser");
let SearchButton = document.querySelector(".SearchUser");
let ChangeButton = document.querySelector(".ChangeUser");

DeleteButton.addEventListener('click',DeleteUser);
AddButton.addEventListener('click',AddUser)
SearchButton.addEventListener('click',SearchUser)
ChangeButton.addEventListener('click',ChangeUser)

let tbody = document.querySelector("tbody");
console.log(tbody)

let data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];


for (let i = 0; i < data.length; i++ ) {
    let tr = document.createElement("tr");

    for (let item in data[i]) {
        let td = document.createElement("td");
        td.innerHTML = data[i][item];
        tr.append(td)
    }

    tbody.append(tr);
}


function DeleteUser(){
    UserName = prompt("input name","Hannah");
    tdAdd = document.body.querySelectorAll("td");
    for ( let i = 0; i < tdAdd.length; i++) {
        if (UserName === tdAdd[i].innerHTML) {
            let tr = tdAdd[i].closest("tr");
            tr.remove();
        } 
    }
}


function AddUser(){ 
    UserFirstName = prompt("input name","Vasiliy");
    UserLastName = prompt("input name","Tuorkin");
    UserAge = prompt("input name","44");
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${UserFirstName}</td>
    <td>${UserLastName}</td>
    <td>${UserAge}</td>`
    tbody.append(tr);
}


function SearchUser() {
    UserName = prompt("input name","Hannah"); 
    for ( let i = 0; i < data.length; i++) {
        for(let item in data[i]) {
            if (UserName === data[i][item]) {
                alert(JSON.stringify(data[i]));
            } 
        }
        
    } 
}


function ChangeUser() {
    OldUserFirstName = prompt("input Firstname","Ashton");
    OldUserLastName = prompt("input new SecondName","Kutcher");
    NewUserFirstName = prompt("input new FirstName","Filipp");
    NewUserLastName = prompt("input new SecondName","Kirkorov");
    NewUserAge = prompt("input new age","28");
    tdAdd = document.body.querySelectorAll("td");
    for ( let i = 0; i < tdAdd.length; i++) {
        if (OldUserFirstName === tdAdd[i].innerHTML) {
            let NewTr = document.createElement("tr");
            NewTr.innerHTML = `
            <td>${NewUserFirstName}</td>
            <td>${NewUserLastName}</td>
            <td>${NewUserAge}</td>`
            let tr = tdAdd[i].closest("tr");
            tr.replaceWith(NewTr);
        } 
    }
}


