
const options = {
    threshold: [0.1, 0.3, 0.5]
};

const content = document.querySelector(".content");
const parent = content.parentElement;

const target = document.querySelector(".target");

const callback = ([entry]) => {

    const ratio = entry.intersectionRatio;
    console.log(ratio);
    if(ratio > 0.5) {
        parent.classList.remove("bg-purple-700");
        parent.classList.add("opacity-60");
        content.classList.add("opacity-0");
    } else if(ratio > 0.3){
        parent.classList.replace("opacity-60", "opacity-75");
        parent.classList.add("bg-purple-700");
    } else {
        content.classList.remove("opacity-0");
        parent.classList.replace("opacity-75","opacity-100");
    }
};

const observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector(".target"));