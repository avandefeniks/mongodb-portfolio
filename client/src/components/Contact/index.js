import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { useMutation } from '@apollo/client';
import { ADD_CONTACT } from '../../utils/mutations';
import { ApolloProvider } from '@apollo/client';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
 
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        setFormState({ ...formState, [e.target.name]: e.target.value })

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }    }

    // console.log(formState);

    const [addContact] = useMutation(ADD_CONTACT);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addContact({
            variables: {
                name: formState.name,
                email: formState.email,
                message: formState.message
            }
        })
        console.log(formState.name, formState.email, formState.message);
        setFormState({ name: '', email: '', message: '' });
    }


    return (
        <section className='contact-form'>
            <h2 id='contact'>Contact me</h2>
            <h6>This form is currently under construction. Please contact me at <a href="mailto:angelj.vandefeniks@gmail.com">
                angelj.vandefeniks@gmail.com</a></h6>
            <form id='contact-form' onClick={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                </div>
                <div>
                    <input type="text" /*defaultValue={name}*/ value={name} onChange={(e) => setFormState({formState, name: e.target.value})} 
                    onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                </div>
                <div>
                    {<input type="email" /*defaultValue={email}*/ value={email} name="email" 
                    onChange={(e) => setFormState({formState, email: e.target.value})} onBlur={handleChange} />}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                </div>
                <div>
                    <textarea name="message" /*defaultValue={message}*/ value={message} 
                    onChange={(e) => setFormState({formState, message: e.target.value})} onBlur={handleChange} rows="5" cols='23' />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;