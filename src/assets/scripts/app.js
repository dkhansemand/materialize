$(document).ready(function () {  
    $("main").hide();
        setTimeout(function() {
            $("main").show();
            $(".preloader-wrapper").hide();
        }, 1500);
     $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
     $(".collection").hide();
     var options = [
    {selector: '.collection', offset: 150, callback: function(el) {
        $(".collection").show();
        Materialize.showStaggeredList($(el));
    } }
  ];
  Materialize.scrollFire(options);
});