
const { createGroupElement } = require('./group');
const listElement = document.getElementById('list');
const paginationElement = document.getElementById('pagination');
let currentPage = 1;
let rows = 3;
const groups = require('./lessons.js');


function displayList(items, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = "";
    page--;
    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedItems = items.slice(start, end);
    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];
        let item_element = createGroupElement(item);
        wrapper.innerHTML += item_element;
    }
}
function setupPagination(items, wrapper, rowsPerPage) {
    wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / rowsPerPage);
    for (let i = 1; i < page_count + 1; i++) {
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

function paginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;

    if (currentPage == page) button.classList.add('active');

    button.addEventListener('click', function () {
        currentPage = page;
        displayList(items, listElement, rows, currentPage);

        let currentBtn = document.querySelector('.pagenumbers button.active');
        currentBtn.classList.remove('active');
        button.classList.add('active');
    });

    return button;
}


displayList(groups, listElement, rows,  currentPage);
setupPagination(groups, paginationElement, rows);
module.exports = { displayList, setupPagination };