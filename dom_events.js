document.querySelector('.link').addEventListener('click', myClick);
document.querySelector('.link').addEventListener('dblclick', myClick);

function myClick (e) {
    let value;

    value = e.type;
    console.log(value);
    e.preventDefault();
}

