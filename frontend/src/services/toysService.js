import axios from 'axios';

const baseUrl =
  process.env.NODE_ENV !== 'development' ? '/api/toys' : '/api/toys';
var gToys = [];

export default {
  query,
  save,
  remove,
  getById,
  getByType,
  getToysYears,
};

function query() {
  return axios
    .get(baseUrl)
    .then((res) => res.data)
    .then((toys) => {
      gToys = toys;
      return toys;
    });
}

function save(toy) {
  var prm;
  if (toy._id) prm = axios.put(`${baseUrl}/${toy._id}`, toy);
  else prm = axios.post(baseUrl, toy);
  return prm
    .then((res) => res.data)
    .then((savedToy) => {
      const idx = _getIdxById(savedToy._id);
      gToys[idx] = savedToy;
      return savedToy;
    });
}

function remove(id) {
  return axios.delete(`${baseUrl}/${id}`).then(() => {
    const idx = _getIdxById(id);
    gToys.splice(idx, 1);
  });
}

function getById(id) {
  return axios.get(`${baseUrl}/${id}`).then((res) => res.data);
}

function getByType(type) {
  return axios
    .get(baseUrl)
    .then((res) => res.data.filter((toy) => toy.type === `${type}`));
}

function getToysYears() {
  return axios.get(baseUrl).then((res) =>
    res.data.map((toy) => {
      let year = new Date(toy.createdAt);
      return year.getFullYear();
    })
  );
}

function _getIdxById(toyId) {
  return gToys.findIndex((toy) => toy._id == toyId);
}
