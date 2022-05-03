import { FC } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './Style.css';

interface FormProps {
    title: string;
    handleClick: (email: string, password: string) => void;
}

type UserSubmitForm = {
    email: string;
    password: string;
};

const Form: FC<FormProps> = ({ title, handleClick }) => {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters')
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<UserSubmitForm>({
        reValidateMode: 'onChange',
        mode: 'onChange',
        resolver: yupResolver(validationSchema)
    });

    const onSubmit: SubmitHandler<UserSubmitForm> = ({ email, password }) => {
        handleClick(email, password)
    }

    return (
        <div className="register-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input
                        type="email"
                        {...register('email')}
                        placeholder="email"
                        required={true}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        {...register('password')}
                        placeholder="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="form-group">
                    <button
                        type="submit"
                        disabled={!isValid}
                        className="btn btn-primary"
                    >
                        {title}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;