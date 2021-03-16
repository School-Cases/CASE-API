// //  1

// const keyAPI = "0377de52860837ef04991f63fff9ae55";
// // const url = "https://api.documenu.com/v2/restaurant/4072702673999819?key=0377de52860837ef04991f63fff9ae55";
// // const url = "https://api.documenu.com/v2/restaurants/search/geo?lat=42.68919&lon=-82.992378&distance=5&size=10&page=1"
// let url = "https://api.documenu.com/v2/restaurants/search/geo?"


// //  lat 19 till long -156, 66 till -70

// let latitude;
// let longitude;
// let distance;
// let size;
// let page;

// document.getElementById("button").addEventListener("click", (e) => {
//     e.preventDefault();
//     latitude = document.getElementById("latitude").value;
//     longitude = document.getElementById("longitude").value;
//     distance = document.getElementById("distance").value;
//     size = document.getElementById("size").value;
//     page = document.getElementById("page").value;
//     url += `lat=${latitude}&lon=${longitude}&distance=${distance}&size=${size}&page=${page}`;
//     console.log(url);
//     fetch(url, {
//             headers: {
//                 "x-api-key": keyAPI
//             }
//         }).then((response) => response.json()).then((data) => console.log(data))
//         .catch((err) => (console.log(err)));
// })

// // 1 end


// 2

// const keyAPI = "0377de52860837ef04991f63fff9ae55";
// // const url = "https://api.documenu.com/v2/restaurant/4072702673999819?key=0377de52860837ef04991f63fff9ae55";
// // const url = "https://api.documenu.com/v2/restaurants/search/geo?lat=42.68919&lon=-82.992378&distance=5&size=10&page=1"
// let url = "https://api.documenu.com/v2/restaurants/search/geo?";
// const citySection = document.getElementById("citySection");

// const range = document.getElementById("range");
// const rangeRes = document.getElementById("rangeRes");

// let latitude;
// let longitude;
// let distance = "5";
// let size = "10";
// let page = 1;


// const sidoNummer = document.getElementById("sidoNummer");
// sidoNummer.innerHTML = page;
// const nextPage = document.getElementById("nextPage");
// const unNextPage = document.getElementById("unNextPage");

// nextPage.addEventListener("click", () => {
    
// })

// range.addEventListener("change", () => {
//     rangeRes.innerHTML = Math.ceil(range.value/10);
// })

// rangeRes.innerHTML = Math.ceil(range.value/10);

// const antalPerSida = document.getElementById("antalPerSida");
// const antalPerSidaRes = document.getElementById("antalPerSidaRes");

// antalPerSida.addEventListener("change", () => {
//     antalPerSidaRes.innerHTML = Math.ceil(antalPerSida.value/2);
// })

// antalPerSidaRes.innerHTML = Math.ceil(antalPerSida.value/2);

// // ny lat: 40.730610 long: c
// // la lat: 34.052235 long: -118.243683
// // maimi lat: 25.761681 long: -80.191788


// citySection.addEventListener("click", (e) => {
//     console.log(range.value);
//     distance = Math.ceil(range.value/10);
//     // size = Math.ceil(antalPerSida.value/2);
//     size = 250;
//     let chosenCity = e.target;
//     if (chosenCity.id === "NY") {
//         console.log('ny');
//         latitude = "40.730610";
//         longitude = "-73.935242";
//     } else if (chosenCity.id === "LA") {
//         console.log('la');
//         latitude = "34.052235";
//         longitude = "-118.243683";
//     } else {
//         console.log('miami');
//         latitude = "25.761681";
//         longitude = "-80.191788";
//     };
//     // url += `lat=${latitude}&lon=${longitude}&distance=${distance}&size=${size}&page=${page}`;
//     url += `lat=${latitude}&lon=${longitude}&distance=${distance}`;
//     console.log(url);

//     fetch(url, {
//         headers: {
//             "x-api-key": keyAPI
//         }
//     }).then((response) => response.text()).then((data) => {
//         console.log("data", data);
//         document.body.append(data);
//         for (let i = 0; i < size; i++) {
//             // for (let i2 = 0; i2 <= data.data[i].cuisines.length; i2++) {
//             //     if (data.data[i].cousines[i2] === "Deli Food") {
//             //         console.log(data.data[i].restaurant_name, "deli food!");
//             //     } else {
//             //         return;
//             //     }
//             // }
//             console.log(data.data[i].cuisines.length);
//             console.log(data.data[i]);
//         }
        
//     })
//     .catch((err) => (console.log(err)));
    
// });


// const url = "https://api.documenu.com/v2/restaurant/4072702673999819?key=0377de52860837ef04991f63fff9ae55";
// const url = "https://api.documenu.com/v2/restaurants/search/geo?lat=42.68919&lon=-82.992378&distance=5&size=10&page=1"
let url = "data.json";
const citySection = document.getElementById("citySection");

const range = document.getElementById("range");
const rangeRes = document.getElementById("rangeRes");

let latitude;
let longitude;
let distance = "5";
let size = "10";
let page = 1;


const sidoNummer = document.getElementById("sidoNummer");
sidoNummer.innerHTML = page;
const nextPage = document.getElementById("nextPage");
const unNextPage = document.getElementById("unNextPage");

// nextPage.addEventListener("click", () => {
    
// })

range.addEventListener("change", () => {
    rangeRes.innerHTML = Math.ceil(range.value/10);
})

rangeRes.innerHTML = Math.ceil(range.value/10);

const antalPerSida = document.getElementById("antalPerSida");
const antalPerSidaRes = document.getElementById("antalPerSidaRes");

antalPerSida.addEventListener("change", () => {
    antalPerSidaRes.innerHTML = Math.ceil(antalPerSida.value/2);
})

antalPerSidaRes.innerHTML = Math.ceil(antalPerSida.value/2);

// ny lat: 40.730610 long: -73.935242
    // ny north: lat: 40.931210 long: -73.898750
    // ny east: lat: 40.706902 long: -73.620354
    // ny south: lat: 40.562790 long: -74.228920
    // ny west: lat: 40.674330 long: -74.334660
// la lat: 34.052235 long: -118.243683
    // la south: lat: 33.827810 lat: -118.242230
    // la north: lat: 34.232200, long: -118.421310
    // la west: lat: 34.050130 long: -118.408190
    // la east: lat: 34.043430 long: -118.105910
// maimi lat: 25.761681 long: -80.191788
    // miami east lat: 25.809660 long: -80.127000
    // miami south lat: 25.680310 long: -80.313000
    // miami west lat: 25.910070 long: -80.317570
    // miami north lat: 26.031400 long: -80.210290


const NY = document.getElementById("NY");
const LA = document.getElementById("LA");
const miami = document.getElementById("miami");

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");

citySection.addEventListener("click", (e) => {
    distance = Math.ceil(range.value/10);
    size = 250;
    let chosenCity = e.target;
    if (chosenCity.id === "NY") {
        console.log('ny');
        latitude = "40.730610";
        longitude = "-73.935242";
        li1.innerHTML = ``;
        li2.innerHTML = ``;
        li3.innerHTML = ``;
        li4.innerHTML = ``;
        li1.innerHTML = `New York north`;
        li2.innerHTML = `New York east`;
        li3.innerHTML = `New York south`;
        li4.innerHTML = `New York west`;
    } else if (chosenCity.id === "LA") {
        console.log('la');
        latitude = "34.052235";
        longitude = "-118.243683";
        li1.innerHTML = ``;
        li2.innerHTML = ``;
        li3.innerHTML = ``;
        li4.innerHTML = ``;
        li1.innerHTML = `Los Angeles north`;
        li2.innerHTML = `Los Angeles east`;
        li3.innerHTML = `Los Angeles south`;
        li4.innerHTML = `Los Angeles west`;
    } else {
        console.log('miami');
        latitude = "25.761681";
        longitude = "-80.191788";
        li1.innerHTML = ``;
        li2.innerHTML = ``;
        li3.innerHTML = ``;
        li4.innerHTML = ``;
        li1.innerHTML = `Miami north`;
        li2.innerHTML = `Miami east`;
        li3.innerHTML = `Miami south`;
        li4.innerHTML = `Miami west`;
    };
    chosenCity.appendChild(li1);
    chosenCity.appendChild(li2);
    chosenCity.appendChild(li3);
    chosenCity.appendChild(li4);
});


// fetch(url).then((response) => response.json()).then((data) => {
        
// })
// .catch((err) => (console.log(err)));

