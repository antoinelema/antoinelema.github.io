// les parties

// == fonction toggleOverlay
// == overlay     // affiche ou cache l'overlay dans le haut
// == fadeInOut  // fonction pour que les flèches, le menue et la silhouete disparraissent
// == bulet // fonction pour la navigation dans le bas
// == scroll // qui premet de se deplacer sur les pages en cliquant sur les flèche ou sur la navigation
// == clique sur les flèches gauche et droite // qui determine i
// == clique sur navigation // qui determine i aussi

// la variable i defini l'ecran sur lrquelle on se trouve


$(document).ready(function(){
  // $("body").mousewheel(function(event, delta) { //
  //   this.scrollLeft -= (delta * 30);            //fonction qui transforme le scrolling vertical en scrolling horizontal
  //   event.preventDefault();                     //
  // });

  $(window).stellar();           // fonction importé pour le parrallax

// == fonction toggleOverlay
  var position= $("#toggleOverlay").position();
  var  top=position.top;

  $('#toggleOverlay').click(function() {
    animateOverlay();
    $('.overlay').slideToggle('slow');
    $(this).animate({
      top:top,
      },
      600);
    });

 // == overlay
function animateOverlay(){
  if( top != 0){
    top= "0";
  }
  else{
    top="12vh";
  }
}

  var i=1; //la variable i sert à indiquer sur quelle ecran nous nous trouvons

function ecran1(){
  if (i==1){
    $('#moi').css("left", "30vw");
  }

}



// == fadeInOut //fonction pour que les flèches, le menue et la silhouete disparraissent
  function fadeInOut(){
    if (i==1) {
      $(".btn2").hide();
      $(".btn1, .menuradio").fadeOut("fast").delay( 400 ).fadeIn("slow");
      ecran1();
      $("#moi").fadeOut("fast").delay( 500 );
      // $('#moi').removeAttr('style');
      $('#moi').fadeIn("fast");

    }
    else if(i==6) {
      // $('#moi').removeAttr('style');
      $(".btn1").hide();
      $(".btn2, .menuradio").fadeOut("fast").delay( 400 ).fadeIn("fast");
      $("#moi").fadeOut('fast');
    }
    else {
      $(".btn, .menuradio, #moi").fadeOut("fast").delay( 400 ).fadeIn("fast");
      // $('#moi').style.marginleft="30vw";
    }
    $('#moi').removeAttr('style');
    scroll();
    console.log("fadeInOut");
  }

// == bulet // fonction pour la navigation dans le bas
  function bullet(){
        $(".bulet").removeClass('fa-dot-circle-o').addClass('fa-circle-o');
        $("#bulet"+i+" i").removeClass('fa-circle-o').addClass('fa-dot-circle-o');
        var x=$("#bulet"+i+"");
        console.log(x);
  }

// == scroll
  function scroll(){                  //la fonction scroll qui premet de se deplacer sur les pages en cliquant sur les flèche ou sur la navigation
  // $(".scroll").click(function () {

      $.scrollTo(".ecran"+i, {duration:300});
      document.getElementById('moi').style.marginLeft="30vw";
      // $('#moi').css('marginLeft','0px');

      console.log(i);

    if (i==2) {
      // fadeInOut();
      $('#moi').animate({
        right: '-=15vw'
      }, {
        queue: false,
        duration: 300
      });
    }

    else if (i==3) {

    }
    else if (i==4) {
      $('#moi').animate({
        right: '-=15vw'
      }, {
        queue: false,
        duration: 300
      });
    }
    else if (i==5) {
      $('#moi').animate({
        right: '+=15vw'
      }, {
        queue: false,
        duration: 300
      });
    }




    // else{
    //   fadeInOut();
    //   // $("#moi").fadeIn("fast");
    // }
  // });
  bullet();
  }




  var $horizontal = $('#moi'),    //variable pour la silhouette
      // s = $(this).scrollLeft(),   //
      // d = $(document).width(),   //utiliser pour la fonction de scroll sans stellar
      // c = $(this).width();      //


      position2 = $(".ecran2").offset();

    // $(window).scroll(function () {    //fonction de parrallax sans le plugin stellar
    //
    //
    //     scrollPercent = (1/6*(s / (d - c)));
    //
    //     var position = (scrollPercent * ($(document).width() - $horizontal.width()));
    //
    //     $horizontal.css({
    //         'left': position
    //     });
    // });


// "si" qui cache la flèche de gauche sur l'ecran 1
if (i==1){$(".scrollBack").hide();};


// == clique sur les flèches gauche et droite

      // appelle de la fonction scroll quand on clique sur la flèche de droite
    $(".scroll").click(function(){
      i++;
      fadeInOut()
    });

    // appelle de la fonction scrollBack quand on clique sur la flèche de gauche
    $(".scrollBack").click(function(){
      i--;
      fadeInOut();
    });




// == clique sur navigation
  $(function navbar(){

    $("#bulet1").click(function(){
      i=1;
      fadeInOut();
    });

    $("#bulet2").click(function(){
      i=2;
      fadeInOut();
    });

    $("#bulet3").click(function(){
      i=3;
      fadeInOut();
    });

    $("#bulet4").click(function(){
      i=4;
      fadeInOut();
    });

    $("#bulet5").click(function(){
      i=5;
      fadeInOut();
    });

    $("#bulet6").click(function(){
      i=6;
      fadeInOut();
    });

  });

// if (window.matchMedia("(max-width: 990px)").matches){
//   $("#moi").addClass(moi);
// }
// else {
//   $("#moi").removeClass(moi);
// }
});
