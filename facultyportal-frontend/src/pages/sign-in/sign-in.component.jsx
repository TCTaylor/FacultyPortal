import './sign-in.css';

//https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

function SignIn()
{
    return (
        <div className="login-wrapper">
            <h1>Sign In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;