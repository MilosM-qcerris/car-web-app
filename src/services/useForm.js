import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCrudOperations from './ServiceCrudOperations';

const useForm = (callback, validate) => {
  
  let navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  };
  
  const saveUser = e => {
    e.preventDefault();
    const {name, value} = e.target;
    let user = {...values, [name]: value
    };
    console.log('employee => ' + JSON.stringify(user));

    ServiceCrudOperations.register(user).then(res =>{
      navigate("/home");
    });
}

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { saveUser, handleChange, handleSubmit, values, errors };
};

export default useForm;
