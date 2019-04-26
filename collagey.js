var termsWindow = document.getElementById('terms');


termsWindow.addEventListener ('click', function() {
    window.open('./terms.html', '_blank', "width=600, height=500");
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  };
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  };
  
  function navClose() {
    document.querySelectorAll("a").style.width = "0";
  };