window.onload = function() {
const shenkoRanksLogo = document.querySelector('.logo');

shenkoRanksLogo.innerHTML = 'shenko<span style="color: red;">Ranks.</span>';
shenkoRanksLogo.style.fontSize = '40px';
shenkoRanksLogo.style.fontWeight = 'bold';
shenkoRanksLogo.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';

//Cand se apasa logoul se afiseaza un mesaj
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
  alert('Salut!'); 
});

//Cand dam hover pe shenkoRanks, se schimba culoarea
const menuItems = document.querySelectorAll('.logo');
menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.color = 'purple';
  });

  item.addEventListener('mouseout', () => {
    item.style.color = '';
  });
});

const newDiv = document.createElement('div');
newDiv.textContent = 'Salut!';
document.body.appendChild(newDiv);
newDiv.remove();

setTimeout(() => {
  alert('Salut, incearca o optiune din cele de sus!');
}, 1000);

if (localStorage.getItem('homeClicks')) {

  let homeClicks = parseInt(localStorage.getItem('homeClicks'));
  homeClicks += 1;
  localStorage.setItem('homeClicks', homeClicks);


  const homeClicksSpan = document.querySelector('#homeClicks span');
  homeClicksSpan.textContent = homeClicks;
} else {

  localStorage.setItem('homeClicks', 1);
}

const homeLink = document.querySelector('a[href="tema.html"]');
homeLink.addEventListener('click', () => {
  let homeClicks = parseInt(localStorage.getItem('homeClicks'));
  localStorage.setItem('homeClicks', homeClicks);
  const homeClicksSpan = document.querySelector('#homeClicks span');
  homeClicksSpan.textContent = homeClicks;
});


const mediaText = document.querySelector('.mediatext');
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  const randomColor = getRandomColor();
  mediaText.style.color = randomColor;
}
setInterval(changeColor, 0600);


const menu = document.querySelector('.menu-bar');
menu.addEventListener('click', function(event) {
  const targetElement = event.target;
  console.log(targetElement);
});



}