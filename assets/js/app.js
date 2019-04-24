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

  //your code
  elMain.innerHTML += '<div style="width: 40%; margin: auto; padding:10px; margin-bottom: 20px;"><div class="progress" style="height: 20px;"><div id="loaderProgressBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div></div></div>';

  displayPB();
}




var timerCount = 0;
function displayPB() {
 if (timerCount <= 100) {
     var x = (timerCount < 25) ? '' : (timerCount < 45) ? timerCount + '%' : (timerCount < 65) ? 'Loading ' + timerCount + '%' : 'Loading Application ' + timerCount + '%';
     document.getElementById("loaderProgressBar").innerHTML = x;
     document.getElementById('loaderProgressBar').setAttribute('aria-valuenow', timerCount);
     document.getElementById('loaderProgressBar').style.width = timerCount + '%    ';
     timerCount++;
     setTimeout(displayPB, 50);
 } else {
     timerCount = 0;
     document.body.innerHTML= formLogin();
     return false;
 }
}
//my code(via video up to @11:33) wasnt showing bar 
  /*elMain.innerHTML += '<div style="width: 40%; margin: auto; padding: 10px; margin-bottom: 20px;"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div></div></div>';

displayPB();

}

var timerCount=0;
function displayPB(){
  if(timerCount<100){
    var x = (timerCount<15) ? '': (timerCount<30) ? timerCount + '%':
    (timerCount<60) ? 'Loading ' + timerCount + '%': 'Loading Application' + timerCount + '%';
    document.getElementById("loaderProgressBar").innerHTML=timerCount;
    document.getElementById("loaderProgressBar").setAttribute('aria-valuenow', timerCount);
    document.getElementById("loaderProgressBar").style.width=timerCount + '%   ';
    timerCount++;
    setTimeout(displayPB, 200);
  }else{
    timerCount=0;
    applicationUserInterface();
    return false;
  }
  }*/

  function formLogin() {
    return '<form id="loginFrm" name="loginFrm" action="#" class="animated zoomIn"><div class="form-group"><label for="email">Email address:</label><input type="email" class="form-control" id="email" value="me@there.com"></div><div class="form-group"><label for="pwd">Password:</label><input type="password" class="form-control" id="pwd" value="dfdf"></div><div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox">Remember me </label></div><button id="loginBtn" type="submit" class="btn btn-primary" onclick="validateLogin()">Submit</button></form>';
}

function validateLogin(){
  var email=document.getElementById("email").value;
  var password=document.getElementById("pwd").value;
  if (email !== '' && password !== ''){
    document.body.innerHTML = '<main class="animated zoomIn"><h1 id="inNow">We are IN now</h1></main>';

  }else{
    alert('bad');
  }
  return false;
}