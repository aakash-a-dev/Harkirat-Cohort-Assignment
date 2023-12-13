function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    var timeString = addZeroPadding(hours) + ':' + addZeroPadding(minutes) + ':' + addZeroPadding(seconds);
    var timeStringAMPM = addZeroPadding(hours) + ':' + addZeroPadding(minutes) + ':' + addZeroPadding(seconds) + ' ' + ampm;

    console.log('HH:MM:SS Format:', timeString);
    console.log('HH:MM:SS AM/PM Format:', timeStringAMPM);

    setTimeout(updateClock, 1000);
  }

  function addZeroPadding(value) {
    return value < 10 ? '0' + value : value;
  }

  updateClock(); 