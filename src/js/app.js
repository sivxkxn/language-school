require('../css/app.css');
require('../scss/style.scss');


const groups = require('./lessons.js');
const { displayList, setupPagination } = require('./pagination')

const list = document.getElementById('container');
const paginationEl = document.getElementById('group-pagination');
let current_page = 3;
let row = 4;

displayList(groups, list, row, current_page);
setupPagination(groups, paginationEl, row);
