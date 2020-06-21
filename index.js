
    // LOADER

var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 1500);
}

function showPage() {
    document.getElementById("load").style.display = "none";
    document.getElementById("mainBod").style.display = "block";
}

/*
jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $(".navbar").css("background-color","var(--nav-bg-color)");
        $(".navbar").css("top","0");
    } else {
        $(".navbar").css("background","none");
        $(".navbar").css("top","-200");
    }
});

 /*   // SMOOTH SCROLL

$("#navh").click(function() {
    $("html, body").animate( 
                { scrollTop: '0' }, 3000); 
});

var h = $('#about').scrollTop();

$("#nava").click(function() {
    $("html, body").animate( 
                { scrollTop: h }, 3000); 
}); */
 
    // COUNTDOWN

var myfunc = setInterval(function() {
    var countDownDate = new Date("Jul 22, 2020 00:00:00").getTime();
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var distance = countDownDate - now;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("mins").innerHTML = minutes
    document.getElementById("secs").innerHTML = seconds
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "Let's roll ;)";
    }
}, 1000);

    // SIDE-NAV

function openNav() {
    document.getElementById("sidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

    // DARK MODE

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}