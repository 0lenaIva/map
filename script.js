const regions = document.querySelectorAll('.land')
const fromCity = document.querySelector('#from')
const toCity = document.querySelector('#to')

const regionsName = {
    "Sevastpol' City":"м. Севастополь",
    "Crimea":"АР Крим",
    "Cherkasy":"Черкаська область",
    "Chernihiv":"Чернігівська область",
    "Chernivtsi":"Чернівецька область",
    "Dnipropetrovs'k":"Дніпропетровська область",
    "Donets'k":"Донецька область",
    "Ivano-Frankivs'k":"Івано-Франківська область"
}

let isNextFrom = true;
let selectedFrom = null;
let selectedTo = null;

regions.forEach(region => {
    region.addEventListener('click', ()=>{
        const engTitle = region.getAttribute('title');
        const uaTitle = regionsName[engTitle] || engTitle;

        if (isNextFrom){
            if (selectedFrom) selectedFrom.classList.remove('active-from')
            fromCity.textContent = uaTitle;
            region.classList.add('active-from')
            selectedFrom = region
            isNextFrom = false
        }else{
            if (selectedTo) selectedTo.classList.remove('active-to')
                toCity.textContent = uaTitle;
                region.classList.add('active-to')
                selectedTo = region
                isNextFrom = true
        }
    })
} )