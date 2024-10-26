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


const sites = [
    {
        siteName: "The Alhambra and Generalife",
        location: "Granada",
        price: 19,
        season: "summer, winter, autumn, spring",
        description: "An Arabic architectural complex of magnificent gardens, palaces and fortresses",
        imageUrl:
            "https://img.freepik.com/free-photo/beautiful-castle-architecture_23-2150754944.jpg?ga=GA1.1.395302076.1729875932&semt=ais_hybrid"
    },
    {
        siteName: "New Bridge",
        location: "Ronda",
        price: 0,
        season: "summer, winter, autumn, spring",
        description: "A masterpiece of ingeniering, this historical bridge offers amazing views and is the perfect setting for beautiful pictures",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/%22Puente_Nuevo%22_de_Ronda.jpg/800px-%22Puente_Nuevo%22_de_Ronda.jpg"
    },
    {
        siteName: "El Torcal de Antequera",
        location: "Antequera, Malaga",
        price: 0,
        season: "winter, autumn, spring",
        description: "An amazing trail that has been declared as a World Heritage Site by Unesco with archaeological sites, a wide variety of animals and plants",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/Karst_rocks_El_Torcal_Andalusia_Spain.jpg"
    },
    {
        siteName: "Real Alcazar de Sevilla",
        location: "Sevilla",
        price: 12,
        season: "winter, autumn, spring",
        description: "A window into the past, the Real Alcazar is a complex of palaces that were built starting in the Middle Ages",
        imageUrl:
            "https://es.wikipedia.org/wiki/Real_Alc%C3%A1zar_de_Sevilla#/media/Archivo:Patio_del_Yeso_(P%C3%B3rtico)._Reales_Alc%C3%A1zares_de_Sevilla.jpg"
    },
    {
        siteName: "Playa de Cabopino",
        location: "Marbella",
        price: 0,
        season: "summer, spring",
        description: "Enjoy a wonderful time in one of the most beautiful beaches of the Costa del Sol",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Artola-Cabopino_02.jpg/1280px-Artola-Cabopino_02.jpg"
    },
    {
        siteName: "Cuevas de Nerja",
        location: "Malaga",
        price: 16,
        season: "winter, autumn, spring",
        description: "A geological wonder, go inside natural formations that will take your breath away",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Cuevas_de_Nerja.JPG/1920px-Cuevas_de_Nerja.JPG"
    },
    {
        siteName: "Night of San Juan",
        location: "Andalucia",
        price: 0,
        season: "summer",
        description: "A fun celebration with bonfires to celebrate the beginning of summer",
        imageUrl:
            "https://img.freepik.com/free-photo/bonfire-beach_144627-2587.jpg?t=st=1729897793~exp=1729901393~hmac=d10d39464eaf4617c64cf45a4ed18db85c48efefb6ae0a7ddb4e377b2ebd1508&w=1380"
    },

    {
        siteName: "Sierra Nevada",
        location: "Granada",
        price: 45,
        season: "winter",
        description: "An amazing skii resort with wonderful views, places for children and higher complexity slopes",
        imageUrl:
            "https://img.freepik.com/foto-gratis/disparo-angulo-montana-boscosa-cubierta-nieve-caminos-cielo-azul_181624-32617.jpg?t=st=1729898003~exp=1729901603~hmac=aafebada72de0e1508f50c1d1c495f5a20cf76c9d67774446f0828ca478d1872&w=1380"
    },

];

createActivityCard(sites);

// const summerOption = document.getElementById("#summer");
// summerOption.addEventListener("click", () => {
//     createActivityCard(sites.filter(site => site.season.includes('summer')));
// });

// const winterOption = document.getElementById("#winter");
// winterOption.addEventListener("click", () => {
//     createActivityCard(sites.filter(site => site.season.includes('winter')));
// });

// const springOption = document.getElementById("#spring");
// winterOption.addEventListener("click", () => {
//     createActivityCard(sites.filter(site => site.season.includes('spring')));
// });

// const autumnOption = document.getElementById("#autumn");
// winterOption.addEventListener("click", () => {
//     createActivityCard(sites.filter(site => site.season.includes('autumn')));
// });


// const noFilter = document.querySelector("#allSeasons");
// noFilter.addEventListener("click", () => {
//     createActivityCard(sites);
// });

// const header = document.getElementsByClassName("containerTwo");
// const activeLink = header.getElements

function createActivityCard(filteredSites) {
    filteredSites.forEach(site => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let price = document.createElement("p");
        let season = document.createElement("p");
        let description = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = site.siteName;
        location.innerHTML = `<span class="label">Location:</span> ${site.location} `;
        price.innerHTML = `<span class="label">Price: $</span> ${site.price} `;
        season.innerHTML = `<span class="label">Season:</span> ${site.season}.`;
        description.innerHTML = `<span class="label">Description:</span> ${site.description}`;
        img.setAttribute("src", site.imageUrl);
        img.setAttribute("alt", `${site.siteName}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("id", "cardImg");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(price);
        card.appendChild(season);
        card.appendChild(description);
        card.appendChild(img);

        document.querySelector(".containerTwo").appendChild(card);
    });

}
const reset = function () {
    document.querySelector(".containerTwo").innerHTML = "";
}

function filterSites(sites) {
    reset();

    let filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'summer':
            createActivityCard(sites.filter(site => site.season.includes('summer')));
            break;

        case 'winter':
            createActivityCard(sites.filter(site => site.season.includes('winter')));
            break;

        case 'spring':
            createActivityCard(sites.filter(site => site.season.includes('spring')));
            break;

        case 'autumn':
            createActivityCard(sites.filter(site => site.season.includes('autumn')));
            break;

        case 'all':
            createActivityCard(sites);
    }

}

document.querySelector("#filtered").addEventListener("change", () => { filterSites(sites) });

