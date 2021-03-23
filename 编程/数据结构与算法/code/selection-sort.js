// 快速排序
function selectionSort(arr) {
    let left, right
    let length = arr.length - 1
    for (let len = length; len > 0; len--) {
        for (let j = 0; j < len; j++) {
            left = arr[j]
            right = arr[j + 1]
            if(left < right) {
                arr[j] = right
                arr[j + 1] = left
            }
        }
    }
    return arr
}

let arr = [2,1,5,4,3,9,7]

selectionSort(arr)

console.log(arr)