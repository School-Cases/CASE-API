// rest info: namn, nummer, öppettider, kategorier, gata, hemsida

let url = "data.json";
let lat;
let long;
let distance;
let size = 25;
let page = 1;
mapboxgl.accessToken =
    'pk.eyJ1Ijoib2xvZmFrc2JlcmciLCJhIjoiY2ttNHV6MDJmMDhiNDJxbjY0d2JoOG9leiJ9.MP0cud4HBGHiOpmXDuD5pg';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-97.9889444178015, 39.73096008064579],
    zoom: 2.7
});

map.on('click', function (e) {
    console.log(e.lngLat.lng, e.lngLat.lat);
    lat = e.lngLat.lat;
    long = e.lngLat.lng;
});

const keyAPI = "0377de52860837ef04991f63fff9ae55";
// const url = "https://api.documenu.com/v2/restaurant/4072702673999819?key=0377de52860837ef04991f63fff9ae55";
// const url = "https://api.documenu.com/v2/restaurants/search/geo?lat=42.68919&lon=-82.992378&distance=5&size=10&page=1"
// let url = "https://api.documenu.com/v2/restaurants/search/geo?"

// const pageSec = document.getElementById("pageSec");



range.addEventListener("change", () => {
    rangeRes.innerHTML = Math.ceil(range.value / 10);
})
rangeRes.innerHTML = Math.ceil(range.value / 10);


const popularCities = document.getElementById("popularCities");

const NY = document.getElementById("NY");
const LA = document.getElementById("LA");
const miami = document.getElementById("miami");

let chosenCity;
popularCities.addEventListener("click", (e) => {
    if (e.target.id === "NY") {
        console.log('NY');
        lat = "40.730610";
        long = "-73.935242";
    } else if (e.target.id === "LA") {
        console.log('LA');
        lat = "34.052235";
        long = "-118.243683";
    } else if (e.target.id === "miami") {
        console.log('miami');
        lat = "25.761681";
        long = "-80.191788";
    }
    // e.target.style.backgroundColor = "#DF614A";
    // e.target.style.backgroundColor = "white";

    // for (let i = 0; i < popularCities.children.length; i++) {
    //     if (popularCities.children[i].id === e.target.id) {
    //     e.target.style.backgroundColor = "#DF614A";
    //     e.target.style.color = "white"
    // } else {
    //     e.target.style.backgroundColor = "white";
    //     e.target.style.color = "#DF614A"
    // }
    // }
})

const kategoriButton = document.getElementById("kategoriButton");
const kategoriSec = document.getElementById("kategoriSec");

let kategoriON = false;
kategoriButton.addEventListener("click", () => {
    if (kategoriON === false) {
        const kategorier = document.createElement("div");
        kategorier.id = "kategorier";
        kategorier.innerHTML = `<div id="CategoriesRubrik">Categories</div>
        <section id="flexKategori">
<div class="kategori">American</div>
<div class="kategori">Asian</div>
<div class="kategori">Barbecue</div>
<div class="kategori">Bar Food</div>
<div class="kategori">Breakfast</div>
<div class="kategori">Burgers</div>
<div class="kategori">Californian</div>
<div class="kategori">Chicken</div>
<div class="kategori">Chinese</div>
<div class="kategori">Cocktails</div>
<div class="kategori">Coffee & Tea</div>
<div class="kategori">Cuban</div>
<div class="kategori">Deli Food</div>
<div class="kategori">Desserts</div>
<div class="kategori">Diner</div>
<div class="kategori">Gastropub</div>
<div class="kategori">Greek</div>
<div class="kategori">Healthy</div>
<div class="kategori">Indian</div>
<div class="kategori">Italian</div>
<div class="kategori">Japanese</div>
<div class="kategori">Lunch Specials</div>
<div class="kategori">Mediterranean</div>
<div class="kategori">Mexican</div>
<div class="kategori">Middle Eastern</div>
<div class="kategori">Noodles</div>
<div class="kategori">Persian</div>
<div class="kategori">Salads</div>
<div class="kategori">Sandwiches</div>
<div class="kategori">Seafood</div>
<div class="kategori">Soups</div>
<div class="kategori">Subs</div>
<div class="kategori">Sushi</div>
<div class="kategori">Tapas</div>
<div class="kategori">Vegetarian</div>
<div class="kategori">Vietnamese</div>
<div class="kategori">Wings</div>
<div class="kategori">Wraps</div>
<div class="kategori">Pizza</div>
</section>`;
        kategorierDiv.appendChild(kategorier);
        kategorier.addEventListener("click", (e) => {
            valdKategori = e.target;
            if (valdKategori.innerHTML !== "Categories") {
                if (valdKategori.style.color !== "white") {
                    valdKategori.classList.add("valdKategori");
                    valdKategori.style.color = "white";
                    valdKategori.style.backgroundColor = "#DF614A";
                } else {
                    valdKategori.style.color = "#DF614A";
                    valdKategori.classList.remove("valdKategori");
                    valdKategori.style.backgroundColor = "white";
                }
            }
        })
        kategoriON = true;
    } else {
        kategorierDiv.removeChild(kategorier);
        kategoriON = false;
    }
})

const valdaKategorier = document.getElementsByClassName("valdKategori");

const searchButton = document.getElementById("search");

const resultat = document.getElementById("resultat");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    distance = Math.ceil(range.value / 10);

    // url = "https://api.documenu.com/v2/restaurants/search/geo?"
    // url += `lat=${lat}&lon=${long}&distance=${distance}&size=${size}&page=${page}`;

    // fetch(url, {
    //     headers: {
    //         "x-api-key": keyAPI
    //     }
    // }).then((response) => response.json()).then((data) => {
    // console.log(data.data);
    // for (let i = 0; i < data.data.length; i++) {
    //     // console.log(data.NY.data[i]);
    //     for (let i2 = 0; i2 < data.data[i].cuisines.length; i2++) {
    //         // console.log(data.NY.data[i].cuisines[i2]);
    //         for (let i3 = 0; i3 < valdaKategorier.length; i3++) {
    //             // console.log(valdaKategorier[i3].innerText);
    //             if (data.data[i].cuisines[i2] === valdaKategorier[i3].innerText) {
    //                 console.log("MATCH ", "restaurant:", data.data[i].restaurant_name,".", "restaurant kategori:", data.data[i].cuisines[i2],".", "kund vald kategori: ", valdaKategorier[i3].innerText);
    //             }
    //         }
    //     }
    // }
    // })
    // .catch((err) => (console.log(err)));

    fetch(url).then((response) => response.json()).then((data) => {
            console.log(data);
            console.log(data.NY);
            console.log(valdaKategorier);
            for (let i = 0; i < data.NY.data.length; i++) {
                console.log(data.NY.data[i]);
                let restDivve = document.createElement("div");
                restDivve.innerHTML = `
                <div id="resultatRubbe">
            Resultat:
        </div>
        <div>
            <img src="images/restaurant.jpg" alt="" width="343rem">
        </div>
        <div class="restDiv">
            <div id="namnPris">
                <div id="namn">
                    ${data.NY.data[i].restaurant_name}
                </div>
                <div id="pris">
                ${data.NY.data[i].price_range}
                </div>
            </div>
            <div id="cuisines">
            ${data.NY.data[i].cuisines}
            </div>
            <div id="läsMerInfo">
                <div class="bitBolder centerText marginTop">
                    Öppettider:
                </div>
                <div class="centerText">
                ${data.NY.data[i].hours}
                </div>
                <div class="bitBolder centerText marginTop">
                    Telefon:
                </div>
                <div class="centerText">
                ${data.NY.data[i].restaurant_phone}
                </div>
                <div class="bitBolder centerText marginTop">
                    Hemsida:
                </div>
                <div class="centerText">
                ${data.NY.data[i].restaurant_website}
                </div>
                <div class="bitBolder centerText marginTop">
                    Adress:
                </div>
                <div class="centerText marginBot">
                ${data.NY.data[i].address.formatted}
                </div>
            </div>
            <div id="läsMer">
                Läs mer
            </div>
        </div>
                `;
                resultat.appendChild(restDivve);
                for (let i2 = 0; i2 < data.NY.data[i].cuisines.length; i2++) {
                    // console.log(data.NY.data[i].cuisines[i2]);
                    for (let i3 = 0; i3 < valdaKategorier.length; i3++) {
                        // console.log(valdaKategorier[i3].innerText);
                        if (data.NY.data[i].cuisines[i2] === valdaKategorier[i3].innerText) {
                            console.log("MATCH ", "restaurant: ", data.NY.data[i].restaurant_name, "restaurant kategorier: ", data.NY.data[i].cuisines[i2], "kund vald kategori: ", valdaKategorier[i3].innerText);
                        }
                    }
                }
            }
        })
        .catch((err) => (console.log(err)));
})