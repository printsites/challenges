/**
  In this project, we need to create a series of car objects defined in code.
  We don't want to create 1 car, we want to create a system for creating cars given
  a set of customer specificatoins. Create a small program that outputs a final
  car object for each order with methods that correspond to the customer demands, and that give us the
  full name of the customer, the customer's address, and the final purchase price

  We should be able to access the total price like:

  car.finalPrice() #returns 24,000

  and access the horn like

  car.horn() #returns "Normal Honk"

  car.ownerName() #returns "Firstname Lastname";

*/

var orders = [
  {
    firstName: 'Bill',
    lastName: 'Smith',
    type: 'sedan',
    doors: 4,
    basePrice: 20000,
    paint: 'blue',
    options: [
       {
         type: 'honk',
         style: 'enhanced',
         price: 4000
       },
       {
         type: 'interior',
         style: 'leather',
         price: 5000
       },
       {
         type: 'engine',
         style: 'regular',
         price: 0
       }
    ]
  },
  {
    firstName: 'Susan',
    lastName: 'Anderson',
    type: 'truck',
    doors: 2,
    basePrice: 25000,
    paint: 'green',
    options: [
       {
         type: 'honk',
         style: 'fancy',
         price: 8000
       },
       {
         type: 'interior',
         style: 'endangeredZebraLeather',
         price: 8000
       },
       {
         type: 'engine',
         style: 'turbocharge',
         price: 10000
       }
    ]
  },
  {
    firstName: 'Rachel',
    lastName: 'Hoekstra',
    type: 'convertable',
    doors: 2,
    basePrice: 15000,
    paint: 'red',
    options: [
      {
        type: 'topColor',
        style: 'white',
        price: 1000
      },
       {
         type: 'honk',
         style: 'regular',
         price: 0
       },
       {
         type: 'interior',
         style: 'cloth',
         price: 0
       },
       {
         type: 'engine',
         style: 'electric',
         price: 2000
       }
    ]
  },
  {
    firstName: 'Elon',
    lastName: 'Musk',
    type: 'sedan',
    doors: 4,
    basePrice: 20000,
    paint: 'spaceGray',
    options: [
       {
         type: 'flight',
         style: 'supersonic',
         price: 500000
       },
       {
         type: 'interior',
         style: 'cloth',
         price: 0
       },
       {
         type: 'engine',
         style: 'jet',
         price: 20000
       }
    ]
  }
];
