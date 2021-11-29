var obj1 = { name: "Person 1", age:5};
var obj2 = { age:10, name:"Person 10"};

let obj1_len = Object.keys(obj1).length;
let obj2_len = Object.keys(obj2).length;

if(obj1_len == obj2_len){

    key_checker(Object.keys(obj1), Object.keys(obj2))

}
else{
    console.log("different keys")
}


function key_checker(obj1_keys,obj2_keys){

    let common_keys = obj1_keys.filter(value => obj2_keys.includes(value));

    if (common_keys.length == obj2_keys.length){
        console.log("same keys")
    }
    else {
        console.log("different keys")
    }

    
}

//output: same keys