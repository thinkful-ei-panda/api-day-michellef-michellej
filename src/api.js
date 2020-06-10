const baseUrl = 'https://thinkful-list-api.herokuapp.com/michelles';

function getItems() {
  return fetch(`${baseUrl}/items`);

  // return Promise.resolve('A successful response!');
}

function createItem(name) {
  let newItem = JSON.stringify({
    name: name
  });

  return fetch(`${baseUrl}/items`, {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': newItem
  });
}

function updateItem(id, { name }) {
  let updateData = JSON.stringify({
    name: name
  });

  return fetch(`${baseUrl}/items/${id}`, {
    'method': 'PATCH',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': updateData
  });
}

function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    'method': 'DELETE',
    'headers': {
      'Content-Type': 'application/json'
    }
  });
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};