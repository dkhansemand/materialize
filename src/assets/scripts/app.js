$(document).ready(function () {  
    $("main").hide();

    setTimeout(function() {
        $("main").show();
        $(".collection").hide();
        $(".preloader-wrapper").hide();
    }, 1500);

     $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });

     var options = [
    {selector: '.collection', offset: 350, callback: function(el) {
        $(".collection").show();
        Materialize.showStaggeredList($(el));
    } }
  ];

  Materialize.scrollFire(options);
   $('.slider').slider({full_width: true});

  $(".datepicker").pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 25 // Creates a dropdown of 15 years to control year
  });
});