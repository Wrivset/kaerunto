/* A FUCKING SHITE TON OF VARIABLES STARTS HERE */

let startSelect = document.querySelector("#start");
let endSelect = document.querySelector("#end");
const daynamesTag = document.querySelector(".weeks"),
daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
let daynames = document.querySelectorAll(".weeks li");

let langlistv = document.querySelector(".languages").style.visibility;

function changeV(){ langlistv = (langlistv == "visible") ? "hidden" : "visible"; }

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
let callcount = 1;

let langLi = ["en", "zh", "ni", "th", "zu", "fr", "nob"];

const monthsen = [" January", " February", " March", " April", " May", " June", " July", " August", " September", " October", " November", " December"];
const monthszh_ni = [" 1月", " 2月", " 3月", " 4月", " 5月", " 6月", " 7月", " 8月", " 9月", " 10月", " 11月", " 12月"];
const monthsth = [" มกราคม", " กุมภาพันธ์", " มีนาคม", " เมษายน", " พฤษภาคม", " มิถุนายน", " กรกฎาคม", " สิงหาคม", " กันยายน", " ตุลาคม", " พฤศจิกายน", " ธันวาคม"];
const monthszu = [" 1yuzul", " 2yuzul", " 3yuzul", " 4yuzul", " 5yuzul", " 6yuzul", " 7yuzul", " 8yuzul", " 9yuzul", " 10yuzul", " 11yuzul", "12 yuzul"];
const monthsfr = [" Janvier", " Février", " Mars", " Avril", " Mai", " Juin", " Juillet", " Août", " Septembre", " Octobre", " Novembre", " Décembre"];
const monthsnob = [" Januar", " Febuar", " Mars", " April", " Mai", " Juni", " Juli", " August", " September", " Oktober", " November", " Desember"];

const daynamesen = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const daynameszh = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const daynamesni = ["日", "月", "火", "水", "木", "金", "土"];
const daynamesth = ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."];
const daynameszu = ["Yoi1", "Yoi2", "Yoi3", "Yoi4", "Yoi5", "Yoi6", "Yoi7"];
const daynamesfr = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const daynamesnob = ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"];

let まけえふぇんと;
let istWholeDay = false;
let numNotifs = 1;
let maxNumBySel = 60;

let reminders = [];

let cssroot = document.querySelector(":root");
let rotdegsus = 36;

let pisscount = 1;
let shitecount = 1;
let pedocount = 100;
let pomocount = 1;

let performancestandard = 1; // 👀 ooo new feature coming up

/* A FUCKING SHITE TON OF VARIABLES ENDS HERE */

// Making the calendar body

const renderCalendar = () => {

    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive" id = ${lastDateofLastMonth - i + 1}>${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}" id = ${i}>${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive" id = ${i - lastDayofMonth + 1}>${i - lastDayofMonth + 1}</li>`;
    }

    let linTag = "";
    if (lang === langLi[1]) { for (let i = 0; i < 7; i++) { linTag += `<li>${daynameszh[i]}</li>`; } currentDate.innerText = `${monthszh_ni[currMonth]} ${currYear}年`; }
    else if (lang === langLi[2]) { for (let i = 0; i < 7; i++) { linTag += `<li>${daynamesni[i]}</li>`; } currentDate.innerText = `${monthszh_ni[currMonth]} ${currYear}年`; }
    else if (lang === langLi[3]) { for (let i = 0; i < 7; i++) { linTag += `<li>${daynamesth[i]}</li>`; } currentDate.innerText = `${monthsth[currMonth]} ${currYear}`; }
    else if (lang === langLi[4]) { for (let i = 0; i < 7; i++) { linTag += `<li>${daynameszu[i]}</li>`; } currentDate.innerText = `${monthszu[currMonth]} ${currYear}nyen`; }
    else if (lang === langLi[5]) { for (let i = 0; i < 7; i++) { linTag += `<li>${daynamesfr[i]}</li>`; } currentDate.innerText = `${monthsfr[currMonth]} ${currYear}`; }
    else if (lang === langLi[6]) { for (let i = 0; i < 7; i++) { linTag += `<li>${daynamesnob[i]}</li>`; } currentDate.innerText = `${monthsnob[currMonth]} ${currYear}`; }
    else { for (let i = 0; i < 7; i++) { linTag += `<li>${daynamesen[i]}</li>`; } currentDate.innerText = `${monthsen[currMonth]} ${currYear}`; }
    
    daynamesTag.innerHTML = linTag;
    daysTag.innerHTML = liTag;
}
renderCalendar();

// Changing the month

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        if(icon.id === "lang") {

            //do smth

        } else {
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
            if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
                // creating a new date of current year & month and pass it as date value
                date = new Date(currYear, currMonth, new Date().getDate());
                currYear = date.getFullYear(); // updating current year with new date year
                currMonth = date.getMonth(); // updating current month with new date month
            } else {
                date = new Date(); // pass the current date as date value
            }
        }
        renderCalendar(); // calling renderCalendar function
    });
});

// Allowing saving event data or deleting it

function makeEvent(何) {

    if (何 == true) {
        まけえふぇんと = 何;
    } else {
        startSelect.value = "";
        endSelect.value = "";
        document.querySelector("#头").value = "";
        document.querySelector("#尾").value = "";
        document.querySelector("#終日ですか").value = null;
        document.querySelector("#starttime").value = "--;--";
        document.querySelector("#endtime").value = "--:--";
        document.querySelector(".eventreminders").innerHTML = "";
        まけえふぇんと = false;
        callcount = 1;
    }

}

// Uhh

function wholeday() {

    istWholeDay = istWholeDay ? false : true;

}

// Saving the event details as a cookie and saving reminders

function saveEvent() {

    if (document.querySelector("#头").value.length == 0 || startSelect.value.length == 0 || endSelect.value.length == 0) {
        alert("Please fill in everything before continuing");
    } else if (document.querySelector("#starttime").value.length == 0 || document.querySelector("#endtime").value.length == 0) {
        
        if (istWholeDay == false) {
            alert("You need a set time!");
        } else {
            let cookievalue = `${String(document.querySelector("#尾").value)}_${String(startSelect.innerHTML)}_${String(istWholeDay)}_${String(document.querySelector("#starttime").value)}_${String(endSelect.innerHTML)}_${String(document.querySelector("#endtime").value)}`;
            document.cookie = `${String(document.querySelector("#头").value)}=${cookievalue}; expires= ${new Date(2147483647 * 1000).toUTCString()}; SameSite=Strict`;
            
            for (let child of document.querySelector(".eventreminders").children) {
                if (child.childNodes.length > 0) {
                    saveReminder(parseInt(child.children[1].value), String(child.children[2].value), String(document.querySelector("#头").value));
                }
            }
            
            makeEvent(false);
        }
    } else {
        let cookievalue = String(document.querySelector("#尾").value) + "_" + String(startSelect.innerHTML) + "_" + String(istWholeDay) + "_" + String(document.querySelector("#starttime").value) + "_" + String(endSelect.innerHTML) + "_" + String(document.querySelector("#endtime").value);
        document.cookie = String(document.querySelector("#头").value) + "=" + cookievalue + "; expires=" + new Date(2147483647 * 1000).toUTCString() +"; SameSite=Strict";

        for (let child of document.querySelector(".eventreminders").children) {
            if (child.childNodes.length > 0) {
                saveReminder(parseInt(child.children[1].value), String(child.children[2].value), String(document.querySelector("#头").value));
            }
        }

        makeEvent(false);
    }

}

function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

$( ".days" ).on( "click", "li", function() {

    if (まけえふぇんと == true && callcount == 1) {

        setDates($(this).attr("id"));        

        callcount = 2;

    } else if (まけえふぇんと == true && callcount == 2) {

        setDates($(this).attr("id"));

        callcount = 1;

    } else {



    }

});

$( ".days" ).on( "dblclick", "li", function() {

    まけえふぇんと = true;

    setDates($(this).attr("id"));

    callcount = 2;

});

function setDates(date) {

    let newDay = date;
    let newMonth = currMonth + 1;

    if (date < 10) {
        newDay = "0" + String(date);
    }

    if (currMonth < 10) {
        newMonth = "0" + String(currMonth + 1);
    }

    if (callcount == 1) {

        startSelect.value = `${currYear}-${newMonth}-${newDay}`;

    } else {

        endSelect.value = `${currYear}-${newMonth}-${newDay}`;

    }
}

function editmaxNumBySel() {

    switch (document.querySelector(`#periods${numNotifs}`).value) {
        case "Hours": maxNumBySel = 24; break;
        case "Days": maxNumBySel = 7; break;
        case "Weeks": maxNumBySel = 4; break;
        case "Months": maxNumBySel = 12; break;
        case "Years": maxNumBySel = 100; break;
        default: maxNumBySel = 60;
    }

}

function saveReminder(lelabel, leperiod, name) {

    let mi = parseInt(String(document.querySelector("#starttime").value).slice(3, 5));
    let h = parseInt(String(document.querySelector("#starttime").value).slice(0, 2));
    let d = parseInt(String(startSelect.value).slice(8, 10));
    let mo = parseInt(currMonth + 1);
    let y = parseInt(String(startSelect.value).slice(0, 5));

    let numMonDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ( ( y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ) { numMonDay[1] = 29; } else { numMonDay[1] = 28; }
    
    let minutes = mi;
    let hours = h;
    let days = d;
    let months = mo;
    let years = y;

    switch (leperiod) {

        case "Hours":
            let hido = h + d * 24 - lelabel;
            hours = hido % 24;
            days = ( hido - hours ) /60;

            reminders.push([minutes, hours, days, months, years, String(document.querySelector("#starttime").value), name]);
            break;

        case "Days": 
            let demo = d + numMonDay[mo] - lelabel;
            days = demo % numMonDay[mo];
            months = ( demo - day ) / numMonDay[mo] + mo - 1;

            reminders.push([minutes, hours, days, months, years, String(document.querySelector("#starttime").value), name]);
            break;

        case "Weeks":
            
            break;

        case "Months":
            
            break;

        case "Years":
            
            break;

        default:
            let minh = mi + h * 60 - lelabel;
            minutes = minh % 60;
            hours = ( minh - minutes ) / 60;

            reminders.push([minutes, hours, days, months, years, String(document.querySelector("#starttime").value), name]);

    }

}

// Adds reminder
function addReminder() {

    if (!("Notification" in window)) {

      alert("This browser does not support desktop notifications!");

    } else if (Notification.permission === "granted") {

        addNotificationSelectorFill = `<br> <div id = 'group${numNotifs}'> <br> <input type = 'number' id = 'notif${numNotifs}'  min = '1' max = ${maxNumBySel}> <select name='periodchoice' id='periods${numNotifs}' onmouseup = "editmaxNumBySel()"> <option value='minutes'>Minutes</option> <option value='hours'>Hours</option> <option value='days'>Days</option> <option value='weeks'>Weeks</option> <option value='months'>Months</option> <option value='years'>Years</option> </select> </div>`;
        document.querySelector(".eventreminders").innerHTML += addNotificationSelectorFill;

        numNotifs += 1;

    } else if (Notification.permission !== "denied") {

      Notification.requestPermission().then((permission) => {

        if (permission === "granted") {

            addNotificationSelectorFill = `<br> <div id = 'group${numNotifs}'> <br> <input type = 'number' id = 'notif${numNotifs}'  min = '1' max = ${maxNumBySel}> <select name='periodchoice' id='periods${numNotifs}' onmouseup = "editmaxNumBySel()"> <option value='minutes'>Minutes</option> <option value='hours'>Hours</option> <option value='days'>Days</option> <option value='weeks'>Weeks</option> <option value='months'>Months</option> <option value='years'>Years</option> </select> </div>`;
            document.querySelector(".eventreminders").innerHTML += addNotificationSelectorFill;

            numNotifs += 1;

        }

      });

    }
}

// Check every 30s to see if there's a reminder + rotate
let reminderloop = setInterval(function() {
    let yes = 0;
    let v = 0;
    let x = 0;
    let d = new Date();
    let dim = d.getMinutes();
    let dh = d.getHours();
    let dd = d.getDate();
    let dom = d.getMonth() + 1;
    let dy = d.getFullYear();
    let darray = [dim, dh, dd, dom, dy];

    for ( i = 0; i < reminders.length * 5; i++) {

        x = i;

        if (reminders[v][x] == darray[i]){ yes += 1; }

        if (yes == 5) {

            const notification = new Notification(`${reminders[v][6]} is starting at ${reminders[v][5]}!`, {
                body: "Better get ready!"
            });

            reminders.shift();

            yes = 0;

        }

        if (i == 5) { v += 1; x = 0; yes = 0; }
        
    }

  }, 60000);

let backgroundloop = setInterval(function() {

    cssroot.style.setProperty('--rotdeg', rotdegsus + "deg");
    rotdegsus += 1;

}, 1000);

function changeLang(id) {
    lang = id;
    renderCalendar()
    if (lang == "zu") {
        var el = document.querySelectorAll('*');
        for(var i=0;i<el.length;i++) {
            el[i].style.fontFamily = "Zuwun";
        }
    } else {

    }
}

function timer(nani) {

    if (nani == "开始" && shitecount == 1) {

        pisscount = 1;
        toiletexplodcount = shitecount;
        shitecount = 2;
        pomocount += 1

        brr = setInterval(function() {

            cssroot.style.setProperty('--count', pedocount + "%");
            pedocount -= 1/15;
            console.log(pomocount);
            console.log(pedocount)

            if (pedocount < 0) {
                shitecount = 3
                pedocount = 100;
                clearInterval(brr);

            }

        }, 1000);

    } else if (nani = "开始" && shitecount == 3 && pomocount < 5) {

        pisscount = 1;
        toiletexplodcount = shitecount;
        shitecount = 2;

        flrbt = setInterval(function() {

            cssroot.style.setProperty('--count', pedocount + "%");
            pedocount -= 1/3;
            console.log(pomocount);
            console.log(pedocount)

            if (pedocount < 0) {
                shitecount = 1
                pedocount = 100;
                clearInterval(flrbt);

            }

        }, 1000);

    } else if (nani = "开始" && shitecount == 3 && pomocount == 5) {

        pisscount = 1;
        toiletexplodcount = shitecount;
        shitecount = 2;

        flrbt = setInterval(function() {

            cssroot.style.setProperty('--count', pedocount + "%");
            pedocount -= 1/18;

            if (pedocount < 0) {

                shitecount = 1
                pedocount = 100;
                pomocount = 1;
                clearInterval(flrbt);

            }

        }, 1000);

    } else if (nani == "停止" && pisscount == 1) {

        clearInterval(brr);

        shitecount = toiletexplodcount;

        pisscount = 2;

    } else if (nani == "停止" && pisscount == 2) {

        pedocount = 100;

        cssroot.style.setProperty('--count', pedocount + "%");

        shitecount = 1;

        pisscount = 1;

    }

}

