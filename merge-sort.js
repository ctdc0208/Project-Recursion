
// left, middle, right
function merge(array, l, m, r) {
    const left = m - l + 1;
    const right = r - m;

    const L = new Array(left);
    const R = new Array(right);

    for (var i = 0; i < left; i++)
        L[i] = array[l + i];
    for (var j = 0; j < right; j++)
        R[j] = array[m + 1 + j];

    var i = 0;
    var j = 0;
    var k = l;

    while (i < left && j < right) {
        if (L[i] <= R[j]) {
            array[k] = L[i];
            i++;
        }
        else {
            array[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < left) {
        array[k] = L[i];
        i++;
        k++;
    }
    while (j < right) {
        array[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(array, l, r) {
    if (l >= r) {
        return;
    }

    const m = l + parseInt((r - l) / 2);
    mergeSort(array, l, m);
    mergeSort(array, m + 1, r);
    merge(array, l, m, r);
}

function printArray(A, size) {
    for (var i = 0; i < size; i++)
        console.log(A[i] + " ");
}

const numArray = [
    1, 5, 4, 6, 7, 2
]
const numArray_size = numArray.length;

mergeSort(numArray, 0, numArray_size - 1)
console.log(numArray);