const Login = () => {
    return ( 
        <div className="login__cont">
            <div className="login__wrapper">
                <h1 className="login__title">LOG IN</h1>
                <form className="login__form" action="#">
                    <input className="login__input" type="text" name="username" placeholder="username"/>
                    <input className="login__input" type="password" name="password" placeholder="password"/>
                    <input className="login__inputBtn" type="button" value="log in" />
                    <a href="#">Create a new account</a>
                </form>
            </div>
        </div>
     );
}
 
export default Login;