/*var ceneval = new Date(2021,09,13);
var lingua = new Date("29/09/2021");
var graduacion = new Date("15/12/2021");

var hoy = Date.now();



document.addEventListener('DOMContentLoaded', (event) => {
    
    console.log(hoy);
    console.log("Hola fran");

    var diasc = (ceneval - hoy)/(1000*60*60*24);
    var horasc = ((diasc - parseInt(diasc))*24);
    var minutosc = (horasc - parseInt(horasc))*60;
    
    console.log("El tiempo restante para el ceneval son " + parseInt(diasc) + " días con " + parseInt(horasc) + " horas y " + parseInt(minutosc) + " minutos. " )


    /*alert("Hola");*/
/*
  })
  */


  simplyCountdown('.ceneval', {
    year: 2021, // required
    month: 10, // required
    day: 13, // required
    hours: 0, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: ' día ', plural: ' días ' },
        hours: { singular: ' hora ', plural: ' horas ' },
        minutes: { singular: ' minuto ', plural: ' minutos ' },
        seconds: { singular: ' segundo ', plural: ' segundos ' }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false, //Use UTC or not - default : false
    onEnd: function() { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});

simplyCountdown('.lingua', {
  year: 2021, // required
  month: 09, // required
  day: 29, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: ' día ', plural: ' días ' },
      hours: { singular: ' hora ', plural: ' horas ' },
      minutes: { singular: ' minuto ', plural: ' minutos ' },
      seconds: { singular: ' segundo ', plural: ' segundos ' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() { return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false
});

simplyCountdown('.grad', {
  year: 2021, // required
  month: 12, // required
  day: 15, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: ' día ', plural: ' días ' },
      hours: { singular: ' hora ', plural: ' horas ' },
      minutes: { singular: ' minuto ', plural: ' minutos ' },
      seconds: { singular: ' segundo ', plural: ' segundos ' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function() { return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section', //section css class
  amountClass: 'simply-amount', // amount css class
  wordClass: 'simply-word', // word css class
  zeroPad: false,
  countUp: false
});

window.addEventListener('DOMContentLoaded', (event) => {
  console.log("Dom is fully loaded");
  var deit;
  $(".addEvent").click(function(){
    console.log("You reached here")
    deit = prompt("Escribe la fecha en este formato 'YYYY/MM/DD HH:MM'")
    alert(deit)    
  }
  


  )


})
