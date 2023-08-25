
let para = document.getElementById('para');
let selector = document.getElementById('selector');
let button = document.getElementById("button");

button.addEventListener('click', () => {
    console.log(para)
    // para.style.display = "block"



    if (para.style.display = "inline-block") {
        para.style.display = "none";
        selector.classList.remove('fa-angle-up')
        selector.classList.add('fa-angle-down');
    }
    else if (para.style.display = "none") {
        para.style.display = "inline-block";
        selector.classList.remove('fa-angle-down')
        selector.classList.add('fa-angle-up');
    }
})