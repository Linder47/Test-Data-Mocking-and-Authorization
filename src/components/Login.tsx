import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import  Form  from './Form';
import { setUser } from '../store/userSlice';
import { useAppDispatch } from '../hooks/redux';
import '../firebase'
import firebaseApp from '../firebase';

console.log(firebaseApp);

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate= useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    )
}

export default Login;