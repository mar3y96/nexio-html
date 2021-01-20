$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1300,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})






function getVals(){
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }
  
  window.onload = function(){
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
          let sliders = sliderSections[x].getElementsByTagName("input");
          for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              // Manually trigger event first time to display values
              sliders[y].oninput();
            }
          }
        }
  }




  // SUBPRODUCT PAGE 

  $('.thumbnail').on('click', function() {
    var clicked = $(this);
    var newSelection = clicked.data('big');
    var $img = $('.primary-img').css("background-image","url(" + newSelection + ")");
    clicked.parent().find('.thumbnail').removeClass('selected');
    clicked.addClass('selected');
    $('.primary-img').empty().append($img.hide().fadeIn('slow'));
  });
 


  //colors with sizes (show & hide)

  $(document).ready(function(){
   
  });
  
  // $(document).ready(function(){
  //   $(".show-36").click(function(){
  //     $(".s-36").css("display", "block");
  //     // $(".s-37,.s-38,.s-39,.s-3xl,.s-40,.s-41,.s-42,.s-43,.s-44,.s-xs").css("display", "none");
  //   });
  // });
  // $(document).ready(function(){
  //   $(".show-37").click(function(){
  //     $(".s-37").css("display", "block");
  //     // $(".s-36,.s-38,.s-39,.s-3xl,.s-40,.s-41,.s-42,.s-43,.s-44,.s-xs").css("display", "none");
  //   });
  // });
  
  // $(document).ready(function(){
  //   $(".show-38").click(function(){
  //     $(".s-38").css("display", "block");
  //   });
  // });
  
  // $(document).ready(function(){
  //   $(".show-39").click(function(){
  //     $(".s-39").css("display", "block");
  //   });
  // });
  
  // $(document).ready(function(){
  //   $(".show-3xl").click(function(){
  //     $(".s-3xl").css("display", "block");
  //   });
  // });
  
  // $(document).ready(function(){
  //   $(".show-40").click(function(){
  //     $(".s-40").css("display", "block");
  //   });
  // });
  
  // $(document).ready(function(){
  //   $(".show-41").click(function(){
  //     $(".s-41").css("display", "block");
  //   });
  // });
  
  // $(document).ready(function(){
  //   $(".show-42").click(function(){
  //     $(".s-42").css("display", "block");
  //   });
  // });
  
  // $(document).ready(function(){
  //   $(".show-43").click(function(){
  //     $(".s-43").css("display", "block");
  //   });
  // });
  
  // $(document).ready(function(){
  //   $(".show-44").click(function(){
  //     $(".s-44").css("display", "block");
  //   });
  // });
  
  // $(document).ready(function(){
  //   $(".show-xs").click(function(){
  //     $(".s-xs").css("display", "block");
  //   });
  // });
  
  
  // ADD COLOR IDS IN ARRAY 
  var colors = ['s-36','s-37','s-38','s-39','s-3xl','s-40','s-41','s-42','s-43','s-44','s-xs'];

  // Variable which keeps track of which color is currently visible
var visibleColors = null;
var avaColorsSpan = 'ava-colors';
function onLinkClicked(event) {
  console.log(event);
  // Get the id of the link that was clicked.
  var linkName = event.currentTarget.id;
  console.log(linkName);
  // let id = parseInt(linkName);
  // console.log(id)

  // Strip off the '-link' from the end of the linkName
  var dashIndex = linkName.indexOf('-link');
  console.log(dashIndex);
  var appName = linkName.substr(0, dashIndex);
  console.log(appName);

  // Call show app with the correct appName.
  console.log(5+5);
  showApp(appName);
}
 

function showApp(appNameToShow) { 
  console.log(5+5);
  // Hide the currently visible app (if there is one!)
  if (visibleColors !== null) {
      $('.' + visibleColors).hide();  
  }

    //show ava colors span
    $('.' + avaColorsSpan).show(); 
    
  // And show the one passed
  $('.' + appNameToShow).show();

  // Update the visibleApp property.
  visibleColors = appNameToShow;
}

// $(document).ready waits for the page to finish rendering
$(document).ready(function () {
  $('#s-none-link').click(function(){
    $(".customize-color").hide();
    visibleColors= null;
    $('.' + avaColorsSpan).hide();
  });
  // Walk through the Array of Apps and add a click handler to
  // it's respective link.
  colors.forEach(function(name) {
      $('#' + name + '-link').on('click', onLinkClicked);
  });
});    




  





function showRegisterForm(){
  $('.loginBox').fadeOut('fast',function(){
      $('.registerBox').fadeIn('fast');
      $('.login-footer').fadeOut('fast',function(){
          $('.register-footer').fadeIn('fast');
      });
     
  }); 
  $('.error').removeClass('alert alert-danger').html('');
     
}
function showLoginForm(){
  $('#loginModal .registerBox').fadeOut('fast',function(){
      $('.loginBox').fadeIn('fast');
      $('.register-footer').fadeOut('fast',function(){
          $('.login-footer').fadeIn('fast');    
      });
      
      
  });       
   $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
  showLoginForm();
  setTimeout(function(){
      $('#loginModal').modal('show');    
  }, 230);
  
}
function openRegisterModal(){
  showRegisterForm();
  setTimeout(function(){
      $('#loginModal').modal('show');    
  }, 230);
  
}

function loginAjax(){
  /*   Remove this comments when moving to server
  $.post( "/login", function( data ) {
          if(data == 1){
              window.location.replace("/home");            
          } else {
               shakeModal(); 
          }
      });
  */

/*   Simulate error message from the server   */
   shakeModal();
}

function shakeModal(){
  $('#loginModal .modal-dialog').addClass('shake');
           $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
           $('input[type="password"]').val('');
           setTimeout( function(){ 
              $('#loginModal .modal-dialog').removeClass('shake'); 
  }, 1000 ); 
}

 