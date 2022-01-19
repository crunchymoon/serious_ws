const Register = () => {
    return ( 
        <div className="register__cont">
            <div className="register__wrapper">
                <h1 className="register__title">CREATE AN ACCOUNT</h1>
                <form className="register__form" action="#">
                    <input className="register__input" type="text" name="name" placeholder="name"/>
                    <input className="register__input" type="text" name="name" placeholder="last name"/>
                    <input className="register__input" type="text" name="name" placeholder="email"/>
                    <input className="register__input" type="text" name="name" placeholder="username"/>
                    <input className="register__input" type="text" name="name" placeholder="password"/>
                    <input className="register__input" type="text" name="name" placeholder="confirm password"/>
                    <input className="register__input" type="button" value="create" />
                </form>
            </div>
        </div>
     );
}
 
export default Register;