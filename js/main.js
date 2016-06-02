$(document).ready(function () {

  // Toggle class "active" when menu is clicked
  $('.menu').click(function (e) {
    e.stopPropagation();
    $('#main-nav').toggleClass('active');
  });

  // Remove class "active" when is clicked anywhere else
  $(document).click(function () {
    $('#main-nav').removeClass('active');
  });

  // Responsive Slides
  $(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,           // Boolean: Show pager, true or false
    nav: false,             // Boolean: Show navigation, true or false
    random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: true,           // Boolean: Pause on hover, true or false
    pauseControls: true,    // Boolean: Pause when hovering controls, true or false
    prevText: "Previous",   // String: Text for the "previous" button
    nextText: "Next",       // String: Text for the "next" button
    maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
    navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: "",     // Selector: Declare custom pager navigation
    namespace: "rslides",   // String: Change the default namespace used
    before: function(){},   // Function: Before callback
    after: function(){}     // Function: After callback
  });

  // Image slider
  // $('.slides img:first').addClass('top');
  // $('.slides img:eq(3)').addClass('top');
  // var changeImg = function () {
  //   // change top img
  //   var curr = $('.slides img.top');
  //   var next = curr.next();
  //   if(!next.length) {
  //     next = $('.slides img:first');
  //     next.addClass('top');
  //     curr.animate({opacity: 0.0}, 300, function () {
  //         curr.removeClass('top');
  //         curr.css({opacity: 1.0});
  //     });
  //   } else {
  //       next.css({opacity: 0.0})
  //           .addClass('top')
  //           .animate({opacity: 1.0}, 300, function() {
  //               curr.removeClass('top');
  //           });
  //   }
  // };
  // setInterval(changeImg, 3000);
});
