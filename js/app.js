
window.addEventListener('DOMContentLoaded', (event) => {
    //Debug DOM
    console.log('DOM fully loaded and parsed');

    Date.prototype.toDateInputValue = (function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });

    Date.prototype.toTimeInputValue = (function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(11,16);
    })

    $('#sdate').val(new Date().toDateInputValue());
    $('#edate').val(new Date().toDateInputValue());
    $('#stime').val(new Date().toTimeInputValue());
    $('#etime').val(new Date().toTimeInputValue());



    msgData1 = $('.start-date').text();
    msgData2 = $('.end-date').text();
    msgData3 = $('.Location').text();

    var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:me@google.com\nDTSTAMP:20120315T170000Z\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:me@gmail.com\nORGANIZER;CN=Me:MAILTO::me@gmail.com\nDTSTART:" + msgData1 +"\nDTEND:" + msgData2 +"\nLOCATION:" + msgData3 + "\nSUMMARY:Our Meeting Office\nEND:VEVENT\nEND:VCALENDAR";

    $('.boton').click(function(){
    window.open( "data:text/calendar;charset=utf8," + escape(icsMSG));
    });

});