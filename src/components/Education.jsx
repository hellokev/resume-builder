import { useState } from 'react'

function Education() {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');

    function handleSchool(e) {
        setSchool(e.target.value);
    }

    function handleDegree(e) {
        setDegree(e.target.value);
    }
    
    function handleStartYear(e) {
        setStartYear(e.target.value);
    }

    function handleEndYear(e) {
        setEndYear(e.target.value);
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="School"
                value={school}
                onChange={handleSchool}
            />
            <input 
                placeholder="Degree"
                value={degree}
                onChange={handleDegree}
            />
            <input
                placeholder="Start Year"
                value={startYear}
                onChange={handleStartYear}
            />
            <input
                placeholder="End Year"
                value={endYear}
                onChange={handleEndYear}
            />
        </form>
    )
}

export default Education;