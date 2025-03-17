import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { loading, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password)
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding bg-gray-400/50 backdrop-blur-lg '>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-500'>ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>

                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='input input-bordered w-full h-10 bg-gray-600'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>

                        </label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            className='input input-bordered w-full h-10 bg-gray-600'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Link
                        to={"/signup"}
                        href='#'
                        className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account?</Link>
                    <div>
                        <button
                            type='submit'
                            className='btn btn-block btn-sm mt-2 border-slate-700 bg-blue-500'
                            disabled={loading} >{loading ? <span className='loading loading-spinner' /> : "Login"}</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login


// STARTER CODE FOR THIS FILE
// const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding bg-gray-400/50 backdrop-blur-lg '>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Login
//                     <span className='text-blue-500'>ChatApp</span>
//                 </h1>
//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Username</span>

//                         </label>
//                         <input
//                             type='text'
//                             placeholder='Enter username'
//                             className='input input-bordered w-full h-10 bg-gray-600' />
//                     </div>

//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Password</span>

//                         </label>
//                         <input
//                             type='text'
//                             placeholder='Enter password'
//                             className='input input-bordered w-full h-10 bg-gray-600' />
//                     </div>
//                     <a
//                         href='#'
//                         className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                         {"Don't"} have an account?</a>
//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>Login</button>
//                     </div>

//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login