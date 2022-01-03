window.addEventListener('DOMContentLoaded', (e) => {

   // Get reference to the parent of the p tags used to display the datetime
   let twelveHourParentDiv = document.getElementById("twelve_hour_clock");
   let twelveHourChildText = twelveHourParentDiv.getElementsByTagName('p').item(0);

   let twentyFourHoursClock = document.getElementById("twenty_four_hour_clock");
   let twentyFourHourChildText = twentyFourHoursClock.getElementsByTagName('p').item(0);

   // Log current values
   console.info("Current Values");
   console.info(twelveHourChildText.innerText);
   console.info(twentyFourHourChildText.innerText);

   // Log new values
   console.info("New values")
   console.info("12 format hour: " + getTwelveHourFormattedTime());
   console.info("24 format hour: " + getTwentyFourHourFormattedTime());


   setInterval(() => {
      twelveHourChildText.innerText = getTwelveHourFormattedTime();
      twentyFourHourChildText.innerText = getTwentyFourHourFormattedTime();
   }, 1000);

   // Define generic functions
   function getAmOrPm(hours) {
      return hours >= 12 ? 'PM' : 'AM';
   }

   function getTwelveHourFormattedTime() {

      let time = new Date();
      let hours = time.getHours();
      let minutes = time.getMinutes();
      let seconds = time.getSeconds();
      let amPm = getAmOrPm(hours);

      if(hours > 12)
      {
         hours = hours - 12;
      }

      if(seconds <=9)
      {
         seconds = '0'+ seconds;
      }


      return hours + " : " + minutes + " : " + seconds + " " + amPm;
   }

   function getTwentyFourHourFormattedTime() {

      let time = new Date();
      let unformattedTime = time.toTimeString().substring(0, 8);
      let hours = unformattedTime.substring(0,2);
      let minutes = unformattedTime.substring(3,5);
      let seconds = unformattedTime.substring(6,8);

      return hours + " : " + minutes + " : " + seconds;
   }

   // Native browser API localization functions
   function getLocation() {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition, positionError);
      } else {
         showError('Geolocation is not supported by this device')
      }
   }

   // Call back position error function
   function positionError() {
      showError('Geolocation is not enabled. Please enable to use this feature')
   }

   // Call show position function
   function showPosition(message) {
      console.info(message);
   }

   // Generic log error function
   function showError(message) {
      console.error(message);
   }

   // Execute navigator request to get current position
   getLocation();

})