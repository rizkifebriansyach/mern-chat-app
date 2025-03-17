import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import GenderCheckbox from './components/GenderCheckbox'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

    const [input, setInput] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    })

    const { loading, signup } = useSignup()
    console.log("✅ useSignup initialized", { loading, signup });

    const handleCheckboxChange = (gender) => {
        setInput({ ...input, gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Form submitted!", input);
        await signup(input)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'
        >
            <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding bg-gray-400/50 backdrop-blur-lg '>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-blue-500'>ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>

                        </label>
                        <input
                            type='text'
                            placeholder='Enter your full name'
                            className='input input-bordered w-full h-10 bg-gray-600'
                            value={input.fullName}
                            onChange={(e) => setInput({ ...input, fullName: e.target.value })} />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>

                        </label>
                        <input
                            type='text'
                            placeholder='Enter your Username'
                            className='input input-bordered w-full h-10 bg-gray-600'
                            value={input.username}
                            onChange={(e) => setInput({ ...input, username: e.target.value })} />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>

                        </label>
                        <input
                            type='password'
                            placeholder='Enter your password'
                            className='input input-bordered w-full h-10 bg-gray-600'
                            value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })} />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>

                        </label>
                        <input
                            type='password'
                            placeholder='Confirm your password'
                            className='input input-bordered w-full h-10 bg-gray-600'
                            value={input.confirmPassword}
                            onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })} />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />

                    <Link className='text-sm hover:underline hover:text-blue-600 inline-block mt-2' href='#' to={"/login"}>Already have an account?
                    </Link>

                    <div>
                        <button
                            type='submit'
                            className='btn btn-block btn-sm mt-2 border-slate-700 bg-blue-500'
                            disabled={loading} >{loading ? <span className='loading loading-spinner' /> : "Sign Up"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp


// STARTING CODE FOR THE SIGNUP

// import React from 'react'
// import GenderCheckbox from './components/GenderCheckbox'

// const SignUp = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'
//         >
//             <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding bg-gray-400/50 backdrop-blur-lg '>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Sign Up <span className='text-blue-500'>ChatApp</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Full Name</span>

//                         </label>
//                         <input
//                             type='text'
//                             placeholder='Enter your full name'
//                             className='input input-bordered w-full h-10 bg-gray-600' />
//                     </div>

//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Username</span>

//                         </label>
//                         <input
//                             type='text'
//                             placeholder='Enter your Username'
//                             className='input input-bordered w-full h-10 bg-gray-600' />
//                     </div>

//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Password</span>

//                         </label>
//                         <input
//                             type='password'
//                             placeholder='Enter your password'
//                             className='input input-bordered w-full h-10 bg-gray-600' />
//                     </div>

//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Confirm Password</span>

//                         </label>
//                         <input
//                             type='password'
//                             placeholder='Confirm your password'
//                             className='input input-bordered w-full h-10 bg-gray-600' />
//                     </div>

//                     <GenderCheckbox />

//                     <a className='text-sm hover:underline hover:text-blue-600 inline-block mt-2' href='#'>Already have an account?
//                     </a>

//                     <div>
//                         <button className='btn btn-block btn-sm mt-2 border-slate-700 bg-blue-500'>Sign Up</button>
//                     </div>

//                 </form>
//             </div>

//         </div>
//     )
// }

// export default SignUp