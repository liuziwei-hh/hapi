const barcodes = ['0001', '0003', '0005', '0003'];
const items = [
    { "id": "0001", "name": "Coca Cola", "price": 3 },
    { "id": "0002", "name": "Diet Coke", "price": 4 },
    { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
    { "id": "0004", "name": "Mountain Dew", "price": 6 },
    { "id": "0005", "name": "Dr Pepper", "price": 7 },
    { "id": "0006", "name": "Sprite", "price": 8 },
    { "id": "0007", "name": "Diet Pepsi", "price": 9 },
    { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
    { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
    { "id": "0010", "name": "Fanta", "price": 12 }
];
function isValid() {
}
function countItems(items) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        let exits = isExits(item[i], result);
        if (!exits) {
             result.push({ id: item[i], count: 1 })
        }
         result[i].count++;
    }
    return result;

}

function isExits(id, result) {
    for (let i = 0; i < item.length; i++) {
        if (result[i] == id) {
            return true;
        }
        return false;
    }
}
let item = ["0001", '0002', "0003"];
console.log(countItems(item));
// function countItems(items){
//     const result = [];
//  const m = new Map();
//   for (var i=0;i<items.length;i++){
//     if (m.get(items[i])==null){
//       m.set(items[i],1);
//     }else{
//       m.set(items[i],m.get(items[i])+1);
//     }
//   }
//   //console.log(map);
//   m.forEach(function(key,value){
//     result.push({key:value,count:key})
//   });
//   console.log(result);
//   return result;

// }
function getItems(result) {
    if (result[i].id == findIndex()) {
        console.log(result[i].id, result[i].name, result[i].price)
    }
}
function calculate(items) {
    for (let i = 0; i < items.length; i++) {
        var total = result[i].count * result[i].price;
        return result[i].total;
    }
}
function print(items) {
    for (let i = 0; i < items.length; i++) {
        console.log(items);
    }
}