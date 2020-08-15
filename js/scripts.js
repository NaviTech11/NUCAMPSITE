
// Function for Play and Pause 
$(function() {
    // -------Carousel--------
    $(".carousel").carousel( { interval:2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    //-----Reserve Button------
    $("#reserveButton").click(() => {
        $("#reserveModal").modal();
   });

   // -------Login Button------
   $("#loginButton").click(() => {
    $("#loginModal").modal();
   });

});





