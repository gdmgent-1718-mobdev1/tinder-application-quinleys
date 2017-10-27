/*
    - User ID
    - Email
    - Password
    - Firstname
    - Sex
    - Description

*/

function profile() {
    let _userId;
    let _email;
    let _password;
    let _firstName;
    let _sex;
    let _description;

    function toString() {

    }

    return {
        get userId() {
            return _userId;
        },
        set userId(value) {
            _userId = value;
        },
        
        get email() {
            return _email;
        },
        set email(value) {
            _email = value;
        },
        
        get password() {
            return _password;
        },
        set password(value) {
            _password = value;
        },
        
        get firstName() {
            return _firstName;
        },
        set firstName(value) {
            _firstName = value;
        },
        
        get sex() {
            return sex;
        },
        set sex(value) {
            _sex = value;
        },
        
        get description() {
            return _description;
        },
        set description(value) {
            _description = value;
        }
    }
};
