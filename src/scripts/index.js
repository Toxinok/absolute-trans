import 'owl.carousel';
import '@fancyapps/fancybox';

import './sliders';
import './modal';

//=============================================================================
// webp support test
// function testWebP(callback) {
//     var webP = new Image();
//     webP.onload = webP.onerror = function () {
//         callback(webP.height === 2);
//     };
//     webP.src =
//         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }
//
// testWebP(function (support) {
//     if (support) {
//         $("html").addClass("webp");
//     } else {
//         $("html").addClass("no-webp");
//     }
// });

$(function () {
  //=============================================================================
  // aside mobile autoscroll
  let asideList = $('.aside__list');

  if (asideList.find($('.active')).length) {
    let asideActiveItemPosition;
    asideActiveItemPosition = asideList.find($('.active')).offset().left;
    asideList.scrollLeft(asideActiveItemPosition - 100);
  }

  //=============================================================================
  // photo viewer plugin - small button
  $('[data-fancybox]').fancybox({
    smallBtn: true,
  });

  $(window).on('load', (event) => {
    let header = $('header');
    let headerHeight;

    let footer = $('footer');
    let footerTop;

    let mainContent = $('main');
    let mainContentTop;

    let asideTransport = $('.transport-list');
    let asideTransportTop;
    let asideTransportHeight;

    if (asideTransport.length) {
      asideTransportTop = asideTransport.offset().top;
      asideTransportHeight = asideTransport.height();
    }

    if (header.length) {
      headerHeight = $('.header').height();
    }

    if (footer.length) {
      footerTop = footer.offset().top;
    }

    if (mainContent.length) {
      mainContentTop = mainContent.offset().top;
    }

    $(window).on('scroll', (event) => {
      let target = $(event.target);

      let navHeight = $('.nav').outerHeight();
      if (target.scrollTop() > headerHeight - navHeight) {
        header.addClass('sticky');
        header.next().css('margin-top', headerHeight);
      } else {
        header.removeClass('sticky');
        header.next().css('margin-top', '0');
      }

      asideSliding();
      toggleMessengersAside();
      toggleScrollTop();
    });

    $(window).on('resize', () => {
      if (asideTransport.length) {
        asideTransportTop = asideTransport.offset().top;
      }

      if (header.length) {
        headerHeight = $('.header').height();
      }

      if (footer.length) {
        footerTop = footer.offset().top;
      }

      if (mainContent.length) {
        mainContentTop = mainContent.offset().top;
      }

      asideSliding();
      toggleMessengersAside();
      toggleScrollTop();
    });

    function asideSliding() {
      let windowScrollTop = $(window).scrollTop();

      let isMediaMatch;
      let pageUrl = $(location).attr('pathname').slice(1);

      if (pageUrl.indexOf('details') !== -1) {
        isMediaMatch = window.matchMedia('(min-width: 1661px)').matches;
      } else {
        isMediaMatch = window.matchMedia('(min-width: 1201px)').matches;
      }

      if (isMediaMatch) {
        if (
          windowScrollTop > asideTransportTop - 120 &&
          windowScrollTop + asideTransportHeight + 380 < footerTop
        ) {
          asideTransport.css('position', 'fixed');
          asideTransport.css('top', 120);
          asideTransport.css('bottom', 'auto');
        } else if (windowScrollTop + asideTransportHeight + 380 > footerTop) {
          asideTransport.css('position', 'absolute');
          asideTransport.css('top', 'auto');
          asideTransport.css('bottom', 250);
          asideTransport.addClass('static');
        } else {
          asideTransport.css('position', 'static');
        }
      } else {
        asideTransport.css('position', 'absolute');
      }
    }

    function toggleMessengersAside() {
      let windowScrollTop = $(window).scrollTop();
      let messengers = $('.messengers');

      if (window.matchMedia('(min-width: 1201px)').matches) {
        if (windowScrollTop > mainContentTop - 200) {
          messengers.fadeIn();
        } else {
          messengers.fadeOut();
        }
      } else {
        messengers.fadeOut();
      }
    }

    function toggleScrollTop() {
      if ($(window).scrollTop() > 1000) {
        $('.content__scroll-top').fadeIn();
      } else {
        $('.content__scroll-top').fadeOut();
      }
    }
  });

  $(document).on('click', (event) => {
    let target = $(event.target);
    //=============================================================================
    // car-details and bus-details tabs
    if (target.hasClass('car-details__tab')) {
      target.siblings().removeClass('active');
      target.addClass('active');

      let clickedBlock = target.data('tab');

      $('.description').removeClass('active');
      $('.conditions').removeClass('active');
      $('.payment').removeClass('active');

      $('.' + clickedBlock).addClass('active');
    }

    //=============================================================================
    // car-details and bus-details slider click
    if (target.is('.car-details .slider img')) {
      let qualitySrc = target.data('quality-src');
      $('.car-details__main-image img').attr('src', qualitySrc);

      $('.car-details .slider img').removeClass('active');
      target.addClass('active');
    }

    //=============================================================================
    // index - video section arrow click
    if (target.hasClass('welcome__arrow')) {
      $('html, body').animate(
        {
          scrollTop: $('.content').offset().top,
        },
        500
      );
    }

    //=============================================================================
    // scroll to top button
    if (target.hasClass('content__scroll-top')) {
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        1000
      );
    }

    //=============================================================================
    // menu-icon
    if (
      target.hasClass('nav__menu-icon') ||
      target.parent().hasClass('nav__menu-icon')
    ) {
      let localTarget = target.hasClass('nav__menu-icon')
        ? target
        : target.parent();

      localTarget.toggleClass('active');
      $('.menu').toggleClass('active');

      if ($('.header').hasClass('sticky')) {
        let headerHeight = $('.header').height();
        let navHeight = $('.nav').outerHeight();

        $('.menu').css('top', headerHeight - navHeight);
      } else {
        $('.menu').css('top', 0);
      }

      if (localTarget.hasClass('active')) {
        $(document.body).css('overflow', 'hidden');
      } else {
        $(document.body).css('overflow', 'visible');
      }
    }

    //=============================================================================
    // cars options
    if (
      target.hasClass('options__tab') ||
      target.parent().hasClass('options__tab')
    ) {
      let localTarget = target.hasClass('options__tab')
        ? target
        : target.parent();

      localTarget.siblings().removeClass('active');
      localTarget.addClass('active');
    }

    if (target.hasClass('options__filter')) {
      target.siblings().removeClass('active');
      target.addClass('active');
    }

    //=============================================================================
    // cars options - select
    if (
      target.hasClass('options__select') ||
      target.parent().hasClass('options__select')
    ) {
      let localTarget = target.hasClass('options__select')
        ? target
        : target.parent();

      let wrapper = localTarget.parent();
      wrapper.toggleClass('focus');
    }

    //=============================================================================
    // faq titles
    if (target.hasClass('faq__title')) {
      target.parent().toggleClass('active');
    }

    //=============================================================================
    // index - aside transport list click
    if (
      target.hasClass('transport-list__item') ||
      target.parent().hasClass('transport-list__item')
    ) {
      let localTarget;

      localTarget = target.hasClass('transport-list__item')
        ? target
        : target.parent();

      let clickedTabName = localTarget.data('tab');

      let clickedTabElement = $(`[data-category=${clickedTabName}]`);
      let clickedTabElementHeight = clickedTabElement.outerHeight();

      $('html, body').animate(
        {
          scrollTop: $('.content').offset().top - 100,
        },
        1000
      );

      if ($('.transport-list__item.active').length) {
        let allTabs = $(`[data-category]`);
        allTabs.fadeOut();

        setTimeout(() => {
          clickedTabElement.find('.card').show();
          $('.options__tab').removeClass('active');
          $('.options__select').val('default');
          $('.options__filter').removeClass('active');

          clickedTabElement.fadeIn();
        }, 400);
      } else {
        $('.content__title').animate(
          {
            paddingTop: clickedTabElementHeight,
            marginTop: 0,
          },
          1000,
          function () {
            clickedTabElement.fadeIn();
            $('.content__title').css('padding-top', 0);
          }
        );
      }

      localTarget.siblings().removeClass('active');
      localTarget.addClass('active');
    }
  });

  $('.options__select').on('change', (event) => {
    let cards = $(event.target).closest('.cards').find('.card');
    let currentOptionName = $(event.target).data('select');

    $(event.target).addClass('changed');

    if (currentOptionName === 'sort') {
      let sortOption = $(event.target).val();
      var option = $(':selected', event.target).data('option');

      cards
        .sort((a, b) => {
          let dataA = $(a).data(sortOption);
          let dataB = $(b).data(sortOption);

          return option === 'asc' ? dataA - dataB : dataB - dataA;
        })
        .appendTo(cards.parent());
    } else {
      let currentOption = $(event.target).val();
      let currentClass = $('.options__tab.active').data('class');

      cards.each((index, element) => {
        if (currentClass) {
          $(element).data(currentOptionName) === currentOption &&
          $(element).data('class') === currentClass
            ? $(element).show()
            : $(element).hide();
        } else {
          $(element).data(currentOptionName) === currentOption
            ? $(element).show()
            : $(element).hide();
        }
      });
    }
  });

  $('.options__filter').on('click', (event) => {
    let cards = $(event.target).closest('.cards').find('.card');
    let currentOptionName = $(event.target).data('select');

    if (currentOptionName === 'sort') {
      let sortOption = $(event.target).data('value');
      var option = $(event.target).data('option');

      cards
        .sort((a, b) => {
          let dataA = $(a).data(sortOption);
          let dataB = $(b).data(sortOption);

          return option === 'asc' ? dataA - dataB : dataB - dataA;
        })
        .appendTo(cards.parent());
    } else {
      let currentOption = $(event.target).data('value');

      cards.each((index, element) => {
        $(element).data(currentOptionName) === currentOption
          ? $(element).show()
          : $(element).hide();
      });
    }
  });

  $('.options__tab').on('click', function (event) {
    let cards = $(event.target).closest('.cards').find('.card');
    let currentClass = $(this).data('class');

    cards.each((index, element) => {
      let currentOptionName = $('.options__select').data('select');
      let currentOption = $('.options__select.changed').val();

      if (currentOption) {
        $(element).data('class') === currentClass &&
        $(element).data(currentOptionName) === currentOption
          ? $(element).show()
          : $(element).hide();
      } else {
        $(element).data('class') === currentClass
          ? $(element).show()
          : $(element).hide();
      }
    });
  });

  $('.options--news .options__tab').on('click', function (event) {
    let newsItems = $(event.target).closest('.news').find('.news__item');
    let currentYear = $(this).data('year');

    if (currentYear === 'all') {
      newsItems.show();
    } else {
      newsItems.each((index, element) => {
        $(element).data('year') === currentYear
          ? $(element).show()
          : $(element).hide();
      });
    }
  });
});
