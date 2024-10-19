const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `@ <span class="highlight">${today.getFullYear()}</span> Virginia Haedo - Malaga, Spain`;



const lastModified = document.querySelector("#lastModified");
let modified = new Date(document.lastModified);
lastModified.innerHTML = `Last Modification: ${modified}</span>`;


const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

createOption(products);

function createOption(options) {

    options.forEach(product => {
        let option = document.createElement("option");

        option.value = product.id;
        option.textContent = product.name;

        document.querySelector('select').appendChild(option);
    }
    )
}

