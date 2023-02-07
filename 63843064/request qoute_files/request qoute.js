validateUsername ()
    if (usernameInput.value.length < 5) {
    throw "Username must be at least 4 charcters"
}
validatePassword () {
    if (pwInput.value.length < 8) {
        throw "Password must be at least 8 characters"
    }
}