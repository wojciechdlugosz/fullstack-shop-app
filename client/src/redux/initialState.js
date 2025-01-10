const initialState = {
    data: [],
    requests: {},
    categories: [
      {
        name: 'fasada',
        text: 'fasada',
        img: 'fasada.jpg',
      },
      {
        name: 'podloga',
        text: 'podłoga',
        img: 'podloga.jpg',
      },
      {
        name: 'fundament',
        text: 'fundament',
        img: 'fundament.jpg',
      },
    ],
    cart: {
      products: [],
    },
    deliveryForms: [
      {
        id: 1,
        name: 'Paczkomat',
        price: 15,
      },
      {
        id: 2,
        name: 'Kurier',
        price: 20,
      },
    ],
  };
  
  export default initialState;