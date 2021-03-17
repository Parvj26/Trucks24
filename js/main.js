(function ($) {

    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu-area #primary_menu li a").on("click", function () {
        $(".navbar-collapse").removeClass("in");
    });
    /* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="lnr lnr-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /* testimonials Slider Active
    =============================*/
    $('.gallery-slide').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1280: {
                items: 3
            },
            1500: {
                items: 4
            }
        }
    });
    /* testimonials Slider Active
    =============================*/
    $('.team-slide').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $(".toggole-boxs").accordion();
    /*---------------------------
    MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'https://quomodosoft.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscrie-form, .join-button').fadeOut();
                $('body').css('overflow-y', 'scroll');
            }
        }
    });

    /*-- Smoth-Scroll --*/
    $('.mainmenu-area a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    /*--------------------
       MAGNIFIC POPUP JS
       ----------------------*/
    var magnifPopup = function () {
        $('.popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    // Call the functions
    magnifPopup();
    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
        /*WoW js Active
        =================*/
        new WOW().init({
            mobile: false,
        });
    });


})(jQuery);

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyCz-UUvJQjbR1IwkL9R_V1_aoRbhhktoBM",
  authDomain: "uber-c32ae.firebaseapp.com",
  databaseURL: "https://uber-c32ae.firebaseio.com",
  projectId: "uber-c32ae",
  storageBucket: "uber-c32ae.appspot.com",
  messagingSenderId: "668557580726",
  appId: "1:668557580726:web:60576a51a2d07af284c917"
};

firebase.initializeApp(config);
 // Reference messages collection
var messagesRef = firebase.database().ref('website bookings');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

 // Get values
 var name = getInputVal('name');
 var company = getInputVal('company_name');
 var mobile = getInputVal('mobile_no');
 var pickup = getInputVal('pickup_search_term');
 var drop = getInputVal('dropoff_search_term') ;
 var pickupDate = getInputVal('pickup_date');
 var truck_type = document.getElementsByName("cars");
 var request_time = new Date();
     request_time.toString(); // returns "Sun May 10 2015 19:50:08 GMT-0600 (MDT)"

     
   if(truck_type[0].checked)
     {
        var val = truck_type[0].value;
     }
                   
   else if(truck_type[1].checked)
      {
        var val = truck_type[1].value;
      }
                   

var truck_capacity = document.getElementsByName("creditcard");
   if(truck_capacity[0].checked)
     {
        var capacity = truck_capacity[0].value;
     }
                   
   else if(truck_capacity[1].checked)
      {
        var capacity = truck_capacity[1].value;
      }
                   
    else if(truck_capacity[2].checked)
       {
         var capacity = truck_capacity[2].value;
       }

       else if(truck_capacity[3].checked)
      {
        var capacity = truck_capacity[3].value;
      }

      else if(truck_capacity[4].checked)
      {
        var capacity = truck_capacity[4].value;
      }

      else if(truck_capacity[5].checked)
      {
        var capacity = truck_capacity[5].value;
      }

      else if(truck_capacity[6].checked)
      {
        var capacity = truck_capacity[6].value;
      }

      else if(truck_capacity[7].checked)
      {
        var capacity = truck_capacity[7].value;
      }

      else if(truck_capacity[8].checked)
      {
        var capacity = truck_capacity[8].value;
      }

      else if(truck_capacity[9].checked)
      {
        var capacity = truck_capacity[9].value;
      }

      else if(truck_capacity[10].checked)
      {
        var capacity = truck_capacity[10].value;
      }

      else if(truck_capacity[11].checked)
      {
        var capacity = truck_capacity[11].value;
      }

      else if(truck_capacity[12].checked)
      {
        var capacity = truck_capacity[12].value;
      }


      var truck_capacity_container = document.getElementsByName("creditcard");
      if(truck_capacity_container[13].checked)
        {
           var capacity = truck_capacity_container[13].value;
        }
                      
      else if(truck_capacity_container[14].checked)
         {
           var capacity = truck_capacity_container[14].value;
         }
  
         else if(truck_capacity_container[15].checked)
         {
           var capacity = truck_capacity_container[15].value;
         }
  
         else if(truck_capacity_container[16].checked)
         {
           var capacity = truck_capacity_container[16].value;
         }
  
         else if(truck_capacity_container[17].checked)
         {
           var capacity = truck_capacity_container[17].value;
         }
  
         else if(truck_capacity_container[18].checked)
         {
           var capacity = truck_capacity_container[18].value;
         }
  
         else if(truck_capacity_container[19].checked)
         {
           var capacity = truck_capacity_container[19].value;
         }

         console.log(name, company, mobile,pickup,drop,pickupDate,val,capacity,request_time);

 // Save message

 saveMessage(name, company, mobile,pickup,drop,pickupDate,val,capacity,request_time.toString());

 // Show alert
 document.querySelector('.modal-window-alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.modal-window-alert').style.display = 'none';
 },10000);

 // Clear form
 document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
 return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, mobile,pickup,drop,pickupDate,val,capacity,request_time){
 var newMessageRef = messagesRef.push();
 newMessageRef.set({
   name: name,
   company:company,
   mobile:mobile,
   pickup:pickup,
   drop:drop,
   pickupDate:pickupDate,
   truck_type:val,
   truck_capacity:capacity,
   request_time:request_time,
 });
}

  
  
  


