import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { json, Link,useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import img from '../../../assets/images/login/login.svg'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';



const Login = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState();

  const from = location.state?.from?.pathname || '/'

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      const currentUser = {
        email: user.email
      }
      console.log(currentUser);

      // Get JWT Token
      fetch('https://genius-car-server-nu-ten.vercel.app/jwt', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          // Local Storage is the easiest but not the best place to share JWT Token
          // localStorage.setItem('geniusCarToken', data.data)
        })
    
      form.reset();
      setError('');
      // navigate(from, { replace: true })
    })
      .then(error => console.log(error))
      .catch(err => {
        console.log(err)
        setError(err.message)
    })

  }


  return (
    <div className="hero w-full my-8">
      <div className="hero-content grid gap-8 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className='' src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <p className='text-orange-600'>{error}</p>
            <div className="form-control mt-6">
              <input className="btn" type="submit" value="Login" />
            </div>
          </form>
         <SocialLogin></SocialLogin>
          <p className='text-center'>New to this website? Please 
            <Link className='text-orange-600 font-bold' to="/register"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;