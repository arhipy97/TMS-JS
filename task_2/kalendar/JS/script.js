let SearchingYear = +prompt("Ведите год","2020");
let SearchingMonth = +prompt("Введите месяц","4");

let PreviousButton = document.body.querySelector(".ButPrevious");
let NextButton = document.body.querySelector(".ButNext");
let editCell = document.getElementsByTagName('td');

PreviousButton.addEventListener("click",PreviousMonth)
NextButton.addEventListener("click",NextMonth);

let KalendarTask = {};

function kalendar(year, month, element) {  
    let DaysQuantity = new Date ( year, month , 0);
    let SearchingDate = new Date (year, month - 1,);
    let firstDay = SearchingDate.getDay();
    let lastDay = DaysQuantity.getDay();
    let table = `<table>
                    <tr>
                        <td class='daysName'>ПН</td>
                        <td class='daysName'>ВТ</td>
                        <td class='daysName'>СР</td>
                        <td class='daysName'>ЧТ</td>
                        <td class='daysName'>ПТ</td>
                        <td class='daysName'>СБ</td>
                        <td class='daysName'>ВС</td>
                    </tr>`;
    console.log(SearchingDate);

    if (firstDay == 0) {
        firstDay = 7;
        }
    if (lastDay == 0) {
        lastDay = 7;
        }      
    // previous months cells
    for (let i = 0; i < firstDay - 1; i++) {
        table += "<td></td>";    
    }
    //  calendar
    for (i = 1; i < DaysQuantity.getDate() + 1; i++) {
        SearchingDate.setDate(i);
        let day = SearchingDate.getDay();
        if (day == 0) {
            day = 7;
            }
    //  для наглядности дни недели 
    table += `<td timesince ="${SearchingDate.getTime()}" >` + SearchingDate.getDate() + `day` + day + `</td>`;
    if ( SearchingDate.getDay() % 7 == 0) {
        table += "<tr> </tr>"
        }
    } 
    // next months cells
    for (i = 0; i < (7 - lastDay); i++) {
        table += "<td></td>"
        }       
    element.innerHTML = table;
    addFinishedEvents();
    pressDay()
}
function NextMonth() {
    SearchingMonth += 1;
    kalendar(SearchingYear, SearchingMonth, calendar);
    console.log(KalendarTask);
}
function PreviousMonth() {
    SearchingMonth -= 1;
    kalendar(SearchingYear, SearchingMonth, calendar);
    console.log(KalendarTask);
}
function pressDay(){
    for(let i = 0; i < editCell.length; i++) {
        if (editCell[i].innerHTML != '' && editCell[i].className != 'daysName') {
            editCell[i].addEventListener('click', addEvent)
        }
    }
    }
function addEvent() {
    let td = this;
    task = prompt('','помыть кофемашину');
    if (td.lastChild.className !== 'taskClass') {
        let taskArr = [];    
        taskArr.push(task);
        KalendarTask[td.getAttribute('timeSince')] = taskArr;
    } else {
        let taskArrCopy = KalendarTask[td.getAttribute('timeSince')];
        taskArrCopy.push(task);
    }
    td.insertAdjacentHTML('beforeend', `<div class='taskClass'>*${task}</div>`);
    console.log(KalendarTask)
}

function addFinishedEvents() {
    for(let i = 0; i < editCell.length; i++) {
        for (let key in KalendarTask){
            if (key === editCell[i].getAttribute('timeSince')) {
                let newDiv = document.createElement('div');
                newDiv.innerHTML = KalendarTask[key]
                editCell[i].append(newDiv);
            }
        }
    }        
}

kalendar(SearchingYear, SearchingMonth, calendar);





    
