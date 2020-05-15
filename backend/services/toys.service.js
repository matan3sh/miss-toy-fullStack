const fs = require('fs');
const toys = require('../data/toys.json');

function query() {
  return Promise.resolve(toys);
}

function getById(id) {
  const toy = toys.find((toy) => toy._id == id);
  return Promise.resolve(toy);
}

function remove(id) {
  const idx = toys.findIndex((toy) => toy._id == id);
  toys.splice(idx, 1);
  return _saveToFile().then(() => toys);
}

function save(toy) {
  if (toy._id) {
    const idx = toys.findIndex((currToy) => toy._id == currToy._id);
    toys[idx] = toy;
  } else {
    toy._id = _makeId();
    toy.createdAt = Date.now();
    toys.unshift(toy);
  }
  return _saveToFile().then(() => toy);
}

module.exports = {
  query,
  getById,
  remove,
  save,
};

function _saveToFile() {
  return new Promise((resolve, reject) => {
    const str = JSON.stringify(toys, null, 2);
    fs.writeFile('data/toys.json', str, function (err) {
      if (err) {
        console.log('Server Error:', err);
        return reject(new Error('Cannot update toys file'));
      }
      resolve();
    });
  });
}

function _makeId(length = 4) {
  var txt = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
