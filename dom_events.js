/*
document.querySelector('.link').addEventListener('click', myClick);
document.querySelector('.link').addEventListener('dblclick', myClick);

document.querySelector('.link').addEventListener('mousedown', myClick);
document.querySelector('.link').addEventListener('mouseup', myClick);

document.querySelector('.container').addEventListener('mouseenter', myClick);
document.querySelector('.container').addEventListener('mouseleave', myClick);

document.querySelector('.container').addEventListener('mouseover', myClick);
document.querySelector('.container').addEventListener('mouseout', myClick);





function myClick (e) {
    let value;

    value = e.type;
    console.log(value);
    e.preventDefault();
}

document.querySelector('.container').addEventListener('mousemove', backgraoundChange);

function backgraoundChange(e) {
    document.querySelector('.article').textContent = `X : ${e.clientX} Y : ${e.clientY}`;
    document.querySelector('.article').textContent = `R: ${e.clientX % 255} G: ${e.clientY % 255} B: ${(e.clientX + e.clientY) % 255}`;
    document.querySelector('.container').style.backgroundColor = `rgb(${e.clientX % 255}, ${e.clientY % 255}, ${(e.clientX + e.clientY) % 255})`;
}
*/
// form and keyboard event 

const myForm = document.querySelector('#form');
const yourName = document.querySelector('#name');
const cities = document.querySelector('#city');

//yourName.addEventListener('keydown', catchEvent);
//yourName.addEventListener('keyup', catchEvent);
//yourName.addEventListener('keypress', catchEvent);

// yourName.addEventListener('focus', catchEvent);
// yourName.addEventListener('blur', catchEvent);

// yourName.addEventListener('cut', catchEvent);
// yourName.addEventListener('paste', catchEvent);

yourName.addEventListener('input', catchEvent);
cities.addEventListener('change', catchEvent);

//myForm.addEventListener('submit', catchEvent);

function catchEvent (e) {
    // console.log(yourName.value);
    // document.querySelector('.link').textContent = yourName.value;
    //console.log(yourName.value);
    console.log(e.target.value);


    console.log('Event name: ' + e.type);
    e.preventDefault();
}

// event bubbling and delegation

// document.querySelector('.parent').addEventListener('click', e => {
//     console.log('parent');
// });

// document.querySelector('.child').addEventListener('click', e => {
//     console.log('child');
// });

// document.querySelector('.item').addEventListener('click', e => {
//     console.log('itemmmm');
// });

document.querySelector('.parent').addEventListener('click', e => {
if (e.target.classList.contains ('item')) {
    console.log('Hello, Click Meeee!')
}

    // if (e.target.className == 'item child-item') {
    //     console.log('Hello, Clickme');
    // }
});

document.getElementById("btn").addEventListener("click", sumNumber);

function sumNumber(){
    const number_1 = document.getElementById('inp_1').value;
    const number_2 = document.getElementById('inp_2').value;

    if(isNaN(number_1) || isNaN(number_2))
    return alert("Not a number")
    const result = parseInt(number_1) + parseInt(number_2)

    document.getElementById("res").innerHTML = result;
}









