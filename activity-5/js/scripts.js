/**
 * Wrap everything in an IIFE (Immediately Invoked Function Expression) to keep
 * our variables constrained to the scope of this function and out of the global scope.
 */
(function () {
    /**************************************
     * Package data and constructor objects
     **************************************/

    // Package data array(simulated data source)
    var data = [
        {
            name: "Path Intellisense",
            description: "The Path Intellisense extension helps to autocomplete filenames. Super useful when writing out paths in markup, or in any file that has path references.",
            author: "Christian Kohler",
            url: "https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense",
            downloads: 3596315,
            stars: 5,
            price: 0,
            selector: "p1",
        },
        {
            name: "Debugger for Chrome",
            description: "The Debugger for Chrome extension adds the Google Chrome browser debugger into your editor. It allows you to launch an instance of Chrome navigated to your app, or it can attach to a running instance of Chrome. Using the url parameter, you tell VS Code which URL to either open or launch in Chrome.",
            author: "Microsoft",
            url: "https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome",
            downloads: 6512295,
            stars: 4,
            price: 0,
            selector: "p2",
        },
        {
            name: "Trailing Spaces",
            description: "enables you to highlight trailing spaces and remove them quickly. ",
            author: "Shardul Mahadik",
            url: "https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces",
            downloads: 492558,
            stars: 5,
            price: 0,
            selector: "p3",
        }

    ];

    //VSCODE Package Constructor function
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }

    //Returns today's date, formatted
    var getTodaysDate = function () {
        var today = new Date();
        return today.toDateString();
    };

    // Returns DOM element by id
    var getEl = function (id) {
        return document.getElementById(id);
    };

    // Writes the package object's data to the
    // appropriate DOM elements utilizing the package selector property.
    var writePackageInfo = function (package) {
        // Get reference to DOM elements
        var selector = package.selector,
            nameEl = getEl(selector + "-name"),
            descEl = getEl(selector + "-description"),
            authEl = getEl(selector + "-author"),
            downloadsEl = getEl(selector + "-downloads"),
            starsEl = getEl(selector + "-stars");

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadsEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    };


    // Write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    for (var i = 0; i <data.length; i++) {
        var package = new Package(data[i]);
        writePackageInfo(package);
    }

})();