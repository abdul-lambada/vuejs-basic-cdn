// Membuat variabel data json
// var dataProduct = {
//     // Menambahkan properti baru
//     maximum: 50,
//     products: [
//         {
//             "id":"532",
//             "name":"Slicker Jacket",
//             "description":"Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.",
//             "price":"125",
//             "image_title":"slicker-jacket_lynda_29941",
//             "image":"https://hplussport.com/wp-content/uploads/2016/12/slicker-jacket_LYNDA_29941.jpg"
//         },
//         {
//             "id":"530",
//             "name":"Bamboo Thermal Ski Coat",
//             "description":"You'll be the most environmentally conscious skier on the slopes - and the most stylish - wearing our fitted bamboo thermal ski coat, made from organic bamboo with recycled plastic down filling.",
//             "price":"99",
//             "image_title":"ski-coat_lynda_29940",
//             "image":"https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg"
//         },
//         {
//             "id":"516",
//             "name":"Unisex Thermal Vest",
//             "description":"Our thermal vest, made from organic bamboo with recycled plastic down filling, is a favorite of both men and women. You'll help the environment, and have a wear-easy piece for many occasions.",
//             "price":"95",
//             "image_title":"unisex-thermal-vest_lynda_29944",
//             "image":"https://hplussport.com/wp-content/uploads/2016/12/unisex-thermal-vest_LYNDA_29944.jpg"
//         },
//         {
//             "id":"514",
//             "name":"Grunge Skater Jeans",
//             "description":"Our boy-cut jeans are for men and women who appreciate that skate park fashions aren't just for skaters. Made from the softest and most flexible organic cotton denim.",
//             "price":"68",
//             "image_title":"unisex-grunge-jeans_lynda_29937",
//             "image":"https://hplussport.com/wp-content/uploads/2016/12/unisex-grunge-jeans_LYNDA_29937.jpg"
//         },
//         {
//             "id":"520",
//             "name":"V-Neck Sweater",
//             "description":"This medium-weight sweater, made from organic knitted cotton and bamboo, is the perfect solution to a chilly night at the campground or a misty walk on the beach.",
//             "price":"65",
//             "image_title":"v-neck-sweater-for-men_lynda_29947",
//             "image":"https://hplussport.com/wp-content/uploads/2016/12/v-neck-sweater-for-men_LYNDA_29947.jpg"
//         },
//         {
//             "id":"518",
//             "name":"V-Neck Pullover",
//             "description":"This organic hemp jersey pullover is perfect in a pinch. Wear for casual days at the office, a game of hoops after work, or running your weekend errands.",
//             "price":"65",
//             "image_title":"v-neck-long-sleeved-pullover_lynda_29946",
//             "image":"https://hplussport.com/wp-content/uploads/2016/12/v-neck-long-sleeved-pullover_LYNDA_29946.jpg"
//         },
//         {
//             "id":"500",
//             "name":"Thermal Fleece Jacket",
//             "description":"Our thermal organic fleece jacket, is brushed on both sides for ultra softness and warmth. This medium-weight jacket is versatile all year around, and can be worn with layers for the winter season.",
//             "price":"60",
//             "image_title":"thermal-jacket_lynda_29943",
//             "image":"https://hplussport.com/wp-content/uploads/2016/12/thermal-jacket_LYNDA_29943.jpg"
//         },
//         {
//             "id":"483",
//             "name":"Stretchy Dance Pants",
//             "description":"Whether dancing the samba, mastering a yoga pose, or scaling the climbing wall, our stretchy dance pants, made from 80% organic cotton and 20% Lycra, are the most versatile and comfortable workout pants you'll ever have the pleasure of wearing.",
//             "price":"55",
//             "image_title":"stretch-dance-pants_lynda_29942",
//             "image":"https://hplussport.com/wp-content/uploads/2016/12/stretch-dance-pants_LYNDA_29942.jpg"
//         },
//         {
//             "id":"526",
//             "name":"Polo Shirt",
//             "description":"Our pre-shrunk organic cotton polo shirt is perfect for weekend activities, lounging around the house, and casual days at the office. With its triple-stitched sleeves and waistband, our polo has maximum durability.",
//             "price":"35",
//             "image_title":"polo-shirt_lynda_29938",
//             "image":"https://hplussport.com/wp-content/uploads/2016/12/polo-shirt_LYNDA_29938.jpg"
//         },
//         {
//             "id":"528",
//             "name":"Skater Graphic T-Shirt",
//             "description":"Hip at the skate park or around down, our pre-shrunk organic cotton graphic T-shirt has you covered.",
//             "price":"33",
//             "image_title":"skater-knit-shirt_lynda_29939",
//             "image":"https://hplussport.com/wp-content/uploads/2016/12/skater-knit-shirt_LYNDA_29939.jpg"
//         },
//     ],
// };


// memebuat var/object/komponen pertama di Vue Js
var app = new Vue({
    el: '#app',
    data: {
        maximum: 50,
        products: null,
        cart: [],
        style: {
            label: ['font-weight-bold', 'mr-2'],
            inputWidth: 60,
            sliderStatus: false
        }
    },
    mounted: function(){
        fetch('https://hplussport.com/api/products/order/price')
        .then(Response => Response.json()) //merubah api menjadi json dengan response
        .then(data => {
            this.products = data; //mengambil data dan mengirimkan ke products
        });
    },
    computed:{ //menambahkan computed untuk melakukan manipulasi pada sliderState yang ada di HTML
        sliderState: function(){
            return this.style.sliderStatus ? 'd-flex' : 'd-none';
        }
    },
    methods: { //methods bersifat proverti
        addItem: function(product){
            this.cart.push(product);
        }
    }
});
