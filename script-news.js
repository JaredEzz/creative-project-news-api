function onClick(e) {
    e.preventDefault();
    // get form values
    let searchText = document.getElementById('search-text').value;
    console.log(searchText);

    // setup URL
    let url = " http://newsapi.org/v2/everything?q="+searchText+"&from=2020-01-22&sortBy=publishedAt&apiKey=183d7f7754164e96962b602ce45a76a3"
    // call API
    fetch(url)
        .then(function(response) {
            // make sure the request was successful
            if (response.status != 200) {
                return {
                    text: "Error calling the News API service: " + response.statusText
                }
            }
            return response.json();
        }).then(function(json) {
        // update DOM with response
        updateResult(json);
    });
}

function updateResult(json) {
    let results = [];
    results += '<div class="border mx-5 mb-5">';
    results += '<div class="px-3">';
    results += '<p class="pt-2" style="font-size: 13px">About {json.totalResults} results</p>\n';
    results += '</div>';
    results += '</div>';

    document.getElementById("searchResults").innerHTML = results;

}

document.getElementById('woo').addEventListener('click', onClick);
