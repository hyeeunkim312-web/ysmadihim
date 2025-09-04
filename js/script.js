

$(document).ready(function () {


    let isMenuOpen = false;

    $('#menuButton').click(function () {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    $(window).on('scroll', function () {
        if (isMenuOpen) {
            closeMenu();
        }

    });

    $('.m_tnb a, .m_tnb li').on('click', function () {
        if (isMenuOpen) {
            closeMenu();
        }
    });

    function openMenu() {
        $('.m_tnb').stop(true, true).slideDown(300, 'swing');
        $('#menuIcon').attr('src', './img/close.png');
        isMenuOpen = true;
    }

    // 메뉴 닫기 함수
    function closeMenu() {
        $('.m_tnb').stop(true, true).slideUp(300, 'swing');
        $('#menuIcon').attr('src', './img/m_menu.png');
        isMenuOpen = false;
    }


    $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $('.hd_top').addClass('scrolled');
    } else {
      $('.hd_top').removeClass('scrolled');
    }
  });

  let bounceTimeout;

$(window).on('scroll', function () {
  clearTimeout(bounceTimeout);

  // 1. 튀는 애니메이션 시작
  $('.side_menu_wrap').css('transform', 'translateY(-15px)');

  // 2. 0.1초 후 원래 위치로 되돌림 (부드럽게 내려오게)
  bounceTimeout = setTimeout(() => {
    $('.side_menu_wrap').css('transform', 'translateY(0)');
  }, 100);
});

$('#topButton').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 500); // 500ms 동안 위로
});

});

$(function(){
  $('.b_pop_btn').click(function(e){
    e.preventDefault();
    $('.popup').fadeIn(200);
    $('body').addClass('no-scroll');
  })
  $('.closePopup').click(function () {
    $('.popup').fadeOut(200);
    $('body').removeClass('no-scroll');
  });
})