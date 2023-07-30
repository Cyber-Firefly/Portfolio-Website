// Show or hide the menu when the toggle is clicked
$('.menu-toggle').click(function(event) {
    event.stopPropagation();  // Prevent this click from bubbling up to the document
    $('#dropdown-menu').toggleClass('hidden');
});

// Hide the menu when anything else is clicked
$(document).click(function() {
    $('#dropdown-menu').addClass('hidden');
});

// Prevent clicks within the menu from propagating up to the document
$('#dropdown-menu').click(function(event) {
    event.stopPropagation();
});

// smooth transition to each sections when clicked on nav links
$(document).ready(function(){
    $('#dropdown-menu a').on('click', function(e) {
        e.preventDefault();

        var target = $($(this).attr('href'));
        if(target.length){
            $('html, body').animate({scrollTop: target.offset().top}, '700', 'linear');
        }
    });
});

document.getElementById('dark-light-switch').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Make the HOME PAGE button transition smoothly to the top.
$(document).ready(function(){
    $('#scrollToTop').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '700', 'linear');
    });
});




