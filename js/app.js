$(document).ready(function () {
    $('.ryu').mouseenter(function() {
      //  console.log('in mouse enter .ryu div');
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })

    .mouseleave(function (){
      //  console.log('mouse left');
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })

    .mousedown(function () {
        playHadouken();
        // console.log('mousedown');

        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').show().animate(
          {'left': '1020px'},
          500,
          function() {
            $(this).hide();
            $(this).css('left', '520px');
          }
        );
    })

    .mouseup(function (){
        //console.log('mouseup');
          $('.ryu-throwing').hide();
          $('.ryu-ready').show()
    });

    $(document).keydown( function ( event){
        if( event.keyCode == 88) {
                $('.ryu-ready').hide();
                $('.ryu-cool').show();
        }
    })

    .keyup( function () {
        //console.log('in keyup');
        $('.ryu-cool').hide();
        $('.ryu-ready').show();
    });
} );


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}