// import item from './item';

const items = [];
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (name) {
  this.items.push(name);
};

const findAndUpdate = function (id, newData) {
  let updateItem = this.items.find(item => item.id === id);
  Object.assign(updateItem, newData);
};

// const findAndDelete = function (id) {
//   const itemDelete = this.items.findIndex(id === item.id);
//   this.items.splice(itemDelete, 1);
// };

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter
};