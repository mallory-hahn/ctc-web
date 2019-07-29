$('.img-parallax').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    // The next pixel to show on screen      
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imgY) * speed);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Porcentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
   var hide = document.getElementById("parallax");
    if (hide.style.display === "block") {
        hide.style.display = "none";
    }
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
       var hide = document.getElementById("parallax");
    if (hide.style.display === "none") {
        hide.style.display = "block";
    }
}

function myFunction(x) {
    x.classList.toggle("change");
    var navBar = document.getElementById("main");
    if (navBar.style.display === "block") {
    navBar.style.display = "none";
    } else {
    navBar.style.display = "block";
    }
}