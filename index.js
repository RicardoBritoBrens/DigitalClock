import { getTwelveHourFormattedTime, getTwentyFourHourFormattedTime } from './utils.js'

window.addEventListener('DOMContentLoaded', (e) => {

   var twelveHourParentDiv = document.getElementById("twelve_hour_clock");
   var twelveHourChildText = twelveHourParentDiv.getElementsByTagName('p').item(0);

   var twentyFourHoursClock = document.getElementById("twenty_four_hour_clock");
   var twentyFourHourChildText = twentyFourHoursClock.getElementsByTagName('p').item(0);

   window.standardTimeInterval = setInterval(() => {

      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();

      twelveHourChildText.innerText = getTwelveHourFormattedTime(hours, minutes, seconds);
      twentyFourHourChildText.innerText = getTwentyFourHourFormattedTime(hours, minutes, seconds);
   }, 1000);

});
