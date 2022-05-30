$(document).ready(function () {
    scrollIcon();
    tabNav();
    mobileNav();

});


function scrollIcon(params) {
    $(".icon-scroll").on('click', function (event) {
        var mobile = 640 >= window.innerWidth;

        event.preventDefault();
        if (!mobile) {
            $('html,body').animate({ scrollTop: $(this.hash).offset().top - 180 }, 500);

        } else {
            $('html,body').animate({ scrollTop: $(this.hash).offset().top - 80 }, 500);

        }

    });
};

function tabNav() {
    $(".tabArea .tab li a").on("click", function () {
        // 해당 요소를 클릭하는 내 자신의 index 번호를 가져온다. [0], [1]
        let num = $(".tabArea .tab li a").index($(this));

        // 기존에 적용되어 있는 on class 삭제
        $(".tabArea .tab li").removeClass("on");
        $(".tabArea .tabBox").removeClass("on");

        // 다음 요소 클릭시 on class 추가
        $('.tabArea .tab li:eq(' + num + ')').addClass("on");
        $('.tabArea .tabBox:eq(' + num + ')').addClass("on");

    });
};

function mobileNav(params) {
    $('#select_menu a').on('click', function () {
        $('.sub_tab').toggleClass('active');
        $('#select_menu a').toggleClass('on');
        $('.dismiss').toggleClass('on')
    })
    $('.sub_tab li a').on('click', function () {
        let num = $(".sub_tab li a").index($(this));

        $('#select_menu a').text($(this).text());
        $('.dismiss').removeClass('on')

        // 기존에 적용되어 있는 on class 삭제
        $('.sub_tab').removeClass('active')
        $('#select_menu a').removeClass('on');

        $(".sub_tab li").removeClass("on");
        $(".tabArea .tabBox").removeClass("on");

        // 다음 요소 클릭시 on class 추가
        $('.sub_tab li:eq(' + num + ')').addClass("on");
        $('.tabArea .tabBox:eq(' + num + ')').addClass("on");
    });

}