let table = document.body.firstElementChild;
console.log( table.rows.length);
for (let i = 0; i < table.rows.length; i++) {
    // table.rows[i].cells[i].innerHTML = "+";
    let leng = table.rows.length;
    table.rows[i].cells[leng - i - 1].innerHTML = "-";
}