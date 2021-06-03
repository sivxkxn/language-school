
const { fillAllGroups, createGroupElement } = require('./group');

const list_element=document.getElementById('container');
let current_page = 1;
let rows = 5;

function displayList(items, wrapper, rowPerPage, page) {
    wrapper.innerHTML = "";
    page--;
    let start = rowPerPage * page;
    let end = start + rowPerPage;
    let paginatedItems = items.slice(start, end);
    for (let i = 0; i < paginatedItems.length; i++) {
        let item = items[i];

        let item_element = createGroupElement(item);
        wrapper.innerHTML += item_element;
    }
}
function setupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = paginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function paginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		displayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}
module.exports = { displayList, setupPagination };