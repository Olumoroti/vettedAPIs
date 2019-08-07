//   https://pokeapi.co/api/v2/generation/1/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let randomIndex = getRndInteger(1, 149);
let button = document.getElementById('button');
let poke_container = document.getElementById('result_container'); 
button.addEventListener('click', showInfo);

function showInfo(event) {
    event.preventDefault();
    poke_container.innerHTML = '';
    getPokeResult();
    getGifResult();

}


// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// let randomYear = getRndInteger(currentYear, 2029);
// const dateURL = ('https://api.lrs.org/random-date-generator?year=' + randomYear +'&num_dates=1');



function getPokeResult() {
    randomIndex = getRndInteger(1, 149);
    const pokeURL = ('https://pokeapi.co/api/v2/pokemon/' + randomIndex + '/');
    fetch(pokeURL)

    .then(function (response) {
        return response.json();
    })

    .then(function(jsondata) {
        let data_name = jsondata.forms[0].name;
        let poke_name = document.createElement('h2');
        poke_name.innerText = "Your pokemon is: " + data_name;
        document.getElementById('result_container').appendChild(poke_name);

        let data_img = jsondata.sprites.front_default;
        let poke_img = document.createElement('img');
        poke_img.src = data_img;
        document.getElementById('result_container').appendChild(poke_img);
        
    });

}

function getGifResult() {
    const gifURL = ('http://api.giphy.com/v1/gifs/random?api_key=uXKEGm72u4mMN7xL9L0MuUfwNYcykAcI');
    fetch(gifURL)

    .then(function (response) {
        return response.json();
    })

    .then(function(jsondata) {
        let data_src = jsondata.data.image_original_url;
        let gif = document.createElement('img');
        gif.src = data_src;
        document.getElementById('result_container').appendChild(gif);
        gif.style.height = '11rem';
        
        
    });

}
//_______________________________________________________________________________________________________________________________________________//

// fetch(dateURL)

// .then(function (response) {
//     return response.json();
// })

// .then(function(jsondata) {
    
    
// });


// let pokeRequest = fetch(pokeURL).then(function(response) {
//     return response.json();
// })


// let dateRequest = fetch(dateURL).then(function(response) {
//     return response.json();
// })

// let combinedData = {"pokeRequest":{},"dateRequest":{}};
//     Promise.all([pokeRequest,dateRequest]).then(function(values){
//     combinedData["pokeRequest"] = values[0];
//     combinedData["dateRequest"] = values[1];
//     return combinedData;
// });

