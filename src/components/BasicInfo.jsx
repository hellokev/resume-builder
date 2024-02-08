import { useState } from 'react';

function BasicInfo() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }

    function handleLastName(e) {
        setLastName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handleAge(e) {
        const value = e.target.value;
        if (!isNaN(value)) {
            setAge(value);
        }
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstName}
            />
            <input 
                placeholder="Last name"
                value={lastName}
                onChange={handleLastName}
            />
            <input
                placeholder="coolname@example.com"
                value={email}
                onChange={handleEmail}
            />
            <input
                placeholder="Enter your age"
                value={age}
                onChange={handleAge}
            />
        </form>
    )

}

export default BasicInfo;