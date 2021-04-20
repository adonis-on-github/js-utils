"use strict";

const ob1 = {
    prop: "val",

    method() {
        console.log("method");
    },

    deep: {
        name: "deep",
        hello() {
            console.log("hello from deep");
        }
    }
};

const ob2 = {};

const properties = ob => {
    console.log(ob.deep?.name);
};

const methods = ob => {
    ob.method?.();
    ob.deep?.hello();
};


properties(ob1);
properties(ob2);

methods(ob1);
methods(ob2);
