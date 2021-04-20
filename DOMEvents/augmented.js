"use strict";

const connect = (selector, event, callback) => {
    const element = document.querySelector(selector);
    element?.addEventListener(event, callback);
}

const displayData = data => {
    const list = document.querySelector("#data");

    list.textContent = "";

    data.forEach(text => {
        const item = document.createElement("li");
        item.textContent = text;
        list.appendChild(item);
    });
};

connect("#container", "click", event => {
    if (!event?.lines) {
        return;
    }

    // display data
    displayData(event.lines);
});

connect("#parent", "click", event => {
    console.log(event.lines);

    // append to content if the event started from child
    event.lines?.push("parent");
});

connect("#btn", "click", event => {

    // add data to event
    event.lines = ["button"];
});


