// 二分查找
function binarySearch(arry, val) {  
	let start = 0
	let end = arry.length - 1
	while (start <= end) {
		let mid = start + Math.floor((end - start) / 2)
		if (arry[mid] < val) {
			start = mid + 1
		} else if (arry[mid] > val) {
			end = mid - 1
		} else {
			return mid
		} 
	} 
	return -1
} 

let arr = Array.from({length:100}, (v,k) => k)

let res = binarySearch(arr, 0)

console.log('0在',  res)