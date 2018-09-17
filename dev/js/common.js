let timeOutId;

$('#fullpage').fullpage({
    autoScrolling:true,
    scrollHorizontally: true,
    onLeave: function(){
        clearTimeout(timeOutId);
    },
    afterLoad: function(origin, destination){
        let {index, item} = destination;
        $('.section__menu-wrap').removeClass('menu-black-block');
        $('.dot').removeClass('loading');
        if(index%2 === 1) {
            const dotIndex = (index-1)/2 < 1 ? 0 : (index-1)/2;
            $(item).find('.dot').eq(dotIndex).addClass('loading');
            $('.section__menu-wrap').addClass('menu-black-block');
            timeOutId = setTimeout(function () {
                fullpage_api.moveSectionDown();
            }, 3000);
        }
        if(index%2 === 0) {
            const dotIndex = (index)/2;
            $(item).find('.dot').eq(dotIndex).addClass('active');
        }

    }
});

$('.tab').on('click', function () {
    const index = $(this).index();
    $('.tab').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').removeClass('active').eq(index).addClass('active');
})

var toggles = document.querySelectorAll(".c-hamburger");

for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
};

function toggleHandler(toggle) {
    toggle.addEventListener("click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
}