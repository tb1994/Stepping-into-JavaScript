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
  quotArr= quotArr.sort((a, b)=> a[1].localeCompare(b[1]));
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
// //my code(via video up to @11:33) wasnt showing bar 
//   /*elMain.innerHTML += '<div style="width: 40%; margin: auto; padding: 10px; margin-bottom: 20px;"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div></div></div>';

// displayPB();

// }

// var timerCount=0;
// function displayPB(){
//   if(timerCount<100){
//     var x = (timerCount<15) ? '': (timerCount<30) ? timerCount + '%':
//     (timerCount<60) ? 'Loading ' + timerCount + '%': 'Loading Application' + timerCount + '%';
//     document.getElementById("loaderProgressBar").innerHTML=timerCount;
//     document.getElementById("loaderProgressBar").setAttribute('aria-valuenow', timerCount);
//     document.getElementById("loaderProgressBar").style.width=timerCount + '%   ';
//     timerCount++;
//     setTimeout(displayPB, 200);
//   }else{
//     timerCount=0;
//     applicationUserInterface();
//     return false;
//   }
//   }*/

  function formLogin() {
    return '<form id="loginFrm" name="loginFrm" action="#" class="animated zoomIn"><div class="form-group"><label for="email">Email address:</label><input type="email" class="form-control" id="email" value="me@there.com"></div><div class="form-group"><label for="pwd">Password:</label><input type="password" class="form-control" id="pwd" value="dfdf"></div><div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox">Remember me </label></div><button id="loginBtn" type="submit" class="btn btn-primary" onclick="validateLogin()">Submit</button></form>';
}

function validateLogin(){
  var email=document.getElementById("email").value;
  var password=document.getElementById("pwd").value;
  if (email !== '' && password !== ''){
    //document.body.innerHTML = '<main class="animated zoomIn"><h1 id="inNow">We are IN now</h1></main>';
    applicationUserInterface();

  }else{
    alert('bad');
  }
  return false;
}

function applicationUserInterface(){
  let header = '<div class="container-fluid"><div class="row"><div class="col-12"><nav id="header" class="navbar navbar-dark fixed-top bg-dark"><a class="navbar-brand" data-dest="logoLink" href"#">insideout</a></nav></div></div>';
  let main = '<div class="row contStage"><div class="col-2">'+buildMenu()+'</div><div class="col-10">'+buildMain()+'</div></div>';
  let footer = '<div class="row"><div class="col-12"><nav id="footer" class="navbar fixed-bottom navbar-dark bg-dark"></nav></div></div></div>';
  document.body.style.backgroundColor='#fff';
  document.body.innerHTML = header + main + footer;
  var links = document.getElementsByTagName('a');
   for (var i =0; i<links.length; i++) links[i].onclick=function(){
    linkClicked(this);
  }
}

function buildMenu() {
  let sm = '<nav class="sidebar animated slideInLeft"><ul class="nav flex-column">';
  for (let i = 0; i < quotArr.length; i++) {
       sm += '<li class="nav-item"><a class="nav-link active" data-dest="' + i + '" href="#">' + quotArr[i][1].split(",", 1) + '</a></li>';
  }
  sm += '</ul></nav>';
  return sm;
}

function buildMain(){
  return'<main id="main" role="main"><h1 class="animated zoomIn">Main Content</h1></main>';
}

function linkClicked(obj){
  console.log(obj.dataset.dest);
     var str = '<div class="infoDiv"><h1 class="animated zoomIn">' + quotArr[obj.dataset.dest][0] + '</h1><div class="animated slideInRight auth">- ' + quotArr[obj.dataset.dest][1] + '</div></div>';
     document.getElementById("main").innerHTML = str;
}
   
 
