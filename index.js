const request = require("request-promise");
const cheerio = require("cheerio");

function requestToWiki(websiteURL, searchWord) {
    try {
        request(websiteURL, (error, response, html) => {
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
		        const contentData = $(".mw-body");
        		const contentTextContent = contentData.text();
                const wordCount = contentTextContent.split(searchWord).length - 1;
		        console.log('word count = ', wordCount);

            } else {
                console.log('Error Response = ', error);
            }
        });
    } catch (e) {
        console.log('No reached to the Wiki Page. Please check your internet status');
    }
}

requestToWiki("https://en.wikipedia.org/wiki/Tokyo", "NARA");
