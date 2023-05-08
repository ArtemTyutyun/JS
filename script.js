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
class GitHubAPI {
  constructor(token, userName) {
    this.token = token;
    this.userName = userName;
  }

  async getRepos() {
    const response = await fetch(`https://api.github.com/users/${this.userName}/repos`, {
      headers: {
        Authorization: `Token ${this.token}`
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
}

const github = new GitHubAPI('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', 'ArtemTyutyun');

window.addEventListener('load', async function() {
  try {
    const repos = await github.getRepos();
    showProjects(repos);
  } catch (error) {
    console.error(error);
  }
});

function showProjects(repos) {
  const projectList = document.getElementById('project-list');
  for (let i = 0; i < repos.length; i++) {
    const repo = repos[i];
    const li = document.createElement('li');
    li.setAttribute('style', 'margin-left: 80px;')
    const a = document.createElement('a');
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
      const p = document.createElement('p');
      p.appendChild(document.createTextNode(repo.description));
      li.appendChild(p);
    }
    projectList.appendChild(li);
  }
}
