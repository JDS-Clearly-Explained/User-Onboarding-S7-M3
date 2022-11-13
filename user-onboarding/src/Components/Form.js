import React from 'react';

const Form = (props) => {
    const {change, submit, errors} = props;
    const { username, email, password, terms } = props.values;

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }
    
    return (
        <div>
            <h1>Form Component</h1>
            <p>{errors.username}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.terms}</p>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input type="text" name="username" placeholder="Name" value={username} onChange={onChange} />
                </label>
                <label>Email:
                    <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} />
                </label>
                <label>Password:
                    <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} />
                </label>
                <label>Terms of Service:
                    <input type="checkbox" name="terms" checked={terms} onChange={onChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
    }

export default Form;