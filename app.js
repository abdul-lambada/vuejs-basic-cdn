// Membuat variabel data json
var product = {
    "name": "Bambo Thermal",
    "description": "lorem ipsum set",
    "price": 13.5,
    "image": "https://i.pravatar.cc"
};

// memebuat var pertama di Vue Js
var app = new Vue({
    el: '#app',
    data: product
});
