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

