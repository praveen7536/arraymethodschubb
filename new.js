//GTE

let gte = (v1, v2) => {
    if (v1 >= v2) {
        return true;
    } else {
        return false;
    }
}

console.log(gte(4, 7));

//tail

let arr = [
    { user: "abc", age: 20 },
    { user: "xyz", age: 10},
    { user: "wrt", age: 32 }
];
let tail = (arr) => {
    return arr2.slice(1, arr.length);
}

console.log(tail(myArr));

//Array
const items=[
    {
        name:'icecream', price:100
    },
    {
        name:'cake', price:140
    },
    {
        name:'chocolate', price:50
    },
    {
        name:'keyboard', price:390
    },
    {
        name:'datacard', price:299
    },
    {
        name:'milk', price:30
    },
    {
        name:'rice', price:60
    },
]

//filter

const filteredItems= items.filter((item)=>
{
    return item.price<=100
})
console.log(filteredItems);

//map
const mapitem= items.map((item)=>
{
    return item.name
})
console.log(mapitem);


//find
const finditem= items.find((item)=>
{
    return item.price == 140
})
console.log(finditem);

//

var numbers = [175, 50, 25];

return numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

