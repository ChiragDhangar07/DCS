!function(n){function o(n,o){var t=(n=n.find(".premium-counter")).closest(".premium-hscroll-temp"),e=n.data(),i=n.find(".premium-counter-init"),a=n.find(".icon");t.length?o(window).on("scroll",function(){o(window).scrollTop()>=t.data("scroll-offset")&&(o(i).numerator(e),o(a).addClass("animated "+a.data("animation")))}):elementorFrontend.waypoint(n,function(){o(i).numerator(e),o(a).addClass("animated "+a.data("animation"))})}n(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/premium-counter.default",o)})}(jQuery);