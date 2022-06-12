import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    
    function loginHandler(event) {
        event.preventDefault();

        navigate('/');
    }
    
    return (
        <form className="login-page" onSubmit={loginHandler}>
            <input name="username" placeholder="Username" type="text" />
            <input name="password" placeholder="Password" type="password" />
            <button>Login</button>
        </form>
    );
}