const months = ['Jan', 'March', 'April', 'June'];

function remove(index, array, numberOfItems) {
    array.splice(index, numberOfItems);
    return array
}

console.log(remove(1, months, 1))
