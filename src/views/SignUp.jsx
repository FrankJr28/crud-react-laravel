import { Link } from "react-router-dom"

export default function Signup(){

    const onSubmit = (event) =>{
        event.preventDefault()
    }

    return (
        <form onSubmit={onSubmit}>
            <h1 className="title">
                Signup for free
            </h1>
            <input type="email" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="password Confirmation" />
            <button className="btn btn-block">Login</button>
            <p className="message">
                Already Registered? <Link to="/login">Sign in</Link>
            </p>
        </form>
    )
}