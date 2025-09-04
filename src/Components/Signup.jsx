import React from 'react'

const Signup = () => {
    return (
        <>
            <div className="box">
                <div className="box-1">
                    <h1 className='h1'>SignUp</h1>
                    <form className='form'>
                        <input type="text" placeholder='Enter Name' className='Input' />
                        <input type="text" placeholder='Enter Email' className='Input' />
                        <input type="text" placeholder='Enter Username' className='Input' />
                        <input type="password" placeholder='Enter Password' className='Input' />
                        <button type='button' className='loginBtn'>Submit</button>
                        <div className="div">
                            <span>Don't have account?</span> <a href="" className='text-blue-700 font-semibold'>Sign Up</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup