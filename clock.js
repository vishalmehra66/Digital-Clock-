
// Functioning of the Digital Clock

function upnowClock() {
    var now = new Date();
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeek = daysOfWeek[now.getDay()];
    var date = now.getDate();
    var month = now.getMonth() + 1; // Months are 0-based
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var session = "AM";

    if (hours == 0){
      hours = 12;
    }
    if (hours > 12 ){
      hours = hours -1 ;
      session = "PM";
    }

    // Add leading zeros if necessary
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    // Upnow the clock element
    document.getElementById("clock").textContent = hours + ":" + minutes + ":" + seconds + " "+ session ;
    document.getElementById("date").textContent =  dayOfWeek + " " + month + "/" + date + "/" + year;                                 
  }
  
  // Call the upnowClock function initially
  upnowClock();
  
  // Set an interval to upnow the clock every second
  setInterval(upnowClock, 1000);
  