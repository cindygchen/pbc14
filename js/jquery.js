
//display nav and logo 
$(document).ready(function() {
  var navpos = $('#topnav').offset();
  console.log(navpos.top);
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > navpos.top+200) {
        $('#nav').addClass('fixed');
       }
       else {
         $('#nav').removeClass('fixed');

       }
    });
});




$(document).ready( function() {
    $("#nav").hide(); //hide your div initially
    var topOfOthDiv = $("#topnav").offset().top+200;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#logo").fadeIn(); //reached the desired point -- show div
            $("#navcontainer").removeClass("activenavcontainer");
            $('#nav').slideDown();
            $('#nav ul').slideDown();
            
        }
        else {
       $('#logo').fadeOut();
       $('#nav').slideUp();
       $('#nav ul').slideUp();
       
       $('#navcontainer').addClass("activenavcontainer");
       
   }

    });


});



//beerlist functionality
$(document).ready(function(){

  // Hide div 2 by default
  $('.about-stickyicky').hide();
  $('.about-octorye').hide();
  $('.about-cruiser').hide();
  $('.about-bombora').hide();
  $('.about-goldencoast').show();

  $('#stickyickypic').hide();
  $('#octoryepic').hide();
  $('#cruiserpic').hide();
  $('#bomborapic').hide();
  $('#goldencoastpic').show();



  $('#goldencoast').click(function(){ 
        $('.about-stickyicky').hide();
        $('#stickyicky').removeClass("activebeer");
        $('.about-octorye').hide();
        $('#octorye').removeClass("activebeer");
        $('.about-cruiser').hide();
        $('#thecruiser').removeClass("activebeer");
        $('.about-bombora').hide();
        $('#bombora').removeClass("activebeer");
        $('.about-goldencoast').show();
        $('#goldencoast').addClass("activebeer");

        $('#stickyickypic').hide();
        $('#octoryepic').hide();
        $('#cruiserpic').hide();
        $('#bomborapic').hide();
        $('#goldencoastpic').show();

  });

  $('#stickyicky').click(function(){ 
        $('.about-stickyicky').show();
        $('#stickyicky').addClass("activebeer");
        $('.about-octorye').hide();
        $('#octorye').removeClass("activebeer");
        $('.about-cruiser').hide();
        $('#thecruiser').removeClass("activebeer");
        $('.about-bombora').hide();
        $('#bombora').removeClass("activebeer");
        $('.about-goldencoast').hide();
        $('#goldencoast').removeClass("activebeer");

        $('#stickyickypic').show();
        $('#octoryepic').hide();
        $('#cruiserpic').hide();
        $('#bomborapic').hide();
        $('#goldencoastpic').hide();

  });

    $('#octorye').click(function(){ 
        $('.about-stickyicky').hide();
        $('#stickyicky').removeClass("activebeer");
        $('.about-octorye').show();
        $('#octorye').addClass("activebeer");
        $('.about-cruiser').hide();
        $('#thecruiser').removeClass("activebeer");
        $('.about-bombora').hide();
        $('#bombora').removeClass("activebeer");
        $('.about-goldencoast').hide();
        $('#goldencoast').removeClass("activebeer");

        $('#stickyickypic').hide();
        $('#octoryepic').show();
        $('#cruiserpic').hide();
        $('#bomborapic').hide();
        $('#goldencoastpic').hide();

  
  });

  $('#thecruiser').click(function(){ 
        $('.about-stickyicky').hide();
        $('#stickyicky').removeClass("activebeer");
        $('.about-octorye').hide();
        $('#octorye').removeClass("activebeer");
        $('.about-cruiser').show();
        $('#thecruiser').addClass("activebeer");
        $('.about-bombora').hide();
        $('#bombora').removeClass("activebeer");
        $('.about-goldencoast').hide();
        $('#goldencoast').removeClass("activebeer");

        $('#stickyickypic').hide();
        $('#octoryepic').hide();
        $('#cruiserpic').show();
        $('#bomborapic').hide();
        $('#goldencoastpic').hide();  

  
  });

  $('#bombora').click(function(){ 
        $('.about-stickyicky').hide();
        $('#stickyicky').removeClass("activebeer");
        $('.about-octorye').hide();
        $('#octorye').removeClass("activebeer");
        $('.about-cruiser').hide();
        $('#thecruiser').removeClass("activebeer");
        $('.about-bombora').show();
        $('#bombora').addClass("activebeer");
        $('.about-goldencoast').hide();
        $('#goldencoast').removeClass("activebeer");

        $('#stickyickypic').hide();
        $('#octoryepic').hide();
        $('#cruiserpic').hide();
        $('#bomborapic').show();
        $('#goldencoastpic').hide();

  
  });
});


//active menu item
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top  - 100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos ) {
            $('#nav a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}





//MAP
$( document ).ready( function() {
  //Google Maps JS


  //Set Map
  function initialize() {
      var myLatlng = new google.maps.LatLng(32.897389, -117.137482);
      var imagePath = 'img/maplogo.png'
var mapOptions = {
    zoom: 15,
    scrollwheel: false,
    center: new google.maps.LatLng(32.897389, -117.137482),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles:   [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 60
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 30
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ef8c25"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b6c54c"
            },
            {
                "lightness": 40
            },
            {
                "saturation": -40
            }
        ]
    },
    {}
]
};


    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //Callout Content
    var contentString = '8680 Miralani Drive <br> San Diego, CA 92126';
    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 500
    });

    //Add Marker
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: imagePath,
      title: 'Pacific Brewing Company'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    //Resize Function
    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});


$(function () {
    $("#clickme").click(function () {
        if($(this).parent().css("right") == "-650px"){
        $(this).parent().animate({right:'0px'}, {queue: false, duration: 500});
    }else {
        $(this).parent().animate({right:'-650px'}, {queue: false, duration: 500});}
    });
});


$(function () {
    $("#clickmeleft").click(function () {
        if($(this).parent().css("left") == "-650px"){
        $(this).parent().animate({left:'0px'}, {queue: false, duration: 500});
    }else {
        $(this).parent().animate({left:'-650px'}, {queue: false, duration: 500});}
    });
});

/*
$(function(){
  $("#nav a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  });
});
*/






