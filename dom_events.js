/*
document.querySelector('.link').addEventListener('click', myClick);
document.querySelector('.link').addEventListener('dblclick', myClick);

document.querySelector('.link').addEventListener('mousedown', myClick);
document.querySelector('.link').addEventListener('mouseup', myClick);

document.querySelector('.container').addEventListener('mouseenter', myClick);
document.querySelector('.container').addEventListener('mouseleave', myClick);

document.querySelector('.container').addEventListener('mouseover', myClick);
document.querySelector('.container').addEventListener('mouseout', myClick);



*/

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





