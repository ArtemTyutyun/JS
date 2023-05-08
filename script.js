// Zoom in and out of the photo with a click //
const photo = document.querySelector('.photo');

photo.addEventListener('click', () => {
    photo.classList.toggle('active');
});



// Navigation by letters //
var navLetters = document.querySelectorAll('.nav-letter');

document.addEventListener('keydown', function(event) {
 
  var navLetter = event.key.toUpperCase();
  
  
  var letterToNavigate = Array.from(navLetters).find(function(letter) {
    return letter.getAttribute('data-nav') === navLetter;
  });
  
  
  if (letterToNavigate) {
    var section = letterToNavigate.parentNode;
    section.scrollIntoView({behavior: "smooth"});
  }
});




// gitHub links //
window.addEventListener('load', function() {
  fetch('https://api.github.com/users/ArtemTyutyun/repos')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('Request failed. Returned status of ' + response.status);
      }
    })
    .then(repos => {
      showProjects(repos);
    })
    .catch(error => {
      console.log('Request failed. ' + error);
    });
});

function showProjects(repos) {
  var projectList = document.getElementById('project-list');
  for (var i = 0; i < repos.length; i++) {
    var repo = repos[i];
    var li = document.createElement('li');
    li.setAttribute('style', 'margin-left: 80px;')
    var a = document.createElement('a');
    a.setAttribute('href', repo.html_url);
    a.setAttribute('style', 'color: blue; text-decoration: none;');
    a.addEventListener('mouseover', function() {
        this.style.color = 'green';
    });
    a.addEventListener('mouseout', function() {
        this.style.color = 'blue';
    });
    a.addEventListener('click', function() {
      this.style.color = 'red';
  });
    a.appendChild(document.createTextNode(repo.full_name));
    li.appendChild(a);
    if (repo.description) {
      var p = document.createElement('p');
      p.appendChild(document.createTextNode(repo.description));
      li.appendChild(p);
    }
    projectList.appendChild(li);
  }
}
