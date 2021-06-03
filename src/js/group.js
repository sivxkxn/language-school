
function createGroupElement(obj) {
    return `<div class="lesson-box"><ul class="group-item" data-id="${obj.id}">
    <li class="group-type">Тип занятий: ${obj.type}</li>
    <li class="location">Место: ${obj.location}</li>
    <li class="level">Уровень: ${obj.level}</li>
    <li class="teacher">Преподаватель:  ${obj.teacher}</li>
    <li class="beggining">Начало: ${obj.beggining}</li>
    <li class="count">Кол-во мест: ${obj.count}</li>
    </ul>
    <button class="submit-course">Хочу на курс</button>
    </div>`
}
function fillAllGroups(wrap, arr) {
    wrap.innerHTML ="";
    for (let element of arr) {
        wrap.innerHTML += createGroupElement(element);
    }
}
module.exports = { fillAllGroups , createGroupElement}
