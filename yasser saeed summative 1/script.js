// let item = document.getElementById("item");

// item.addEventListener("click", toggleNavMenu);

// function toggleNavMenu() {
//     let navList = document.getElementById("options");
//     navList.classList.toggle("visible");
// }

/* Toggle between showing and hiding the dropdown content */
function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("options");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  