import Login  from '../components/Login';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
    return (
        <div className='login'>
            <h1>Login</h1>
            <Login />
            <p>
                Or <Link to="/register">register</Link>
            </p>
        </div>
    )
}

export default LoginPage