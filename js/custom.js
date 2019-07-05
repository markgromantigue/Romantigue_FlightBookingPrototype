var selector = '.nav-link';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

$('div#modal-item.card.rounded-top').on('click', function(e) {
    var txt = $(e.target).text();
    var abbr = $(e.target).children('.abr').val();
    console.log("The text: " + txt); 
    console.log("The text: " + abbr);
    $('#fromAbbr').text(abbr);
    $('#fromFull').text(txt);
  });

  $('div#modal-item-to.card.rounded-top').on('click', function(e) {
    var txt = $(e.target).text();
    var abbr = $(e.target).children('.abr').val();
    $('#toAbbr').text(abbr);
    $('#toFull').text(txt);
  });

  $("#leftOption").on('click', function(){
    $("#rightOption").removeClass('active-tab');
    $(this).addClass('active-tab')
    $("#left-arrow-return").css({ 'opacity' : 0 });
});

$("#rightOption").on('click', function(){
    $("#leftOption").removeClass('active-tab');
    $(this).addClass('active-tab')
    $("#left-arrow-return").css({ 'opacity' : 1 });
});

$("#calIcon").on('click', function(){
    $('#calIcon').find('div.datepicker.datepicker-inline').show();
    $('.alignLeftDepartureDate').datepicker({ // Initialize the datepicker with your options
        format: "d M yy",
        weekStart: 1,
        todayBtn: "linked",
        autoclose: true,
        todayHighlight: true
    }).on('changeDate', dateChanged); // Hook the changeDate event to fire "dateChanged"

    function dateChanged(e) {   
        $('#calIcon').find('div.datepicker.datepicker-inline').hide();      // The handler for changeDate event
        $("#departureDateLabel").text(e.format());  // get the selected date in specified format 
        curDate = e.date;                // cache the selected date in the global variable
    }
    
    $("#calIcon").datepicker("setDate", new Date()); // Seed the datepicker with today
    
    $(".glyphicon-chevron-left").on("click", function() {  // on click of left arrow
        curDate.setDate(curDate.getDate() - 1);            // decrement current date by 1
        $("#calIcon").datepicker("setDate", curDate);      // set datepicker to new date
    });
    $(".glyphicon-chevron-right").on("click", function() { // on click of right arrow
        curDate.setDate(curDate.getDate() + 1);            // increment current date by 1
        $("#calIcon").datepicker("setDate", curDate);      // set datepicker to new date
    }); 
});

$("#calIcon").click(function(){
    $('#calIcon').find('div.datepicker.datepicker-inline').show();
    $('#calIcon').find('div.datepicker.datepicker-inline').focus();
});

//display current date for departure label
Date.prototype.getMonthName = function() {
    var m = ['Jan','Feb','Mar','Apr','May','Jun','Jul',
    'Aug','Sep','Oct','Nov','Dec'];
    return m[this.getMonth()];
}
var today = new Date;
$( document ).ready(function() {
    $("#departureDateLabel").text(today.getDate() + ' ' + today.getMonthName() + ' ' + today.getFullYear().toString().substr(-2));
});

$("#calIconReturn").on('click', function(){
    $('#calIconReturn').find('.datepicker.datepicker-inline').show();
    $('.alignRightDepartureDate').datepicker({ // Initialize the datepicker with your options
        format: "d M yy",
        weekStart: 1,
        todayBtn: "linked",
        autoclose: true,
        todayHighlight: true
    }).on('changeDate', dateChanged); // Hook the changeDate event to fire "dateChanged"

    function dateChanged(e) {   
        $('#calIconReturn').find('.datepicker.datepicker-inline').hide();     // The handler for changeDate event
        $("#returnDateLabel").text(e.format());  // get the selected date in specified format 
        curDate = e.date;                // cache the selected date in the global variable
    }
    
    $("#calIconReturn").datepicker("setDate", new Date()); // Seed the datepicker with today
    
    $(".glyphicon-chevron-left").on("click", function() {  // on click of left arrow
        curDate.setDate(curDate.getDate() - 1);            // decrement current date by 1
        $("#calIconReturn").datepicker("setDate", curDate);      // set datepicker to new date
    });
    $(".glyphicon-chevron-right").on("click", function() { // on click of right arrow
        curDate.setDate(curDate.getDate() + 1);            // increment current date by 1
        $("#calIconReturn").datepicker("setDate", curDate);      // set datepicker to new date
    }); 
});

$("#calIconReturn").click(function(){
    $('#calIconReturn').find('.datepicker.datepicker-inline').show();
    $('#calIconReturn').find('.datepicker.datepicker-inline').focus();
});

$(document).mouseup(function(e) 
{
    var container = $("#calIcon");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('#calIcon').find('.datepicker.datepicker-inline').hide();
    }
});

$(document).mouseup(function(e) 
{
    var container = $("#calIconReturn");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('#calIconReturn').find('.datepicker.datepicker-inline').hide();
    }
});

$('#oneWay').click(function(){
    $('#calIconReturn').hide();
});
$('#return').click(function(){
    $('#calIconReturn').show();
});

$(".addAdult").click(function(){
    var num = $(this).closest(":has(h3)").find('h3').text();
    $('.adult').text(parseInt(num, 10) + 1);
});

$(".subtractAdult").click(function(){
    var num = $(this).closest(":has(h3)").find('h3').text();
    if(parseInt(num, 10) > 0){
        $('.adult').text(parseInt(num, 10) - 1);
    }
});

$(".addChild").click(function(){
    var num = $(this).closest(":has(h3)").find('h3').text();
    $('.child').text(parseInt(num, 10) + 1);
});

$(".subtractChild").click(function(){
    var num = $(this).closest(":has(h3)").find('h3').text();
    if(parseInt(num, 10) > 0){
        $('.child').text(parseInt(num, 10) - 1);
    }
});

$(".addInfant").click(function(){
    var num = $(this).closest(":has(h3)").find('h3').text();
    $('.infant').text(parseInt(num, 10) + 1);
});

$(".subtractInfant").click(function(){
    var num = $(this).closest(":has(h3)").find('h3').text();
    if(parseInt(num, 10) > 0){
        $('.infant').text(parseInt(num, 10) - 1);
    }
});

$("#economy").click(function(e){
    e.preventDefault();

});

$('.flightClass').on('click', function(e){
    e.preventDefault();
    $('.flightClass').removeClass('active-link');
    $(this).addClass('active-link');
});