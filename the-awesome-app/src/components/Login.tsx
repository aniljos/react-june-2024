import {useRef, useEffect, useState, ChangeEvent} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login(){

    const userNameRef =useRef<HTMLInputElement>(null);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    //useEffect(callback, [dependencies]);
    useEffect(() => {

        console.log("component mounted");
        userNameRef.current?.focus();

        return () => {
            console.log("component unmounted");
        }

    }, []);

    async function handleLogin(){

        if(userName && password){
            //API call
            const url = "http://localhost:9000/login";
            // axios
            //     .post(url, {name: userName, password})
            //     .then((response) => {
            //         console.log("success", response);
            //     }, (error) => {
            //         console.log("error", error);
            //     })

            //async - await => Promise
            try {
                const response = await axios.post(url, {name: userName, password});
                console.log("success", response);
                setMessage("");
                navigate("/counter");

            } catch (error) {
                 console.log("error", error);
                 setMessage("Invalid credentials");
            }


        }
        else{
            setMessage("Enter the credentials");
        }

    }
    function handleUserName(evt: ChangeEvent<HTMLInputElement>){

        const value = evt.target.value;
        setUserName(value);
    }
    function handlePassword(evt: ChangeEvent<HTMLInputElement>){

        const value = evt.target.value;
        setPassword(value);
    }

    return (
        <div>
            <h4>Login</h4>
            {message ? <div style={{border: "1px solid red"}}>{message}</div> : null}

            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="name">UserName</label>
                    <input ref={userNameRef} type="text" 
                            id="name" placeholder="UserName" value={userName}  onChange={handleUserName}/>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="*******" 
                            value={password} onChange={handlePassword}/>
                </div>
                <div>
                    <button type="button" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login;