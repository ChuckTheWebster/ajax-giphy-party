'use strict';
const GIPHY_API_KEY = "ifGZaDq48hprw2OFYlDXvOMKnb79pL6X";
const BASE_URL = 'http://api.giphy.com/v1';
let ARRAY_LENGTH;

async function getSearchValueAndSearch(evt) {
    evt.preventDefault();
    let searchTerm = $('#search').val();
    const response = await getGif(searchTerm);

    addGifToPage(response);
}

async function getGif(searchTerm) {
    let response = await axios.get(`${BASE_URL}/gifs/search?q=${searchTerm}&api_key=${GIPHY_API_KEY}`);
    console.log(response);
    return response;
}

function addGifToPage(response) {
    ARRAY_LENGTH = response.data.data.length;
    let gifIndex = getRandomInd();
    let gifSource = response.data.data[gifIndex].images.original.url;
    console.log(response.data.data[0].images.original.url);
    let $newGif = $(`<img class="gif" src="${gifSource}">`);
    $('#gif-container').append($newGif);
}

function getRandomInd() {

    return Math.floor(Math.random() * ARRAY_LENGTH);
}

$('form').on('submit', getSearchValueAndSearch);

$('#remove-gifs').on('click', function(evt) {
    $('.gif').remove();
});