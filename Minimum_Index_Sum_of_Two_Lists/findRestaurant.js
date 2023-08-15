export function findRestaurant(list1, list2) {
    const map1 = getMap(list1);
    const map2 = getMap(list2);

    let map3, min;
    if(map1.size > map2.size) {
        [map3, min] = findCommon(map2, map1);
    } else {
        [map3, min] = findCommon(map1, map2);
    }

    const ans = [];
    for(const [key, val] of map3) {
        if(val === min) {
            ans.push(key);
        }
    }

    return ans;
};

function getMap(list) {
    const map = new Map();

    for(let i = 0; i < list.length; i++) {
        const str = list[i];
        if(!map.has(str)) {
            map.set(str, i);
        }
    }

    return map;
}

function findCommon(map1, map2) {
    const map3 = new Map();
    let min = Infinity;
    for(const [key, val1] of map1) {
        if(map2.has(key)) {
            const val2 = map2.get(key);
            map3.set(key, val1 + val2);
            min = Math.min(val1 + val2, min);
        }
    }
    return [map3, min];
}