
$(document).ready(function(){
 $('.nav-button').click(function(e){
  $(this).parent().parent().children('.nav_menu_block').slideToggle(300);
  $('#site-header').toggleClass('nav-visible');
  if ( $("#site-header").hasClass("nav-visible") ) {
      $(".container").css("background", "#193157");
  }
   else {
      $(".container").css("background", "transparent");
   }
   e.stopPropagation();
  });

   $('.slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive:[
      {
        breakpoint: 1200,
        settings: {
          slidesToShow:2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 750,
        slidesToShow:1,
        slidesToScroll: 1,
        settings: {
          arrows: false,
          slidesToShow:1,
          dots: true
        }
      }
    ]
  });

  var ref_1 = $('#Web_refinement');
  var ref_2 = $('#News_refinement');
  var ref_3 = $('#Announcements_refinement');
  $('#Web_refinement').click(function(e){
        e.preventDefault();
        ref_1.addClass('active_ref');
        ref_1.removeClass('inactive_ref');
        ref_2.removeClass('active_ref');
        ref_2.addClass('inactive_ref');
        ref_3.removeClass('active_ref');
        ref_3.addClass('inactive_ref');

        $('#myUL_1').addClass('active');
        $('#myUL_1').removeClass('passive');
        $('#myUL_2').removeClass('active');
        $('#myUL_2').addClass('passive');
        $('#myUL_3').removeClass('active');
        $('#myUL_3').addClass('passive');

        
    });
    $('#News_refinement').click(function(e){
        e.preventDefault();
        ref_1.removeClass('active_ref');
        ref_1.addClass('inactive_ref');
        ref_2.addClass('active_ref');
        ref_2.removeClass('inactive_ref');
        ref_3.removeClass('active_ref');
        ref_3.addClass('inactive_ref');
        $('#myUL_2').addClass('active');
        $('#myUL_2').removeClass('passive');
        $('#myUL_1').removeClass('active');
        $('#myUL_1').addClass('passive');
        $('#myUL_3').removeClass('active');
        $('#myUL_3').addClass('passive');
    });
 
    $('#Announcements_refinement').click(function(e){
        e.preventDefault();
        ref_3.addClass('active_ref');
        ref_3.removeClass('inactive_ref');
        ref_1.removeClass('active_ref');
        ref_1.addClass('inactive_ref');
        ref_2.removeClass('active_ref');
        ref_2.addClass('inactive_ref');
        $('#myUL_3').addClass('active');
        $('#myUL_3').removeClass('passive');
        $('#myUL_2').removeClass('active');
        $('#myUL_2').addClass('passive');
        $('#myUL_1').removeClass('active');
        $('#myUL_1').addClass('passive');
    });

  //   document.onkeydown = function(e) {
  //     if (e.keyCode == 13) { 
  //       z = 0
  //       if($('#form-search').innerHTML == "") {
  //         ul = ul.document.getElementByClassName('myUL')
  //         li = li.getElementsByTagName('li')
  //         for (var i = 0; i < li_2.length-1; i++) {
  //           z =0
  //           a =li[i].getElementsByTagName("a")[0]; // [0] - обозначает "начиная со значения 0"
  //           if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
  //             li_2[i].style.display = "";
  //             console.log(z)
  //           }
  //       }
  //     }
  //      }
  //   }

  });
  function myFunction() {
    var input,filter, ul_1,ul_2,ul_3, li_1,li_2,li_3, a, i,z, z_2,z_3;
    input = document.getElementById('form-search');
    filter = input.value.toUpperCase();
    ul_1 = document.getElementById('myUL_1');
    li_1 = ul_1.getElementsByTagName('li');
    $('#form-submit').click(function(e) {
      z= 0;
      for (var i = 0; i < li_1.length-1; i++) {
          
          a =li_1[i].getElementsByTagName("a")[0]; 
          if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li_1[i].style.display = "";
            z = z+1
  
          }
          else{
            li_1[i].style.display = "none";
          }
      }
      if (z==0) {
        li_1[li_1.length - 1].style.display  = "flex"
        $('.Error_block_1').css('display','flex')
        $('.button_add').css('display','none')
      } else {
        li_1[li_1.length - 1].style.display = 'none'
        $('.button_add').css('display','block')
      }
    })
  
    ul_2 = document.getElementById('myUL_2');
    li_2 = ul_2.getElementsByTagName('li');
    $('#form-submit').click(function(e) {
      z_2 = 0
      for (var i = 0; i < li_2.length-1; i++) {
          
          a =li_2[i].getElementsByTagName("a")[0]; 
          if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li_2[i].style.display = "";
            z_2 = z_2+1
          }
          else{
            li_2[i].style.display = "none";
          }
      }
      if (z_2==0) {
        li_2[li_2.length - 1].style.display  = "flex"
        $('.Error_block_2').css('display','flex')
        $('.button_add').css('display','none')
      } else {
        li_2[li_2.length - 1].style.display = 'none'
        $('.Error_block_2').css('display','none')
        $('.button_add').css('display','block')
      }
    })
  
  
  
    ul_3 = document.getElementById('myUL_3');
    li_3 = ul_3.getElementsByTagName('li');
    $('#form-submit').click(function(e) {
      z_3= 0;
      for (var i = 0; i < li_3.length-1; i++) {
          
          a =li_3[i].getElementsByTagName("a")[0];
          if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li_3[i].style.display = "";
            z_3= z_3+1
          }
          else{
            li_3[i].style.display = "none";
          }
  
      }
  
      if (z_3==0) {
        li_3[li_3.length - 1].style.display  = "flex"
        $('.Error_block_3').css('display','flex')
        $('.button_add').css('display','none')
      } else {
        li_3[li_3.length - 1].style.display = 'none'
        $('.button_add').css('display','block')
      }

  
    })
  
    };




var lastScrollTop = 0;
$(window).scroll(function(event){
   $('.nav_menu_block').slideUp();
   $(".container").css("background", "transparent");
   $('#site-header').removeClass('nav-visible');
});

function search() {
  value = document.getElementByClassName("search").textContent
}

// ADAPTIVE MOBILE SITE
$(document).ready(function() {
  $(".space").click(function(e){
    $(".icon").toggleClass("close");
    $(".wrap_nav").toggleClass("on");

    
  });

  $("#sublinks_1").click(function(e) {
    if ( $("#sublinks_1").css('max-height') == '30px') {
      $("#sublinks_1").css('max-height','300px')
      $("#sublinks_4").css('max-height','30px')
      $("#sublinks_3").css('max-height','30px')
      $("#sublinks_2").css('max-height','30px')
      $("#sublinks_5").css('max-height','30px')
      $("#sublinks_6").css('max-height','30px')
      $("#sublinks_7").css('max-height','30px')
      $(this).find('i.right').toggleClass('active')
    } else {
      $("#sublinks_1").css('max-height','20px')
      $(this).find('i.right').toggleClass('active')
    }
    e.preventDefault();

  });
  $("#sublinks_2").click(function(e) {
    if ( $("#sublinks_2").css('max-height') == '30px') {
      $("#sublinks_2").css('max-height','300px')
      $("#sublinks_4").css('max-height','30px')
      $("#sublinks_3").css('max-height','30px')
      $("#sublinks_5").css('max-height','30px')
      $("#sublinks_1").css('max-height','30px')
      $("#sublinks_6").css('max-height','30px')
      $("#sublinks_7").css('max-height','30px')
      $(".wrapper__menu").find('i.right.active').toggleClass('active')
      
      $(this).find('i.right').toggleClass('active')
    } else {
      $("#sublinks_2").css('max-height','30px')
      $(this).find('i.right').toggleClass('active')
    }
  });
  $("#sublinks_3").click(function(e) {
    if ( $("#sublinks_3").css('max-height') == '30px') {
      $("#sublinks_3").css('max-height','300px')
      $("#sublinks_4").css('max-height','30px')
      $("#sublinks_5").css('max-height','30px')
      $("#sublinks_2").css('max-height','30px')
      $("#sublinks_1").css('max-height','30px')
      $("#sublinks_6").css('max-height','30px')
      $("#sublinks_7").css('max-height','30px')
      $(".wrapper__menu").find('i.right.active').toggleClass('active')
      $(this).find('i.right').toggleClass('active')
    } else {
      $("#sublinks_3").css('max-height','30px')
      $(this).find('i.right').toggleClass('active')
    }
  });
  $("#sublinks_4").click(function(e) {
    if ( $("#sublinks_4").css('max-height') == '30px') {
      $("#sublinks_4").css('max-height','300px')
      $("#sublinks_5").css('max-height','30px')
      $("#sublinks_3").css('max-height','30px')
      $("#sublinks_2").css('max-height','30px')
      $("#sublinks_1").css('max-height','30px')
      $("#sublinks_7").css('max-height','30px')
      $("#sublinks_6").css('max-height','30px')
      $(".wrapper__menu").find('i.right.active').toggleClass('active')
      $(this).find('i.right').toggleClass('active')
    } else {
      $("#sublinks_4").css('max-height','30px')
      $(this).find('i.right').toggleClass('active')
    }
  });
  $("#sublinks_5").click(function(e) {
    if ( $("#sublinks_5").css('max-height') == '30px') {
      $("#sublinks_5").css('max-height','300px')
      $("#sublinks_4").css('max-height','30px')
      $("#sublinks_3").css('max-height','30px')
      $("#sublinks_2").css('max-height','30px')
      $("#sublinks_1").css('max-height','30px')
      $("#sublinks_6").css('max-height','30px')
      $("#sublinks_7").css('max-height','30px')
      $(".wrapper__menu").find('i.right.active').toggleClass('active')
      $(this).find('i.right').toggleClass('active')
      
    } else {
      $("#sublinks_5").css('max-height','30px')
      $(this).find('i.right').toggleClass('active')
    }
  });
  $("#sublinks_6").click(function(e) {
    if ( $("#sublinks_6").css('max-height') == '30px') {
      $("#sublinks_6").css('max-height','300px')
      $("#sublinks_4").css('max-height','30px')
      $("#sublinks_3").css('max-height','30px')
      $("#sublinks_2").css('max-height','30px')
      $("#sublinks_1").css('max-height','30px')
      $("#sublinks_5").css('max-height','30px')
      $("#sublinks_7").css('max-height','30px')
      $(".wrapper__menu").find('i.right.active').toggleClass('active')
      $(this).find('i.right').toggleClass('active')
      
    } else {
      $("#sublinks_6").css('max-height','30px')
      $(this).find('i.right').toggleClass('active')
    }
  });
  $("#sublinks_7").click(function(e) {
    if ( $("#sublinks_7").css('max-height') == '30px') {
      $("#sublinks_7").css('max-height','300px')
      $("#sublinks_4").css('max-height','30px')
      $("#sublinks_3").css('max-height','30px')
      $("#sublinks_2").css('max-height','30px')
      $("#sublinks_1").css('max-height','30px')
      $("#sublinks_5").css('max-height','30px')
      $("#sublinks_6").css('max-height','30px')
      $(".wrapper__menu").find('i.right.active').toggleClass('active')
      $(this).find('i.right').toggleClass('active')
      
    } else {
      $("#sublinks_7").css('max-height','30px')
      $(this).find('i.right').toggleClass('active')
    }
  });

});

function button_news(){
  let plus_height = 500
  let element = $('.news_list')
  let max_height_element_px = element.css('max-height')
  max_height_element = +max_height_element_px.replace(/[^0-9]/g, '');
  let sum_height_element =  plus_height + max_height_element
  $('.news_list').css('max-height',String(sum_height_element) + 'px')
};

function button_add(){
  let plus_height_1 = 138
  let plus_height_2 = 480
  let plus_height_3 = 468
  if( $('.myUL_1').hasClass('active')) {
    let element = $('.myUL_1')
    let max_height_element_px = element.css('max-height')
    max_height_element = +max_height_element_px.replace(/[^0-9]/g, '');
    let sum_height_element =  plus_height_1 + max_height_element
    $('.myUL_1').css('max-height',String(sum_height_element) + 'px')
  } else if ($('.myUL_2').hasClass('active')) {
    let element = $('.myUL_2')
    let max_height_element_px = element.css('max-height')
    max_height_element = +max_height_element_px.replace(/[^0-9]/g, '');
    let sum_height_element =  plus_height_2 + max_height_element
    $('.myUL_2').css('max-height',String(sum_height_element) + 'px')
  } else  if ($('.myUL_3').hasClass('active')) {
    let element = $('.myUL_3')
    let max_height_element_px = element.css('max-height')
    max_height_element = +max_height_element_px.replace(/[^0-9]/g, '');
    let sum_height_element =  plus_height_3 + max_height_element
    $('.myUL_3').css('max-height',String(sum_height_element) + 'px')
  }
}; 

