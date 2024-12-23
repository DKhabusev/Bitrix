/*
document.addEventListener("DOMContentLoaded", (function () {
    let e = [].slice.call(document.querySelectorAll("img.lazy")),
        t = !1;
    const n = function () {
        !1 === t && (t = !0, setTimeout((function () {
            e.forEach((function (t) {
                t.getBoundingClientRect().top <= window.innerHeight && t.getBoundingClientRect().bottom >= 0 && "none" !== getComputedStyle(t).display && (t.src = t.dataset.src, t.srcset = t.dataset.srcset, t.classList.remove("lazy"), e = e.filter((function (e) {
                    return e !== t
                })), 0 === e.length && (document.removeEventListener("scroll", n), window.removeEventListener("resize", n), window.removeEventListener("orientationchange", n)))
            })), t = !1
        }), 200))
    };
    document.addEventListener("scroll", n), window.addEventListener("resize", n), window.addEventListener("orientationchange", n)
})),
*/
/*
document.addEventListener("DOMContentLoaded", (function () {
    var e = [].slice.call(document.querySelectorAll(".lazy-background"));
    if ("IntersectionObserver" in window) {
        let t = new IntersectionObserver((function (e, n) {
            e.forEach((function (e) {
                e.isIntersecting && (e.target.classList.add("visible"), t.unobserve(e.target))
            }))
        }));
        e.forEach((function (e) {
            t.observe(e)
        }))
    }
})),
*/
/*
document.addEventListener("DOMContentLoaded", (function () {

    [].forEach.call(document.querySelectorAll("a.cta"), (function (e) {
        e.addEventListener("click", (function (e) {
            var t = this.getAttribute("href"),
                n = "Оставить заявку";
            this.dataset.title && (n = this.dataset.title);
            let o = "";
            this.dataset.title && (o = this.dataset.pretitle), document.querySelector(t).querySelectorAll(".h2")[0].innerText = n,
                document.querySelector(t).querySelectorAll("p")[0].innerText = o, document.querySelector(t).classList.add("show"), e.preventDefault()
        }))
    })),

        [].forEach.call(document.querySelectorAll("a.close_popup"), (function (e) {
            e.addEventListener("click", (function (e) {
                document.querySelector(".show").classList.remove("show"), e.preventDefault()
            }))
        }))

}));
*/

$(function () {
    $(document).on('click', '.inform_window .close_info', function () {
        var expDate = new Date();
        $('.inform_window').removeClass('show');
        expDate.setTime(expDate.getTime() + (1 * 24 * 60 * 60 * 1000)); // add 1 день
        $.cookie("close_info", "Y", {path: '/', expires: expDate});
        return false;
    });

    $(document).on('click', '.show_popup', function () {
        let popup_id = $(this).data('popup-id');
        $('#' + popup_id + ' .popup_wrapper').addClass('show');
        $('body').addClass('popup_shown');
        return false;
    });

    $(document).on('click', '.close_popup', function () {
        $(this).closest('.popup_wrapper').removeClass('show');
        $('body').removeClass('popup_shown');
        return false;
    });

    $(window).resize(function () {
        $('.items_loop .items_wrapper').not('.slick-initialized').slick('resize');
    });

    $(".items_loop .items_wrapper").slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
    })

    $(document).on("click", ".item_view_wrapper>.cat>button", function (e) {
        $(".item_view_wrapper>.cat>.list").toggleClass('active');
    });

    $('.prev_gal').on('init', function(event) {
        $(this).removeClass('overflow_none');
    });

    $('.prev_gal').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.nav_gal',
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        arrows: false,
    });

    $('.nav_gal').on('init', function(event) {
        $(this).removeClass('overflow_none');
    });


    $('.nav_gal').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.prev_gal',
        focusOnSelect: true,
        focusOnChange: true,
        swipeToSlide: true,
        infinite: true,
    });

    $(document).on('click', '.item_desc .item_navs a', function () {
        //get id
        let tabid = $(this).attr('href');
        $('.item_desc .item_navs a').removeClass('active');
        $(this).addClass('active');

        $('.item_desc .desc .tab').removeClass('active');
        $(tabid).addClass('active');
        return false;
    });

    $(document).on('click', '.account .nav .chooser', function () {
        $('.account .nav ul').toggleClass('opened');
    });

    $(document).on("click", ".catalog__button", (function (e) {
        $(".main_menu").toggleClass("show");
        $('body').toggleClass('menu_opened');
        return false;
    }));

    $(document).on("mouseover", ".main_menu .main_rub", (function (e) {
        $('.main_rub').removeClass("show");
        $(this).addClass("show");
    }));

    $(document).on("click", ".mob_main_rub__icon-block", (function (e) {
        $(this).find(".mob_main_rub__icon").toggleClass("mob_main_rub__icon_open");
        let main_rub =  $(this).closest(".main_rub");
        let show = main_rub.hasClass("show");
        console.log(show);
        main_rub.removeClass("show");
        if(show) {
            main_rub.removeClass("show");
        }
        else {
            main_rub.addClass("show");
        }
    }));

    $(document).on("click", ".mob_sub_rub__icon-block", (function (e) {
        $(this).find(".mob_sub_rub__icon").toggleClass("mob_sub_rub__icon_open");
        $(this).closest(".mob_sub_rub").siblings(".mob_sub_rub__child-list").
            toggleClass("mob_sub_rub__child-list_hide");
    }));

    $(document).on('click', "body", function (e) {
        var div = $(".catalog .catalog-main"); // тут указываем ID элемента
        if ( !div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
            $('body').removeClass('menu_opened');
            $('.main_menu').removeClass('show');
        }
    });

    $(document).on("click", ".catalog-mob__button", (function (e) {
        $(".mob_main_menu").toggleClass("show");
        $('body').toggleClass('menu_opened');
        return false;
    }));


    $(document).on('click', '.close_mob_menu', function () {
        $('body').removeClass('menu_opened');
        $(".mob_main_menu").removeClass("show");
    });

    $(document).on('click', '.mob_main_menu .overlay', function () {
        $('body').removeClass('menu_opened');
        $('.mob_main_menu').removeClass('show');
    });

    $(document).on('click','.catalog_open_button',function(){
        //get current state
        let parent_classes =  $(this).parent().hasClass('opened');
        if (parent_classes) {
            $(this).text('+');
        }else{
            $(this).text('–');
        }

        $(this).parent().toggleClass('opened');
    });


    if (document.body.clientWidth < 768) {
        $(document).on('click', '.account .nav ul li', function () {
            let tab_index = $(this).index();
            let name = $(this).find('a').text();
            $('.account .nav .chooser').text(name);
            $('.account .nav ul').toggleClass('opened');
            $('.account .account_tabs>li').removeClass('current');
            $('.account .account_tabs>li').eq(tab_index).addClass('current');
        });
    }

    $(document).on('click', '.account .account_tabs .my_history li .item button.btn', function () {
        $(this).parent('.item').find('.items_inner').toggleClass('shown');
        //change the name
        let parent = $(this).parent().find('.items_inner').hasClass("shown");
        if (parent) {
            $(this)[0].innerText = 'Скрыть список товаров';
        } else {
            $(this)[0].innerText = 'Показать список товаров';
        }

    });

    $(document).on('click', '.show_other_items', function () {
        $('.aditional').toggleClass('hidden');
    });

    $(document).on('click', '.remind_pass', function () {
        $('.popup_wrapper.show').removeClass('show');
        $('#forgot_pass').addClass('show');
        return false;
    });

    $(document).on('submit','#general_search_form', function(e){
        $('.loading_page').removeClass('hidden');
    });

    // Поле поиска
    $('input.js-autocomplete').each(function() {
        var $field = $(this);
        var url = $field.data('autocomplete-url');
        $field.autocomplete({
            source: function(request, response) {
                var data = {};
                data[$field.attr('name')] = request.term;
                $.getJSON(url, data, response);
            },
            select: function(event, ui) {
                location.href = ui.item.url + (ui.item.rank == 0 ? '?rid=' + ui.item.id : '');
            },
            minLength: 3,
            open: function() {
                $("ul.ui-top_menu").width($(this).innerWidth()-10);
            }
        }).autocomplete("instance")._renderItem = function(ul, item) {
            return $("<li>").append("<div>" + item.header + "</div>").appendTo(ul);
        };
    });


    if ($('.mx_slider').length) {
        let current_slide = 0;
        let count_of_slide = $('.mx_slider .inner')[0].children.length;

        $(document).on('click','#plus_slide',function(){
            current_slide++;
            if (current_slide >= count_of_slide) {
                current_slide = 0;
            }

            $('.mx_slider .inner .big').removeClass('big');
            $('.mx_slider .inner .side_top').removeClass('side_top');
            $('.mx_slider .inner>div').eq(current_slide + 1).addClass('side_top');
            $('.mx_slider .inner .side_bottom').removeClass('side_bottom');
            $('.mx_slider .inner>div').eq(current_slide + 2).addClass('side_bottom');
            $('.mx_slider .inner>div').eq(current_slide).addClass('big');

            let changer = count_of_slide - 3 - current_slide;
            //if -1 первый слайд встает на место последнего
            if (changer == -1) {
                $('.mx_slider .inner>div').eq(0).addClass('side_bottom');
            }
            //если -2 первый слайд встает на место предпоследнего а второй встает на место последнего
            if (changer == -2) {
                $('.mx_slider .inner>div').eq(0).addClass('side_top');
                $('.mx_slider .inner>div').eq(1).addClass('side_bottom');
            }

        });

        $(document).on('click','#minus_slide',function(){
            current_slide--;
            if (current_slide < 0) {
                current_slide = count_of_slide-1;
            }
            $('.mx_slider .inner .big').removeClass('big');
            $('.mx_slider .inner .side_top').removeClass('side_top');
            $('.mx_slider .inner>div').eq(current_slide + 1).addClass('side_top');
            $('.mx_slider .inner .side_bottom').removeClass('side_bottom');
            $('.mx_slider .inner>div').eq(current_slide + 2).addClass('side_bottom');
            $('.mx_slider .inner>div').eq(current_slide).addClass('big');

            let changer = count_of_slide - 3 - current_slide;
            if (changer == -1) {
                $('.mx_slider .inner>div').eq(0).addClass('side_bottom');
            }
            //если -2 первый слайд встает на место предпоследнего а второй встает на место последнего
            if (changer == -2) {
                $('.mx_slider .inner>div').eq(0).addClass('side_top');
                $('.mx_slider .inner>div').eq(1).addClass('side_bottom');
            }
        });



        let timer = setInterval(() => {
            current_slide++;
            if (current_slide >= count_of_slide) {
                current_slide = 0;
            }
            //asign a classes
            $('.mx_slider .inner .big').removeClass('big');
            $('.mx_slider .inner>div').eq(current_slide).addClass('big');

            $('.mx_slider .inner .side_top').removeClass('side_top');
            $('.mx_slider .inner>div').eq(current_slide + 1).addClass('side_top');

            $('.mx_slider .inner .side_bottom').removeClass('side_bottom');
            $('.mx_slider .inner>div').eq(current_slide + 2).addClass('side_bottom');

            let changer = count_of_slide - 3 - current_slide;
            //if -1 первый слайд встает на место последнего
            if (changer == -1) {
                $('.mx_slider .inner>div').eq(0).addClass('side_bottom');
            }
            //если -2 первый слайд встает на место предпоследнего а второй встает на место последнего
            if (changer == -2) {
                $('.mx_slider .inner>div').eq(0).addClass('side_top');
                $('.mx_slider .inner>div').eq(1).addClass('side_bottom');
            }

        }, 6000);
    }

    $(document).on('click','.show_others a',function(){
        $('.opened').toggleClass('started');
        if ($('.opened').hasClass('started')) {
            $(this).text('Показать еще');
        }else{
            $(this).text('Скрыть');
        }
        return false;
    });

    $(document).on('click','.search_area .delete',function(){
        $(this).addClass('hidden');
        $('#general_search').val('').focus();
        return false;
    });

    $(document).on('click','.search_area .loop',function(){
        $('#general_search_form').submit();
        return false;
    });

    $(".sub-rub__item--button").on('click', (event) => {
        const $parent = $(event.target).closest(".sub-rub__items");
        const $toggleElements = $parent.find(".sub-rub__item--collapse");
        $toggleElements.toggleClass("sub-rub__item--hidden");
    });

    /*  heightEquation(firstSelector, secondSelector) {
    const $first = $(firstSelector);
    const $second = $(secondSelector);
    elemStyle.set($first, 'min-height', 'auto');
    elemStyle.set($second, 'min-height', 'auto');

    const firstOuterHeight = $first.outerHeight();
    const secondOuterHeight = $second.outerHeight();

    if (firstOuterHeight > secondOuterHeight) {
      elemStyle.set($second, 'min-height', `${firstOuterHeight}px`);
    } else {
      elemStyle.set($first, 'min-height', `${secondOuterHeight}px`);
    }
  },

  setInitialState($container) {
    const value = isIE() ? 'auto' : 'initial';

    elemStyle.set($(this.selectors.divisionContainer, $container), 'min-height', value);
    elemStyle.set($(this.selectors.section, $container), 'min-height', value);

    $(this.selectors.division, $container).removeClass(this.selectors.activeDivisionClass);
  },

  showSubMenu($currentTarget) {
    const targetIsActive = $currentTarget.hasClass(this.selectors.activeDivisionClass);

    if (!targetIsActive) {
      this.setInitialState();
      $currentTarget.addClass(this.selectors.activeDivisionClass);
      this.updateDivisionContainerHeight();
    }
  },

  updateDivisionContainerHeight() {
    this.heightEquation(
      this.selectors.divisionContainer,
      `.${this.selectors.activeDivisionClass} > ${this.selectors.section}`
    );
  } */
});