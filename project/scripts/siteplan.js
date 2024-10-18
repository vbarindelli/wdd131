const mainnav = document.querySelector('.navigation');
const hamburger = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamburger.classList.toggle('show');
})

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `@ <span class="highlight">${today.getFullYear()}</span> Virginia Haedo - Malaga, Spain`;



const lastModified = document.querySelector("#lastModified");
let modified = new Date(document.lastModified);
lastModified.innerHTML = `Last Modification: ${modified}</span>`;
