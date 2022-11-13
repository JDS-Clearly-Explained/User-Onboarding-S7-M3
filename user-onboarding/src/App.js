import './App.css';
import React, {useState} from 'react';
import schema from './validation/formSchema';
import * as yup from 'yup';
import Form from './Components/Form';
import axios from 'axios';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
};


const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
};


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        console.log(res);
        console.log("Success!");
        setUsers([...users, res.data]);
        setFormValues(initialFormValues);
      }
      )
      .catch(err => {
        console.log(err);
      }
      )
  };

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  return (
    <div className="App">
      <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit} />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
