"use strict";

var applicationTitle = "Inside out-js";

var applicationTagLine = "It ain't easy being cheesy......";

window.addEventListener('load', initializeApplication);

function initializeApplication() {
  document.title = applicationTitle;

  document.body.style.backgroundColor = '#609732';
  document.body.style.textAlign = 'center';
  document.body.style.fontSize = '3em';

  var elWapper = document.createElement('div');
  elWapper.id = 'applicationWrapper';
  document.body.appendChild(elWapper);

  var elHeader = document.createElement('header');
  elWapper.appendChild(elHeader);

  var elHeaderTitle = document.createElement('h1');
  elHeaderTitle.innerHTML = applicationTitle;
  elHeader.appendChild(elHeaderTitle);

  var elHeaderTagLine = document.createElement('h2');
  elHeaderTagLine.textContent = applicationTagLine;
  elHeader.appendChild(elHeaderTagLine);

  var elMain = document.createElement('main');
  elMain.innerHTML = "<p>Hello World!</p>";
  elWapper.appendChild(elMain);

  var elFooter = document.createElement('footer');
  elFooter.innerHTML = "<h4>Get excited about learning JavaScript.....</h4>";
  elWapper.appendChild(elFooter);

  elHeaderTitle.className='animated bounceInDown';
  elHeaderTagLine.className='animated bounceInLeft';
  elMain.className='animated zoomIn';
  elFooter.className="animated bounceInUp";
}
