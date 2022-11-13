import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    terms: yup
        .boolean()
        .oneOf([true], 'Must accept terms of service')
});

export default formSchema;