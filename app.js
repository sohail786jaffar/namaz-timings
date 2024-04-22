$(document).ready(function() {
    $('.js-example-basic-single').select2();
});

async function fetchNamazTimings() {
    const city = document.getElementById('citySelect').value;
    const url = `http://api.aladhan.com/v1/calendarByCity?city=${city}&country=Pakistan&method=2`;
    const loading = document.getElementById('loading');
    const namazTimingsDiv = document.getElementById('namazTimings');

    loading.style.display = 'block';

    namazTimingsDiv.innerHTML = '';  
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const timings = data.data[0].timings;

        loading.style.display = 'none';

        const namazTimingsDiv = document.getElementById('namazTimings');
        namazTimingsDiv.innerHTML = `
            <h2>Namaz Timings for ${city}</h2>

            <table>
            <tr>
                <td>Fajr</td>
                <td>${timings.Fajr}</td>
            </tr>
            <tr>
                <td>Dhuhr</td>
                <td>${timings.Dhuhr}</td>
            </tr>
            <tr>
                <td>Asr</td>
                <td>${timings.Asr}</td>
            </tr>
            <tr>
                <td>Maghrib</td>
                <td>${timings.Maghrib}</td>
            </tr>
            <tr>
                <td>Isha</td>
                <td>${timings.Isha}</td>
            </tr>

            </table>
           
        `;
    } catch (error) {
        console.error('Error fetching namaz timings:', error);
    }
}

let time=document.querySelector(".time")

function showTime(){
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let session="AM";
    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session="PM";
    }
    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;
    time.innerHTML=`${h}:${m}:${s} ${session}`;
    setTimeout(showTime,1000);
}

showTime();
function showDate() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let dateString = `${day} / ${month} / ${year}`;
    document.querySelector(".date").innerHTML = dateString;
    setTimeout(showDate, 1000);
}

showDate();