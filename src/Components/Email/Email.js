import React, { useState } from 'react';
import { db } from '../../Firebase'; 


const Email = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault()
       

        db.collection('contacts').add({
            name:name,
            email:email,
            message:message
        })

        .then(() => {
            alert('Message Has Been Sent!')
        })
        .catch((error) => {
            alert('Error',error)
        })

        setName('')
        setEmail('')
        setMessage('')

    }
    return(
        <div>
            <form onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='your name' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='email' name='email' placeholder='your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='text' name='message' placeholder='your message' value={message} onChange={(e)=> setMessage(e.target.value)}/>

                <input type='submit' value='submit'/>
            </form>
        </div>
    )
}
export default Email