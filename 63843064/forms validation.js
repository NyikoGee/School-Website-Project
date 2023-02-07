function validateForm() {

    let errors = 0;

    //We are using validateInput to validate our fields
    if (!validateInput('fname', 2)) {
        errors++;
        $('#fname-error').text("First name is required");
    }
    if (!validateInput('lname', 2)) {
        errors++;
        $('#lname-error').text("Last name is required");
    }
    if (!validateInput('street', 2)) {
        errors++;
        $('#street-error').text("Street Address is required");
    }
    if (!validateInput('suburb', 2)) {
        errors++;
        $('#suburb-error').text("Suburb field is required");
    }
    if (!validateInput('town', 2)) {
        errors++;
        $('#town-error').text("Town field is required");
    }
    if (!validateInput('pcode', 2)) {
        errors++;
        $('#pcode-error').text("Postal code is required");
    }
    if (!validateInput('email', 2)) {
        errors++;
        $('#email-error').text("Email address is required");
    }
    if (!validateInput('pnumber', 2)) {
        errors++;
        $('#pnumber-error').text("Phone number is required");
    }
    //validate password
    if (!validatePassword()) {
        errors++;
        $('#password-error').text('Password must contain at least one upper letter, one small letter');
    }
    console.log(errors);

    if (errors > 0) {
        //error
    
        return false;
    } else {
        return true;
    }
    //validate userame
    if (!validateUsername()) {
        errors++;
        $('#username-error').text('Username must have a minimum of 5 character ');
    }
    console.log(errors);

    if (errors > 0) {
        //error
    
        return false;
    } else {
        return true;
    }

}

/**
 * This function will validate any given input field except the checkbox or radio button
 * @param id
 * @param size
 * @returns {boolean}
 */
function validateInput(id, size) {

    let field = document.getElementById(id).value;

    if (field.length < size) {
        return  false;
    }

    return  true;
}

/**
 * I use the following script for min 8 letter password, with at least a symbol, upper and lower case letters and a number
 * @returns {boolean}
 */
function validatePassword () {
    let pwInput = document.getElementById("password");
    let re = /^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(pwInput);
}

//Setting cookies
function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
// Apply setCookie
//setCookie('username', username, 30);

//How to get cookies
function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

// code below creates cookies for all the form fields except the password
function getCookie(first_name) {
    const name = ["first_name"] + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf("first_name") === 0) res = val.substring(name.length);
    })
    return res;
}
function getCookie(last_name) {
    const name = ["last_name"] + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf("last_name") === 0) res = val.substring(name.length);
    })
    return res;
}
function getCookie(street_address) {
    const name = ["street_address"] + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf("street_address") === 0) res = val.substring(name.length);
    })
    return res;
}
function getCookie(email_address) {
    const name = ["email_address"] + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf("email_address") === 0) res = val.substring(name.length);
    })
    return res;
}
function getCookie(phone_number) {
    const name = ["phone_number"] + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf("phone_number") === 0) res = val.substring(name.length);
    })
    return res;
}
function getCookie(suburb) {
    const name = ["suburb"] + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf("suburb") === 0) res = val.substring(name.length);
    })
    return res;
}
function getCookie(town) {
    const name = ["town"] + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf("town") === 0) res = val.substring(name.length);
    })
    return res;
}
function getCookie(postal_address) {
    const name = ["postal_address"] + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf("postal_address") === 0) res = val.substring(name.length);
    })
    return res;
}