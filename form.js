const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*100);
})

window.onload = () => {
    if(sessionStorage.name){
        location.href = '/';
    }
}

//form submition
const name = document.querySelector('.name') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');



if(name == null){ //means login page is open
    submitBtn.addEventListener('click', () => {
        fetch('/login-user',{
            method: 'post',
            headers: new Headers({'Content-Type':'applications/json'}),
            body: JSON.stringfy({
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
           validateData(data);
        })
    })
    
} else {
    //means register page is open
submitBtn.addEventListener('click', () => {
    fetch('/resister-user', {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringfy({
            name: name.value,
            email: email.value,
            password: password.value,

        })
    })
    .then(res => res.json())
    .then(data => {
        validateData(data);

    })
})
}
const validateData = (data) => {
    if(!data.name){
        alertBox(data);
    }else{
        sassionStorage.name = data.name;
        sessionStorage.email = data.email;
        location.href = '/';
    }
}

const alertBox = (data) => {
    const alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert');
    alert.Msg.innerHTML = data;

    alertContainer.style.top = '5%';
    setTimeout(() => {
        alertContainer.style.top = null;

    },5500);
}