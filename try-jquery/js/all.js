$(document).ready( () => {
    //$('h1').hide();
    //$('#title').hide();
    $('h1').click(function (e) { 
        //$('p').slideToggle(3000);
        //$('p').slideUp(2000).slideDown(2000);
        //$('p').addClass('orange');
        $('p').toggleClass('orange');
        e.preventDefault();
    });
});