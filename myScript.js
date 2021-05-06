document.getElementById("submit_btn").addEventListener('click', submitUser);


function submitUser(){
    const user = {
        name : document.getElementById('name_inp').value,
        surname : document.getElementById('surname_inp').value,
        age : document.getElementById('age_inp').value,
    }

    console.log(user);
}