import store from "./store";

const baseUrl = 'https://thinkful-list-api.herokuapp.com/michelles';

function listApiFetch (...args) {
  let error = false;
  return fetch(...args)
    .then(response => {
      if (!response.ok) {
        error = {code: response.status};
      }
      return response.json();
    })
    .then(data => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data
    })
}


function getItems() {
  return listApiFetch(`${baseUrl}/items`);
}

function createItem(name) {
  const newItem = JSON.stringify({
    name: name
  });

  return listApiFetch(`${baseUrl}/items`, {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': newItem
  });
}

function updateItem(id, updateData) {
  const updatedData = JSON.stringify(updateData);

  return listApiFetch(`${baseUrl}/items/${id}`, {
    'method': 'PATCH',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': updatedData
  });
}

function deleteItem(id) {
  return listApiFetch(`${baseUrl}/items/${id}`, {
    'method': 'DELETE',
    'headers': {
      'Content-Type': 'application/json'
    }
  })
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  listApiFetch
};