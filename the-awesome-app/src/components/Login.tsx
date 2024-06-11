import {useRef, useEffect} from 'react';

function Login(){

    const userNameRef =useRef<HTMLInputElement>(null);
    
    //useEffect(callback, [dependencies]);
    useEffect(() => {

        console.log("component mounted");
        userNameRef.current?.focus();

    }, []);

    function handleLogin(){

    }

    return (
        <div>
            <h4>Login</h4>
            <div></div>

            <form>
                <div>
                    <label htmlFor="name">UserName</label>
                    <input ref={userNameRef} type="text" id="name" placeholder="UserName"/>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="*******"/>
                </div>
                <div>
                    <button type="button" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login;