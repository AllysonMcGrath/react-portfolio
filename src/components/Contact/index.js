import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // const { name, email, message } = formState;

    // const [errorMessage, setErrorMessage] = useState('');


    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    //     else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         }
    //         else {
    //             setErrorMessage('');
    //         }
    //     }
    //     if (!errorMessage) {
    //         setFormState({...formState, [e.target.name]: e.target.value });
    //     }
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }

    // return(
    // <section className='contact'>
    //     <h2>Contact me</h2>
    //     <form id='contact-form' onSubmit={handleSubmit}>
    //         <div className='form-name'>
    //             <label htmlFor='name'>Name:</label>
    //             <input type="text" defaultValue={name} onBlur={handleChange} name="name" />            
    //         </div>
    //         <div className='form-email'>
    //             <label htmlFor='email'>Email address:</label>
    //             <input type="email" defaultValue={email} name="email" onBlur={handleChange} />            
    //         </div>
    //         <div className='form-message'>
    //             <label htmlFor='message'>Message:</label>
    //             <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />            
    //         </div>
    //         {errorMessage && (
    //             <div>
    //                 <p className='error-text'>{errorMessage}</p>
    //             </div>
    //         )}
    //         <button type='submit'>Submit</button>
    //     </form>
    // </section>
    // );

    return (
        <div class="container">
            <section className='contact'>
                <h2>Contact me</h2>
                <p>Email: <a href="mailto:allyson.r.mcgrath@gmail.com">allyson.r.mcgrath@gmail.com</a></p>
                <p>Phone: (970)310-9075</p>
                <p>LinkedIn: <a href='https://www.linkedin.com/in/allyson-mcgrath/'>allyson-mcgrath</a></p>
            </section>
         </div> 
        )
}

export default ContactForm;