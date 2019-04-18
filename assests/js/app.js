"use strict";

var appData = {
  title: "Inside out-js",
  tagLine: "It ain't easy being cheesy......"
};

window.addEventListener('load', initializeApplication);

function initializeApplication() {
  document.title = appData.title;

  document.body.style.backgroundColor = '#609732';
  document.body.style.textAlign = 'center';
  document.body.style.fontSize = '3em';

  var elWapper = document.createElement('div');
  elWapper.id = 'applicationWrapper';
  document.body.appendChild(elWapper);

  var elHeader = document.createElement('header');
  elWapper.appendChild(elHeader);

  var elHeaderTitle = document.createElement('h1');
  elHeaderTitle.innerHTML = appData.title;
  elHeader.appendChild(elHeaderTitle);
  elHeaderTitle.className = 'animated bounceInDown';

  var elHeaderTagLine = document.createElement('h2');
  elHeaderTagLine.textContent = appData.tagLine;
  elHeader.appendChild(elHeaderTagLine);
  elHeaderTagLine.className = 'animated bounceInLeft';

  var elMain = document.createElement('main');
  elMain.innerHTML = "<p>Hello World!</p>";
  elWapper.appendChild(elMain);
  elMain.className = 'animated zoomIn';

  var elFooter = document.createElement('footer');
  elFooter.innerHTML = "<h4>Get excited about learning JavaScript.....</h4>";
  elWapper.appendChild(elFooter);
  elFooter.className = "animated bounceInUp";
}
