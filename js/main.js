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

// smooth transition to each section when clicked on nav links
$(document).ready(function(){
    $('#dropdown-menu a').on('click', function(e) {
        e.preventDefault();

        var target = $($(this).attr('href'));
        if(target.length){
            $('html, body').animate({scrollTop: target.offset().top}, '700', 'linear');
        }
    });
});

//type out animation
let i = 0;
let txt = 'A Software Developer with a passion for Game Development.';
let speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("type-animation").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // after the text is fully typed, start blinking the cursor
        document.getElementById("cursor").classList.add('blinking');
    }
}

window.onload = typeWriter;


// smooth transition to contact when link is clicked in Bio
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
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

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}






