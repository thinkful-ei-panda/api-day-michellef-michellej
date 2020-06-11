const items = [];
let hideCheckeditems = false;
let error = "";

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (name) {
  this.items.push(name);
};

const findAndUpdate = function (id, newData) {
  const updatedItem = this.items.find(item => item.id === id);
  Object.assign(updatedItem, newData);
};

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