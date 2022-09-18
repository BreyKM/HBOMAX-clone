function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  window.onscroll = () => {scrollNavbar()};
  
  scrollNavbar = () => {
    // Target elements
    const navbar = document.getElementById("navBar");

    if (document.documentElement.scrollTop > 180) {
      navbar.classList.add('navbar-scrolled');
    }
    else {
      navbar.classList.remove('navbar-scrolled');
    }
  };