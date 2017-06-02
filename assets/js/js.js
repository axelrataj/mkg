(function() {

    $(document).on('click', '.nav-trigger', function () {

        $('body').toggleClass('mobile-nav-open');

    });

})();

(function() {

    var navLi = $('.menu-glowne-menu-container li a'),
        contactTopInfo  = $('.contact-top-info .contact a'),
        topBannerSection  = $('.top-banner-section .bottom-btn a');

    var scrollToSection = function (e, el) {

        e.preventDefault();

        var elClass = el.parent()[0].classList[0],
            offset = ( $('.' + elClass + '-section').offset().top - $('.main-header').height() ) + 'px';

        $('html, body').animate({
            'scrollTop' : offset
        }, 250);

        if( $('body').hasClass('mobile-nav-open') )
            $('body').removeClass('mobile-nav-open');

    };

    navLi.on('click', function (e) {

        scrollToSection(e, $(this));

    });

    contactTopInfo.on('click', function (e) {

        scrollToSection(e, $(this));

    });

    topBannerSection.on('click', function (e) {

        scrollToSection(e, $(this));

    });



})();