const {
    performance
} = require('perf_hooks');
const images = ['https://img6.rockrush.com/image/upload/f_webp/h_800,c_limit,dpr_1.0,q_auto:low,w_800/v1/catalog/rr/S0188RR/S0188RR-YD-3D.jpg',
    'https://sunnydiamonds.com/media/catalog/product/cache/c74ac0aa11c1acf2297a98cfaba7c7c2/s/d/sdnp1439.jpg',
    'https://images.melorra.com/image/upload/fl_progressive,q_auto/v1571040765/live-melorra/dev/catalogue/images/CC/OPT/580/W19PCC33I_P_580.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/61xVXMzO1BL._UL1500_.jpg',
    'https://cdn-images.gehnaindia.com/products/avatars/000/005/205/original/Delightful_Turquoise_and_Gold_Nosepin-GHCSNP-1033-1.jpg?1554970980',
    'https://images.melorra.com/image/upload/fl_progressive,q_auto/v1571040764/live-melorra/dev/catalogue/images/CC/OPT/580/W19PCC30I_P_580.jpg',
    'https://images.melorra.com/image/upload/fl_progressive,q_auto/v1571040764/live-melorra/dev/catalogue/images/CC/OPT/580/W19PCC41I_F_580.jpg',
    'https://www.orra.co.in/pub/media/catalog/product/o/n/onp12001-a.png',
    'https://pcchandraindia.com/public/backend/assets/img/product/large/18K300VDXNP9553_1.png',
    'https://images-na.ssl-images-amazon.com/images/I/51%2ByO3io75L._UY395_.jpg',
    'https://pcchandraindia.com/public/backend/assets/img/product/large/18K300VDXNP9557_2.png',
    'https://img6.rockrush.com/image/upload/f_webp/h_800,c_limit,dpr_1.0,q_auto:low,w_800/v1/catalog/rr/S0147RR/S0147RR-YD-3D.jpg'
]

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

    return "NP" + getRandomInt(+min_, +max_);
}


async function getRandomImages(count = 2, query = 'nose pin', width = 200, height = 300) {

    var Scraper = require('images-scraper');
    const google = new Scraper({
        puppeteer: {
            headless: true,
        }
    });
    let imageUrls = [];
    return google.scrape(query, count).then((results) => {
        for (let i = 0; i < results.length; i++) {
            imageUrls.push(results[i].url);
        }
    }).then(() => {
        return imageUrls;
    });
}

exports.generateJson = async(x) => {
    let returnArr = [];
    template = {
        'StyleNumber': getRandomString(),
        'Images': await getRandomImages(),
        'DiamondWeight': getRandomNumber(min = 0, max = 2),
        'GoldWeight': getRandomNumber(min = 0, max = 4, precision = 3),
        'DiamondCount': getRandomInt(min = 0, max = 100),
        'DesignParameters': {
            'featuredDesign': getRandomBool(),
            'highestSelling': getRandomBool(),
            'hancyDiamond': getRandomBool(),
            'newDesign': getRandomBool(),
        }
    };
    for (var i = 0; i < x; i++) returnArr.push(template);
    return returnArr;
=======
function getRandomImage(count = 2, width = 200, height = 300) {
    let randomImages = [];
    for (var i = 0; i < count; i++) {
        randomImages.push(images[Math.floor(Math.random() * 12)]);
        // randomImages.push(`https://picsum.photos/${ width }/${ height }`);
    }

    return randomImages;
}

exports.dataGenerator = async (x) => {
    var t0 = performance.now()
    let arr = [];

    template = {
        'styleNumber': getRandomString(),
        'images': getRandomImage(1),
        'diamondWeight': getRandomNumber(min = 0, max = 2),
        'goldWeight': getRandomNumber(min = 0, max = 4, precision = 3),
        'diamondCount': getRandomInt(min = 0, max = 100),
        'designDetails': {
            'featured': getRandomBool(),
            'highestSelling': getRandomBool(),
            'fancyDiamond': getRandomBool(),
            'new': getRandomBool(),
        }
    };

    for (var i = 0; i < x; i++) {
        arr.push(template);
    }



    var t1 = performance.now()
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

    return arr;


}