document.getElementById("submit_btn").addEventListener('click', submitUser);


function submitUser(){
    const userName = document.getElementById('name_inp').value;
    const userSurname = document.getElementById('surname_inp').value;
    const userAge = document.getElementById('age_inp').value;

    console.log(userName);
    console.log(userSurname);
    console.log(userAge);
}