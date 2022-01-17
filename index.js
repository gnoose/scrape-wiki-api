const request = require("request-promise");
const cheerio = require("cheerio");

function requestToWiki(websiteURL, searchWord) {
    try {
        request(websiteURL, (error, response, html) => {
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
		const contentData = $(".mw-body");
		const output = contentData.contents();
		const contentTextContent = contentData.text();
                console.log('$ = ', contentTextContent);
		console.log('word count = ', contentTextContent.split(searchWord).length - 1);

            } else {
                console.log('Error Response = ', error);
            }
        });
    } catch (e) {
        console.log('No reached to the Wiki Page. Please check your internet status');
    }
}

requestToWiki("https://en.wikipedia.org/wiki/Tokyo", "NARA");
