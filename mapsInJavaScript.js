const map = new Map();

let arr = [1,1,1,1,2,2,2,2,3,4,3,4,3];

for(let i = 0; i < arr.length; i++){
    map.set(arr[i], (map.get(arr[i])||0)+1);
}
map.delete(2);
console.log(`Size of the map is ${map.size}`);
console.log(`Map.has(2) : ${map.has(2)}`);
console.log( ...map);
console.log(map);