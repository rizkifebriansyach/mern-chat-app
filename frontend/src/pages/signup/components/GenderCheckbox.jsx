import React from 'react'

const GenderCheckbox = () => {
    return (
        <div className='flex mt-2'>
            <div className='form-control mr-2'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text'>Male</span>
                    <input type='checkbox' className='checkbox border-slate-900' />
                </label>
            </div>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text'>Female</span>
                    <input type='checkbox' className='checkbox border-slate-900' />
                </label>
            </div>

        </div>
    )
}

export default GenderCheckbox


// STARTING CODE FOR GENDER CHECKBOX

// import React from 'react'

// const GenderCheckbox = () => {
//     return (
//         <div className='flex mt-2'>
//             <div className='form-control mr-2'>
//                 <label className='label gap-2 cursor-pointer'>
//                     <span className='label-text'>Male</span>
//                     <input type='checkbox' className='checkbox border-slate-900' />
//                 </label>
//             </div>
//             <div className='form-control'>
//                 <label className='label gap-2 cursor-pointer'>
//                     <span className='label-text'>Female</span>
//                     <input type='checkbox' className='checkbox border-slate-900' />
//                 </label>
//             </div>

//         </div>
//     )
// }

// export default GenderCheckbox   