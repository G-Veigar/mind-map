function quickSort(arr) {
    if (arr.length === 0 || arr.length ===1) {
        return [...arr]
    } else if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            let temp = arr[0]
            arr[0] = arr[1]
            arr[1] = temp
        }
        return [...arr]
    } else {
        let leftArr = []
        let rightArr = []
        let baseVal = arr[0]
        for (let i = 1; i < arr.length; i++) {
            if(arr[i] < baseVal)  {
                leftArr.push(arr[i])
            } else {
                rightArr.push(arr[i]) 
            }
        }
        return [
            ...quickSort(leftArr),
            baseVal,
            ...quickSort(rightArr)
        ]
    }
}

let arr = [2,5,1,3,7,9,6,8]

let sortArr = quickSort(arr)

console.log(sortArr)

