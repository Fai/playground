
function validateLength (password) {
    if (password.length < 6) {
        console.error('error! need more than 6 characters');
        return false;
    }
    return true;
}

function validateSameNumber (password) {
    let rep = 0;
    let set = 0;
    for (let i = 1; i < password.length; i++) {
        if (password[i] == password[i-1]) {
            rep += 1;
            if (rep == 1) {
                set += 1;
            }
            if (rep == 2) {
                console.error('error! three same numbers');
                return false;
            }
            if (set == 3) {
                console.error('error! three set of two same numbers')
                return false;
            }
        } else {
            rep = 0;
        }
    }
    return true;
}

function validateSequence (password) {
    let inc = 0;
    let dec = 0;
    for (let i = 1; i < N; i++) {
        if (password[i] == parseInt(password[i-1]) + 1) {
            inc += 1;
            if (inc == 2) {
                console.error('error! increasing pattern');
                return false;
            }
        } else {
            inc = 0;
        }
        if (password[i] == parseInt(password[i-1]) - 1) {
            dec += 1;
            if (dec == 2) {
                console.error('error! decreasing pattern');
                return false;
            }
        } else {
            dec = 0;
        }
    }
    return true;
}

/**
 * validate password if
 * 1. more than 6 characters
 * 2. no more than three same number together ex: 1222345
 * 3. no more than three set of two same number together ex: 122334455
 * 4. no more than three increasing/decreasing sequence ex: 123456 456333
 * @param {String} password
 * @param {boolean} return
 */
function validatePassword (password) {
    return validateLength(password) && validateSameNumber(password) && validateSequence(password)
}