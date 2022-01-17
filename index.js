const request = require("request-promise");
const cheerio = require("cheerio");

function requestToWiki() {
    try {
        request("https://en.wikipedia.org/wiki/Tokyo", (error, response, html) => {
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
                console.log('$ = ', $);

            } else {
                console.log('Error Response = ', error);
            }
        });
    } catch (e) {
        console.log('No reached to the Wiki Page. Please check your internet status');
    }
}

requestToWiki();