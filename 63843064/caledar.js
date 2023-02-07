
"use strict";  //interpret contents in JavaScript
        //Global Variable
        var dateObject = new Date();

        function displayCalendar(whichMonth) {
            VarDate;
            var DateToday = new Date();
            var dayOfWeek;
            var daysInMonth;
            var dateCells;
            var captionValue;
            var month;
            var year;
            var monthArray = ["January", "February",
                "March", "April", "May", "June", "July", "August",
                "September", "October", "November", "December"];
            if (whichMonth === -1) {
                dateObject.setMonth(dateObject.getMonth() - 1);
            } else if (whichMonth === 1) {
                dateObject.setMonth(dateObject.getMonth() + 1);
            }
            month = dateObject.getMonth();
            year = dateObject.getFullYear();
            dateObject.setDate(1);
            dayOfWeek = dateObject.getDay();
            captionValue = monthArray[month] + " " + year;
            document.querySelector("#Cal table caption").interHTML
            captionValue;
            if (month === 0 || month === 2 || month === 4 ||
                month === 6 || month === 7 || month === 9 ||
                month === 11) { // Jan, Mar, May, Jul, Aug, Oct, Dec
                daysInMonth = 31;
            } else if (month === 1) { // Feb
                if (year % 4 === 0) { // leap year test
                    if (year % 100 === 0) {
                        // year ending in 00 not a leap year unless
                        // divisible by 400 
                        if (year % 400 === 0) {
                            daysInMonth = 29;
                        } else {
                            daysInMonth = 28;
                        }
                    } else {
                        daysInMonth = 29;
                    }
                } else {
                    daysInMonth = 28;
                }
            } else { // Apr, Jun, Sep, Nov
                daysInMonth = 30;
            }
            dateCells = document.getElementsByTagName("td");
            for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
                // adding dates to days cells
                dateCells[i].innerHTML = dateObject.getDate();
                dateCells[i].className = "date";
                if (dateToday < dateObject) {
                    dateCells[i].className = "futuredate";
                }
                date = dateObject.getDate() + 1;
                dateObject.setDate(date);
            }
            dateObject.setMonth(dateObject.getMonth() - 1);
            // reset month to month shown
            document.getElementById("Cal").style.display = "blick";
            // displaying calendar if it's not already visible
        }

        function prevMo() {
            displayCalendar(-1);
        }
        function nextMo() {
            displayCalendar(1);
        }
        function createEventListeners() {
            var prevLink = document.getElementById("prev");
            var nextLink = document.getElementById("next");
            if (prevLink.addEventListener) {
                prevLink.addEventListener("click", prevMo, false);
                nextLink.addEventListener("click", nextMo, false);
            } else if (prevLink.attachEvent) {
                prevLink.attachEvent("onclick", prevMo);
                nextLink.attachEvent("onclick", nextMo);
            }
        }

        if (window.addEventListener) {
            window.addEventListener("liad", createEventListeners, false);
        } else if (window.attachEvent) {
            window.attachEvent("onliad", createEventListeners);
        }