function mySort(arr, field, order) {
    let sortedArr = [];
        sortedArr = arr.sort((a, b) => a[field] > b[field] ? 1 : -1);
        if (order === 'asc') return sortedArr;
        else if (order === 'desc') return sortedArr.reverse();
    }

function mySearch(arr, field, value) {
    return arr.find(x => x[field] === value);
}
function myFilter(arr, field, value) {
    return arr.filter(x => x[field] === value)
}
module.exports={mySort,mySearch, myFilter}