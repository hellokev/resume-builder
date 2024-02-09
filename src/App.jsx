import { useState } from 'react';
import BasicInfo from './components/BasicInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  return (
    <>
      <BasicInfo 
        firstName={firstName}
        lastName={lastName}
        email={email}
        age={age}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setAge={setAge}
        />
      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
      </div>
      <Education />
      <Experience />
    </>
  )
}

export default App
