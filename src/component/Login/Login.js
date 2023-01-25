import React, { useState } from 'react'
import '../../Assets/landing.scss';
import booktable from '../../Assets/pictures/front-food.jpg';
import { signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebase from '../../firebase';
import { useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [random, setRandom] = useState(['', ' ', '-', null, 'null']);
  const auth = firebase.auth()
  const provider = new GoogleAuthProvider();

  const login = (e) => {
    e.preventDefault();
    // console.log()
    if (!random.includes(email) && !random.includes(password)) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            // console.log("user", user);
            // localStorage.setItem(user);
            // window.localStorage.setItem('user', JSON.stringify(user));
            // console.log("email", email)
            navigate('/');
          } else {
            // console.log("close")
          }
        })
        .catch((error) => {
          AlertMessages('Account does not exist')
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      if (email == '') {
        if (random.includes(email)) {
          AlertMessages('Email is InValid')
        }
      } else {
        if (random.includes(password)) {
          AlertMessages('Password is InValid')
        }
      }
    }
  }

  const googlelogin = () => {
    // console.log(provider)
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(token)
        if (user) {
          console.log('You Are ALreay Logged In')
          navigate('/home')
        } else {
          AlertMessages('You dont have an account. PLease Create new one')
        }
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  }

  const AlertMessages = (msj) => {
    setError(msj)
    setTimeout(() => {
      setError('')
    }, 1500)
  }

  const signup = () => {
    navigate('/signin')
  }
 
  return (
    <>
      <div className="landing-page">
        <div className='container'>
          <div className='row d-flex content'>
            {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>{error}</strong>
            </div>}
            <div className='col-md-5 left-side'>
              <div className='heading'>
                <h3>Food Website</h3>
                <h5>Login Page</h5>
                <p>SignIn With Your Email And Password</p>

              </div>
              <div className='form-data'>
                <form>
                  <div className='details'>
                    <div className='form-group p-1'>
                      <label htmlFor='email' className='p-1' >Email</label>
                      <input type="text" className='form-control'
                        value={email} onChange={(e) => setEmail(e.target.value)} name="email" required
                        placeholder="Please Enter Your Email..."
                      />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className='form-group p-1'>
                      <label htmlFor="text" className='p-1'>Password</label>
                      <input type="password" className='form-control input'
                        value={password} onChange={(e) => setPassword(e.target.value)} name="password" required placeholder="Please Enter Your Password..." />
                    </div>
                    <div className='buttons'>
                      <button type="button" className="btn btn-success login" onClick={(e) => login(e)}>Login</button>
                      <button type="button" className="btn btn-success sign" onClick={(e) => signup(e)}>Sign Up</button>
                    </div>
                    <div className='icons pb-2 d-flex'>
                      <FcGoogle type='button' onClick={googlelogin} />
                   {/* <p className='p-3'>Login With Goole</p> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-md-7 right-side'>
              <img src={booktable} alt="wrong"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
