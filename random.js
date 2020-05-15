function getRandomNumber(min = 0, max = 1, precision = 2) {
    return (Math.random() * (max - min) + min).toFixed(precision);
}

function getRandomBool() {
    return getRandomNumber() >= 0.5;
}

function getRandomInt(min = 0, max = 1) {
    return Math.floor(getRandomNumber(min, max));
}

function getRandomString(requiredLength = 5) {
    if (requiredLength <= 2) {
        return "Too short String";
        // later return an anagram or bi-gram as per discussion 
    }
    var min_ = '1'
    for (var i = 0; i < requiredLength - 3; i++) min_ += '0';

    var max_ = '9'
    for (var i = 0; i < requiredLength - 3; i++) max_ += '9';

    return "np" + getRandomInt(+min_, +max_);
}

// function getRandomImage(width = 200, height = 300, count = 2) {
//     let randomImages = [];
//     for (var i = 0; i < count; i++) {
//         randomImages.push(`https://picsum.photos/${ width }/${ height }`);
//     }
//     return randomImages;
// }
// 
function getRandomImage(count = 2, width = 200, height = 300){
    
    var Scraper = require('images-scraper');
    const google = new Scraper({
      puppeteer: {
        headless: false,
      }
    });
     var results = '';
    (async () => {
       results = await google.scrape('nose pin', count);
    })();
    var imgs = [];
    for (let i = 0; i < results.length; i++) {
        imgs.push(results[i].url);
    }
    // console.log(imgs);
    return imgs
}
getRandomImage();


function generateJson() {
    template = {
        'Style Number': getRandomString(),
        'Images': getRandomImage(),
        'Diamond Weight': getRandomNumber(min = 0, max = 2),
        'Gold Weight': getRandomNumber(min = 0, max = 4, precision = 3),
        'Diamond Count': getRandomInt(min = 0, max = 100),
        'Design Parameters': {
            'Featured Design': getRandomBool(),
            'Highest Selling': getRandomBool(),
            'Fancy Diamond': getRandomBool(),
            'New Design': getRandomBool(),
        }
    };

    return template;

}

module.exports = {
    generateJson: generateJson
};