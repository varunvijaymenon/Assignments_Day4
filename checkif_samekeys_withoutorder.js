var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:10, name:"Person 10"};

let obj1keys = Object.keys(obj1);
let obj2keys = Object.keys(obj2);

if(obj1keys.length == obj2keys.length){

    for(value of obj1keys){

        if(obj2keys.indexOf(value)!=-1){

            index = obj2keys.indexOf(value);
            obj2keys.splice(index, 1);
        }
    }
}

if(obj2keys.length<=0){
    console.log("same keys")
}