let elem = document.getElementById("list");
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

// 1 способ
// let table = "<table><tr><td>firstName</td><td>lastName</td><td>age</td></tr>";

// for (let item of data) {
//     table += "<td>" + item.firstName + "</td>";
//     table += "<td>" + item.lastName + "</td>";
//     table += "<td>" + item.age + "</td><tr></tr>";
// }

// 2 способ
let table = "<table>";
for (let option in data[0]) {
    table += "<td>" + option + "</td>";
}
table += "<tr></tr>"
for (i = 0; i < data.length; i++) {
    for( let item in data[i]) {
        table += "<td>" + data[i][item] + "</td>";
    }
    table += "<tr></tr>";
}
 
elem.innerHTML = table;


