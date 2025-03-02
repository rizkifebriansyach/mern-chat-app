import React from 'react'
import GenderCheckbox from './components/GenderCheckbox'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'
        >
            <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding bg-gray-400/50 backdrop-blur-lg '>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-blue-500'>ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>

                        </label>
                        <input
                            type='text'
                            placeholder='Enter your full name'
                            className='input input-bordered w-full h-10 bg-gray-600' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>

                        </label>
                        <input
                            type='text'
                            placeholder='Enter your Username'
                            className='input input-bordered w-full h-10 bg-gray-600' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>

                        </label>
                        <input
                            type='password'
                            placeholder='Enter your password'
                            className='input input-bordered w-full h-10 bg-gray-600' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>

                        </label>
                        <input
                            type='password'
                            placeholder='Confirm your password'
                            className='input input-bordered w-full h-10 bg-gray-600' />
                    </div>

                    <GenderCheckbox />

                    <a className='text-sm hover:underline hover:text-blue-600 inline-block mt-2' href='#'>Already have an account?
                    </a>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border-slate-700 bg-blue-500'>Sign Up</button>
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