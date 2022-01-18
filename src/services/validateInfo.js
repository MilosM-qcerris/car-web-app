export default function validateInfo(values) {
    let errors = {};
  
    if (!values.firstName.trim()) {
        errors.firstName = 'First Name is mandatory.';
    }
    if (!values.lastName.trim()) {
        errors.lastName = 'Last Name is mandatory.';
    }
    if (!values.username.trim()) {
      errors.username = 'Username is mandatory.';
    }
    else if (values.username.length < 2) {
      errors.username = 'Username needs to be at least 2 characters!';
    }
    if (!values.email) {
      errors.email = 'Email is mandatory.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is mandatory.';
    }else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/.test(values.password)) {
        errors.password = 'Please enter valid password with at least 8 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character!';
      }
  
    if (!values.password2) {
      errors.password2 = 'Password is mandatory.';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match!';
    }
    return errors;
  }