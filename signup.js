const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const date = document.getElementById('date')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
/* Validation for sign up form*/
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    const dateValue = date.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    }
    else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (password1Value === '') {
        setError(password1, 'Password is required')
    } else if (password1Value.length< 8) {
        setError(password1, 'Password must be at least 8 characters!')
    } else {
        setSuccess(password1);
    }

    if (password2Value === '') {
        setError(password2, 'Plese re-enter your password!')
    } else if (password1Value !== password2Value) {
        setError(password2, "Passwords does not match!")
    } else {
        setSuccess(password2);
    }

    if(dateValue === '') {
        setError(date, 'Please input date');
    }
    else {
        setSuccess(date);
    }


};