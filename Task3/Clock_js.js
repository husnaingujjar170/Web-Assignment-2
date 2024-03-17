function updateClock() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    $("#hour").text(hours);
    $("#minute").text(minutes);
    $("#second").text(seconds);
    let period;
    if (hours >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }
    $("#period").text(period);
}
setInterval(updateClock, 1000);
updateClock();
