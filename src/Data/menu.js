const menu = {
  antipasti: [
    {
      id: "anti1",
      title: "Antipasti",
      description: "handcrafted italian salami, cheese, olives and vegetables",
      price: "200",
    },
    {
      id: "anti2",
      title: "Meatballs",
      description: "three housemade meatballs with grilled bread",
      price: "220",
    },
    {
      id: "anti3",
      title: "Bruschetta",
      description:
        "grilled ciabatta bread topped with fresh tomatoes, garlic, basil and olive oil",
      price: "300",
    },
    {
      id: "anti4",
      title: "Mussels",
      description: "in a spicy tomato sauce",
      price: "280",
    },
  ],
  soup: [
    {
      id: "soup1",
      title: "Zuppa Campagnola",
      description: "Chicken broth with spinach, cheese and whisked egg",
      price: "120",
    },
    {
      id: "soup2",
      title: "Tor Tellini Di Pollo",
      description: "Chicken broth with home-made sausage and ham tortellini",
      price: "150",
    },
  ],
  salad: [
    {
      id: "salad1",
      title: "Raw Brussels Sprouts",
      description:
        "pecorino romano, parsley, grapes, olive oil, sherry vinegar, toasted almonds",
      price: "220",
    },
    {
      id: "salad2",
      title: "Honey Gem",
      description:
        "padron peppers, capers, olives, celery, cherry tomato, chives,tuna vinaigrette",
      price: "240",
    },
  ],
  pasta: [
    {
      id: "pasta1",
      title: "Maccheroni",
      description: "meat sauce, basil, parmesan",
      price: "280",
    },
    {
      id: "pasta2",
      title: "Lasagne",
      description: "italian sausage, meat sauce, parmesan, locatelli",
      price: "300",
    },
    {
      id: "pasta3",
      title: "Rigatoni",
      description: "vodka sauce, chili flake, basil, fresh ricotta",
      price: "290",
    },
    {
      id: "pasta4",
      title: "Ravioli",
      description: "kabocha squash, hazelnuts, brown butter",
      price: "280",
    },
  ],
  pizza: [
    {
      id: "pizza1",
      title: "Pizza Margherita",
      description: "Homemade Pizza Sauce, Mozzarella And Fresh Basil",
      price: "230",
    },
    {
      id: "pizza2",
      title: "Pizza Diavola",
      description:
        "Homemade Pizza Sauce, Mozzarella, Spicy Salame, Spicy Olive Oil And Hot Pepper Flakes",
      price: "240",
    },
  ],
  main: [
    {
      id: "main1",
      title: "T-Bone",
      description: "24oz, Caterina’s Oil",
      price: "560",
    },
    {
      id: "main2",
      title: "Veal Chop Milanese",
      description:
        "Cooks Garden - sorrel, mustard greens, dandelion, fennel, radish, lemon",
      price: "490",
    },
    {
      id: "main3",
      title: "Pork Chop",
      description:
        "fried fingerling potatoes, olives, roasted shallots, capers, garlic, balsamic vinegar, fresh herbs",
      price: "380",
    },
    {
      id: "main4",
      title: "Roasted Chicken",
      description:
        "creamed polenta, kale, calabrian chilies, shallots, maitake mushrooms",
      price: "320",
    },
  ],
  desert: [
    {
      id: "desert1",
      title: "Affogato",
      description: "vanilla gelato, espresso",
      price: "120",
    },
    {
      id: "desert2",
      title: "Sicilian Ice Cream Sandwich",
      description: "pistachio butter, brioche bun",
      price: "80",
    },
    {
      id: "desert3",
      title: "Chocolate Panna Cotta",
      description: "with espresso crumble",
      price: "120",
    },
    {
      id: "desert4",
      title: "Tiramisu",
      description: "rum, mascarpone, espresso cookie, cocoa",
      price: "120",
    },
  ],
  redWine: [
    {
      id: "red1",
      title: "Rossese, Cascina Feipu dei Massaretti, Liguria",
      description: "2019",
      price: "1200",
    },
    {
      id: "red2",
      title: "Cerasuolo di Vittoria, Manenti, Sicilia",
      description: "2018",
      price: "1200",
    },
    {
      id: "red3",
      title: "Rosso di Montalcino, Stella di Campalto, Toscana",
      description: "2015",
      price: "6000",
    },
    {
      id: "red4",
      title: "Langhe, Nada, Piemonte",
      description: "2018",
      price: "1100",
    },
  ],
  whiteWine: [
    {
      id: "white1",
      title: "Timorasso, ‘Caespes’, Ezio Poggio, Piemonte",
      description: "2016",
      price: "1200",
    },
    {
      id: "white2",
      title: "Sancerre, ‘Flores’, Vincent Pinard, Loire",
      description: "2018",
      price: "1200",
    },
    {
      id: "white3",
      title: "Trebbiano d’Abruzzo, Valentini, Abruzzo",
      description: "2014",
      price: "6000",
    },
    {
      id: "white4",
      title: "Chablis, Domaine des Hates, Bourgogne",
      description: "2018",
      price: "1100",
    },
  ],
  cocktail: [
    {
      id: "ct1",
      title: "The West Side",
      description: "vodka, orgeat, mint, cucumber, lime, angostura bitters",
      price: "150",
    },
    {
      id: "ct2",
      title: "Sierra Norte",
      description: "mezcal, aperol, pineapple, lemon",
      price: "150",
    },
    {
      id: "ct3",
      title: "Atomic Old Fashioned",
      description: "eagle rare single bourbon, bitters, sugar",
      price: "150",
    },
    {
      id: "ct4",
      title: "Paloma",
      description: "reposado tequila, grapefruit, lime, tonic, salt",
      price: "150",
    },
  ],
  beer: [
    {
      id: "beer1",
      title: "Three Weavers Kolsch",
      description: "draft cold",
      price: "150",
    },
    {
      id: "beer2",
      title: "Chronic Amber Ale",
      description: "draft cold",
      price: "150",
    },
  ],
  nonAlcohol: [
    { id: "na1", title: "Coke", description: "icy cold", price: "60" },
    {
      id: "na2",
      title: "Orange Juice",
      description: "fresh, cold",
      price: "60",
    },
    {
      id: "na3",
      title: "Sparkling Water",
      description: "bottled",
      price: "60",
    },
    { id: "na4", title: "Sprite", description: "icy cold", price: "60" },
  ],
};

export default menu;
