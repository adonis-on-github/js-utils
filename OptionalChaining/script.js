"use strict";

const ob1 = {
    prop: "val",

    method() {
        console.log("hello from method");
    },

    deep: {
        name: "deep",
        hello() {
            console.log("hello from deep");
        }
    }
};

const obFactory = param =>  param;

// how to access properties
const properties = ob => {
    console.log(ob?.prop);
    console.log(ob.deep?.name);
};


// how to call methods
const methods = ob => {
    ob.method?.();
    ob.deep?.hello();
};


let result = obFactory(ob1);
result?.method?.(); // result and method exists => method is called

result = obFactory();
result?.method?.(); // result doesn't exists

result = obFactory({});
result?.method?.(); // result exists method doesn't exist

// demo calls
properties(ob1); // properties exists
properties({}); // properties doesn't exists

methods(ob1); // method exists
methods({}); // method doesn't exists
