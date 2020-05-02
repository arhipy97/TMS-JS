let SearchingYear = +prompt("Ведите год","2020");
let SearchingMonth = +prompt("Введите месяц","4");
let PreviousButton = document.body.querySelector(".ButPrevious");
let NextButton = document.body.querySelector(".ButNext");

PreviousButton.addEventListener("click",PreviousMonth)
NextButton.addEventListener("click",NextMonth);

kalendar = function(year, month, element) {  
    let DaysQuantity = new Date ( year, month , 0);
    let SearchingDate = new Date (year, month - 1,);
    let firstDay = SearchingDate.getDay();
    let lastDay = DaysQuantity.getDay();
    let table = `<table>
                    <tr>
                        <td>ПН</td>
                        <td>ВТ</td>
                        <td>СР</td>
                        <td>ЧТ</td>
                        <td>ПТ</td>
                        <td>СБ</td>
                        <td>ВС</td>
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
    table += "<td>" + SearchingDate.getDate() + "  day" + day + "</td>";
    if ( SearchingDate.getDay() % 7 == 0) {
        table += "<tr> </tr>"
        }
    } 
    // next months cells
    for (i = 0; i < (7 - lastDay); i++) {
        table += "<td></td>"
        }       
    element.innerHTML = table;
    }

kalendar(SearchingYear, SearchingMonth, calendar);

function NextMonth() {
    SearchingMonth += 1;
    kalendar(SearchingYear, SearchingMonth, calendar);
}

function PreviousMonth() {
    SearchingMonth -= 1;
    kalendar(SearchingYear, SearchingMonth, calendar);
}





    
