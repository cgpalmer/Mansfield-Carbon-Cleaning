 $(".button-collapse").sideNav(
     {
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el){/* Do Stuff*/ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    }
 );



// A $( document ).ready() block.
$( document ).ready(function() {

    mainDelay = setTimeout(animationDelay, 1000)
    function animationDelay(){
    $(".to-right").css('background-position','left');

    secondAnimationDelay =  setTimeout(secondAnimation, 750);
    function secondAnimation() {
       $(".to-left").css('background-position','right');
}
    };
 

});