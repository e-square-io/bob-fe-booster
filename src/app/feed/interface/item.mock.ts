import {IItem} from "./item.interface";

export const PRODUCTS: IItem[] = [
  {
    name: 'Xbox Series S',
    url: 'https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UL320_.jpg',
    price:{
      amount:530,
      currency:'USD'
    }
  },{
    name: 'Pokémon Legends: Arceus - Nintendo Switch',
    url: 'https://m.media-amazon.com/images/I/71HYKF4rO9L._AC_UL320_.jpg',
    price:{
      amount:230,
      currency:'ILS'
    }
  },{
    name: 'Playstations 5',
    url: 'https://simphone.co.il/wp-content/uploads/2020/12/PS5_RENDER_WITHNOTICE_01_500x.jpg',
    price:{
      amount:930,
      currency:'USD'
    }
  }
];
