(function() {

    var inView = {};

    inView.getAttributes = function (els) {

        var attr = els.attr('data-inview');

       return attr.split("|");

    };

    inView.checkIsView = function (elems) {

        var windowScrollY = $(window).scrollTop(),
            windowHeight = $(window).innerHeight();

        for (var i = 0; i < elems.length; i++) {

            var elOffsetTop = parseInt( $(elems[i]).offset().top ),
                depth = $(elems[i]).attr('data-inview-depth') != "" ? $(elems[i]).attr('data-inview-depth') : "0.7";

            if ( (windowScrollY + windowHeight) * depth > elOffsetTop ) {

                console.log( elOffsetTop - windowHeight );

                if ( !$(elems[i]).hasClass('isView') )
                    $(elems[i]).addClass('isView');

                if ( $(elems[i]).hasClass('isView') ) {

                    var elAttr = inView.getAttributes( $(elems[i]) );

                    if ( elAttr[0] == 'parallax') {


                        var speed = $(elems[i]).attr('data-inview-parallax-speed') != "" ? $(elems[i]).attr('data-inview-parallax-speed') : "0.2",
                            parallaxSpeed = parseInt(( windowScrollY * speed ) / 10);

                        $(elems[i]).css({
                            'background-position': 'center ' + -parallaxSpeed + 'px'
                        });
                    }

                }
            } else {

                if ( $(elems[i]).hasClass('isView') )
                    $(elems[i]).removeClass('isView');

            }

        }

    };

    inView.init = function(el) {

        inView.checkIsView(el);

    };

    inView.makeArray = function (els) {

        var elems = [];

        Array.prototype.forEach.call(els, function (el) {

            elems.push(el);

        });

        return elems;

    };

    var inViewEl = inView.makeArray( $('*[data-inview]') );

    $(window).on('load scroll', function() {
        inView.init(inViewEl);
    });

})();