$(document).ready(function() {
    // Mobile Menu Toggle
    $('.menu-toggle').click(function() {
        $('.navbar').slideToggle();
    });

    // Smooth Scrolling for Anchor Links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );
    });
});



$(document).ready(function () {
  const words = ["Results", "Solutions", "Technology", "Experiences"];
  let i = 0;
  let charIndex = 0;
  let typing = true;
  const speed = 80;
  const pause = 1500;
  const $target = $("#typewriter");

  function typeLoop() {
    let currentWord = words[i];

    if (typing) {
      charIndex++;
      $target.text(currentWord.substring(0, charIndex));

      if (charIndex === currentWord.length) {
        typing = false;
        setTimeout(typeLoop, pause);
        return;
      }
    } else {
      charIndex--;
      $target.text(currentWord.substring(0, charIndex));

      if (charIndex === 0) {
        typing = true;
        i = (i + 1) % words.length;
      }
    }

    setTimeout(typeLoop, speed);
  }

  typeLoop();
});
