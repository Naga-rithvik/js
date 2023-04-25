// get user input

const form= document.getElementById("my-form");

form.addEventListener('submit',Store);

function Store(e){
    // get user input
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;

//localStorage.setItem('name',name);
//localStorage.setItem('email',email);
const obj={
    names:name,
    emails:email,
};
const userJSON = JSON.stringify(obj);

localStorage.setItem('obj',userJSON);
//console.log(localStorage);


}
