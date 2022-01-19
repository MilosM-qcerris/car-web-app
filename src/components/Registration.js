import validate from '../services/validateInfo';
import useForm from '../services/useForm';
import "../Form.css";

const FormSignup = ({ submitForm }) => {
    const { saveUser, handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );
  
    return (
      <div>
        <form onSubmit={handleSubmit} className='form center_div' noValidate>
          <div className='form-control' style={{padding: "10%"}}>
          <h1>
            Please Sign In
          </h1>
            <div className='form-inputs'>
              <label className='form-label'>First Name</label>
              <input
                className='input-group'
                type='text'
                name='firstName'
                placeholder='Enter your first name'
                value={values.firstName}
                onChange={handleChange}
                />
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>

            <div className='form-inputs'>
              <label className='form-label'>Last Name</label>
              <input
                className='input-group'
                type='text'
                name='lastName'
                placeholder='Enter your last name'
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>
          
            <div className='form-inputs'>
              <label className='form-label'>Username</label>
              <input
                className='input-group'
                type='text'
                name='username'
                placeholder='Enter your username'
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
          
            <div className='form-inputs'>
              <label className='form-label'>Email</label>
              <input
                className='input-group'
                type='email'
                name='email'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
          
            <div className='form-inputs'>
              <label className='form-label'>Password</label>
              <input
                className='input-group'
                type='password'
                name='password'
                placeholder='Enter your password'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
          
            <div className='form-inputs'>
              <label className='form-label'>Confirm Password</label>
              <input
                className='input-group'
                type='password'
                name='password2'
                placeholder='Confirm your password'
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
          
            <div className='form-group' style={{textAlign:'center'}}>
              <button className='form-input-btn' type='submit' onClick={saveUser}>
                  Sign up 
              </button> 
                  <br/>
              <span className='form-input-login'>
                  Already have an account? Login <a href='#'>here</a>
              </span>
            </div>
          
          </div>
        </form>
      </div>
    );
  };
  
  export default FormSignup;
