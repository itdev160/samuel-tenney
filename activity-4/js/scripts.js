// welcome message
var user = 'Sam';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Come learn about Pencils!';
var greetingEl = document.getElementById('greeting');

greeting.length.textContent = greeting;

//pricing
var price = 2,
        studentDiscount = .10,
        studentPrice = price - (price * studentDiscount),
        priceEl = document.getElementById('price'),
        studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);