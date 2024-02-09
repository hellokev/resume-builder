import { useState } from 'react'

function Experience() {
    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [desc, setDesc] = useState('');

    function handleCompany(e) {
        setCompanyName(e.target.value);
    }

    function handlePosition(e) {
        setPosition(e.target.value);
    }

    function handleStartDate(e) {
        setStartDate(e.target.value);
    }

    function handleEndDate(e) {
        setEndDate(e.target.value);
    }

    function handleDesc(e) {
        setDesc(e.target.value);
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="Company name"
                value={companyName}
                onChange={handleCompany}
            />
            <input 
                placeholder="Position"
                value={position}
                onChange={handlePosition}
            />
            <input
                placeholder="Start Date"
                value={startDate}
                onChange={handleStartDate}
            />
            <input
                placeholder="End Date"
                value={endDate}
                onChange={handleEndDate}
            />
             <input
                placeholder="Description"
                value={desc}
                onChange={handleDesc}
            />
        </form>
    )


}

export default Experience;