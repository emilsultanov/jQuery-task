$(function () {
    // Start of navbar
    let navlinks = $('.menu .nav-link');
    let line = $('.menu .magic-line');
    let navWidth = navlinks.outerWidth();
    line.css('width', navWidth + 'px');

    navlinks
        .mouseenter(function () {
            let position = $(this).position();
            let leftPosition = position.left;
            line.css('width', $(this).width() + 'px');
            line.css('transform', `translateX(${leftPosition}px)`);
        })
        .mouseleave(function () {
            line.css('width', navWidth + 'px');
            line.css('transform', 'translateX(0px)');
        });

    // End of navbar

    // Start of active-menu
    $('div.active-menu a[href]')
        .mouseenter(function () {
            $(this).contents().filter(':even').show();
        })
        .mouseleave(function () {
            $(this).contents().filter(':even').hide();
        });

    $('section').each(function () {
        let current = $(this);
        let offset = current.offset();

        let a = $('div.active-menu a');
        let lastChild = a.children().filter(":last-child");

        $(window).scroll(function (event) {
            let windowScroll = $(window).scrollTop();

            if (windowScroll >= offset.top) {
                lastChild.removeClass('active-link');
                let dataItem = $(`span[data-item='${current.attr('data-change')}']`);
                dataItem.addClass('active-link');
            };
        });
    });
    // End of active-menu

    // Start of slider
    let i = 0;
    $('span.next').on('click', function () {
        let position = $('div.slider').position();
        let sliderWidth = $('div.slider').width();
        let wrapperWidth = $('div.slider-wrapper').width();
        if (position.left > -(sliderWidth - wrapperWidth)) {
            $('div.slider').animate({
                left: `+=-${wrapperWidth}`
            }, 500, function () {
                $('div.circles-block ul li').removeClass('active-circle');
                let slides = $('div.slider').children('.slider-item').length;
                let circles = $('div.circles-block ul li');
                if (i < slides) {
                    i = i + 1;
                    circles.eq(i).addClass('active-circle');   
                };
            });
        };
    });

    $('span.prev').on('click', function () {
        let position = $('div.slider').position();
        let sliderWidth = $('div.slider').width();
        let wrapperWidth = $('div.slider-wrapper').width();
        if (position.left <= -wrapperWidth) {
            $('div.slider').animate({
                left: `+=${wrapperWidth}`
            }, 500,function(){
                $('div.circles-block ul li').removeClass('active-circle');
                let slides = $('div.slider').children('.slider-item').length;
                let circles = $('div.circles-block ul li');
                if(i<=slides-1){
                    i=i-1;
                    circles.eq(i).addClass('active-circle');
                };
            });
        };
    });
    // End of slider
})