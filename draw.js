let pixels = [];
const board = document.querySelector(".board");
const button = document.querySelector(".reset");
const dimension_button = document.querySelector(".dimenison");
let x = 16;
let active_pixels = []

function create_grid(v) {
    board.innerHTML = '';
    for(let i = 0;i<v*v;i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.flexBasis = `${100/v}%`;
        pixels.push(pixel);
        board.appendChild(pixel);
    }
}

create_grid(x);

document.addEventListener("click", (e) => {
    const classes = e.target.classList;
    if(classes.contains("reset")) active_pixels.forEach(p => p.classList.remove("active")), active_pixels.length =0;
    else if(classes.contains("dimension")) x = Math.min(Math.max(prompt("Change Dimensions", "Enter width here."),0),100), create_grid(x);
})

document.addEventListener("mouseover", (e) => {
    const classes = e.target.classList;
    if(classes.contains("pixel")) e.target.classList.add("active"), active_pixels.push(e.target);
});

