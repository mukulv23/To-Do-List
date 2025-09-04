import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

const obj = {
    name: "",
    email: "",
    username: "",
    password: ""
}

const reducer = (data, action) => {
    return { ...data, [action.type]: action.val }
}

const Signup = () => {
    const [state, dispatch] = useReducer(reducer, obj);
    const navigate = useNavigate();

    //Name validation

    // const nameVal = () => {
    //     if (state.name === "") {
    //         console.log("name cant be empty");
    //     }
    // }

    const send = () => {
        console.log(state);

        if (state.name && state.email && state.username && state.password !== "") {
            const unqKey = `user_${state.username}`
            localStorage.setItem(unqKey, JSON.stringify(state))
            navigate('/login')
        }
    }
    return (
        <>
            <div className="box">
                <div className="box-1">
                    <h1 className='h1'>SignUp</h1>
                    <form className='form'>
                        <input type="text" placeholder='Enter Name' className='Input' onChange={(e) => { dispatch({ val: e.target.value, type: "name" }) }} />
                        <input type="text" placeholder='Enter Email' className='Input' onChange={(e) => dispatch({ val: e.target.value, type: "email" })} />
                        <input type="text" placeholder='Enter Username' className='Input' onChange={(e) => dispatch({ val: e.target.value, type: "username" })} />
                        <input type="password" placeholder='Enter Password' className='Input' onChange={(e) => dispatch({ val: e.target.value, type: "password" })} />
                        <button type='button' className='loginBtn' onClick={send}>Submit</button>
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