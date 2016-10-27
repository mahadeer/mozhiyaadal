$(document).ready(function () {
    setTimeout(function() {
        //cache DOM elements
        var mainContent = $('.md-main-content'),
            header = $('.md-admin-header'),
            sidebar = $('.md-side-nav'),
            sidebarTrigger = $('.md-nav-trigger'),
            topNavigation = $('.md-top-nav'),
            searchForm = $('.md-search');

        //on resize, move search and top nav position according to window width
        var resizing = false;
        moveNavigation();
        $(window).on('resize', function () {
            if (!resizing) {
                (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
                resizing = true;
            }
        });

        //on window scrolling - fix sidebar nav
        var scrolling = false;
        checkScrollbarPosition();
        $(window).on('scroll', function () {
            if (!scrolling) {
                (!window.requestAnimationFrame) ? setTimeout(checkScrollbarPosition, 300) : window.requestAnimationFrame(checkScrollbarPosition);
                scrolling = true;
            }
        });

        //mobile only - open sidebar when user clicks the hamburger menu
        sidebarTrigger.on('click', function (event) {
            event.preventDefault();
            $([sidebar, sidebarTrigger]).toggleClass('nav-is-visible');
        });

        //click on item and show submenu
        $('.has-children > a').on('click', function (event) {
            var mq = checkMQ(),
                selectedItem = $(this);
            if (mq == 'mobile' || mq == 'tablet') {
                event.preventDefault();
                if (selectedItem.parent('li').hasClass('selected')) {
                    selectedItem.parent('li').removeClass('selected');
                } else {
                    sidebar.find('.has-children.selected').removeClass('selected');
                    selectedItem.parent('li').addClass('selected');
                }
            }
        });


        $(document).on('click', function (event) {
            if (!$(event.target).is('.has-children a')) {
                sidebar.find('.has-children.selected').removeClass('selected');
            }
        });

        //on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
        sidebar.children('ul').menuAim({
            activate: function (row) {
                $(row).addClass('hover');
            },
            deactivate: function (row) {
                $(row).removeClass('hover');
            },
            exitMenu: function () {
                sidebar.find('.hover').removeClass('hover');
                return true;
            },
            submenuSelector: ".has-children"
        });

        function checkMQ() {
            //check if mobile or desktop device
            return window.getComputedStyle(document.querySelector('.md-main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
        }

        function moveNavigation() {
            var mq = checkMQ();

            if (mq == 'mobile' && topNavigation.parents('.md-side-nav').length == 0) {
                detachElements();
                topNavigation.appendTo(sidebar);
                searchForm.removeClass('is-hidden').prependTo(sidebar);
            } else if (( mq == 'tablet' || mq == 'desktop') && topNavigation.parents('.md-side-nav').length > 0) {
                detachElements();
                searchForm.insertAfter(header.find('.md-logo'));
                topNavigation.appendTo(header.find('.md-admin-nav'));
            }
            checkSelected(mq);
            resizing = false;
        }

        function detachElements() {
            topNavigation.detach();
            searchForm.detach();
        }

        function checkSelected(mq) {
            //on desktop, remove selected class from items selected on mobile/tablet version
            if (mq == 'desktop') $('.has-children.selected').removeClass('selected');
        }

        function checkScrollbarPosition() {
            var mq = checkMQ();

            if (mq != 'mobile') {
                var sidebarHeight = sidebar.outerHeight(),
                    windowHeight = $(window).height(),
                    mainContentHeight = mainContent.outerHeight(),
                    scrollTop = $(window).scrollTop();

                ( ( scrollTop + windowHeight > sidebarHeight ) && ( mainContentHeight - sidebarHeight != 0 ) ) ? sidebar.addClass('is-fixed').css('bottom', 0) : sidebar.removeClass('is-fixed').attr('style', '');
            }
            scrolling = false;
        }

    }, 1000);
});