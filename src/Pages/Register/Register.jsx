import React, { useContext } from 'react'
import img from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'
import { toast } from 'react-toastify'
import SocialLogin from '../Shared/SocialLogin/SocialLogin'
// import { setJWTAuthToken } from '../../api/jwtAuth'

const Register = () => {
    const navigate = useNavigate()
    const { createUser, updateName } = useContext(AuthContext)

    const handleUserCreate = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const user = result.user
                // setJWTAuthToken(user)
                navigate('/')
                updateName(name)
                    .then(() => {
                        toast.success('User Created Successfully!', { autoClose: 500 })
                    })
                    .catch(error => {
                        toast.error(error.message, { autoClose: 500 })
                    })
            })
            .catch(error => {
                toast.error(error.message, { autoClose: 500 })
            })

    }

    return (
        <div className="hero w-full my-8">
            <div className="hero-content grid gap-8 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='' src={img} alt="" />
                </div>
                <div className="card w-full shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleUserCreate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <input className="btn hover:text-white bg-transparent text-red-600 hover:border-red-600 border-red-600 hover:bg-red-600" type="submit" value="Login" />
                        </div>
                    </form>
                    <SocialLogin />
                    <p className='text-center mt-3'>Already have an account?
                        <Link className='text-orange-600 font-bold' to="/login"> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register