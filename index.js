$(function () {

    $('.me-link').on('click', function () {
        $('.experience').fadeOut(250)
        $('.skills').fadeOut(250)
        $('.projects').fadeOut(250)
        $(this).addClass('current')
        $('.experience-link').removeClass('current')
        $('.skills-link').removeClass('current')
        $('.projects-link').removeClass('current')
        $('.me').fadeIn(700)
    });
    $('.experience-link').on('click', function () {
        $('.me').fadeOut(250)
        $('.skills').fadeOut(250)
        $('.projects').fadeOut(250)
        $(this).addClass('current')
        $('.me-link').removeClass('current')
        $('.skills-link').removeClass('current')
        $('.projects-link').removeClass('current')
        $('.experience').fadeIn(700)
    });
    $('.skills-link').on('click', function () {
        $('.me').fadeOut(250)
        $('.experience').fadeOut(250)
        $('.projects').fadeOut(250)
        $(this).addClass('current')
        $('.me-link').removeClass('current')
        $('.experience-link').removeClass('current')
        $('.projects-link').removeClass('current')
        $('.skills').fadeIn(700)
    });
    $('.projects-link').on('click', function () {
        $('.me').fadeOut(250)
        $('.experience').fadeOut(250)
        $('.skills').fadeOut(250)
        $(this).addClass('current')
        $('.me-link').removeClass('current')
        $('.experience-link').removeClass('current')
        $('.skills-link').removeClass('current')
        $('.projects').fadeIn(700)
    });

    $('.skill').on('click', function () {
        var text = $(this).html().toLowerCase().replace(" ", "-")
        var newClass = `.${text}-script`
        $('input').val($(newClass).html())
    });

});