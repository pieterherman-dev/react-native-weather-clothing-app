export const clothingSuggestions = [
  {
    condition: (temp: number) => temp < 5,
    suggestion: {
      top: 'Winter Coat',
      bottom: 'Thermal Trousers',
      accessories: ['Thermal Gloves', 'Beanie'],
    },
  },
  {
    condition: (temp: number) => temp >= 5 && temp < 15,
    suggestion: {
      top: 'Jacket',
      bottom: 'Jeans',
      accessories: ['Scarf', 'Gloves'],
    },
  },
  {
    condition: (temp: number) => temp >= 15 && temp < 20,
    suggestion: {
      top: 'Sweater',
      bottom: 'Jeans',
      accessories: ['Scarf'],
    },
  },
  {
    condition: (temp: number) => temp >= 20 && temp < 25,
    suggestion: {
      top: 'T-Shirt',
      bottom: 'Shorts',
      accessories: ['Sunglasses'],
    },
  },
  {
    condition: (temp: number) => temp >= 25,
    suggestion: {
      top: 'Tank Top',
      bottom: 'Shorts',
      accessories: ['Sunglasses', 'Sunscreen'],
    },
  },
];
