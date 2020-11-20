//Set up vue app
let app = new Vue({
    el: '#container',
    data: {
        lessons: [{
            id: 1,
            title: "Math",
            location: "London",
            spaces: 5,
            price: 100,
            image: "coursework/math.png"
        },
        {
            id: 2,
            title: "English",
            location: "Oxford",
            spaces: 6,
            price: 70,
            image: "coursework/english.png"
        }, {
            id: 3,
            title: "Music",
            location: "Liverpool",
            spaces: 8,
            price: 90,
            image: "coursework/music.png"
        }, {
            id: 4,
            title: "Math",
            location: "Oxford",
            spaces: 12,
            price: 105,
            image: "coursework/math.png"
        }, {
            id: 5,
            title: "Theatre",
            location: "Yorkshire",
            spaces: 6,
            price: 89,
            image: "coursework/theatre.png"
        }, {
            id: 6,
            title: "Chemistry",
            location: "Birmingham",
            spaces: 11,
            price: 79,
            image: "coursework/chem.png"
        }, {
            id: 7,
            title: "Physics",
            location: "London",
            spaces: 15,
            price: 150,
            image: "coursework/physics.png"
        }, {
            id: 8,
            title: "Economics",
            location: "London",
            spaces: 9,
            price: 160,
            image: "coursework/economics.png"
        }, {
            id: 9,
            title: "Business Studies",
            location: "London",
            spaces: 7,
            price: 75,
            image: "coursework/business.png"
        }, {
            id: 10,
            title: "Art",
            location: "Kent",
            spaces: 11,
            price: 71,
            image: "coursework/art.png"
        },

        ],

        cart: [],

        showProducts: true,

        info: "",

        order: {
        },

        btnShow: false,
    },
    methods: {
        //Method to add to cart
        add: function (lesson) {
            this.cart.push(lesson);
            lesson.spaces--;

        },

        showCheckout() {
            this.showProducts = this.showProducts ? false : true;
        },
        ordered(){
            alert("Order Submitted !");
            this.cart = [];
        },       
        canAdd(lesson) {
            return lesson.spaces > this.cartCount(product.id);
        },

        zeroo() {
            return 0;
        },

        sortPrice() {
            function compare(a, b) {
                if (a.price > b.price) return 1;
                if (a.price < b.price) return -1;
                return 0;
            }
            return this.lessons.sort(compare);
        },
        sortTitle() {
            function compare(a, b) {
                if (a.title > b.title) return 1;
                if (a.title < b.title) return -1;
                return 0;
            }
            return this.lessons.sort(compare);
        },
        sortLocation() {
            function compare(a, b) {
                if (a.location > b.location) return 1;
                if (a.location < b.location) return -1;
                return 0;
            }
            return this.lessons.sort(compare);
        },
        sortSpaces() {
            function compare(a, b) {
                if (a.spaces > b.spaces) return 1;
                if (a.spaces < b.spaces) return -1;
                return 0;
            }
            return this.lessons.sort(compare);
        },
    },
    computed: {
        itemCount() {
            return this.cart.length || '';
        },
        isCart() {
            if (this.cart.length > 0)
                return this.cart.length;
        }
    },
})