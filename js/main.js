// ================================================= //
// ================ Nav Bar Functions ============== //
// ================================================= //

// ===== Mobile ===== //
document.addEventListener("DOMContentLoaded", function () {
  let offcanvasNavbar = new bootstrap.Offcanvas(
    document.getElementById("offcanvasDarkNavbar")
  );

  // Close offcanvas menu when a navigation link is clicked
  var navLinks = document.querySelectorAll(".navbar-nav a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the click event
      var targetSectionId = link.getAttribute("href").substring(1);
      var targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        // Scroll to the target section after a short delay to allow the offcanvas to close
        setTimeout(function () {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }, 300);

        // Close the offcanvas menu
        offcanvasNavbar.hide();
      }
    });
  });
});
// ================================================= //

// ================================================= //
// ========== Back To Top Button =================== //
// ================================================= //
window.addEventListener("load", function () {
  let mybutton = document.getElementById("myBtn");

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  window.onscroll = function () {
    scrollFunction();
  };

  mybutton.onclick = function () {
    topFunction();
  };

  // Use requestAnimationFrame to delay the execution slightly
  requestAnimationFrame(function () {
    scrollFunction();
  });
});
// ================================================= //
