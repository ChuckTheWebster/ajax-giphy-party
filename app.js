'use strict';


function getSearchValueAndSearch(evt) {
    evt.preventDefault();
    let searchTerm = $('#search').val();
    getGif(searchTerm);
}

async function getGif(searchTerm) {
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=ifGZaDq48hprw2OFYlDXvOMKnb79pL6X`);
    console.log(response);
    addGifToPage(response);
}

function addGifToPage(response) {
    let gifSource = response.data.data[0].images.original.url;
    console.log(response.data.data[0].images.original.url);
    let $newGif = $(`<img class="gif" src="${gifSource}">`);
    $('#gif-container').append($newGif);
}

$('form').on('submit', getSearchValueAndSearch);

$('#remove-gifs').on('click', function(evt) {
    $('.gif').remove();
});