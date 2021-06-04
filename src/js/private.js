// const { mySearch } = require('./funcs');
// const { values } = require('./teachers');
const teachers = require('./teachers');
let wrap = document.getElementById('private-wrap');
function createTeacher(obj) {
    return `<li class="teacher-private">${obj.name} - ${obj.days}</li>`
}
function fillPrivate(el) {
    wrap.innerHTML = "";
    wrap.innerHTML += el;
}
const input = document.querySelector('input[type="search"]');

input.addEventListener('search', () => {

    let teacher = teachers.find(x => x.name.includes(input.value));
    teacher ? fillPrivate(createTeacher(teacher)) : wrap.innerHTML = "Does not found";

})

console.log(wrap);