$(document).ready(function () {
  $('.navbar-light .dmenu').hover(function () {
          $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
      }, function () {
          $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
      });
  });

$(document).on('click', '.familia', function(){
  // alert($(this).attr('id') + ' Familia - clicked');
  $('.main_content').load('includes/pages/familia.php');
});

$(document).on('click', '.beginning', function(){
  // alert($(this).attr('id') + ' Como empezó - clicked');
  $('.main_content').load('includes/pages/beginning.php');
});

$(document).on('click', '.venimos', function(){
  // alert($(this).attr('id') + ' Como empezó - clicked');
  $('.main_content').load('includes/pages/venimos.php');
});

$(document).on('click', '.familiaLopez', function(){
  // alert($(this).attr('id') + ' Como empezó - clicked');
  $('.main_content').load('includes/pages/familiaLopez.php');
});

$(document).on('click', '.familiaCorrero', function(){
  // alert($(this).attr('id') + ' Como empezó - clicked');
  $('.main_content').load('includes/pages/familiaCorrero.php');
});

$(document).on('click', '.login', function(){
  // alert($(this).attr('id') + ' Como empezó - clicked');
  $('.main_content').load('includes/pages/login.php');
});

$(document).on('click', '.amigos', function(){
  // alert($(this).attr('id') + ' Como empezó - clicked');
  $('.main_content').load('includes/pages/amigos.php');
});