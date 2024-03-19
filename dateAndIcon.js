// Create a new Date object
const currentDate = new Date();
console.log("Today's date':", currentDate);

// Get the day of the week (0 to 6)
const dayOfWeekNum = currentDate.getDay();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Get the day name
const dayName = daysOfWeek[dayOfWeekNum];
console.log("Day of the week:", dayName);

//change the web page icon uniquely for each day of the week 
let webIcon = document.querySelector(".web-icon");
console.log(webIcon);

//decision structures
if (dayOfWeekNum == 1){
    console.log("Setting icon for Monday");
    webIcon.href="feather.png";
}else if(dayOfWeekNum == 2){
    webIcon.href="icons/tues.png";
}else if(dayOfWeekNum == 3){
    webIcon.href="icons/wed.png";
}else if (dayOfWeekNum == 4){
    webIcon.href="icons/thu.png";
}else if (dayOfWeekNum == 5){
    webIcon.href="icons/fri.png";
}else if (dayOfWeekNum == 6){
    webIcon.href="icons/sat.png";
}else if (dayOfWeekNum == 7){
    webIcon.href="icons/sun.png";
}
