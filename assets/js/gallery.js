
window.onload = function (){
    // baguetteBox.run('.tz-gallery');
    // $(document).ready(function(){
    //     //FANCYBOX
    //     //https://github.com/fancyapps/fancyBox
    //     $(".fancybox").fancybox({
    //         openEffect: "none",
    //         closeEffect: "none"
    //     });
    // });

    $(document).ready(function(){
        $(".fancybox").fancybox({
              openEffect: "none",
              closeEffect: "none"
          });
          
          $(".zoom").hover(function(){
              
              $(this).addClass('transition');
          }, function(){
              
              $(this).removeClass('transition');
          });
      });

    // $("#carousel-example-generic").carousel({ interval: false}); // this prevents the auto-loop

    // document.getElementById('myVideo').addEventListener('ended', myHandler, false);

    // function myHandler(e) {
    //     $("#carousel-example-generic").carousel('next');
    // }

}
// function init(){
    
// }