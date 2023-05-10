container = document.querySelector("#container")
function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
function createGrid(x){
    for(i=0; i < x; i++){
        const div = document.createElement('div');
        div.classList.add('height');
        container.appendChild(div);
    }
    divs = document.querySelectorAll((".height"));
    divs.forEach(element => {
        for(i=0; i < x; i++){
            const div = document.createElement('div');
            div.classList.add('width');
            div.textContent = ("")
            element.appendChild(div);
        }
    });
    widths = document.querySelectorAll(".width");   
    widths.forEach(element => {
        element.style.padding = `${864/(2*x)}px`
    })
}
button = document.querySelector("button");
button.addEventListener("click", () => {
    number = prompt("WRITE THE NUMBER OF SQUARES");
    while (number > 100)
        {if (number > 100){
            number = prompt("Write a number under 100")
        }
    }
    empty(container);
    createGrid(number);
    widths = document.querySelectorAll(".width");
    widths.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = `${random_rgba()}`;
            element.style.filter = `brightness(${-0.1})`; 
        })
    
});
});

