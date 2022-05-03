import {Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/userSlice'
import { useAppDispatch } from '../hooks/redux';
import ContactContainer from '../components/ContactContainer';

const HomePage = () => {
    const dispatch = useAppDispatch();

    const { isAuth, email } = useAuth();

    return isAuth ? (
        <div>
            <h1>Welcome</h1>

            <button
                onClick={() => dispatch(removeUser())}
            >Log out from {email}</button>

            <ContactContainer/>
        </div>
    ) : (
        <Navigate replace to="/login" />
    )
}

export default HomePage