// About Us Section
var button = document.querySelector('#a-btn');
var btnDiv = document.querySelector('#button');
var btnH = document.querySelector('#btn-h');
var btnLayer = document.querySelector('.bg-layer');
var img1 = document.querySelector('.i-1');
var menuIcon = document.querySelector('.icon');
var menuItems = document.querySelector('#menus');




//Nav Bar Menu


menuIcon.addEventListener('click', function() {
    if (menuItems.style.display === "block") {
        menuItems.style.display = "none";
      } else {
        menuItems.style.display = "block";
      }
});



button.addEventListener('click', function () {

    btnDiv.style.width = '95%';
    btnDiv.style.height = '90%';
    button.style.display = 'none';
    btnLayer.style.visibility    = "visible"
    btnH.style.display = 'none';
});

