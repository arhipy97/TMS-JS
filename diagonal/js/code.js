// let table = document.body.firstElementChild;
// console.log( table.rows.length);
// for (let i = 0; i < table.rows.length; i++) {
//     // table.rows[i].cells[i].innerHTML = "+";
//     let leng = table.rows.length;
//     table.rows[i].cells[leng - i - 1].innerHTML = "-";
// }

let p = new Promise (function (resolve, reject) {
    setTimeout(() => { 
        console.log('peparing data');
        let backendData = {
            server:'aws',
            port:2000
        }
    resolve();
    }, 2000);
})

p.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data received')
        }, 2000);
    })
})
