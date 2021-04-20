"use strict";

const connect = (selector, event, callback, bind) => {
    const element = document.querySelector(selector);
    const handler = bind ? callback.bind(element) : callback;
    element?.addEventListener(event, handler);
}

const eventName = "set-content";


// here we need a function (not arrow function) in order to bind the element.
function setContentHandler(event) {
    // this corresponds to the element on the page
    this.textContent = event.detail;
}


// connect with binding
connect("#destination", eventName, setContentHandler, true);


connect("#source", "click", () => {
    // in detail is provided custom data
    const event = new CustomEvent(eventName, {detail: "custom event"});

    // select destination from the page
    const destination = document.querySelector("#destination");

    // call dispatch event for destination
    destination?.dispatchEvent(event);

});