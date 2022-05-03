import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/userSlice'
import { useAppDispatch } from '../hooks/redux';
import ContactContainer from '../components/ContactContainer';
import Button from 'react-bootstrap/Button';

const HomePage = () => {
    const dispatch = useAppDispatch();

    const { isAuth, email } = useAuth();

    return isAuth ? (
        <div>
            <div className='header'>
                <h1>Welcome!</h1>

                <Button variant="dark"
                    onClick={() => dispatch(removeUser())}
                >Log out from {email}</Button>
            </div>

            <ContactContainer />
        </div>
    ) : (
        <Navigate replace to="/login" />
    )
}

export default HomePage