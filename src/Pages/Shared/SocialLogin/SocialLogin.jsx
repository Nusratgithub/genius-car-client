import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { setJWTAuthToken } from '../../../api/jwtAuth'
import facebook from '../../../assets/images/login/facebook.svg'
import google from '../../../assets/images/login/google.svg'
import linkedin from '../../../assets/images/login/linkedin.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider'

const SocialLogin = () => {
    const navigate = useNavigate()
    const loaction = useLocation()
    const from = loaction.state?.from?.pathname || '/'
    const { signInWithGoogle } = useContext(AuthContext)

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message, { autoClose: 500 })
            })
    }

    return (
        <div className='flex justify-center items-center gap-4 mb-b-50'>
            <div className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-not-allowed'>
                <img src={ facebook } alt="" />
            </div>  
            <div className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-not-allowed'>
                <img src={ linkedin } alt="" />
            </div>  
            <div onClick={handleGoogleSignin} className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-pointer'>
                <img src={ google } alt="" />
            </div>     
        </div>
    )
}

export default SocialLogin