import { images } from "./images";

const burgerMenu = [
  {
    "categoryName": "Appetizers",
    "items": [
      {
        "id": "appetizer-01",
        "name": "Loaded Potato Skins",
        "price": 6.99,
        "description": "Crispy potato halves with melted cheddar, bacon bits, and green onions. Served with sour cream.",
        "rating": 4.7,
        "timeToMake": "8-10 mins",
        "calories": 520,
        "image": images.a1
      },
      {
        "id": "appetizer-02",
        "name": "Buffalo Chicken Wings",
        "price": 8.49,
        "description": "Crispy wings tossed in signature spicy buffalo sauce. Served with celery and blue cheese dip.",
        "rating": 4.8,
        "timeToMake": "10-12 mins",
        "calories": 640,
        "image": images.a2
      }
    ]
  },
  {
    categoryName: "Chicken Burgers",
    items: [
      {
        id: "chick-01",
        name: "Crispy Chicken Deluxe",
        price: 6.49,
        description: "Crispy golden chicken breast topped with fresh lettuce, ripe tomatoes, and our signature creamy mayo on a toasted brioche bun.",
        rating: 4.7,
        timeToMake: "8-10 mins",
        calories: 540,
        image: images.c1
      },
      {
        id: "chick-02",
        name: "Spicy Zinger Burger",
        price: 6.99,
        description: "Fiery marinated crispy chicken fillet, spicy pepper jack cheese, jalapeños, and a hot chili sauce that packs a punch.",
        rating: 4.9,
        timeToMake: "10 mins",
        calories: 580,
        image: images.c2
      },
      {
        id: "chick-03",
        name: "BBQ Grilled Chicken",
        price: 7.29,
        description: "Tender grilled chicken breast glazed with smoky BBQ sauce, topped with crispy onion rings and sharp cheddar cheese.",
        rating: 4.5,
        timeToMake: "12 mins",
        calories: 460,
        image: images.c3
      }
    ]
  },
  {
    categoryName: "Beef Burgers",
    items: [
      {
        id: "beef-01",
        name: "Classic Cheeseburger",
        price: 7.49,
        description: "Juicy 100% beef patty flame-grilled to perfection, melted American cheese, pickles, mustard, and ketchup.",
        rating: 4.6,
        timeToMake: "7-9 mins",
        calories: 620,
        image: images.b1
      },
      {
        id: "beef-02",
        name: "Smoky Bacon Double Beef",
        price: 9.99,
        description: "Two smash beef patties, double cheddar cheese, crispy smoked bacon, caramelized onions, and house special burger sauce.",
        rating: 4.9,
        timeToMake: "12-15 mins",
        calories: 890,
        image: images.b2
      },
      {
        id: "beef-03",
        name: "Mushroom Swiss Beef",
        price: 8.49,
        description: "Flame-grilled beef patty smothered in a rich mushroom garlic sauce and topped with melted Swiss cheese.",
        rating: 4.4,
        timeToMake: "10 mins",
        calories: 710,
        image: images.b3
      }
    ]
  },
  {
    "categoryName": "Sandwiches",
    "items": [
      {
        "id": "sandwich-01",
        "name": "Turkey & Avocado Club",
        "price": 9.49,
        "description": "Triple-layered satisfaction with roasted turkey, creamy avocado, crisp bacon, lettuce, and tomato on multigrain bread.",
        "rating": 4.6,
        "timeToMake": "6-8 mins",
        "calories": 540,
        "image": images.s1
      },
      {
        "id": "sandwich-02",
        "name": "Philly Cheesesteak",
        "price": 10.49,
        "description": "Thinly sliced ribeye steak, melted provolone, and sautéed peppers and onions on a toasted hoagie roll.",
        "rating": 4.7,
        "timeToMake": "8-10 mins",
        "calories": 780,
        "image": images.s2
      },
      {
        "id": "sandwich-03",
        "name": "Caprese Panini",
        "price": 8.99,
        "description": "Fresh mozzarella, ripe tomatoes, basil leaves, and balsamic glaze on grilled sourdough bread.",
        "rating": 4.5,
        "timeToMake": "6-8 mins",
        "calories": 490,
        "image": images.s3
      }
    ]
  },
  {
    "categoryName": "Pizzas",
    "items": [
      {
        "id": "pizza-01",
        "name": "Pepperoni Feast Pizza",
        "price": 12.99,
        "description": "Crispy thin crust loaded with double spicy pepperoni and extra mozzarella cheese.",
        "rating": 4.9,
        "timeToMake": "12-15 mins",
        "calories": 1100,
        "image": images.p1
      },
      {
        "id": "pizza-02",
        "name": "Garden Veggie Pizza",
        "price": 11.99,
        "description": "Thick herb-infused crust with pesto base, roasted bell peppers, mushrooms, red onions, and black olives.",
        "rating": 4.4,
        "timeToMake": "12-15 mins",
        "calories": 890,
        "image": images.p2
      },
      {
        "id": "pizza-03",
        "name": "BBQ Chicken Pizza",
        "price": 13.49,
        "description": "Zesty BBQ sauce, grilled chicken, red onions, and fresh cilantro on a golden crust.",
        "rating": 4.6,
        "timeToMake": "12-15 mins",
        "calories": 1050,
        "image": images.p3
      }
    ]
  },
  {
    categoryName: "Drinks",
    items: [
      {
        id: "drink-01",
        name: "Classic Lime Margarita",
        price: 7.49,
        description: "Premium tequila, tart lime juice, and agave. Served over ice with a salted rim.",
        rating: 4.6,
        timeToMake: "3-5 mins",
        calories: 210,
        image: images.d1
      },
      {
        id: "drink-02",
        name: "Sparkling Berry Lemonade",
        price: 4.99,
        description: "House-made lemonade with a sweet berry blend, fresh lemon, and mint.",
        rating: 4.7,
        timeToMake: "3-5 mins",
        calories: 150,
        image: images.d2
      },
      {
        id: "drink-03",
        name: "Iced Caramel Macchiato",
        price: 5.49,
        description: "Rich espresso and cold milk over ice, finished with a sweet caramel drizzle.",
        rating: 4.8,
        timeToMake: "3-5 mins",
        calories: 280,
        image: images.d3
      }
    ]
  }
];

export default burgerMenu;