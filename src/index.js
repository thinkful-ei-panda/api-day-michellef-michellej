import $ from 'jquery';

import 'normalize.css';
import './index.css';
import api from './api';
import store from './store';

import shoppingList from './shopping-list';


const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      const item = items[0];
      return api.updateItem(item.id, { name: 'sushi' });
    })
    .then(res => res.json())
    .then(() => console.log('updated!'));

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });

  api.createItem('pears')
    .then(res => res.json())
    .then((newItem) => {
      return api.getItems();
    })
    .then(res => res.json())
    .then((items) => {
      console.log(items);
    });

  api.getItems()
    .then(res => res.json())
    .then(res => console.log(res));

  // console.log(api.baseUrl);

  // fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  //   .then(res => res.json())
  //   .then(data => console.log(data));

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
