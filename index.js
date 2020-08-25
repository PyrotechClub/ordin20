
    // LOADER

var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 1500);
}

function showPage() {
    document.getElementById("load").style.display = "none";
    document.getElementById("mainBod").style.display = "block";
}


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
    var countDownDate = new Date("Jul 25, 2020 00:00:00").getTime();
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

// Smooth Scroll
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  
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

    // SAVE PREFERENCE TO LOCAL STORAGE

toggleSwitch.addEventListener('change', switchTheme, false);
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dakr');
    }
}

    // CHECK LOCAL STORAGE FOR PREFERENCE

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
}
